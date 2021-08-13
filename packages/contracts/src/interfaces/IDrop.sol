// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

import { IMedia } from "./IMedia.sol";
import { IMarket } from "./IMarket.sol";

interface IDrop {
    // A kind of token is a configuration for minting NFTs with defined pricing.
    struct Kind {
        string  name;
        uint256 id;
        uint256 price;
        uint256 supply;
    }

    struct Meta {
        uint256 owner;
        uint256 tokenID;        // originating token
        uint256 dropID;         // originating drop
        uint256 timestamp;      // time created
        uint256 birthday;       // birth block
    }

    struct NFT {
        Kind    kind;
        string  name;
        uint256 id;
        Meta    meta;
        IMedia.MediaData data;
        IMarket.BidShares bidShares;
    }

    function title() external view returns (string memory);
    function price() external view returns (uint256);
    function quantity() external view returns (uint256);
    function totalSupply() external view returns (uint256);
    function newToken(IKind) external returns (IToken memory);
    function newTokenWithSeed(I.Kind, ISeed) external returns (IToken memory);
    function getRandomNFT(uint256) external view returns (IToken memory);
}
