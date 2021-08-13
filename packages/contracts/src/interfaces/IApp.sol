// SPDX-License-Identifier: MIT

pragma solidity >=0.8.4;

import { IMedia } from "./IMedia.sol";
import { IMarket } from "./IMarket.sol";

// Interface defines a set of methods and data that form the on-chain interface of a tokenized nft platform.
interface IApp {

    // Each app can configure as many kinds of NFT as they like, these can function in different ways, transform, breed, etc.
    struct Type {
        string  name;
        uint256 id;
        uint256 price; // price per NFT of this type
        uint256 supply;
    }

    // Metadata around token creation / ownership
    struct Meta {
        uint256 owner;          // address of owner
        uint256 dropID;         // originating drop address
        uint256 tokenID;        // originating token (if not drop)
        uint256 timestamp;      // block timestamp NFT was minted
        uint256 blockNumber;    // number of block when NFT was minted
    }

    // We maintain our own on-chain registr of all NFTs
    struct NFT {
        uint256 id;
        string  name;
        Type    kind;
        Meta    meta;
        IMedia.MediaData data;
        IMarket.BidShares bidShares;
    }
}
