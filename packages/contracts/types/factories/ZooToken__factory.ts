/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from "@ethersproject/contracts";

import type { ZooToken } from "../ZooToken";

export class ZooToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _supply: BigNumberish,
    tokenOwner: string,
    overrides?: PayableOverrides
  ): Promise<ZooToken> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _supply,
      tokenOwner,
      overrides || {}
    ) as Promise<ZooToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _supply: BigNumberish,
    tokenOwner: string,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _supply,
      tokenOwner,
      overrides || {}
    );
  }
  attach(address: string): ZooToken {
    return super.attach(address) as ZooToken;
  }
  connect(signer: Signer): ZooToken__factory {
    return super.connect(signer) as ZooToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZooToken {
    return new Contract(address, _abi, signerOrProvider) as ZooToken;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseApproval",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "listAddress",
        type: "address",
      },
      {
        name: "isBlackListed",
        type: "bool",
      },
    ],
    name: "blackListAddress",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseApproval",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        type: "string",
      },
      {
        name: "_decimals",
        type: "uint256",
      },
      {
        name: "_supply",
        type: "uint256",
      },
      {
        name: "tokenOwner",
        type: "address",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "burner",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Pause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "blackListed",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "bool",
      },
    ],
    name: "Blacklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

const _bytecode =
  "0x608060408190526004805460a060020a60ff02191690556110a4388190039081908339810160409081528151602080840151928401516060850151608086015193860180519096959095019491939092909161006191600591908801906100f2565b5083516100759060069060208701906100f2565b506007839055600a83900a82026000818155600160a060020a03831680825260036020908152604080842085905560048054600160a060020a0319168417905580519485525191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3505050505061018d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013357805160ff1916838001178555610160565b82800160010185558215610160579182015b82811115610160578251825591602001919060010190610145565b5061016c929150610170565b5090565b61018a91905b8082111561016c5760008155600101610176565b90565b610f088061019c6000396000f3006080604052600436106101065763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461010b578063095ea7b31461019557806318160ddd146101cd57806323b872dd146101f4578063313ce5671461021e5780633f4ba83a1461023357806340c10f191461024a57806342966c681461026e5780635c975abb14610286578063661884631461029b57806370a08231146102bf578063794be707146102e05780638456cb59146103065780638da5cb5b1461031b57806395d89b411461034c578063a9059cbb14610361578063d73dd62314610385578063dd62ed3e146103a9578063f2fde38b146103d0575b600080fd5b34801561011757600080fd5b506101206103f1565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015a578181015183820152602001610142565b50505050905090810190601f1680156101875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a157600080fd5b506101b9600160a060020a036004351660243561047f565b604080519115158252519081900360200190f35b3480156101d957600080fd5b506101e26104aa565b60408051918252519081900360200190f35b34801561020057600080fd5b506101b9600160a060020a03600435811690602435166044356104b0565b34801561022a57600080fd5b506101e26104dd565b34801561023f57600080fd5b506102486104e3565b005b34801561025657600080fd5b50610248600160a060020a036004351660243561055b565b34801561027a57600080fd5b50610248600435610637565b34801561029257600080fd5b506101b9610644565b3480156102a757600080fd5b506101b9600160a060020a0360043516602435610654565b3480156102cb57600080fd5b506101e2600160a060020a0360043516610678565b3480156102ec57600080fd5b506101b9600160a060020a03600435166024351515610693565b34801561031257600080fd5b506102486106ce565b34801561032757600080fd5b5061033061074b565b60408051600160a060020a039092168252519081900360200190f35b34801561035857600080fd5b5061012061075a565b34801561036d57600080fd5b506101b9600160a060020a03600435166024356107b5565b34801561039157600080fd5b506101b9600160a060020a03600435166024356107d9565b3480156103b557600080fd5b506101e2600160a060020a03600435811690602435166107fd565b3480156103dc57600080fd5b50610248600160a060020a0360043516610828565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505081565b60045460009060a060020a900460ff161561049957600080fd5b6104a383836108bd565b9392505050565b60005481565b60045460009060a060020a900460ff16156104ca57600080fd5b6104d5848484610923565b949350505050565b60075481565b600454600160a060020a031633146104fa57600080fd5b60045460a060020a900460ff16151561051257600080fd5b6004805474ff0000000000000000000000000000000000000000191690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b600454600160a060020a0316331461057257600080fd5b600054610585908263ffffffff610aa516565b6000908155600160a060020a0383168152600360205260409020546105b0908263ffffffff610aa516565b600160a060020a03831660008181526003602090815260408083209490945583518581529351929391927fab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f89281900390910190a3604080518281529051600160a060020a03841691600091600080516020610ebd8339815191529181900360200190a35050565b6106413382610ab4565b50565b60045460a060020a900460ff1681565b60045460009060a060020a900460ff161561066e57600080fd5b6104a38383610ba4565b600160a060020a031660009081526003602052604090205490565b60045460009060a060020a900460ff16156106ad57600080fd5b600454600160a060020a031633146106c457600080fd5b6104a38383610c94565b600454600160a060020a031633146106e557600080fd5b60045460a060020a900460ff16156106fc57600080fd5b6004805474ff0000000000000000000000000000000000000000191660a060020a1790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b600454600160a060020a031681565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104775780601f1061044c57610100808354040283529160200191610477565b60045460009060a060020a900460ff16156107cf57600080fd5b6104a38383610d25565b60045460009060a060020a900460ff16156107f357600080fd5b6104a38383610e11565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600454600160a060020a0316331461083f57600080fd5b600160a060020a038116151561085457600080fd5b600454604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36004805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b3360009081526002602052604081205460ff161561094057600080fd5b600160a060020a038316151561095557600080fd5b600160a060020a03841660009081526003602052604090205482111561097a57600080fd5b600160a060020a03841660009081526001602090815260408083203384529091529020548211156109aa57600080fd5b600160a060020a0384166000908152600360205260409020546109d3908363ffffffff610eaa16565b600160a060020a038086166000908152600360205260408082209390935590851681522054610a08908363ffffffff610aa516565b600160a060020a038085166000908152600360209081526040808320949094559187168152600182528281203382529091522054610a4c908363ffffffff610eaa16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610ebd833981519152929181900390910190a35060019392505050565b6000828201838110156104a357fe5b600160a060020a038216600090815260036020526040902054811115610ad957600080fd5b600160a060020a038216600090815260036020526040902054610b02908263ffffffff610eaa16565b600160a060020a03831660009081526003602052604081209190915554610b2f908263ffffffff610eaa16565b600055604080518281529051600160a060020a038416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2604080518281529051600091600160a060020a03851691600080516020610ebd8339815191529181900360200190a35050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831115610bf957336000908152600160209081526040808320600160a060020a0388168452909152812055610c2e565b610c09818463ffffffff610eaa16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a03821660009081526002602052604081205460ff1615158215151415610cc057600080fd5b600160a060020a038316600081815260026020908152604091829020805460ff1916861515908117909155825190815291517ff7e58a63a036e3a7ef7921f83b6ae47930cf5c293dd3bfe7a857c6863409046d9281900390910190a250600192915050565b3360009081526002602052604081205460ff1615610d4257600080fd5b600160a060020a0383161515610d5757600080fd5b33600090815260036020526040902054821115610d7357600080fd5b33600090815260036020526040902054610d93908363ffffffff610eaa16565b3360009081526003602052604080822092909255600160a060020a03851681522054610dc5908363ffffffff610aa516565b600160a060020a038416600081815260036020908152604091829020939093558051858152905191923392600080516020610ebd8339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a0386168452909152812054610e45908363ffffffff610aa516565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600082821115610eb657fe5b509003905600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a7230582087eb1c13ae84f26f362458137fe72786f8c677ead4711d95a7c555c09c73a4d10029";