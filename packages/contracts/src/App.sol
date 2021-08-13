// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;
pragma experimental ABIEncoderV2;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Counters } from "@openzeppelin/contracts/utils/Counters.sol";
import { SafeMath } from "@openzeppelin/contracts/utils/math/SafeMath.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IApp } from "./interfaces/IApp.sol";
import { IDrop } from "./interfaces/IDrop.sol";
import { IMarket } from "./interfaces/IMarket.sol";
import { IMedia } from "./interfaces/IMedia.sol";

import "./console.sol";

contract App is Ownable, IApp {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private dropIDs;

    // Declare an Event
    event AddDrop(address indexed dropAddress, string title, uint256 supply);
    event Burn(address indexed from, uint256 indexed tokenID);
    event Buy(address indexed from, uint256 indexed tokenID);
    event Mint(address indexed from, uint256 indexed tokenID);

    // Mapping of Address to Drop ID
    mapping(uint256 => address) public drops;

    // Mapping of ID to Address
    mapping(address=> uint256) public dropAddresses;

    // Mapping of ID to NFT
    mapping(uint256 => IApp.Token) public tokens;

    // Price to set name of Token
    uint256 public namePrice;

    // External contracts
    IMarket public market;
    IMedia public media;
    IERC20 public token;

    function configure(address _market, address _media, address _token) public onlyOwner {
        market = IMarket(_market);
        media = IMedia(_media);
        token = IERC20(_token);
    }

    function setDrop(address dropAddress) public returns (uint256) {
        require(dropAddresses[dropAddress] == 0, "Drop already added");

        IDrop drop = IDrop(dropAddress);

        dropIDs.increment();
        uint256 dropID = dropIDs.current();
        drops[dropID] = dropAddress;
        dropAddresses[dropAddress] = dropID;
        emit AddDrop(dropAddress, drop.title(), drop.tokenSupply());
        return dropID;
    }

    // Issue a new token to owner
    function mint(address owner, I.Token memory token) private returns (I.Token memory) {
        console.log("mint", owner, token.name);
        token = media.mintToken(owner, token);
        market.setBidShares(token.id, token.bidShares);
        tokens[token.id] = token;
        emit Mint(owner, token.id);
        return token;
    }

    // Burn token owned by owner
    function burn(address owner, uint256 tokenID) private {
        console.log("burn", owner, tokenID);
        media.burnToken(owner, tokenID);
        // delete tokens[tokenID];
        emit Burn(owner, tokenID);
    }

    // Accept Token(s) and return many NFTs
    function buy(uint256 dropID, uint256 quantity) public {
        console.log('buyNFTs', dropID, quantity);
        for (uint8 i=0; i<quantity; i++) {
            buyNFT(dropID);
        }
    }

    // Buy a cuNFT from drop according to it's pricing configuration. Accept `drop.Price()` Transer Token and mint NFT for buyer
    function buy(uint256 dropID, string kindID) public returns (I.Token memory) {
        console.log('buy', dropID);

        // Check token price
        IDrop drop = IDrop(drops[dropID]);
        require(token.balanceOf(msg.sender) >= drop.price(), "App: Not enough tokens to purchase NFT");

        // Transfer funds from user to pay for NFT
        console.log('token.transferFrom', msg.sender, address(this), drop.price(kind));
        token.transferFrom(msg.sender, address(this), drop.price());

        // Get Token from this drop
        I.NFT memory nft = drop.newNFT();

        // Mint Token Token
        nft = mint(msg.sender, nft);
        console.log('minted nft', nft.id);

        emit BuyNFT(msg.sender, nft.id);

        return nft;
    }

    // Burn token and randomly return an animal NFT
    function transform(uint256 dropID, uint256 tokenID) public returns (I.Token memory) {
        console.log("transform", dropID, tokenID);

        require(media.tokenExists(tokenID), "Token is burned or does not exist");

        // Get animal for given Token
        I.Token memory animal = getAnimal(dropID, tokenID);
        animal.meta.tokenID = tokenID;
        animal.meta.dropID = dropID;
        console.log("animal", animal.name);

        // ...it's hatching!
        animal = mint(msg.sender, animal);
        console.log('minted animal', animal.id, tokenID);

        // bye token
        burn(msg.sender, tokenID);
        console.log('burned', tokenID);

        emit Hatch(msg.sender, tokenID, animal.id);
        return animal;
    }


    // Breed two animals and create a hybrid token
    function breedNFT(uint256 dropID, uint256 tokenA, uint256 tokenB) public canBreed(tokenA, tokenB) returns (I.Token memory) {
        console.log('breedNFTs', dropID, tokenA, tokenB);

        I.Token memory nft = IDrop(drops[dropID]).newToken(
            I.Parents({
                tokenA: tokenA,
                tokenB: tokenB
            })
        );

        // Update breeding delay for each parent
        updateBreedDelays(tokenA, tokenB);

        nft = mint(msg.sender, nft);
        emit Hybrid(msg.sender, tokenA, tokenB, nft.id);
        return nft;
    }

    // Redeem burns the NFT and returns Token to user. This can be overriden to handle unique redemption scenarios
    function redeem(uint256 tokenID) public returns (uint256 redemption) {
        console.log('freeAnimal', tokenID);

        I.Token memory token = tokens[tokenID];

        // Burn the token
        burn(msg.sender, tokenID);

        // How long did we HODL?
        uint256 blockAge = block.number - token.birthday;
        uint256 daysOld = blockAge.div(28800);

        // Calculate yield
        yield = daysOld.mul(token.rarity.yield.mul(10**18));
        console.log('calculateYield', blockAge, daysOld, yield);

        // Transfer yield
        zoo.transfer(msg.sender, yield);

        emit Free(msg.sender, tokenID, yield);

        return yield;
    }

    // Set price for buying a name
    function setNamePrice(uint256 price) public onlyOwner {
        namePrice = price.mul(10**18);
    }

    // Buy a custom name for your NFT
    function buyName(uint256 tokenID, string memory customName) public {
        require(
            zoo.balanceOf(msg.sender) < namePrice,
            "ZK: Not enough ZOO to purchase Name"
        );

        zoo.transferFrom(msg.sender, address(this), namePrice);

        I.Token memory token = tokens[tokenID];
        token.customName = customName;
        tokens[tokenID] = token;
    }

    // Temporary random function
    function unsafeRandom() private view returns (uint256) {
        uint256 randomNumber = uint256(
            keccak256(
                abi.encodePacked(block.number, msg.sender, block.timestamp)
            )
        ) % 10000;
        return randomNumber;
    }

    // Get a token based on a given configuration
    function getToken(uint256 dropID, uint256 kindID, uint256 tokenID) private view returns (I.Token memory) {
        console.log('getAnimal', dropID, kindID, tokenID);

        // Get Token
        I.Token memory token = tokens[tokenID];
        return IDrop(drops[dropID]).getToken(kindID, seed);
    }

    // Update breed delays
    function updateBreedDelays(uint256 parentA, uint256 parentB) private {
        console.log('updateBreedDelays', parentA, parentB);

        tokens[parentA].breed.count++;
        tokens[parentB].breed.count++;
        tokens[parentA].breed.timestamp = block.timestamp;
        tokens[parentB].breed.timestamp = block.timestamp;
    }

    // Get next timestamp token can be bred
    function breedNext(uint256 tokenID) public view returns (uint256) {
        I.Token memory token = tokens[tokenID];
        return token.breed.timestamp + (token.breed.count * 1 days);
    }

    // Check whether token is ready to breed again
    function breedReady(uint256 tokenID) public view returns (bool) {
        // Never bred? Lets go
        if (tokens[tokenID].breed.count == 0) {
            return true;
        }
        // If current timestamp is greater than the next breed time, lets go
        if (block.timestamp > breedNext(tokenID)) {
            return true;
        }

        // Not ready
        return false;
    }

    // Return total amount of ZOO in contract
    function zooSupply() public view onlyOwner returns (uint256) {
        return zoo.balanceOf(address(this));
    }

    // Enable owner to withdraw ZOO if necessary
    function zooWithdraw(address receiver, uint256 amount) public onlyOwner returns (bool) {
        return zoo.transferFrom(address(this), receiver, amount.mul(10**18));
    }
}
