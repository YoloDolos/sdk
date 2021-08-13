// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

import { SafeMath } from "@openzeppelin/contracts/utils/math/SafeMath.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Decimal } from "./Decimal.sol";
import { IMarket } from "./interfaces/IMarket.sol";
import { IMedia } from "./interfaces/IMedia.sol";
import { I } from "./interfaces/I.sol";

import "./console.sol";


contract Drop is Rare, Breedable, Ownable {
    using SafeMath for uint256;

    struct Token {
        IKind kind;
        IMedia.MediaData data;
        IMarket.BidShares bidShares;
        string  name;
        uint256 supply;
        uint256 price;
        uint256 timestamp;    // time created
        uint256 birthday;     // birth block
        uint256 minted;       // amount minted
    }

    // Title of drop
    string public title;

    // Address of App contract
    address public appAddress;

    // mapping of Token name to Token
    mapping (string => Token) public tokens;


    // Ensure only ZK can call method
    modifier onlyApp() {
        require(
            appAddress == msg.sender, "Drop: Only App can call this method"
        );
        _;
    }

    constructor(string memory _title) {
        title = _title;
    }

    function totalSupply(uint256 kindID) public view returns (uint256) {
        return getToken(kindID).minted;
    }

    // Configure current App
    function configure(address app) public onlyOwner {
        appAddress = app;
    }

    // Add or configure a given kind of token
    function setToken(IDrop.Kind kind, string memory name, uint256 price, uint256 supply, string memory tokenURI, string memory metadataURI) public onlyOwner returns (Token memory) {
        Token memory token;
        token.kind = kind;
        token.name = name;
        token.data = getMediaData(tokenURI, metadataURI);
        token.bidShares = getBidShares();
        token.price = price;
        token.supply = supply;
        tokens[name] = token;
        return token;
    }

    // Add Animal to rarity set if it has not been seen before
    function setTokenAttribute(string memory name, string memory value) private {
        string[] storage _animals = attributes[rarity];

        // Check if NFT has been added to this attribute before
        for (uint256 i = 0; i < _animals.length; i++) {
            string memory known = _animals[i];
            if (keccak256(bytes(name)) == keccak256(bytes(known))) {
                // Not a new Animal
                return;
            }
        }

        // New animal lets add to rarity list
        _animals.push(name);

        // Ensure stored
        rarityAnimals[rarity] = _animals;
    }

    // Return price for current TokenDrop
    function tokenPrice() public view returns (uint256) {
        return getToken(baseToken).price;
    }

    function tokenSupply() public view returns (uint256) {
        return getToken(baseToken).supply;
    }

    function hybridSupply() public view returns (uint256) {
        return getToken(hybridToken).supply;
    }

    // Return a new Token Token
    function newToken() external only returns (I.Token memory) {
        Token memory token = getToken(baseToken);
        require(tokenSupply() == 0 || token.minted < tokenSupply(), "Out of tokens");

        token.minted++;
        tokens[token.name] = token;

        // Convert token into a token
        return I.Token({
            rarity: getRarity('Common'),
            kind: I.Kind,

            name: token.name,
            birthday: block.number,
            timestamp: block.timestamp,
            data: token.data,
            bidShares: token.bidShares,

            parents: I.Parents("", "", 0, 0), // Common tokens have no parents

            id: 0,
            customName: "",
            breed: I.Breed(0, 0),
            meta: I.Meta(0, 0)
        });
    }

    // Return a new Hybrid Token Token
    function newHybridToken(I.Parents memory parents) external view only returns (I.Token memory) {
        Token memory token = getToken(hybridToken);
        require(hybridSupply() == 0 || token.minted < hybridSupply(), "Out of hybrid tokens");

        // Convert token into a token
        return I.Token({
            rarity: getRarity('Common'),
            kind: I.Type.HYBRID_EGG,
            name: token.name,
            birthday: block.number,
            timestamp: block.timestamp,
            data: token.data,
            bidShares: token.bidShares,

            parents: parents, // Hybrid parents

            id: 0,
            customName: "",
            breed: I.Breed(0, 0),
            meta: I.Meta(0, 0)
        });
    }

    // Get Token by name
    function getToken(string memory name) private view returns (Token memory) {
        return tokens[name];
    }

    // Get Rarity by name
    function getRarity(string memory name) private view returns (I.Rarity memory) {
        return rarities[name];
    }

    // Get Animal by name
    function getAnimal(string memory name) private view returns (Animal memory) {
        return animals[name];
    }

    // Get Hybrid by name
    function getHybrid(string memory name) private view returns (Hybrid memory) {
        return hybrids[name];
    }

    // Chooses animal based on random number generated from(0-999)
    function getRandomAnimal(uint256 random) external view returns (I.Token memory token) {
        Animal memory animal;

        console.log('getRandomAnimal', random);
        console.log('raritySorted.length', raritySorted.length);

        // Find rarest animal choices first
        for (uint256 i = 0; i < raritySorted.length; i++) {
            string memory name = raritySorted[i];
            I.Rarity memory rarity = rarities[name];

            console.log('rarity.name', name);
            console.log('rarity.probability', rarity.probability);
            console.log('rarityAnimals', rarityAnimals[name][0], rarityAnimals[name][1]);

            // Highest probability first, failing that use lowest rarity (common) animal
            if (rarity.probability > random || i == raritySorted.length - 1) {
                string[] memory choices = rarityAnimals[name];
                animal = getAnimal(choices[random % choices.length]);
                break;
            }
        }

        // Return Token
        token.kind = I.Type.BASE_ANIMAL;
        token.name = animal.name;
        token.data = animal.data;
        token.rarity = animal.rarity;
        token.bidShares = animal.bidShares;
        token.timestamp = block.timestamp;
        token.birthday = block.number;

        console.log('randomAnimal', animal.name, animal.rarity.name, animal.rarity.yield);
        console.log('randomAnimal.data.tokenURI', animal.data.tokenURI);
        console.log('randomAnimal.data.metadataURI', animal.data.metadataURI);
        return token;
    }

    function getRandomHybrid(uint256 random, I.Parents memory parents) external view returns (I.Token memory token) {
        Hybrid[2] memory possible = [
            parentsToHybrid(parents.animalA, parents.animalB),
            parentsToHybrid(parents.animalB, parents.animalA)
        ];

        // pick array index 0 or 1 depending on the rarity
        Hybrid memory hybrid = possible[random % 2];

        // Return Token
        token.kind = I.Type.HYBRID_ANIMAL;
        token.name = hybrid.name;
        token.data = hybrid.data;
        token.rarity = hybrid.rarity;
        token.rarity.yield = hybrid.yield; // Hybrid rarity overrides default
        token.bidShares = hybrid.bidShares;
        token.timestamp = block.timestamp;
        token.birthday = block.number;
        token.parents = parents;
        return token;
    }

    // Helper to construct IMarket.BidShares struct
    function getBidShares() private pure returns (IMarket.BidShares memory) {
        return IMarket.BidShares({
            creator: Decimal.D256(10),
            owner: Decimal.D256(80),
            prevOwner: Decimal.D256(10)
        });
    }

    // Helper to construct IMedia.MediaData struct
    function getMediaData(string memory tokenURI, string memory metadataURI) private pure returns (IMedia.MediaData memory) {
        return IMedia.MediaData({
            tokenURI: tokenURI,
            metadataURI: metadataURI,
            contentHash: bytes32(0),
            metadataHash: bytes32(0)
        });
    }

    // Get key for two parents
    function parentsKey(string memory animalA, string memory animalB) private pure returns (string memory) {
        return string(abi.encodePacked(animalA, animalB));
    }

    // Get Hybrid from Parents
    function parentsToHybrid(string memory nameA, string memory nameB) private view returns (Hybrid memory) {
        return hybridParents[parentsKey(nameA, nameB)];
    }

    // Return the higher of two rarities
    function higher(I.Rarity memory rarityA, I.Rarity memory rarityB) private pure returns (I.Rarity memory) {
        if (rarityA.probability < rarityB.probability) {
            return rarityA;
        }
        return rarityB;
    }
}
