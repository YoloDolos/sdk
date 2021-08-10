const ZooKeeper = {
  "address": "0x7722A4ea02386897bdb461Eebe1c327D8314d25D",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "dropAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "eggSupply",
          "type": "uint256"
        }
      ],
      "name": "AddDrop",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "parentA",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "parentB",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "Breed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "BuyEgg",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "yield",
          "type": "uint256"
        }
      ],
      "name": "Free",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "eggID",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "Hatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "dropID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenA",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenB",
          "type": "uint256"
        }
      ],
      "name": "breedAnimals",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "probability",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "yield",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "boost",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Rarity",
              "name": "rarity",
              "type": "tuple"
            },
            {
              "internalType": "enum IZoo.Type",
              "name": "kind",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "birthday",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "customName",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "animalA",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "animalB",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenA",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenB",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Parents",
              "name": "parents",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Breed",
              "name": "breed",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "eggID",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "dropID",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Meta",
              "name": "meta",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "tokenURI",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "contentHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "metadataHash",
                  "type": "bytes32"
                }
              ],
              "internalType": "struct IMedia.MediaData",
              "name": "data",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "prevOwner",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "creator",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "owner",
                  "type": "tuple"
                }
              ],
              "internalType": "struct IMarket.BidShares",
              "name": "bidShares",
              "type": "tuple"
            }
          ],
          "internalType": "struct IZoo.Token",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "breedNext",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "breedReady",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "dropID",
          "type": "uint256"
        }
      ],
      "name": "buyEgg",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "probability",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "yield",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "boost",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Rarity",
              "name": "rarity",
              "type": "tuple"
            },
            {
              "internalType": "enum IZoo.Type",
              "name": "kind",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "birthday",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "customName",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "animalA",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "animalB",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenA",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenB",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Parents",
              "name": "parents",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Breed",
              "name": "breed",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "eggID",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "dropID",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Meta",
              "name": "meta",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "tokenURI",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "contentHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "metadataHash",
                  "type": "bytes32"
                }
              ],
              "internalType": "struct IMedia.MediaData",
              "name": "data",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "prevOwner",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "creator",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "owner",
                  "type": "tuple"
                }
              ],
              "internalType": "struct IMarket.BidShares",
              "name": "bidShares",
              "type": "tuple"
            }
          ],
          "internalType": "struct IZoo.Token",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "dropID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "buyEggs",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "customName",
          "type": "string"
        }
      ],
      "name": "buyName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_market",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_media",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_zoo",
          "type": "address"
        }
      ],
      "name": "configure",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "dropAddresses",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "drops",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "freeAnimal",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "yield",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "dropID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "eggID",
          "type": "uint256"
        }
      ],
      "name": "hatchEgg",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "probability",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "yield",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "boost",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Rarity",
              "name": "rarity",
              "type": "tuple"
            },
            {
              "internalType": "enum IZoo.Type",
              "name": "kind",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "birthday",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "customName",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "animalA",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "animalB",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenA",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenB",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Parents",
              "name": "parents",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Breed",
              "name": "breed",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "eggID",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "dropID",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IZoo.Meta",
              "name": "meta",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "tokenURI",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "metadataURI",
                  "type": "string"
                },
                {
                  "internalType": "bytes32",
                  "name": "contentHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "metadataHash",
                  "type": "bytes32"
                }
              ],
              "internalType": "struct IMedia.MediaData",
              "name": "data",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "prevOwner",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "creator",
                  "type": "tuple"
                },
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Decimal.D256",
                  "name": "owner",
                  "type": "tuple"
                }
              ],
              "internalType": "struct IMarket.BidShares",
              "name": "bidShares",
              "type": "tuple"
            }
          ],
          "internalType": "struct IZoo.Token",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "market",
      "outputs": [
        {
          "internalType": "contract IMarket",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "media",
      "outputs": [
        {
          "internalType": "contract IMedia",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "namePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "dropAddress",
          "type": "address"
        }
      ],
      "name": "setDrop",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "setNamePrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokens",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "probability",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "yield",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "boost",
              "type": "uint256"
            }
          ],
          "internalType": "struct IZoo.Rarity",
          "name": "rarity",
          "type": "tuple"
        },
        {
          "internalType": "enum IZoo.Type",
          "name": "kind",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "birthday",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "customName",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "animalA",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "animalB",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "tokenA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenB",
              "type": "uint256"
            }
          ],
          "internalType": "struct IZoo.Parents",
          "name": "parents",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "count",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct IZoo.Breed",
          "name": "breed",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "eggID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dropID",
              "type": "uint256"
            }
          ],
          "internalType": "struct IZoo.Meta",
          "name": "meta",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "tokenURI",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "contentHash",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "metadataHash",
              "type": "bytes32"
            }
          ],
          "internalType": "struct IMedia.MediaData",
          "name": "data",
          "type": "tuple"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Decimal.D256",
              "name": "prevOwner",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Decimal.D256",
              "name": "creator",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Decimal.D256",
              "name": "owner",
              "type": "tuple"
            }
          ],
          "internalType": "struct IMarket.BidShares",
          "name": "bidShares",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "zoo",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "zooSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "zooWithdraw",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "transactionHash": "0x841c24202bb2dd2d5c1b18f3709c6335cc7abcc73eb4e9c971d4620361baa240",
  "receipt": {
    "to": null,
    "from": "0xd0AEF8b960d43418DC0A83DD0cAc04A3793De3E0",
    "contractAddress": "0x7722A4ea02386897bdb461Eebe1c327D8314d25D",
    "transactionIndex": 0,
    "gasUsed": "4313019",
    "logsBloom": "0x00000000000000000000000100000000000000000000000000800000200000000000000000000000000000000000000000000000000000004000000000000000000000000200000000000000000000000001000000000000000000000000000000000000020000000000000000000800000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000002000000000000000",
    "blockHash": "0xfd0ce6117ce6562bf502b2c3f3647df177949fca7ef85ba7e15a015aae4f1028",
    "transactionHash": "0x841c24202bb2dd2d5c1b18f3709c6335cc7abcc73eb4e9c971d4620361baa240",
    "logs": [
      {
        "transactionIndex": 0,
        "blockNumber": 11345025,
        "transactionHash": "0x841c24202bb2dd2d5c1b18f3709c6335cc7abcc73eb4e9c971d4620361baa240",
        "address": "0x7722A4ea02386897bdb461Eebe1c327D8314d25D",
        "topics": [
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000d0aef8b960d43418dc0a83dd0cac04a3793de3e0"
        ],
        "data": "0x",
        "logIndex": 0,
        "blockHash": "0xfd0ce6117ce6562bf502b2c3f3647df177949fca7ef85ba7e15a015aae4f1028"
      }
    ],
    "blockNumber": 11345025,
    "cumulativeGasUsed": "4313019",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "solcInputHash": "d897cdf3c2e8caac63bba867b2b1386f",
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"dropAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"title\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"eggSupply\",\"type\":\"uint256\"}],\"name\":\"AddDrop\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"parentA\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"parentB\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"Breed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"BuyEgg\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"yield\",\"type\":\"uint256\"}],\"name\":\"Free\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"eggID\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"Hatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenB\",\"type\":\"uint256\"}],\"name\":\"breedAnimals\",\"outputs\":[{\"components\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"probability\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"yield\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"boost\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Rarity\",\"name\":\"rarity\",\"type\":\"tuple\"},{\"internalType\":\"enum IZoo.Type\",\"name\":\"kind\",\"type\":\"uint8\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"birthday\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"customName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"animalA\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"animalB\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"tokenA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenB\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Parents\",\"name\":\"parents\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"count\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Breed\",\"name\":\"breed\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"eggID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Meta\",\"name\":\"meta\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"contentHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"metadataHash\",\"type\":\"bytes32\"}],\"internalType\":\"struct IMedia.MediaData\",\"name\":\"data\",\"type\":\"tuple\"},{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"prevOwner\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"creator\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"owner\",\"type\":\"tuple\"}],\"internalType\":\"struct IMarket.BidShares\",\"name\":\"bidShares\",\"type\":\"tuple\"}],\"internalType\":\"struct IZoo.Token\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"breedNext\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"breedReady\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"}],\"name\":\"buyEgg\",\"outputs\":[{\"components\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"probability\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"yield\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"boost\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Rarity\",\"name\":\"rarity\",\"type\":\"tuple\"},{\"internalType\":\"enum IZoo.Type\",\"name\":\"kind\",\"type\":\"uint8\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"birthday\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"customName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"animalA\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"animalB\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"tokenA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenB\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Parents\",\"name\":\"parents\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"count\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Breed\",\"name\":\"breed\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"eggID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Meta\",\"name\":\"meta\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"contentHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"metadataHash\",\"type\":\"bytes32\"}],\"internalType\":\"struct IMedia.MediaData\",\"name\":\"data\",\"type\":\"tuple\"},{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"prevOwner\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"creator\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"owner\",\"type\":\"tuple\"}],\"internalType\":\"struct IMarket.BidShares\",\"name\":\"bidShares\",\"type\":\"tuple\"}],\"internalType\":\"struct IZoo.Token\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"quantity\",\"type\":\"uint256\"}],\"name\":\"buyEggs\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"customName\",\"type\":\"string\"}],\"name\":\"buyName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_market\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_media\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_zoo\",\"type\":\"address\"}],\"name\":\"configure\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"dropAddresses\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"drops\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"freeAnimal\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"yield\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"eggID\",\"type\":\"uint256\"}],\"name\":\"hatchEgg\",\"outputs\":[{\"components\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"probability\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"yield\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"boost\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Rarity\",\"name\":\"rarity\",\"type\":\"tuple\"},{\"internalType\":\"enum IZoo.Type\",\"name\":\"kind\",\"type\":\"uint8\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"birthday\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"customName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"animalA\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"animalB\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"tokenA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenB\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Parents\",\"name\":\"parents\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"count\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Breed\",\"name\":\"breed\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"eggID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Meta\",\"name\":\"meta\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"contentHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"metadataHash\",\"type\":\"bytes32\"}],\"internalType\":\"struct IMedia.MediaData\",\"name\":\"data\",\"type\":\"tuple\"},{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"prevOwner\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"creator\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"owner\",\"type\":\"tuple\"}],\"internalType\":\"struct IMarket.BidShares\",\"name\":\"bidShares\",\"type\":\"tuple\"}],\"internalType\":\"struct IZoo.Token\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"market\",\"outputs\":[{\"internalType\":\"contract IMarket\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"media\",\"outputs\":[{\"internalType\":\"contract IMedia\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"namePrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"dropAddress\",\"type\":\"address\"}],\"name\":\"setDrop\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"setNamePrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokens\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"probability\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"yield\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"boost\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Rarity\",\"name\":\"rarity\",\"type\":\"tuple\"},{\"internalType\":\"enum IZoo.Type\",\"name\":\"kind\",\"type\":\"uint8\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"birthday\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"customName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"animalA\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"animalB\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"tokenA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenB\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Parents\",\"name\":\"parents\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"count\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Breed\",\"name\":\"breed\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"eggID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"dropID\",\"type\":\"uint256\"}],\"internalType\":\"struct IZoo.Meta\",\"name\":\"meta\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"contentHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"metadataHash\",\"type\":\"bytes32\"}],\"internalType\":\"struct IMedia.MediaData\",\"name\":\"data\",\"type\":\"tuple\"},{\"components\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"prevOwner\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"creator\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct Decimal.D256\",\"name\":\"owner\",\"type\":\"tuple\"}],\"internalType\":\"struct IMarket.BidShares\",\"name\":\"bidShares\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"zoo\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"zooSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"zooWithdraw\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/ZooKeeper.sol\":\"ZooKeeper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":20},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../utils/Context.sol\\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _setOwner(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        require(owner() == _msgSender(), \\\"Ownable: caller is not the owner\\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby removing any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _setOwner(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\\"Ownable: new owner is the zero address\\\");\\n        _setOwner(newOwner);\\n    }\\n\\n    function _setOwner(address newOwner) private {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n\",\"keccak256\":\"0x6bb804a310218875e89d12c053e94a13a4607cdf7cc2052f3e52bd32a0dc50a1\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address sender,\\n        address recipient,\\n        uint256 amount\\n    ) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"keccak256\":\"0x027b891937d20ccf213fdb9c31531574256de774bda99d3a70ecef6e1913ed2a\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/*\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0x95098bd1d9c8dec4d80d3dedb88a0d949fa0d740ee99f2aa466bc308216ca6d5\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Counters.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title Counters\\n * @author Matt Condon (@shrugs)\\n * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number\\n * of elements in a mapping, issuing ERC721 ids, or counting request ids.\\n *\\n * Include with `using Counters for Counters.Counter;`\\n */\\nlibrary Counters {\\n    struct Counter {\\n        // This variable should never be directly accessed by users of the library: interactions must be restricted to\\n        // the library's function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add\\n        // this feature: see https://github.com/ethereum/solidity/issues/4637\\n        uint256 _value; // default: 0\\n    }\\n\\n    function current(Counter storage counter) internal view returns (uint256) {\\n        return counter._value;\\n    }\\n\\n    function increment(Counter storage counter) internal {\\n        unchecked {\\n            counter._value += 1;\\n        }\\n    }\\n\\n    function decrement(Counter storage counter) internal {\\n        uint256 value = counter._value;\\n        require(value > 0, \\\"Counter: decrement overflow\\\");\\n        unchecked {\\n            counter._value = value - 1;\\n        }\\n    }\\n\\n    function reset(Counter storage counter) internal {\\n        counter._value = 0;\\n    }\\n}\\n\",\"keccak256\":\"0x78450f4e3b722cce467b21e285f72ce5eaf361e9ba9dd2241a413926246773cd\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/math/SafeMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n// CAUTION\\n// This version of SafeMath should only be used with Solidity 0.8 or later,\\n// because it relies on the compiler's built in overflow checks.\\n\\n/**\\n * @dev Wrappers over Solidity's arithmetic operations.\\n *\\n * NOTE: `SafeMath` is no longer needed starting with Solidity 0.8. The compiler\\n * now has built in overflow checking.\\n */\\nlibrary SafeMath {\\n    /**\\n     * @dev Returns the addition of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            uint256 c = a + b;\\n            if (c < a) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the substraction of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b > a) return (false, 0);\\n            return (true, a - b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\\n            // benefit is lost if 'b' is also tested.\\n            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\\n            if (a == 0) return (true, 0);\\n            uint256 c = a * b;\\n            if (c / a != b) return (false, 0);\\n            return (true, c);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the division of two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a / b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        unchecked {\\n            if (b == 0) return (false, 0);\\n            return (true, a % b);\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the addition of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `+` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Addition cannot overflow.\\n     */\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a + b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting on\\n     * overflow (when the result is negative).\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a - b;\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `*` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Multiplication cannot overflow.\\n     */\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a * b;\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a / b;\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting when dividing by zero.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a % b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\\n     * overflow (when the result is negative).\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {trySub}.\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b <= a, errorMessage);\\n            return a - b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting with custom message on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a / b;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting with custom message when dividing by zero.\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {tryMod}.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(\\n        uint256 a,\\n        uint256 b,\\n        string memory errorMessage\\n    ) internal pure returns (uint256) {\\n        unchecked {\\n            require(b > 0, errorMessage);\\n            return a % b;\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x8666f020bd8fc9dc14f07e2ebc52b5f236ab4cdde7c77679b08cb2f94730043b\",\"license\":\"MIT\"},\"src/Decimal.sol\":{\"content\":\"// SPDX-License-Identifier: Apache-2.0\\n\\npragma solidity >=0.8.4;\\npragma experimental ABIEncoderV2;\\n\\n// Copyright 2019 dYdX Trading Inc.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n// http://www.apache.org/licenses/LICENSE-2.0\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * NOTE: This file is a clone of the dydx protocol's Decimal.sol contract. It was forked from https://github.com/dydxprotocol/solo\\n * at commit 2d8454e02702fe5bc455b848556660629c3cad36\\n *\\n * It has not been modified other than to use a newer solidity in the pragma to match the rest of the contract suite of this project\\n */\\n\\nimport { SafeMath } from \\\"@openzeppelin/contracts/utils/math/SafeMath.sol\\\";\\nimport { Math } from \\\"./Math.sol\\\";\\n\\n/**\\n * @title Decimal\\n *\\n * Library that defines a fixed-point number with 18 decimal places.\\n */\\nlibrary Decimal {\\n    using SafeMath for uint256;\\n\\n    // ============ Constants ============\\n\\n    uint256 constant BASE_POW = 18;\\n    uint256 constant BASE = 10**BASE_POW;\\n\\n    // ============ Structs ============\\n\\n    struct D256 {\\n        uint256 value;\\n    }\\n\\n    // ============ Functions ============\\n\\n    function one() internal pure returns (D256 memory) {\\n        return D256({value: BASE});\\n    }\\n\\n    function onePlus(D256 memory d) internal pure returns (D256 memory) {\\n        return D256({value: d.value.add(BASE)});\\n    }\\n\\n    function mul(uint256 target, D256 memory d)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        return Math.getPartial(target, d.value, BASE);\\n    }\\n\\n    function div(uint256 target, D256 memory d)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        return Math.getPartial(target, BASE, d.value);\\n    }\\n}\\n\",\"keccak256\":\"0x1badf132165448ca3c23e4446f5fb4f26cd6a68e82b777734cf429d42c48f9c6\",\"license\":\"Apache-2.0\"},\"src/Math.sol\":{\"content\":\"// SPDX-License-Identifier: Apache-2.0\\n\\npragma solidity >=0.8.4;\\npragma experimental ABIEncoderV2;\\n\\nimport { SafeMath } from \\\"@openzeppelin/contracts/utils/math/SafeMath.sol\\\";\\n\\n/// @title Math\\n/// Library for non-standard Math functions\\n/// NOTE: This file is a clone of the dydx protocol's Decimal.sol contract.\\n/// It was forked from https://github.com/dydxprotocol/solo at commit\\n/// 2d8454e02702fe5bc455b848556660629c3cad36. It has not been modified other than to use a\\n/// newer solidity in the pragma to match the rest of the contract suite of this project.\\nlibrary Math {\\n    using SafeMath for uint256;\\n\\n    // ============ Library Functions ============\\n\\n    /*\\n     * Return target * (numerator / denominator).\\n     */\\n    function getPartial(\\n        uint256 target,\\n        uint256 numerator,\\n        uint256 denominator\\n    ) internal pure returns (uint256) {\\n        return target.mul(numerator).div(denominator);\\n    }\\n\\n    /*\\n     * Return target * (numerator / denominator), but rounded up.\\n     */\\n    function getPartialRoundUp(\\n        uint256 target,\\n        uint256 numerator,\\n        uint256 denominator\\n    ) internal pure returns (uint256) {\\n        if (target == 0 || numerator == 0) {\\n            // SafeMath will check for zero denominator\\n            return SafeMath.div(0, denominator);\\n        }\\n        return target.mul(numerator).sub(1).div(denominator).add(1);\\n    }\\n\\n    function to128(uint256 number) internal pure returns (uint128) {\\n        uint128 result = uint128(number);\\n        require(result == number, \\\"Math: Unsafe cast to uint128\\\");\\n        return result;\\n    }\\n\\n    function to96(uint256 number) internal pure returns (uint96) {\\n        uint96 result = uint96(number);\\n        require(result == number, \\\"Math: Unsafe cast to uint96\\\");\\n        return result;\\n    }\\n\\n    function to32(uint256 number) internal pure returns (uint32) {\\n        uint32 result = uint32(number);\\n        require(result == number, \\\"Math: Unsafe cast to uint32\\\");\\n        return result;\\n    }\\n\\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a < b ? a : b;\\n    }\\n\\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a > b ? a : b;\\n    }\\n}\\n\",\"keccak256\":\"0xb58d87d1ec96fd6dac4340545a8c3750c43b44036420786c36d5c9074786f4bf\",\"license\":\"Apache-2.0\"},\"src/ZooKeeper.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.8.4;\\npragma experimental ABIEncoderV2;\\n\\nimport { Ownable } from \\\"@openzeppelin/contracts/access/Ownable.sol\\\";\\nimport { Counters } from \\\"@openzeppelin/contracts/utils/Counters.sol\\\";\\nimport { SafeMath } from \\\"@openzeppelin/contracts/utils/math/SafeMath.sol\\\";\\nimport { IERC20 } from \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\nimport { IZoo } from \\\"./interfaces/IZoo.sol\\\";\\nimport { IDrop } from \\\"./interfaces/IDrop.sol\\\";\\nimport { IMarket } from \\\"./interfaces/IMarket.sol\\\";\\nimport { IMedia } from \\\"./interfaces/IMedia.sol\\\";\\n\\nimport \\\"./console.sol\\\";\\n\\n\\ncontract ZooKeeper is Ownable {\\n    using SafeMath for uint256;\\n    using Counters for Counters.Counter;\\n\\n    Counters.Counter private dropIDs;\\n\\n    // Declare an Event\\n    event AddDrop(address indexed dropAddress, string title, uint256 eggSupply);\\n    event BuyEgg(address indexed from, uint256 indexed tokenID);\\n    event Hatch(address indexed from, uint256 eggID, string indexed name, uint256 indexed tokenID);\\n    event Breed(address indexed from, uint256 parentA, uint256 parentB, uint256 indexed tokenID);\\n    event Mint(address indexed from, uint256 indexed tokenID);\\n    event Burn(address indexed from, uint256 indexed tokenID);\\n    event Free(address indexed from, uint256 indexed tokenID, uint256 indexed yield);\\n\\n    // Mapping of Address to Drop ID\\n    mapping(uint256 => address) public drops;\\n\\n    // Mapping of ID to Address\\n    mapping(address=> uint256) public dropAddresses;\\n\\n    // Mapping of ID to NFT\\n    mapping(uint256 => IZoo.Token) public tokens;\\n\\n    // Price to set name of Token\\n    uint256 public namePrice;\\n\\n    // External contracts\\n    IMarket public market;\\n    IMedia public media;\\n    IERC20 public zoo;\\n\\n    function configure(address _market, address _media, address _zoo) public onlyOwner {\\n        market = IMarket(_market);\\n        media = IMedia(_media);\\n        zoo = IERC20(_zoo);\\n    }\\n\\n    function setDrop(address dropAddress) public returns (uint256) {\\n        require(dropAddresses[dropAddress] == 0, \\\"Drop already added\\\");\\n\\n        IDrop drop = IDrop(dropAddress);\\n\\n        dropIDs.increment();\\n        uint256 dropID = dropIDs.current();\\n        drops[dropID] = dropAddress;\\n        dropAddresses[dropAddress] = dropID;\\n        emit AddDrop(dropAddress, drop.title(), drop.eggSupply());\\n        return dropID;\\n    }\\n\\n    // Issue a new token to owner\\n    function mint(address owner, IZoo.Token memory token) private returns (IZoo.Token memory) {\\n        console.log(\\\"mint\\\", owner, token.name);\\n        token = media.mintToken(owner, token);\\n        market.setBidShares(token.id, token.bidShares);\\n        tokens[token.id] = token;\\n        emit Mint(owner, token.id);\\n        return token;\\n    }\\n\\n    // Burn token owned by owner\\n    function burn(address owner, uint256 tokenID) private {\\n        console.log(\\\"burn\\\", owner, tokenID);\\n        media.burnToken(owner, tokenID);\\n        // delete tokens[tokenID];\\n        emit Burn(owner, tokenID);\\n    }\\n\\n    // Accept ZOO and return Egg NFT\\n    function buyEggs(uint256 dropID, uint256 quantity) public {\\n        console.log('buyEggs', dropID, quantity);\\n        for (uint8 i=0; i<quantity; i++) {\\n            buyEgg(dropID);\\n        }\\n    }\\n\\n    // Accept ZOO and return Egg NFT\\n    function buyEgg(uint256 dropID) public returns (IZoo.Token memory) {\\n        console.log('buyEgg', dropID);\\n\\n        // Check egg price\\n        IDrop drop = IDrop(drops[dropID]);\\n        require(zoo.balanceOf(msg.sender) >= drop.eggPrice(), \\\"ZK: Not Enough ZOO to purchase Egg\\\");\\n\\n        // Transfer funds\\n        console.log('zoo.transferFrom', msg.sender, address(this),drop.eggPrice());\\n        zoo.transferFrom(msg.sender, address(this), drop.eggPrice());\\n\\n        // Get Egg from this drop\\n        IZoo.Token memory egg = drop.newEgg();\\n\\n        // Mint Egg Token\\n        egg = mint(msg.sender, egg);\\n        console.log('minted egg', egg.id);\\n\\n        emit BuyEgg(msg.sender, egg.id);\\n\\n        return egg;\\n    }\\n\\n    // Burn egg and randomly return an animal NFT\\n    function hatchEgg(uint256 dropID, uint256 eggID) public returns (IZoo.Token memory) {\\n        console.log(\\\"hatchEgg\\\", dropID, eggID);\\n\\n        require(media.tokenExists(eggID), \\\"Egg is burned or does not exist\\\");\\n\\n        // Get animal for given Egg\\n        IZoo.Token memory animal = getAnimal(dropID, eggID);\\n        animal.meta.eggID = eggID;\\n        animal.meta.dropID = dropID;\\n        console.log(\\\"animal\\\", animal.name);\\n\\n        // ...it's hatching!\\n        animal = mint(msg.sender, animal);\\n        console.log('minted animal', animal.id, eggID);\\n\\n        // bye egg\\n        burn(msg.sender, eggID);\\n        console.log('burned', eggID);\\n\\n        emit Hatch(msg.sender, eggID, animal.name, animal.id);\\n        return animal;\\n    }\\n\\n\\n    // Breed two animals and create a hybrid egg\\n    function breedAnimals(uint256 dropID, uint256 tokenA, uint256 tokenB) public canBreed(tokenA, tokenB) returns (IZoo.Token memory) {\\n        console.log('breedAnimals', dropID, tokenA, tokenB);\\n\\n        IZoo.Token memory egg = IDrop(drops[dropID]).newHybridEgg(\\n            IZoo.Parents({\\n                animalA: tokens[tokenA].name,\\n                animalB: tokens[tokenB].name,\\n                tokenA: tokenA,\\n                tokenB: tokenB\\n            })\\n        );\\n\\n        // Update breeding delay for each parent\\n        updateBreedDelays(tokenA, tokenB);\\n\\n        egg = mint(msg.sender, egg);\\n        emit Breed(msg.sender, tokenA, tokenB, egg.id);\\n        return egg;\\n    }\\n\\n    // Freeing an animal burns the animal NFT and returns the ZOO to the owner\\n    function freeAnimal(uint256 tokenID) public returns (uint256 yield) {\\n        console.log('freeAnimal', tokenID);\\n\\n        IZoo.Token memory token = tokens[tokenID];\\n\\n        // Burn the token\\n        burn(msg.sender, tokenID);\\n\\n        // How long did we HODL?\\n        uint256 blockAge = block.number - token.birthday;\\n        uint256 daysOld = blockAge.div(28800);\\n\\n        // Calculate yield\\n        yield = daysOld.mul(token.rarity.yield);\\n        console.log(block.number, token.birthday, yield);\\n\\n        // Transfer yield\\n        zoo.transfer(msg.sender, yield);\\n\\n        emit Free(msg.sender, tokenID, yield);\\n    }\\n\\n    // Set price for buying a name\\n    function setNamePrice(uint256 price) public onlyOwner {\\n        namePrice = price;\\n    }\\n\\n    // Buy a custom name for your NFT\\n    function buyName(uint256 tokenID, string memory customName) public {\\n        require(\\n            zoo.balanceOf(msg.sender) < namePrice,\\n            \\\"ZK: Not enough ZOO to purchase Name\\\"\\n        );\\n\\n        zoo.transferFrom(msg.sender, address(this), namePrice);\\n\\n        IZoo.Token memory token = tokens[tokenID];\\n        token.customName = customName;\\n        tokens[tokenID] = token;\\n    }\\n\\n    // Temporary random function\\n    function unsafeRandom() private view returns (uint256) {\\n        uint256 randomNumber = uint256(\\n            keccak256(\\n                abi.encodePacked(block.number, msg.sender, block.timestamp)\\n            )\\n        ) % 10000;\\n        return randomNumber;\\n    }\\n\\n    // Ensure base animal\\n    function isBaseAnimal(uint256 tokenID) private view returns (bool) {\\n        return tokens[tokenID].kind == IZoo.Type.BASE_ANIMAL;\\n    }\\n\\n    // Ensure animals can breed\\n    modifier canBreed(uint256 parentA, uint256 parentB) {\\n        console.log(\\\"canBreed\\\", parentA, parentB);\\n\\n        require(media.tokenExists(parentA) && media.tokenExists(parentB), \\\"Non-existent token\\\");\\n        require(keccak256(abi.encode(parentA)) != keccak256(abi.encode(parentB)),\\\"Not able to breed with self\\\" );\\n        require(breedReady(parentA) && breedReady(parentB), \\\"Wait for cooldown to finish.\\\");\\n        require(isBaseAnimal(parentA) && isBaseAnimal(parentB), \\\"Only BASE_ANIMAL can breed.\\\");\\n        _;\\n    }\\n\\n    // Get a random base or hybrid animal based on a given egg\\n    function getAnimal(uint256 dropID, uint256 eggID) private view returns (IZoo.Token memory) {\\n        console.log('getAnimal', dropID, eggID);\\n\\n        // Get Egg\\n        IZoo.Token memory egg = tokens[eggID];\\n\\n        // Get random animal or hybrid from Drop\\n        if (egg.kind == IZoo.Type.BASE_EGG) {\\n            console.log(\\\"getRandomAnimal\\\", dropID, eggID);\\n            return IDrop(drops[dropID]).getRandomAnimal(unsafeRandom());\\n        } else {\\n            console.log(\\\"getRandomHybrid\\\", dropID, eggID);\\n            return IDrop(drops[dropID]).getRandomHybrid(unsafeRandom(), egg.parents);\\n        }\\n    }\\n\\n    // Update breed delays\\n    function updateBreedDelays(uint256 parentA, uint256 parentB) private {\\n        console.log('updateBreedDelays', parentA, parentB);\\n\\n        tokens[parentA].breed.count++;\\n        tokens[parentB].breed.count++;\\n        tokens[parentA].breed.timestamp = block.timestamp;\\n        tokens[parentB].breed.timestamp = block.timestamp;\\n    }\\n\\n    // Get next timestamp token can be bred\\n    function breedNext(uint256 tokenID) public view returns (uint256) {\\n        IZoo.Token memory token = tokens[tokenID];\\n        return token.breed.timestamp + (token.breed.count * 1 days);\\n    }\\n\\n    // Check whether token is ready to breed again\\n    function breedReady(uint256 tokenID) public view returns (bool) {\\n        // Never bred? Lets go\\n        if (tokens[tokenID].breed.count == 0) {\\n            return true;\\n        }\\n        // If current timestamp is greater than the next breed time, lets go\\n        if (block.timestamp > breedNext(tokenID)) {\\n            return true;\\n        }\\n\\n        // Not ready\\n        return false;\\n    }\\n\\n    // Return total amount of ZOO in contract\\n    function zooSupply() public view onlyOwner returns (uint256) {\\n        return zoo.balanceOf(address(this));\\n    }\\n\\n    // Enable owner to withdraw ZOO if necessary\\n    function zooWithdraw(address receiver, uint256 amount) public onlyOwner returns (bool) {\\n        return zoo.transferFrom(address(this), receiver, amount);\\n    }\\n}\\n\",\"keccak256\":\"0x92e79651683fb1cba267d82fb65a500146a9ed85cd98916ff84062f3deb423be\",\"license\":\"MIT\"},\"src/console.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\nlibrary console {\\n    address constant CONSOLE_ADDRESS =\\n        address(0x000000000000000000636F6e736F6c652e6c6f67);\\n\\n    function _sendLogPayload(bytes memory payload) private view {\\n        uint256 payloadLength = payload.length;\\n        address consoleAddress = CONSOLE_ADDRESS;\\n        assembly {\\n            let payloadStart := add(payload, 32)\\n            let r := staticcall(\\n                gas(),\\n                consoleAddress,\\n                payloadStart,\\n                payloadLength,\\n                0,\\n                0\\n            )\\n        }\\n    }\\n\\n    function log() internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log()\\\"));\\n    }\\n\\n    function logInt(int256 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(int)\\\", p0));\\n    }\\n\\n    function logUint(uint256 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint)\\\", p0));\\n    }\\n\\n    function logString(string memory p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function logBool(bool p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function logAddress(address p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function logBytes(bytes memory p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes)\\\", p0));\\n    }\\n\\n    function logBytes1(bytes1 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes1)\\\", p0));\\n    }\\n\\n    function logBytes2(bytes2 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes2)\\\", p0));\\n    }\\n\\n    function logBytes3(bytes3 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes3)\\\", p0));\\n    }\\n\\n    function logBytes4(bytes4 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes4)\\\", p0));\\n    }\\n\\n    function logBytes5(bytes5 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes5)\\\", p0));\\n    }\\n\\n    function logBytes6(bytes6 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes6)\\\", p0));\\n    }\\n\\n    function logBytes7(bytes7 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes7)\\\", p0));\\n    }\\n\\n    function logBytes8(bytes8 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes8)\\\", p0));\\n    }\\n\\n    function logBytes9(bytes9 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes9)\\\", p0));\\n    }\\n\\n    function logBytes10(bytes10 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes10)\\\", p0));\\n    }\\n\\n    function logBytes11(bytes11 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes11)\\\", p0));\\n    }\\n\\n    function logBytes12(bytes12 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes12)\\\", p0));\\n    }\\n\\n    function logBytes13(bytes13 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes13)\\\", p0));\\n    }\\n\\n    function logBytes14(bytes14 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes14)\\\", p0));\\n    }\\n\\n    function logBytes15(bytes15 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes15)\\\", p0));\\n    }\\n\\n    function logBytes16(bytes16 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes16)\\\", p0));\\n    }\\n\\n    function logBytes17(bytes17 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes17)\\\", p0));\\n    }\\n\\n    function logBytes18(bytes18 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes18)\\\", p0));\\n    }\\n\\n    function logBytes19(bytes19 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes19)\\\", p0));\\n    }\\n\\n    function logBytes20(bytes20 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes20)\\\", p0));\\n    }\\n\\n    function logBytes21(bytes21 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes21)\\\", p0));\\n    }\\n\\n    function logBytes22(bytes22 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes22)\\\", p0));\\n    }\\n\\n    function logBytes23(bytes23 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes23)\\\", p0));\\n    }\\n\\n    function logBytes24(bytes24 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes24)\\\", p0));\\n    }\\n\\n    function logBytes25(bytes25 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes25)\\\", p0));\\n    }\\n\\n    function logBytes26(bytes26 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes26)\\\", p0));\\n    }\\n\\n    function logBytes27(bytes27 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes27)\\\", p0));\\n    }\\n\\n    function logBytes28(bytes28 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes28)\\\", p0));\\n    }\\n\\n    function logBytes29(bytes29 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes29)\\\", p0));\\n    }\\n\\n    function logBytes30(bytes30 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes30)\\\", p0));\\n    }\\n\\n    function logBytes31(bytes31 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes31)\\\", p0));\\n    }\\n\\n    function logBytes32(bytes32 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bytes32)\\\", p0));\\n    }\\n\\n    function log(uint256 p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint)\\\", p0));\\n    }\\n\\n    function log(string memory p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string)\\\", p0));\\n    }\\n\\n    function log(bool p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool)\\\", p0));\\n    }\\n\\n    function log(address p0) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address)\\\", p0));\\n    }\\n\\n    function log(uint256 p0, uint256 p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint,uint)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, string memory p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint,string)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, bool p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint,bool)\\\", p0, p1));\\n    }\\n\\n    function log(uint256 p0, address p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(uint,address)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, uint256 p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,uint)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, string memory p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,string)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, bool p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,bool)\\\", p0, p1));\\n    }\\n\\n    function log(string memory p0, address p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(string,address)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, uint256 p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,uint)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, string memory p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,string)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, bool p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,bool)\\\", p0, p1));\\n    }\\n\\n    function log(bool p0, address p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(bool,address)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, uint256 p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,uint)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, string memory p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,string)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, bool p1) internal view {\\n        _sendLogPayload(abi.encodeWithSignature(\\\"log(address,bool)\\\", p0, p1));\\n    }\\n\\n    function log(address p0, address p1) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,address)\\\", p0, p1)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,string,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,string,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,string,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,string,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,address,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,address,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,address,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,address,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,uint,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,uint,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,uint,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,uint,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,string,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,string,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,string,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,string,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,bool,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,bool,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,bool,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,bool,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,address,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,address,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,address,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(string,address,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,string,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,string,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,string,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,string,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,address,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,address,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,address,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,address,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,uint,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,uint,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,uint,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,uint,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,string,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,string,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,string,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,string,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,bool,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,bool,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,bool,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,bool,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        uint256 p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,address,uint)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        string memory p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,address,string)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        bool p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,address,bool)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        address p2\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(address,address,address)\\\", p0, p1, p2)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,uint,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,uint,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,bool,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,uint,bool,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        uint256 p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,uint,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        string memory p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,string,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,uint,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,uint,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,bool,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(uint,bool,bool,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        bool p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,bool,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        uint256 p0,\\n        address p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(uint,address,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        uint256 p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,uint,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        string memory p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,string,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        bool p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,bool,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        string memory p0,\\n        address p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(string,address,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,uint,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,uint,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,bool,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,uint,bool,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        uint256 p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,uint,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        string memory p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,string,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,uint,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,uint,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,bool,uint)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\\"log(bool,bool,bool,bool)\\\", p0, p1, p2, p3)\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        bool p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,bool,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        bool p0,\\n        address p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(bool,address,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        uint256 p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,uint,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        string memory p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,string,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        bool p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,bool,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        uint256 p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,uint,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        uint256 p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,uint,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        uint256 p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,uint,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        uint256 p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,uint,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        string memory p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,string,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        string memory p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,string,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        string memory p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,string,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        string memory p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,string,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        bool p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,bool,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        bool p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,bool,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        bool p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,bool,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        bool p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,bool,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        address p2,\\n        uint256 p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,address,uint)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        address p2,\\n        string memory p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,address,string)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        address p2,\\n        bool p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,address,bool)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n\\n    function log(\\n        address p0,\\n        address p1,\\n        address p2,\\n        address p3\\n    ) internal view {\\n        _sendLogPayload(\\n            abi.encodeWithSignature(\\n                \\\"log(address,address,address,address)\\\",\\n                p0,\\n                p1,\\n                p2,\\n                p3\\n            )\\n        );\\n    }\\n}\\n\",\"keccak256\":\"0x1df9703e731ddd2da1d569a490493a94d690d0a3586116f3ecbba545c3e9e8b1\",\"license\":\"MIT\"},\"src/interfaces/IDrop.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.8.4;\\n\\nimport { IZoo } from \\\"./IZoo.sol\\\";\\n\\ninterface IDrop {\\n    function title() external view returns (string memory);\\n    function eggPrice() external view returns (uint256);\\n    function eggSupply() external view returns (uint256);\\n    function newEgg() external returns (IZoo.Token memory);\\n    function newHybridEgg(IZoo.Parents memory) external returns (IZoo.Token memory);\\n    function getRandomAnimal(uint256) external view returns (IZoo.Token memory);\\n    function getRandomHybrid(uint256, IZoo.Parents memory) external view returns (IZoo.Token memory);\\n}\\n\",\"keccak256\":\"0x0e6c6c37c950016fb45f2d7fb65775723a846c273173818f94eaab5e17f261ab\",\"license\":\"MIT\"},\"src/interfaces/IMarket.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n// Forked from https://github.com/ourzora/core @ 450cd154bfbb70f62e94050cc3f1560d58e0506a\\n\\npragma solidity >=0.8.4;\\npragma experimental ABIEncoderV2;\\n\\nimport { Decimal } from \\\"../Decimal.sol\\\";\\n\\n/**\\n * @title Interface for Zoo Protocol's Market\\n */\\ninterface IMarket {\\n\\n    struct Bid {\\n        // Amount of the currency being bid\\n        uint256 amount;\\n        // Address to the ERC20 token being used to bid\\n        address currency;\\n        // Address of the bidder\\n        address bidder;\\n        // Address of the recipient\\n        address recipient;\\n        // % of the next sale to award the current owner\\n        Decimal.D256 sellOnShare;\\n    }\\n\\n    struct Ask {\\n        // Amount of the currency being asked\\n        uint256 amount;\\n        // Address to the ERC20 token being asked\\n        address currency;\\n    }\\n\\n    struct BidShares {\\n        // % of sale value that goes to the _previous_ owner of the nft\\n        Decimal.D256 prevOwner;\\n        // % of sale value that goes to the original creator of the nft\\n        Decimal.D256 creator;\\n        // % of sale value that goes to the seller (current owner) of the nft\\n        Decimal.D256 owner;\\n    }\\n\\n    event BidCreated(uint256 indexed tokenID, Bid bid);\\n    event BidRemoved(uint256 indexed tokenID, Bid bid);\\n    event BidFinalized(uint256 indexed tokenID, Bid bid);\\n    event AskCreated(uint256 indexed tokenID, Ask ask);\\n    event AskRemoved(uint256 indexed tokenID, Ask ask);\\n    event BidShareUpdated(uint256 indexed tokenID, BidShares bidShares);\\n\\n    function bidForTokenBidder(uint256 tokenID, address bidder)\\n        external\\n        view\\n        returns (Bid memory);\\n\\n    function currentAskForToken(uint256 tokenID)\\n        external\\n        view\\n        returns (Ask memory);\\n\\n    function bidSharesForToken(uint256 tokenID)\\n        external\\n        view\\n        returns (BidShares memory);\\n\\n    function isValidBid(uint256 tokenID, uint256 bidAmount)\\n        external\\n        view\\n        returns (bool);\\n\\n    function isValidBidShares(BidShares calldata bidShares)\\n        external\\n        pure\\n        returns (bool);\\n\\n    function splitShare(Decimal.D256 calldata sharePercentage, uint256 amount)\\n        external\\n        pure\\n        returns (uint256);\\n\\n    function setBidShares(uint256 tokenID, BidShares calldata bidShares)\\n        external;\\n\\n    function setAsk(uint256 tokenID, Ask calldata ask) external;\\n\\n    function removeAsk(uint256 tokenID) external;\\n\\n    function setBid(\\n        uint256 tokenID,\\n        Bid calldata bid,\\n        address spender\\n    ) external;\\n\\n    function removeBid(uint256 tokenID, address bidder) external;\\n\\n    function acceptBid(uint256 tokenID, Bid calldata expectedBid) external;\\n}\\n\",\"keccak256\":\"0xb9ae2b808f01fb70d6eb41b223faf9c0d64d4a2f17826dbddba01b9125398c71\",\"license\":\"GPL-3.0\"},\"src/interfaces/IMedia.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n// Forked from https://github.com/ourzora/core @ 450cd154bfbb70f62e94050cc3f1560d58e0506a\\n\\npragma solidity >=0.8.4;\\npragma experimental ABIEncoderV2;\\n\\nimport { IMarket } from \\\"./IMarket.sol\\\";\\nimport { IZoo } from \\\"./IZoo.sol\\\";\\n\\n/**\\n * @title Interface for Zoo Protocol's Media\\n */\\ninterface IMedia {\\n    struct EIP712Signature {\\n        uint256 deadline;\\n        uint8 v;\\n        bytes32 r;\\n        bytes32 s;\\n    }\\n\\n    struct MediaData {\\n        // A valid URI of the content represented by this token\\n        string tokenURI;\\n        // A valid URI of the metadata associated with this token\\n        string metadataURI;\\n        // A SHA256 hash of the content pointed to by tokenURI\\n        bytes32 contentHash;\\n        // A SHA256 hash of the content pointed to by metadataURI\\n        bytes32 metadataHash;\\n    }\\n\\n    event TokenURIUpdated(uint256 indexed _tokenID, address owner, string _uri);\\n    event TokenMetadataURIUpdated(\\n        uint256 indexed _tokenID,\\n        address owner,\\n        string _uri\\n    );\\n\\n    /**\\n     * @notice Return the metadata URI for a piece of media given the token URI\\n     */\\n    function tokenMetadataURI(uint256 tokenID)\\n        external\\n        view\\n        returns (string memory);\\n\\n    /**\\n     * @notice Mint new media for msg.sender.\\n     */\\n    function mint(MediaData calldata data, IMarket.BidShares calldata bidShares)\\n        external;\\n\\n    /**\\n     * @notice EIP-712 mintWithSig method. Mints new media for a creator given a valid signature.\\n     */\\n    function mintWithSig(\\n        address creator,\\n        MediaData calldata data,\\n        IMarket.BidShares calldata bidShares,\\n        EIP712Signature calldata sig\\n    ) external;\\n\\n    /**\\n     * @notice Transfer the token with the given ID to a given address.\\n     * Save the previous owner before the transfer, in case there is a sell-on fee.\\n     * @dev This can only be called by the auction contract specified at deployment\\n     */\\n    function auctionTransfer(uint256 tokenID, address recipient) external;\\n\\n    /**\\n     * @notice Set the ask on a piece of media\\n     */\\n    function setAsk(uint256 tokenID, IMarket.Ask calldata ask) external;\\n\\n    /**\\n     * @notice Remove the ask on a piece of media\\n     */\\n    function removeAsk(uint256 tokenID) external;\\n\\n    /**\\n     * @notice Set the bid on a piece of media\\n     */\\n    function setBid(uint256 tokenID, IMarket.Bid calldata bid) external;\\n\\n    /**\\n     * @notice Remove the bid on a piece of media\\n     */\\n    function removeBid(uint256 tokenID) external;\\n\\n    function acceptBid(uint256 tokenID, IMarket.Bid calldata bid) external;\\n\\n    /**\\n     * @notice Revoke approval for a piece of media\\n     */\\n    function revokeApproval(uint256 tokenID) external;\\n\\n    /**\\n     * @notice Update the token URI\\n     */\\n    function updateTokenURI(uint256 tokenID, string calldata tokenURI) external;\\n\\n    /**\\n     * @notice Update the token metadata uri\\n     */\\n    function updateTokenMetadataURI(\\n        uint256 tokenID,\\n        string calldata metadataURI\\n    ) external;\\n\\n    /**\\n     * @notice EIP-712 permit method. Sets an approved spender given a valid signature.\\n     */\\n    function permit(\\n        address spender,\\n        uint256 tokenID,\\n        EIP712Signature calldata sig\\n    ) external;\\n\\n    // Added for Zoo\\n    function mintToken(address owner, IZoo.Token memory tokenID) external returns (IZoo.Token memory);\\n    function burnToken(address owner, uint256 tokenID) external;\\n    function tokenExists(uint256 tokenID) external returns (bool);\\n}\\n\",\"keccak256\":\"0x382dc461b14d9b3b5bd03e31932a9dbe7447767a804a18c42cfe690c4854ca79\",\"license\":\"GPL-3.0\"},\"src/interfaces/IZoo.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.8.4;\\n\\nimport { IMedia } from \\\"./IMedia.sol\\\";\\nimport { IMarket } from \\\"./IMarket.sol\\\";\\n\\ninterface IZoo {\\n    enum Type {\\n        BASE_EGG,\\n        BASE_ANIMAL,\\n        HYBRID_EGG,\\n        HYBRID_ANIMAL\\n    }\\n\\n    struct Rarity {\\n        string  name;\\n        uint256 probability;\\n        uint256 yield;\\n        uint256 boost;\\n    }\\n\\n    struct Breed {\\n        uint256 count;\\n        uint256 timestamp;\\n    }\\n\\n    struct Parents {\\n        string  animalA;\\n        string  animalB;\\n        uint256 tokenA;\\n        uint256 tokenB;\\n    }\\n\\n    struct Meta {\\n        uint256 eggID;          // originating egg\\n        uint256 dropID;         // originating drop\\n    }\\n\\n    struct Token {\\n        Rarity  rarity;\\n        Type  kind;\\n        string  name;\\n        uint256 id;             // unique ID\\n        uint256 timestamp;      // time created\\n        uint256 birthday;       // birth block\\n        string  customName;     // optional, paid feature\\n        Parents parents;\\n        Breed   breed;\\n        Meta meta;\\n        IMedia.MediaData data;\\n        IMarket.BidShares bidShares;\\n    }\\n}\\n\",\"keccak256\":\"0xe7d21793430e0e702d72166ba0939eb8b996575bf7bf4b56277f47f721156bfd\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506200001d3362000023565b62000073565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b614c9b80620000836000396000f3fe608060405234801561001057600080fd5b506004361061011d5760003560e01c806310e0af64146101225780632626f4e01461014a57806349077a4f1461015f5780634c33efa71461017f5780634f2cabdf1461019f5780634f64b2be146101cd57806354d7dc93146101f857806355d28f201461020b5780635eb399681461021e578063685bf0cd146102475780636fc2790e1461025a578063715018a61461026d5780637b6a87771461027557806380f55605146102885780638da5cb5b1461029b5780639c275d11146102a3578063b22073b6146102b6578063c87b2cba146102bf578063d4eddf7e146102d2578063de611f55146102da578063f2fde38b146102ed578063f624172714610300578063f8b2462614610313575b600080fd5b610135610130366004614440565b610326565b60405190151581526020015b60405180910390f35b61015d610158366004614440565b610364565b005b600754610172906001600160a01b031681565b604051610141919061475b565b61019261018d366004614440565b6103a1565b6040516101419190614a29565b6101bf6101ad366004614208565b60036020526000908152604090205481565b604051908152602001610141565b6101e06101db366004614440565b6107cb565b6040516101419c9b9a9998979695949392919061495e565b61019261020636600461450f565b610ce5565b61015d610219366004614222565b611230565b61017261022c366004614440565b6002602052600090815260409020546001600160a01b031681565b61015d6102553660046144ee565b61129e565b6101926102683660046144ee565b6112f7565b61015d61150c565b600854610172906001600160a01b031681565b600654610172906001600160a01b031681565b610172611547565b6101bf6102b1366004614440565b611556565b6101bf60055481565b6101bf6102cd366004614440565b611b15565b6101bf6121db565b61015d6102e8366004614470565b612291565b61015d6102fb366004614208565b612b5d565b61013561030e366004614264565b612bfd565b6101bf610321366004614208565b612cb4565b6000818152600460205260408120600e015461034457506001919050565b61034d82611556565b42111561035c57506001919050565b506000919050565b3361036d611547565b6001600160a01b03161461039c5760405162461bcd60e51b815260040161039390614916565b60405180910390fd5b600555565b6103a9613dbc565b6103d16040518060400160405280600681526020016562757945676760d01b81525083612e89565b60008281526002602090815260409182902054825163182f1aa960e11b815292516001600160a01b0390911692839263305e355292600480840193829003018186803b15801561042057600080fd5b505afa158015610434573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104589190614458565b6008546040516370a0823160e01b81526001600160a01b03909116906370a082319061048890339060040161475b565b60206040518083038186803b1580156104a057600080fd5b505afa1580156104b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d89190614458565b10156105315760405162461bcd60e51b815260206004820152602260248201527f5a4b3a204e6f7420456e6f756768205a4f4f20746f2070757263686173652045604482015261676760f01b6064820152608401610393565b6105d56040518060400160405280601081526020016f7a6f6f2e7472616e7366657246726f6d60801b8152503330846001600160a01b031663305e35526040518163ffffffff1660e01b815260040160206040518083038186803b15801561059857600080fd5b505afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190614458565b612ed2565b600860009054906101000a90046001600160a01b03166001600160a01b03166323b872dd3330846001600160a01b031663305e35526040518163ffffffff1660e01b815260040160206040518083038186803b15801561063457600080fd5b505afa158015610648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066c9190614458565b6040518463ffffffff1660e01b815260040161068a9392919061476f565b602060405180830381600087803b1580156106a457600080fd5b505af11580156106b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dc919061428d565b506000816001600160a01b0316630489a8f66040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561071a57600080fd5b505af115801561072e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261075691908101906142df565b90506107623382612f21565b90506107946040518060400160405280600a8152602001696d696e7465642065676760b01b8152508260600151612e89565b606081015160405133907fb6fcdc0b9a5291c95b93142b5e81d61a0b01a26b043be034e6daaa1219e7ebc190600090a39392505050565b6004602052806000526040600020600091509050806000016040518060800160405290816000820180546107fe90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461082a90614b99565b80156108775780601f1061084c57610100808354040283529160200191610877565b820191906000526020600020905b81548152906001019060200180831161085a57829003601f168201915b505050918352505060018201546020820152600282015460408201526003909101546060909101526004820154600583018054929360ff909216926108bb90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546108e790614b99565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b50505050509080600601549080600701549080600801549080600901805461095b90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461098790614b99565b80156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b50505050509080600a016040518060800160405290816000820180546109f990614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2590614b99565b8015610a725780601f10610a4757610100808354040283529160200191610a72565b820191906000526020600020905b815481529060010190602001808311610a5557829003601f168201915b50505050508152602001600182018054610a8b90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab790614b99565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015280518082018252600e8501548152600f8501548184015281518083018352601086015481526011860154938101939093528151608081019092526012850180549495919491929182908290610b7a90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba690614b99565b8015610bf35780601f10610bc857610100808354040283529160200191610bf3565b820191906000526020600020905b815481529060010190602001808311610bd657829003601f168201915b50505050508152602001600182018054610c0c90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3890614b99565b8015610c855780601f10610c5a57610100808354040283529160200191610c85565b820191906000526020600020905b815481529060010190602001808311610c6857829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015280516080810182526016850154606082019081528152815180840183526017860154815281840152815192830182526018909401548252830152908c565b610ced613dbc565b8282610d1a6040518060400160405280600881526020016718d85b909c99595960c21b815250838361325f565b60075460405162491fcf60e11b8152600481018490526001600160a01b039091169062923f9e90602401602060405180830381600087803b158015610d5e57600080fd5b505af1158015610d72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d96919061428d565b8015610e19575060075460405162491fcf60e11b8152600481018390526001600160a01b039091169062923f9e90602401602060405180830381600087803b158015610de157600080fd5b505af1158015610df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e19919061428d565b610e5a5760405162461bcd60e51b81526020600482015260126024820152712737b716b2bc34b9ba32b73a103a37b5b2b760711b6044820152606401610393565b60408051602081018390520160408051601f1981840301815282825280516020918201209083018590529101604051602081830303815290604052805190602001201415610ee85760405162461bcd60e51b815260206004820152601b60248201527a2737ba1030b13632903a3790313932b2b2103bb4ba341039b2b63360291b6044820152606401610393565b610ef182610326565b8015610f015750610f0181610326565b610f4c5760405162461bcd60e51b815260206004820152601c60248201527b2bb0b4ba103337b91031b7b7b63237bbb7103a37903334b734b9b41760211b6044820152606401610393565b610f55826132a6565b8015610f655750610f65816132a6565b610faf5760405162461bcd60e51b815260206004820152601b60248201527a27b7363c902120a9a2afa0a724a6a0a61031b0b710313932b2b21760291b6044820152606401610393565b610fdf6040518060400160405280600c81526020016b6272656564416e696d616c7360a01b8152508787876132e4565b6000868152600260209081526040808320548151608081018352898552600490935290832060050180546001600160a01b039092169263e82baf30929091829161102890614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461105490614b99565b80156110a15780601f10611076576101008083540402835291602001916110a1565b820191906000526020600020905b81548152906001019060200180831161108457829003601f168201915b50505050508152602001600460008a815260200190815260200160002060050180546110cc90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546110f890614b99565b80156111455780601f1061111a57610100808354040283529160200191611145565b820191906000526020600020905b81548152906001019060200180831161112857829003601f168201915b50505050508152602001898152602001888152506040518263ffffffff1660e01b8152600401611175919061494b565b600060405180830381600087803b15801561118f57600080fd5b505af11580156111a3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111cb91908101906142df565b90506111d7868661332d565b6111e13382612f21565b60608101516040805189815260208101899052929350909133917fddf1e8fec06a50aa72b8a39a06787808c53eca73b2bd1cc995681cf7b8014650910160405180910390a39695505050505050565b33611239611547565b6001600160a01b03161461125f5760405162461bcd60e51b815260040161039390614916565b600680546001600160a01b039485166001600160a01b031991821617909155600780549385169382169390931790925560088054919093169116179055565b6112c8604051806040016040528060078152602001666275794567677360c81b815250838361325f565b60005b818160ff1610156112f2576112df836103a1565b50806112ea81614bef565b9150506112cb565b505050565b6112ff613dbc565b61132a60405180604001604052806008815260200167686174636845676760c01b815250848461325f565b60075460405162491fcf60e11b8152600481018490526001600160a01b039091169062923f9e90602401602060405180830381600087803b15801561136e57600080fd5b505af1158015611382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a6919061428d565b6113f25760405162461bcd60e51b815260206004820152601f60248201527f456767206973206275726e6564206f7220646f6573206e6f74206578697374006044820152606401610393565b60006113fe84846133c8565b610120810180518590525160209081018690526040805180820182526006815265185b9a5b585b60d21b9281019290925282015191925061143e91613afd565b6114483382612f21565b905061147e6040518060400160405280600d81526020016c1b5a5b9d195908185b9a5b585b609a1b81525082606001518561325f565b6114883384613b42565b6114b060405180604001604052806006815260200165189d5c9b995960d21b81525084612e89565b806060015181604001516040516114c7919061473f565b6040519081900381208582529033907f4522ecb13d32126c25afeea8589e647e00d59f9a12ed51b492efcfd722faa91c9060200160405180910390a490505b92915050565b33611515611547565b6001600160a01b03161461153b5760405162461bcd60e51b815260040161039390614916565b6115456000613c07565b565b6000546001600160a01b031690565b60008181526004602052604080822081516102008101909252805483929190829061018082019083908290829061158c90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546115b890614b99565b80156116055780601f106115da57610100808354040283529160200191611605565b820191906000526020600020905b8154815290600101906020018083116115e857829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff16600381111561166257634e487b7160e01b600052602160045260246000fd5b600381111561168157634e487b7160e01b600052602160045260246000fd5b815260200160058201805461169590614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546116c190614b99565b801561170e5780601f106116e35761010080835404028352916020019161170e565b820191906000526020600020905b8154815290600101906020018083116116f157829003601f168201915b5050505050815260200160068201548152602001600782015481526020016008820154815260200160098201805461174590614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461177190614b99565b80156117be5780601f10611793576101008083540402835291602001916117be565b820191906000526020600020905b8154815290600101906020018083116117a157829003601f168201915b50505050508152602001600a82016040518060800160405290816000820180546117e790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461181390614b99565b80156118605780601f1061183557610100808354040283529160200191611860565b820191906000526020600020905b81548152906001019060200180831161184357829003601f168201915b5050505050815260200160018201805461187990614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546118a590614b99565b80156118f25780601f106118c7576101008083540402835291602001916118f2565b820191906000526020600020905b8154815290600101906020018083116118d557829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f85015481830152838201528151808301835260108501548152601185015491810191909152828201528051608081019091526012830180546060909301928290829061197290614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461199e90614b99565b80156119eb5780601f106119c0576101008083540402835291602001916119eb565b820191906000526020600020905b8154815290600101906020018083116119ce57829003601f168201915b50505050508152602001600182018054611a0490614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3090614b99565b8015611a7d5780601f10611a5257610100808354040283529160200191611a7d565b820191906000526020600020905b815481529060010190602001808311611a6057829003601f168201915b50505091835250506002820154602080830191909152600390920154604091820152918352815160808101835260168501546060820190815281528251808301845260178601548152818301528251808301845260189095015485529182019390935291015261010081015151909150611afa9062015180614b37565b81610100015160200151611b0e9190614b0b565b9392505050565b6000611b436040518060400160405280600a815260200169199c9959505b9a5b585b60b21b81525083612e89565b6000828152600460205260408082208151610200810190925280548290610180820190839082908290611b7590614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611ba190614b99565b8015611bee5780601f10611bc357610100808354040283529160200191611bee565b820191906000526020600020905b815481529060010190602001808311611bd157829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff166003811115611c4b57634e487b7160e01b600052602160045260246000fd5b6003811115611c6a57634e487b7160e01b600052602160045260246000fd5b8152602001600582018054611c7e90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611caa90614b99565b8015611cf75780601f10611ccc57610100808354040283529160200191611cf7565b820191906000526020600020905b815481529060010190602001808311611cda57829003601f168201915b50505050508152602001600682015481526020016007820154815260200160088201548152602001600982018054611d2e90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611d5a90614b99565b8015611da75780601f10611d7c57610100808354040283529160200191611da7565b820191906000526020600020905b815481529060010190602001808311611d8a57829003601f168201915b50505050508152602001600a8201604051806080016040529081600082018054611dd090614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611dfc90614b99565b8015611e495780601f10611e1e57610100808354040283529160200191611e49565b820191906000526020600020905b815481529060010190602001808311611e2c57829003601f168201915b50505050508152602001600182018054611e6290614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8e90614b99565b8015611edb5780601f10611eb057610100808354040283529160200191611edb565b820191906000526020600020905b815481529060010190602001808311611ebe57829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f850154818301528382015281518083018352601085015481526011850154918101919091528282015280516080810190915260128301805460609093019282908290611f5b90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611f8790614b99565b8015611fd45780601f10611fa957610100808354040283529160200191611fd4565b820191906000526020600020905b815481529060010190602001808311611fb757829003601f168201915b50505050508152602001600182018054611fed90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461201990614b99565b80156120665780601f1061203b57610100808354040283529160200191612066565b820191906000526020600020905b81548152906001019060200180831161204957829003601f168201915b50505091835250506002820154602080830191909152600390920154604091820152918352815160808101835260168501546060820190815281528251808301845260178601548152818301528251808301845260189095015485529182019390935291015290506120d83384613b42565b60008160a00151436120ea9190614b56565b905060006120fa82617080613c57565b83516040015190915061210e908290613c63565b935061211f438460a0015186613c6f565b60085460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061215190339088906004016147b7565b602060405180830381600087803b15801561216b57600080fd5b505af115801561217f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121a3919061428d565b506040518490869033907f6d330a72b03f3f443e72a146c33e5882a01427b60a36b46ac11243d0c4e31d0990600090a4505050919050565b6000336121e6611547565b6001600160a01b03161461220c5760405162461bcd60e51b815260040161039390614916565b6008546040516370a0823160e01b81526001600160a01b03909116906370a082319061223c90309060040161475b565b60206040518083038186803b15801561225457600080fd5b505afa158015612268573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061228c9190614458565b905090565b6005546008546040516370a0823160e01b81526001600160a01b03909116906370a08231906122c490339060040161475b565b60206040518083038186803b1580156122dc57600080fd5b505afa1580156122f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123149190614458565b1061236d5760405162461bcd60e51b815260206004820152602360248201527f5a4b3a204e6f7420656e6f756768205a4f4f20746f207075726368617365204e604482015262616d6560e81b6064820152608401610393565b6008546005546040516323b872dd60e01b81526001600160a01b03909216916323b872dd916123a2913391309160040161476f565b602060405180830381600087803b1580156123bc57600080fd5b505af11580156123d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123f4919061428d565b50600082815260046020526040808220815161020081019092528054829061018082019083908290829061242790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461245390614b99565b80156124a05780601f10612475576101008083540402835291602001916124a0565b820191906000526020600020905b81548152906001019060200180831161248357829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff1660038111156124fd57634e487b7160e01b600052602160045260246000fd5b600381111561251c57634e487b7160e01b600052602160045260246000fd5b815260200160058201805461253090614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461255c90614b99565b80156125a95780601f1061257e576101008083540402835291602001916125a9565b820191906000526020600020905b81548152906001019060200180831161258c57829003601f168201915b505050505081526020016006820154815260200160078201548152602001600882015481526020016009820180546125e090614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461260c90614b99565b80156126595780601f1061262e57610100808354040283529160200191612659565b820191906000526020600020905b81548152906001019060200180831161263c57829003601f168201915b50505050508152602001600a820160405180608001604052908160008201805461268290614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546126ae90614b99565b80156126fb5780601f106126d0576101008083540402835291602001916126fb565b820191906000526020600020905b8154815290600101906020018083116126de57829003601f168201915b5050505050815260200160018201805461271490614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461274090614b99565b801561278d5780601f106127625761010080835404028352916020019161278d565b820191906000526020600020905b81548152906001019060200180831161277057829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f85015481830152838201528151808301835260108501548152601185015491810191909152828201528051608081019091526012830180546060909301928290829061280d90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461283990614b99565b80156128865780601f1061285b57610100808354040283529160200191612886565b820191906000526020600020905b81548152906001019060200180831161286957829003601f168201915b5050505050815260200160018201805461289f90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546128cb90614b99565b80156129185780601f106128ed57610100808354040283529160200191612918565b820191906000526020600020905b8154815290600101906020018083116128fb57829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281516080810183526016850154606082019081528152825180830184526017860154815281830152825180830184526018909501548552808301949094529182019290925260c083018590526000868152600482529190912082518051805194955085949293919284926129b5928492910190613ed2565b50602082015181600101556040820151816002015560608201518160030155505060208201518160040160006101000a81548160ff02191690836003811115612a0e57634e487b7160e01b600052602160045260246000fd5b021790555060408201518051612a2e916005840191602090910190613ed2565b50606082015160068201556080820151600782015560a0820151600882015560c08201518051612a68916009840191602090910190613ed2565b5060e082015180518051600a840191612a8691839160200190613ed2565b506020828101518051612a9f9260018501920190613ed2565b50604082015160028201556060909101516003909101556101008201518051600e830155602090810151600f8301556101208301518051601084015581015160118301556101408301518051805191926012850192612b019284920190613ed2565b506020828101518051612b1a9260018501920190613ed2565b5060408281015160028301556060909201516003909101556101609290920151805151601683015560208101515160178301559091015151601890910155505050565b33612b66611547565b6001600160a01b031614612b8c5760405162461bcd60e51b815260040161039390614916565b6001600160a01b038116612bf15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610393565b612bfa81613c07565b50565b600033612c08611547565b6001600160a01b031614612c2e5760405162461bcd60e51b815260040161039390614916565b6008546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90612c629030908790879060040161476f565b602060405180830381600087803b158015612c7c57600080fd5b505af1158015612c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b0e919061428d565b6001600160a01b03811660009081526003602052604081205415612d0f5760405162461bcd60e51b8152602060048201526012602482015271111c9bdc08185b1c9958591e48185919195960721b6044820152606401610393565b81612d1e600180546001019055565b6000612d2960015490565b600081815260026020908152604080832080546001600160a01b0319166001600160a01b038a81169182179092558085526003909352818420859055815163129e754360e21b8152915194955091937f2924d682319c0da5a600d8e093bcb0fb706de4e6bb58e114c69dee5587e2ec2d9392871692634a79d50c9260048082019391829003018186803b158015612dbf57600080fd5b505afa158015612dd3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612dfb91908101906142ad565b846001600160a01b031663d232b7976040518163ffffffff1660e01b815260040160206040518083038186803b158015612e3457600080fd5b505afa158015612e48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e6c9190614458565b604051612e7a9291906148a0565b60405180910390a29392505050565b612ece8282604051602401612e9f9291906148a0565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052613cb9565b5050565b612f1b84848484604051602401612eec94939291906147d0565b60408051601f198184030181529190526020810180516001600160e01b0316636eb7943d60e01b179052613cb9565b50505050565b612f29613dbc565b612f54604051806040016040528060048152602001631b5a5b9d60e21b815250848460400151613cda565b60075460405163113fba1f60e11b81526001600160a01b039091169063227f743e90612f869086908690600401614793565b600060405180830381600087803b158015612fa057600080fd5b505af1158015612fb4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612fdc91908101906142df565b60065460608201516101608301516040516375aab41d60e11b81529395506001600160a01b039092169263eb55683a926130199291600401614a3c565b600060405180830381600087803b15801561303357600080fd5b505af1158015613047573d6000803e3d6000fd5b50505050606082015160009081526004602090815260409091208351805180518694849261307b9284929190910190613ed2565b50602082015181600101556040820151816002015560608201518160030155505060208201518160040160006101000a81548160ff021916908360038111156130d457634e487b7160e01b600052602160045260246000fd5b0217905550604082015180516130f4916005840191602090910190613ed2565b50606082015160068201556080820151600782015560a0820151600882015560c0820151805161312e916009840191602090910190613ed2565b5060e082015180518051600a84019161314c91839160200190613ed2565b5060208281015180516131659260018501920190613ed2565b50604082015160028201556060909101516003909101556101008201518051600e830155602090810151600f83015561012083015180516010840155810151601183015561014083015180518051919260128501926131c79284920190613ed2565b5060208281015180516131e09260018501920190613ed2565b5060408281015160028301556060928301516003909201919091556101609390930151805151601684015560208101515160178401558301515160189092019190915583015190516001600160a01b038516907f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688590600090a350919050565b6112f2838383604051602401613277939291906148c2565b60408051601f198184030181529190526020810180516001600160e01b031663969cdd0360e01b179052613cb9565b60008181526004602081905260408220015460019060ff1660038111156132dd57634e487b7160e01b600052602160045260246000fd5b1492915050565b612f1b848484846040516024016132fe94939291906148e7565b60408051601f198184030181529190526020810180516001600160e01b03166304772b3360e11b179052613cb9565b61336160405180604001604052806011815260200170757064617465427265656444656c61797360781b815250838361325f565b6000828152600460205260408120600e0180549161337e83614bd4565b90915550506000818152600460205260408120600e018054916133a083614bd4565b909155505060009182526004602052604080832042600f918201819055928452922090910155565b6133d0613dbc565b6133fc6040518060400160405280600981526020016819d95d105b9a5b585b60ba1b815250848461325f565b600082815260046020526040808220815161020081019092528054829061018082019083908290829061342e90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461345a90614b99565b80156134a75780601f1061347c576101008083540402835291602001916134a7565b820191906000526020600020905b81548152906001019060200180831161348a57829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff16600381111561350457634e487b7160e01b600052602160045260246000fd5b600381111561352357634e487b7160e01b600052602160045260246000fd5b815260200160058201805461353790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461356390614b99565b80156135b05780601f10613585576101008083540402835291602001916135b0565b820191906000526020600020905b81548152906001019060200180831161359357829003601f168201915b505050505081526020016006820154815260200160078201548152602001600882015481526020016009820180546135e790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461361390614b99565b80156136605780601f1061363557610100808354040283529160200191613660565b820191906000526020600020905b81548152906001019060200180831161364357829003601f168201915b50505050508152602001600a820160405180608001604052908160008201805461368990614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546136b590614b99565b80156137025780601f106136d757610100808354040283529160200191613702565b820191906000526020600020905b8154815290600101906020018083116136e557829003601f168201915b5050505050815260200160018201805461371b90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461374790614b99565b80156137945780601f1061376957610100808354040283529160200191613794565b820191906000526020600020905b81548152906001019060200180831161377757829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f85015481830152838201528151808301835260108501548152601185015491810191909152828201528051608081019091526012830180546060909301928290829061381490614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461384090614b99565b801561388d5780601f106138625761010080835404028352916020019161388d565b820191906000526020600020905b81548152906001019060200180831161387057829003601f168201915b505050505081526020016001820180546138a690614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546138d290614b99565b801561391f5780601f106138f45761010080835404028352916020019161391f565b820191906000526020600020905b81548152906001019060200180831161390257829003601f168201915b50505091835250506002820154602080830191909152600390920154604091820152918352815160808101835260168501546060820190815281528251808301845260178601548152818301528251808301845260189095015485529182019390935291015290506000816020015160038111156139ad57634e487b7160e01b600052602160045260246000fd5b1415613a84576139e56040518060400160405280600f81526020016e19d95d14985b991bdb505b9a5b585b608a1b815250858561325f565b6000848152600260205260409020546001600160a01b03166308f8bcc6613a0a613d21565b6040518263ffffffff1660e01b8152600401613a2891815260200190565b60006040518083038186803b158015613a4057600080fd5b505afa158015613a54573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052613a7c91908101906142df565b915050611506565b613ab66040518060400160405280600f81526020016e19d95d14985b991bdb521e589c9a59608a1b815250858561325f565b6000848152600260205260409020546001600160a01b0316633b5c9856613adb613d21565b8360e001516040518363ffffffff1660e01b8152600401613a28929190614a50565b612ece8282604051602401613b13929190614872565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052613cb9565b613b6960405180604001604052806004815260200163313ab93760e11b8152508383613d75565b600754604051633477cc1b60e21b81526001600160a01b039091169063d1df306c90613b9b90859085906004016147b7565b600060405180830381600087803b158015613bb557600080fd5b505af1158015613bc9573d6000803e3d6000fd5b50506040518392506001600160a01b03851691507fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca590600090a35050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611b0e8284614b23565b6000611b0e8284614b37565b6040516024810184905260448101839052606481018290526112f29060840160408051601f198184030181529190526020810180516001600160e01b03166339e0829d60e21b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6112f2838383604051602401613cf293929190614806565b60408051601f198184030181529190526020810180516001600160e01b031663e0e9ad4f60e01b179052613cb9565b604080514360208201526001600160601b03193360601b16918101919091524260548201526000908190612710906074016040516020818303038152906040528051906020012060001c6115069190614c0f565b6112f2838383604051602401613d8d93929190614844565b60408051601f198184030181529190526020810180516001600160e01b03166307c8121760e01b179052613cb9565b6040805161020081019091526060610180820190815260006101a083018190526101c083018190526101e083015281908152602001600081526020016060815260200160008152602001600081526020016000815260200160608152602001613e466040518060800160405280606081526020016060815260200160008152602001600081525090565b8152602001613e68604051806040016040528060008152602001600081525090565b8152602001613e8a604051806040016040528060008152602001600081525090565b8152602001613ec06040518060800160405280606081526020016060815260200160008019168152602001600080191681525090565b8152602001613ecd613f56565b905290565b828054613ede90614b99565b90600052602060002090601f016020900481019282613f005760008555613f46565b82601f10613f1957805160ff1916838001178555613f46565b82800160010185558215613f46579182015b82811115613f46578251825591602001919060010190613f2b565b50613f52929150613f83565b5090565b6040518060600160405280613f69613f98565b8152602001613f76613f98565b8152602001613ecd613f98565b5b80821115613f525760008155600101613f84565b6040518060200160405280600081525090565b80356001600160a01b0381168114613fc257600080fd5b919050565b805160048110613fc257600080fd5b600082601f830112613fe6578081fd5b8151613ff9613ff482614ae4565b614ab4565b81815284602083860101111561400d578283fd5b61401e826020830160208701614b6d565b949350505050565b600060608284031215614037578081fd5b604051606081018181106001600160401b038211171561405957614059614c4f565b60405290508061406984846140e3565b815261407884602085016140e3565b602082015261408a84604085016140e3565b60408201525092915050565b6000604082840312156140a7578081fd5b604051604081018181106001600160401b03821117156140c9576140c9614c4f565b604052825181526020928301519281019290925250919050565b6000602082840312156140f4578081fd5b604051602081018181106001600160401b038211171561411657614116614c4f565b6040529151825250919050565b600060808284031215614134578081fd5b61413c614a69565b905081516001600160401b038082111561415557600080fd5b61416185838601613fd6565b8352602084015191508082111561417757600080fd5b5061418484828501613fd6565b602083015250604082015160408201526060820151606082015292915050565b6000608082840312156141b5578081fd5b6141bd614a69565b905081516001600160401b038111156141d557600080fd5b6141e184828501613fd6565b82525060208201516020820152604082015160408201526060820151606082015292915050565b600060208284031215614219578081fd5b611b0e82613fab565b600080600060608486031215614236578182fd5b61423f84613fab565b925061424d60208501613fab565b915061425b60408501613fab565b90509250925092565b60008060408385031215614276578182fd5b61427f83613fab565b946020939093013593505050565b60006020828403121561429e578081fd5b81518015158114611b0e578182fd5b6000602082840312156142be578081fd5b81516001600160401b038111156142d3578182fd5b61401e84828501613fd6565b6000602082840312156142f0578081fd5b81516001600160401b0380821115614306578283fd5b90830190610200828603121561431a578283fd5b614322614a91565b825182811115614330578485fd5b61433c878286016141a4565b82525061434b60208401613fc7565b6020820152604083015182811115614361578485fd5b61436d87828601613fd6565b604083015250606083015160608201526080830151608082015260a083015160a082015260c0830151828111156143a2578485fd5b6143ae87828601613fd6565b60c08301525060e0830151828111156143c5578485fd5b6143d187828601614123565b60e0830152506101006143e687828601614096565b908201526101406143f987858301614096565b61012083015261018084015183811115614411578586fd5b61441d88828701614123565b828401525050614431866101a08501614026565b61016082015295945050505050565b600060208284031215614451578081fd5b5035919050565b600060208284031215614469578081fd5b5051919050565b60008060408385031215614482578182fd5b8235915060208301356001600160401b0381111561449e578182fd5b8301601f810185136144ae578182fd5b80356144bc613ff482614ae4565b8181528660208385010111156144d0578384fd5b81602084016020830137908101602001929092525090939092509050565b60008060408385031215614500578182fd5b50508035926020909101359150565b600080600060608486031215614523578081fd5b505081359360208301359350604090920135919050565b6004811061455857634e487b7160e01b600052602160045260246000fd5b9052565b60008151808452614574816020860160208601614b6d565b601f01601f19169290920160200192915050565b8051518252602080820151519083015260409081015151910152565b60008151608084526145b9608085018261455c565b9050602083015184820360208601526145d2828261455c565b91505060408301516040850152606083015160608501528091505092915050565b6000815160808452614608608085018261455c565b90506020830151602085015260408301516040850152606083015160608501528091505092915050565b60006102008251818552614648828601826145f3565b915050602083015161465d602086018261453a565b5060408301518482036040860152614675828261455c565b915050606083015160608501526080830151608085015260a083015160a085015260c083015184820360c08601526146ad828261455c565b91505060e083015184820360e08601526146c782826145a4565b915050610100808401516146e78287018280518252602090810151910152565b50506101208301516101406147088187018380518252602090810151910152565b840151858303610180870152905061472082826145a4565b9150506101608301516147376101a0860182614588565b509392505050565b60008251614751818460208701614b6d565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038316815260406020820181905260009061401e90830184614632565b6001600160a01b03929092168252602082015260400190565b6080815260006147e3608083018761455c565b6001600160a01b0395861660208401529390941660408201526060015292915050565b606081526000614819606083018661455c565b6001600160a01b0385166020840152828103604084015261483a818561455c565b9695505050505050565b606081526000614857606083018661455c565b6001600160a01b039490941660208301525060400152919050565b604081526000614885604083018561455c565b8281036020840152614897818561455c565b95945050505050565b6040815260006148b3604083018561455c565b90508260208301529392505050565b6060815260006148d5606083018661455c565b60208301949094525060400152919050565b6080815260006148fa608083018761455c565b6020830195909552506040810192909252606090910152919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602081526000611b0e60208301846145a4565b6102008152600061497361020083018f6145f3565b614980602084018f61453a565b8281036040840152614992818e61455c565b90508b60608401528a60808401528960a084015282810360c08401526149b8818a61455c565b905082810360e08401526149cc81896145a4565b87516101008501526020880151610120850152905085516101408401526020860151610160840152828103610180840152614a0781866145a4565b915050614a186101a0830184614588565b9d9c50505050505050505050505050565b602081526000611b0e6020830184614632565b82815260808101611b0e6020830184614588565b82815260406020820152600061401e60408301846145a4565b604051608081016001600160401b0381118282101715614a8b57614a8b614c4f565b60405290565b60405161018081016001600160401b0381118282101715614a8b57614a8b614c4f565b604051601f8201601f191681016001600160401b0381118282101715614adc57614adc614c4f565b604052919050565b60006001600160401b03821115614afd57614afd614c4f565b50601f01601f191660200190565b60008219821115614b1e57614b1e614c23565b500190565b600082614b3257614b32614c39565b500490565b6000816000190483118215151615614b5157614b51614c23565b500290565b600082821015614b6857614b68614c23565b500390565b60005b83811015614b88578181015183820152602001614b70565b83811115612f1b5750506000910152565b600181811c90821680614bad57607f821691505b60208210811415614bce57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415614be857614be8614c23565b5060010190565b600060ff821660ff811415614c0657614c06614c23565b60010192915050565b600082614c1e57614c1e614c39565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ff9aeb4dc8b93920acffb7348f8b2770b1e802bf273c229418fbbce280e42d8b64736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061011d5760003560e01c806310e0af64146101225780632626f4e01461014a57806349077a4f1461015f5780634c33efa71461017f5780634f2cabdf1461019f5780634f64b2be146101cd57806354d7dc93146101f857806355d28f201461020b5780635eb399681461021e578063685bf0cd146102475780636fc2790e1461025a578063715018a61461026d5780637b6a87771461027557806380f55605146102885780638da5cb5b1461029b5780639c275d11146102a3578063b22073b6146102b6578063c87b2cba146102bf578063d4eddf7e146102d2578063de611f55146102da578063f2fde38b146102ed578063f624172714610300578063f8b2462614610313575b600080fd5b610135610130366004614440565b610326565b60405190151581526020015b60405180910390f35b61015d610158366004614440565b610364565b005b600754610172906001600160a01b031681565b604051610141919061475b565b61019261018d366004614440565b6103a1565b6040516101419190614a29565b6101bf6101ad366004614208565b60036020526000908152604090205481565b604051908152602001610141565b6101e06101db366004614440565b6107cb565b6040516101419c9b9a9998979695949392919061495e565b61019261020636600461450f565b610ce5565b61015d610219366004614222565b611230565b61017261022c366004614440565b6002602052600090815260409020546001600160a01b031681565b61015d6102553660046144ee565b61129e565b6101926102683660046144ee565b6112f7565b61015d61150c565b600854610172906001600160a01b031681565b600654610172906001600160a01b031681565b610172611547565b6101bf6102b1366004614440565b611556565b6101bf60055481565b6101bf6102cd366004614440565b611b15565b6101bf6121db565b61015d6102e8366004614470565b612291565b61015d6102fb366004614208565b612b5d565b61013561030e366004614264565b612bfd565b6101bf610321366004614208565b612cb4565b6000818152600460205260408120600e015461034457506001919050565b61034d82611556565b42111561035c57506001919050565b506000919050565b3361036d611547565b6001600160a01b03161461039c5760405162461bcd60e51b815260040161039390614916565b60405180910390fd5b600555565b6103a9613dbc565b6103d16040518060400160405280600681526020016562757945676760d01b81525083612e89565b60008281526002602090815260409182902054825163182f1aa960e11b815292516001600160a01b0390911692839263305e355292600480840193829003018186803b15801561042057600080fd5b505afa158015610434573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104589190614458565b6008546040516370a0823160e01b81526001600160a01b03909116906370a082319061048890339060040161475b565b60206040518083038186803b1580156104a057600080fd5b505afa1580156104b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d89190614458565b10156105315760405162461bcd60e51b815260206004820152602260248201527f5a4b3a204e6f7420456e6f756768205a4f4f20746f2070757263686173652045604482015261676760f01b6064820152608401610393565b6105d56040518060400160405280601081526020016f7a6f6f2e7472616e7366657246726f6d60801b8152503330846001600160a01b031663305e35526040518163ffffffff1660e01b815260040160206040518083038186803b15801561059857600080fd5b505afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190614458565b612ed2565b600860009054906101000a90046001600160a01b03166001600160a01b03166323b872dd3330846001600160a01b031663305e35526040518163ffffffff1660e01b815260040160206040518083038186803b15801561063457600080fd5b505afa158015610648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066c9190614458565b6040518463ffffffff1660e01b815260040161068a9392919061476f565b602060405180830381600087803b1580156106a457600080fd5b505af11580156106b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dc919061428d565b506000816001600160a01b0316630489a8f66040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561071a57600080fd5b505af115801561072e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261075691908101906142df565b90506107623382612f21565b90506107946040518060400160405280600a8152602001696d696e7465642065676760b01b8152508260600151612e89565b606081015160405133907fb6fcdc0b9a5291c95b93142b5e81d61a0b01a26b043be034e6daaa1219e7ebc190600090a39392505050565b6004602052806000526040600020600091509050806000016040518060800160405290816000820180546107fe90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461082a90614b99565b80156108775780601f1061084c57610100808354040283529160200191610877565b820191906000526020600020905b81548152906001019060200180831161085a57829003601f168201915b505050918352505060018201546020820152600282015460408201526003909101546060909101526004820154600583018054929360ff909216926108bb90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546108e790614b99565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b50505050509080600601549080600701549080600801549080600901805461095b90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461098790614b99565b80156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b50505050509080600a016040518060800160405290816000820180546109f990614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2590614b99565b8015610a725780601f10610a4757610100808354040283529160200191610a72565b820191906000526020600020905b815481529060010190602001808311610a5557829003601f168201915b50505050508152602001600182018054610a8b90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab790614b99565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015280518082018252600e8501548152600f8501548184015281518083018352601086015481526011860154938101939093528151608081019092526012850180549495919491929182908290610b7a90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba690614b99565b8015610bf35780601f10610bc857610100808354040283529160200191610bf3565b820191906000526020600020905b815481529060010190602001808311610bd657829003601f168201915b50505050508152602001600182018054610c0c90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3890614b99565b8015610c855780601f10610c5a57610100808354040283529160200191610c85565b820191906000526020600020905b815481529060010190602001808311610c6857829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015280516080810182526016850154606082019081528152815180840183526017860154815281840152815192830182526018909401548252830152908c565b610ced613dbc565b8282610d1a6040518060400160405280600881526020016718d85b909c99595960c21b815250838361325f565b60075460405162491fcf60e11b8152600481018490526001600160a01b039091169062923f9e90602401602060405180830381600087803b158015610d5e57600080fd5b505af1158015610d72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d96919061428d565b8015610e19575060075460405162491fcf60e11b8152600481018390526001600160a01b039091169062923f9e90602401602060405180830381600087803b158015610de157600080fd5b505af1158015610df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e19919061428d565b610e5a5760405162461bcd60e51b81526020600482015260126024820152712737b716b2bc34b9ba32b73a103a37b5b2b760711b6044820152606401610393565b60408051602081018390520160408051601f1981840301815282825280516020918201209083018590529101604051602081830303815290604052805190602001201415610ee85760405162461bcd60e51b815260206004820152601b60248201527a2737ba1030b13632903a3790313932b2b2103bb4ba341039b2b63360291b6044820152606401610393565b610ef182610326565b8015610f015750610f0181610326565b610f4c5760405162461bcd60e51b815260206004820152601c60248201527b2bb0b4ba103337b91031b7b7b63237bbb7103a37903334b734b9b41760211b6044820152606401610393565b610f55826132a6565b8015610f655750610f65816132a6565b610faf5760405162461bcd60e51b815260206004820152601b60248201527a27b7363c902120a9a2afa0a724a6a0a61031b0b710313932b2b21760291b6044820152606401610393565b610fdf6040518060400160405280600c81526020016b6272656564416e696d616c7360a01b8152508787876132e4565b6000868152600260209081526040808320548151608081018352898552600490935290832060050180546001600160a01b039092169263e82baf30929091829161102890614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461105490614b99565b80156110a15780601f10611076576101008083540402835291602001916110a1565b820191906000526020600020905b81548152906001019060200180831161108457829003601f168201915b50505050508152602001600460008a815260200190815260200160002060050180546110cc90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546110f890614b99565b80156111455780601f1061111a57610100808354040283529160200191611145565b820191906000526020600020905b81548152906001019060200180831161112857829003601f168201915b50505050508152602001898152602001888152506040518263ffffffff1660e01b8152600401611175919061494b565b600060405180830381600087803b15801561118f57600080fd5b505af11580156111a3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111cb91908101906142df565b90506111d7868661332d565b6111e13382612f21565b60608101516040805189815260208101899052929350909133917fddf1e8fec06a50aa72b8a39a06787808c53eca73b2bd1cc995681cf7b8014650910160405180910390a39695505050505050565b33611239611547565b6001600160a01b03161461125f5760405162461bcd60e51b815260040161039390614916565b600680546001600160a01b039485166001600160a01b031991821617909155600780549385169382169390931790925560088054919093169116179055565b6112c8604051806040016040528060078152602001666275794567677360c81b815250838361325f565b60005b818160ff1610156112f2576112df836103a1565b50806112ea81614bef565b9150506112cb565b505050565b6112ff613dbc565b61132a60405180604001604052806008815260200167686174636845676760c01b815250848461325f565b60075460405162491fcf60e11b8152600481018490526001600160a01b039091169062923f9e90602401602060405180830381600087803b15801561136e57600080fd5b505af1158015611382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a6919061428d565b6113f25760405162461bcd60e51b815260206004820152601f60248201527f456767206973206275726e6564206f7220646f6573206e6f74206578697374006044820152606401610393565b60006113fe84846133c8565b610120810180518590525160209081018690526040805180820182526006815265185b9a5b585b60d21b9281019290925282015191925061143e91613afd565b6114483382612f21565b905061147e6040518060400160405280600d81526020016c1b5a5b9d195908185b9a5b585b609a1b81525082606001518561325f565b6114883384613b42565b6114b060405180604001604052806006815260200165189d5c9b995960d21b81525084612e89565b806060015181604001516040516114c7919061473f565b6040519081900381208582529033907f4522ecb13d32126c25afeea8589e647e00d59f9a12ed51b492efcfd722faa91c9060200160405180910390a490505b92915050565b33611515611547565b6001600160a01b03161461153b5760405162461bcd60e51b815260040161039390614916565b6115456000613c07565b565b6000546001600160a01b031690565b60008181526004602052604080822081516102008101909252805483929190829061018082019083908290829061158c90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546115b890614b99565b80156116055780601f106115da57610100808354040283529160200191611605565b820191906000526020600020905b8154815290600101906020018083116115e857829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff16600381111561166257634e487b7160e01b600052602160045260246000fd5b600381111561168157634e487b7160e01b600052602160045260246000fd5b815260200160058201805461169590614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546116c190614b99565b801561170e5780601f106116e35761010080835404028352916020019161170e565b820191906000526020600020905b8154815290600101906020018083116116f157829003601f168201915b5050505050815260200160068201548152602001600782015481526020016008820154815260200160098201805461174590614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461177190614b99565b80156117be5780601f10611793576101008083540402835291602001916117be565b820191906000526020600020905b8154815290600101906020018083116117a157829003601f168201915b50505050508152602001600a82016040518060800160405290816000820180546117e790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461181390614b99565b80156118605780601f1061183557610100808354040283529160200191611860565b820191906000526020600020905b81548152906001019060200180831161184357829003601f168201915b5050505050815260200160018201805461187990614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546118a590614b99565b80156118f25780601f106118c7576101008083540402835291602001916118f2565b820191906000526020600020905b8154815290600101906020018083116118d557829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f85015481830152838201528151808301835260108501548152601185015491810191909152828201528051608081019091526012830180546060909301928290829061197290614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461199e90614b99565b80156119eb5780601f106119c0576101008083540402835291602001916119eb565b820191906000526020600020905b8154815290600101906020018083116119ce57829003601f168201915b50505050508152602001600182018054611a0490614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3090614b99565b8015611a7d5780601f10611a5257610100808354040283529160200191611a7d565b820191906000526020600020905b815481529060010190602001808311611a6057829003601f168201915b50505091835250506002820154602080830191909152600390920154604091820152918352815160808101835260168501546060820190815281528251808301845260178601548152818301528251808301845260189095015485529182019390935291015261010081015151909150611afa9062015180614b37565b81610100015160200151611b0e9190614b0b565b9392505050565b6000611b436040518060400160405280600a815260200169199c9959505b9a5b585b60b21b81525083612e89565b6000828152600460205260408082208151610200810190925280548290610180820190839082908290611b7590614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611ba190614b99565b8015611bee5780601f10611bc357610100808354040283529160200191611bee565b820191906000526020600020905b815481529060010190602001808311611bd157829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff166003811115611c4b57634e487b7160e01b600052602160045260246000fd5b6003811115611c6a57634e487b7160e01b600052602160045260246000fd5b8152602001600582018054611c7e90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611caa90614b99565b8015611cf75780601f10611ccc57610100808354040283529160200191611cf7565b820191906000526020600020905b815481529060010190602001808311611cda57829003601f168201915b50505050508152602001600682015481526020016007820154815260200160088201548152602001600982018054611d2e90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611d5a90614b99565b8015611da75780601f10611d7c57610100808354040283529160200191611da7565b820191906000526020600020905b815481529060010190602001808311611d8a57829003601f168201915b50505050508152602001600a8201604051806080016040529081600082018054611dd090614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611dfc90614b99565b8015611e495780601f10611e1e57610100808354040283529160200191611e49565b820191906000526020600020905b815481529060010190602001808311611e2c57829003601f168201915b50505050508152602001600182018054611e6290614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8e90614b99565b8015611edb5780601f10611eb057610100808354040283529160200191611edb565b820191906000526020600020905b815481529060010190602001808311611ebe57829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f850154818301528382015281518083018352601085015481526011850154918101919091528282015280516080810190915260128301805460609093019282908290611f5b90614b99565b80601f0160208091040260200160405190810160405280929190818152602001828054611f8790614b99565b8015611fd45780601f10611fa957610100808354040283529160200191611fd4565b820191906000526020600020905b815481529060010190602001808311611fb757829003601f168201915b50505050508152602001600182018054611fed90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461201990614b99565b80156120665780601f1061203b57610100808354040283529160200191612066565b820191906000526020600020905b81548152906001019060200180831161204957829003601f168201915b50505091835250506002820154602080830191909152600390920154604091820152918352815160808101835260168501546060820190815281528251808301845260178601548152818301528251808301845260189095015485529182019390935291015290506120d83384613b42565b60008160a00151436120ea9190614b56565b905060006120fa82617080613c57565b83516040015190915061210e908290613c63565b935061211f438460a0015186613c6f565b60085460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061215190339088906004016147b7565b602060405180830381600087803b15801561216b57600080fd5b505af115801561217f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121a3919061428d565b506040518490869033907f6d330a72b03f3f443e72a146c33e5882a01427b60a36b46ac11243d0c4e31d0990600090a4505050919050565b6000336121e6611547565b6001600160a01b03161461220c5760405162461bcd60e51b815260040161039390614916565b6008546040516370a0823160e01b81526001600160a01b03909116906370a082319061223c90309060040161475b565b60206040518083038186803b15801561225457600080fd5b505afa158015612268573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061228c9190614458565b905090565b6005546008546040516370a0823160e01b81526001600160a01b03909116906370a08231906122c490339060040161475b565b60206040518083038186803b1580156122dc57600080fd5b505afa1580156122f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123149190614458565b1061236d5760405162461bcd60e51b815260206004820152602360248201527f5a4b3a204e6f7420656e6f756768205a4f4f20746f207075726368617365204e604482015262616d6560e81b6064820152608401610393565b6008546005546040516323b872dd60e01b81526001600160a01b03909216916323b872dd916123a2913391309160040161476f565b602060405180830381600087803b1580156123bc57600080fd5b505af11580156123d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123f4919061428d565b50600082815260046020526040808220815161020081019092528054829061018082019083908290829061242790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461245390614b99565b80156124a05780601f10612475576101008083540402835291602001916124a0565b820191906000526020600020905b81548152906001019060200180831161248357829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff1660038111156124fd57634e487b7160e01b600052602160045260246000fd5b600381111561251c57634e487b7160e01b600052602160045260246000fd5b815260200160058201805461253090614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461255c90614b99565b80156125a95780601f1061257e576101008083540402835291602001916125a9565b820191906000526020600020905b81548152906001019060200180831161258c57829003601f168201915b505050505081526020016006820154815260200160078201548152602001600882015481526020016009820180546125e090614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461260c90614b99565b80156126595780601f1061262e57610100808354040283529160200191612659565b820191906000526020600020905b81548152906001019060200180831161263c57829003601f168201915b50505050508152602001600a820160405180608001604052908160008201805461268290614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546126ae90614b99565b80156126fb5780601f106126d0576101008083540402835291602001916126fb565b820191906000526020600020905b8154815290600101906020018083116126de57829003601f168201915b5050505050815260200160018201805461271490614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461274090614b99565b801561278d5780601f106127625761010080835404028352916020019161278d565b820191906000526020600020905b81548152906001019060200180831161277057829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f85015481830152838201528151808301835260108501548152601185015491810191909152828201528051608081019091526012830180546060909301928290829061280d90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461283990614b99565b80156128865780601f1061285b57610100808354040283529160200191612886565b820191906000526020600020905b81548152906001019060200180831161286957829003601f168201915b5050505050815260200160018201805461289f90614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546128cb90614b99565b80156129185780601f106128ed57610100808354040283529160200191612918565b820191906000526020600020905b8154815290600101906020018083116128fb57829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281516080810183526016850154606082019081528152825180830184526017860154815281830152825180830184526018909501548552808301949094529182019290925260c083018590526000868152600482529190912082518051805194955085949293919284926129b5928492910190613ed2565b50602082015181600101556040820151816002015560608201518160030155505060208201518160040160006101000a81548160ff02191690836003811115612a0e57634e487b7160e01b600052602160045260246000fd5b021790555060408201518051612a2e916005840191602090910190613ed2565b50606082015160068201556080820151600782015560a0820151600882015560c08201518051612a68916009840191602090910190613ed2565b5060e082015180518051600a840191612a8691839160200190613ed2565b506020828101518051612a9f9260018501920190613ed2565b50604082015160028201556060909101516003909101556101008201518051600e830155602090810151600f8301556101208301518051601084015581015160118301556101408301518051805191926012850192612b019284920190613ed2565b506020828101518051612b1a9260018501920190613ed2565b5060408281015160028301556060909201516003909101556101609290920151805151601683015560208101515160178301559091015151601890910155505050565b33612b66611547565b6001600160a01b031614612b8c5760405162461bcd60e51b815260040161039390614916565b6001600160a01b038116612bf15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610393565b612bfa81613c07565b50565b600033612c08611547565b6001600160a01b031614612c2e5760405162461bcd60e51b815260040161039390614916565b6008546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90612c629030908790879060040161476f565b602060405180830381600087803b158015612c7c57600080fd5b505af1158015612c90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b0e919061428d565b6001600160a01b03811660009081526003602052604081205415612d0f5760405162461bcd60e51b8152602060048201526012602482015271111c9bdc08185b1c9958591e48185919195960721b6044820152606401610393565b81612d1e600180546001019055565b6000612d2960015490565b600081815260026020908152604080832080546001600160a01b0319166001600160a01b038a81169182179092558085526003909352818420859055815163129e754360e21b8152915194955091937f2924d682319c0da5a600d8e093bcb0fb706de4e6bb58e114c69dee5587e2ec2d9392871692634a79d50c9260048082019391829003018186803b158015612dbf57600080fd5b505afa158015612dd3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612dfb91908101906142ad565b846001600160a01b031663d232b7976040518163ffffffff1660e01b815260040160206040518083038186803b158015612e3457600080fd5b505afa158015612e48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e6c9190614458565b604051612e7a9291906148a0565b60405180910390a29392505050565b612ece8282604051602401612e9f9291906148a0565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052613cb9565b5050565b612f1b84848484604051602401612eec94939291906147d0565b60408051601f198184030181529190526020810180516001600160e01b0316636eb7943d60e01b179052613cb9565b50505050565b612f29613dbc565b612f54604051806040016040528060048152602001631b5a5b9d60e21b815250848460400151613cda565b60075460405163113fba1f60e11b81526001600160a01b039091169063227f743e90612f869086908690600401614793565b600060405180830381600087803b158015612fa057600080fd5b505af1158015612fb4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612fdc91908101906142df565b60065460608201516101608301516040516375aab41d60e11b81529395506001600160a01b039092169263eb55683a926130199291600401614a3c565b600060405180830381600087803b15801561303357600080fd5b505af1158015613047573d6000803e3d6000fd5b50505050606082015160009081526004602090815260409091208351805180518694849261307b9284929190910190613ed2565b50602082015181600101556040820151816002015560608201518160030155505060208201518160040160006101000a81548160ff021916908360038111156130d457634e487b7160e01b600052602160045260246000fd5b0217905550604082015180516130f4916005840191602090910190613ed2565b50606082015160068201556080820151600782015560a0820151600882015560c0820151805161312e916009840191602090910190613ed2565b5060e082015180518051600a84019161314c91839160200190613ed2565b5060208281015180516131659260018501920190613ed2565b50604082015160028201556060909101516003909101556101008201518051600e830155602090810151600f83015561012083015180516010840155810151601183015561014083015180518051919260128501926131c79284920190613ed2565b5060208281015180516131e09260018501920190613ed2565b5060408281015160028301556060928301516003909201919091556101609390930151805151601684015560208101515160178401558301515160189092019190915583015190516001600160a01b038516907f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688590600090a350919050565b6112f2838383604051602401613277939291906148c2565b60408051601f198184030181529190526020810180516001600160e01b031663969cdd0360e01b179052613cb9565b60008181526004602081905260408220015460019060ff1660038111156132dd57634e487b7160e01b600052602160045260246000fd5b1492915050565b612f1b848484846040516024016132fe94939291906148e7565b60408051601f198184030181529190526020810180516001600160e01b03166304772b3360e11b179052613cb9565b61336160405180604001604052806011815260200170757064617465427265656444656c61797360781b815250838361325f565b6000828152600460205260408120600e0180549161337e83614bd4565b90915550506000818152600460205260408120600e018054916133a083614bd4565b909155505060009182526004602052604080832042600f918201819055928452922090910155565b6133d0613dbc565b6133fc6040518060400160405280600981526020016819d95d105b9a5b585b60ba1b815250848461325f565b600082815260046020526040808220815161020081019092528054829061018082019083908290829061342e90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461345a90614b99565b80156134a75780601f1061347c576101008083540402835291602001916134a7565b820191906000526020600020905b81548152906001019060200180831161348a57829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201548152505081526020016004820160009054906101000a900460ff16600381111561350457634e487b7160e01b600052602160045260246000fd5b600381111561352357634e487b7160e01b600052602160045260246000fd5b815260200160058201805461353790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461356390614b99565b80156135b05780601f10613585576101008083540402835291602001916135b0565b820191906000526020600020905b81548152906001019060200180831161359357829003601f168201915b505050505081526020016006820154815260200160078201548152602001600882015481526020016009820180546135e790614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461361390614b99565b80156136605780601f1061363557610100808354040283529160200191613660565b820191906000526020600020905b81548152906001019060200180831161364357829003601f168201915b50505050508152602001600a820160405180608001604052908160008201805461368990614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546136b590614b99565b80156137025780601f106136d757610100808354040283529160200191613702565b820191906000526020600020905b8154815290600101906020018083116136e557829003601f168201915b5050505050815260200160018201805461371b90614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461374790614b99565b80156137945780601f1061376957610100808354040283529160200191613794565b820191906000526020600020905b81548152906001019060200180831161377757829003601f168201915b5050509183525050600282015460208083019190915260039092015460409182015291835281518083018352600e8501548152600f85015481830152838201528151808301835260108501548152601185015491810191909152828201528051608081019091526012830180546060909301928290829061381490614b99565b80601f016020809104026020016040519081016040528092919081815260200182805461384090614b99565b801561388d5780601f106138625761010080835404028352916020019161388d565b820191906000526020600020905b81548152906001019060200180831161387057829003601f168201915b505050505081526020016001820180546138a690614b99565b80601f01602080910402602001604051908101604052809291908181526020018280546138d290614b99565b801561391f5780601f106138f45761010080835404028352916020019161391f565b820191906000526020600020905b81548152906001019060200180831161390257829003601f168201915b50505091835250506002820154602080830191909152600390920154604091820152918352815160808101835260168501546060820190815281528251808301845260178601548152818301528251808301845260189095015485529182019390935291015290506000816020015160038111156139ad57634e487b7160e01b600052602160045260246000fd5b1415613a84576139e56040518060400160405280600f81526020016e19d95d14985b991bdb505b9a5b585b608a1b815250858561325f565b6000848152600260205260409020546001600160a01b03166308f8bcc6613a0a613d21565b6040518263ffffffff1660e01b8152600401613a2891815260200190565b60006040518083038186803b158015613a4057600080fd5b505afa158015613a54573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052613a7c91908101906142df565b915050611506565b613ab66040518060400160405280600f81526020016e19d95d14985b991bdb521e589c9a59608a1b815250858561325f565b6000848152600260205260409020546001600160a01b0316633b5c9856613adb613d21565b8360e001516040518363ffffffff1660e01b8152600401613a28929190614a50565b612ece8282604051602401613b13929190614872565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052613cb9565b613b6960405180604001604052806004815260200163313ab93760e11b8152508383613d75565b600754604051633477cc1b60e21b81526001600160a01b039091169063d1df306c90613b9b90859085906004016147b7565b600060405180830381600087803b158015613bb557600080fd5b505af1158015613bc9573d6000803e3d6000fd5b50506040518392506001600160a01b03851691507fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca590600090a35050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611b0e8284614b23565b6000611b0e8284614b37565b6040516024810184905260448101839052606481018290526112f29060840160408051601f198184030181529190526020810180516001600160e01b03166339e0829d60e21b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6112f2838383604051602401613cf293929190614806565b60408051601f198184030181529190526020810180516001600160e01b031663e0e9ad4f60e01b179052613cb9565b604080514360208201526001600160601b03193360601b16918101919091524260548201526000908190612710906074016040516020818303038152906040528051906020012060001c6115069190614c0f565b6112f2838383604051602401613d8d93929190614844565b60408051601f198184030181529190526020810180516001600160e01b03166307c8121760e01b179052613cb9565b6040805161020081019091526060610180820190815260006101a083018190526101c083018190526101e083015281908152602001600081526020016060815260200160008152602001600081526020016000815260200160608152602001613e466040518060800160405280606081526020016060815260200160008152602001600081525090565b8152602001613e68604051806040016040528060008152602001600081525090565b8152602001613e8a604051806040016040528060008152602001600081525090565b8152602001613ec06040518060800160405280606081526020016060815260200160008019168152602001600080191681525090565b8152602001613ecd613f56565b905290565b828054613ede90614b99565b90600052602060002090601f016020900481019282613f005760008555613f46565b82601f10613f1957805160ff1916838001178555613f46565b82800160010185558215613f46579182015b82811115613f46578251825591602001919060010190613f2b565b50613f52929150613f83565b5090565b6040518060600160405280613f69613f98565b8152602001613f76613f98565b8152602001613ecd613f98565b5b80821115613f525760008155600101613f84565b6040518060200160405280600081525090565b80356001600160a01b0381168114613fc257600080fd5b919050565b805160048110613fc257600080fd5b600082601f830112613fe6578081fd5b8151613ff9613ff482614ae4565b614ab4565b81815284602083860101111561400d578283fd5b61401e826020830160208701614b6d565b949350505050565b600060608284031215614037578081fd5b604051606081018181106001600160401b038211171561405957614059614c4f565b60405290508061406984846140e3565b815261407884602085016140e3565b602082015261408a84604085016140e3565b60408201525092915050565b6000604082840312156140a7578081fd5b604051604081018181106001600160401b03821117156140c9576140c9614c4f565b604052825181526020928301519281019290925250919050565b6000602082840312156140f4578081fd5b604051602081018181106001600160401b038211171561411657614116614c4f565b6040529151825250919050565b600060808284031215614134578081fd5b61413c614a69565b905081516001600160401b038082111561415557600080fd5b61416185838601613fd6565b8352602084015191508082111561417757600080fd5b5061418484828501613fd6565b602083015250604082015160408201526060820151606082015292915050565b6000608082840312156141b5578081fd5b6141bd614a69565b905081516001600160401b038111156141d557600080fd5b6141e184828501613fd6565b82525060208201516020820152604082015160408201526060820151606082015292915050565b600060208284031215614219578081fd5b611b0e82613fab565b600080600060608486031215614236578182fd5b61423f84613fab565b925061424d60208501613fab565b915061425b60408501613fab565b90509250925092565b60008060408385031215614276578182fd5b61427f83613fab565b946020939093013593505050565b60006020828403121561429e578081fd5b81518015158114611b0e578182fd5b6000602082840312156142be578081fd5b81516001600160401b038111156142d3578182fd5b61401e84828501613fd6565b6000602082840312156142f0578081fd5b81516001600160401b0380821115614306578283fd5b90830190610200828603121561431a578283fd5b614322614a91565b825182811115614330578485fd5b61433c878286016141a4565b82525061434b60208401613fc7565b6020820152604083015182811115614361578485fd5b61436d87828601613fd6565b604083015250606083015160608201526080830151608082015260a083015160a082015260c0830151828111156143a2578485fd5b6143ae87828601613fd6565b60c08301525060e0830151828111156143c5578485fd5b6143d187828601614123565b60e0830152506101006143e687828601614096565b908201526101406143f987858301614096565b61012083015261018084015183811115614411578586fd5b61441d88828701614123565b828401525050614431866101a08501614026565b61016082015295945050505050565b600060208284031215614451578081fd5b5035919050565b600060208284031215614469578081fd5b5051919050565b60008060408385031215614482578182fd5b8235915060208301356001600160401b0381111561449e578182fd5b8301601f810185136144ae578182fd5b80356144bc613ff482614ae4565b8181528660208385010111156144d0578384fd5b81602084016020830137908101602001929092525090939092509050565b60008060408385031215614500578182fd5b50508035926020909101359150565b600080600060608486031215614523578081fd5b505081359360208301359350604090920135919050565b6004811061455857634e487b7160e01b600052602160045260246000fd5b9052565b60008151808452614574816020860160208601614b6d565b601f01601f19169290920160200192915050565b8051518252602080820151519083015260409081015151910152565b60008151608084526145b9608085018261455c565b9050602083015184820360208601526145d2828261455c565b91505060408301516040850152606083015160608501528091505092915050565b6000815160808452614608608085018261455c565b90506020830151602085015260408301516040850152606083015160608501528091505092915050565b60006102008251818552614648828601826145f3565b915050602083015161465d602086018261453a565b5060408301518482036040860152614675828261455c565b915050606083015160608501526080830151608085015260a083015160a085015260c083015184820360c08601526146ad828261455c565b91505060e083015184820360e08601526146c782826145a4565b915050610100808401516146e78287018280518252602090810151910152565b50506101208301516101406147088187018380518252602090810151910152565b840151858303610180870152905061472082826145a4565b9150506101608301516147376101a0860182614588565b509392505050565b60008251614751818460208701614b6d565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b038316815260406020820181905260009061401e90830184614632565b6001600160a01b03929092168252602082015260400190565b6080815260006147e3608083018761455c565b6001600160a01b0395861660208401529390941660408201526060015292915050565b606081526000614819606083018661455c565b6001600160a01b0385166020840152828103604084015261483a818561455c565b9695505050505050565b606081526000614857606083018661455c565b6001600160a01b039490941660208301525060400152919050565b604081526000614885604083018561455c565b8281036020840152614897818561455c565b95945050505050565b6040815260006148b3604083018561455c565b90508260208301529392505050565b6060815260006148d5606083018661455c565b60208301949094525060400152919050565b6080815260006148fa608083018761455c565b6020830195909552506040810192909252606090910152919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602081526000611b0e60208301846145a4565b6102008152600061497361020083018f6145f3565b614980602084018f61453a565b8281036040840152614992818e61455c565b90508b60608401528a60808401528960a084015282810360c08401526149b8818a61455c565b905082810360e08401526149cc81896145a4565b87516101008501526020880151610120850152905085516101408401526020860151610160840152828103610180840152614a0781866145a4565b915050614a186101a0830184614588565b9d9c50505050505050505050505050565b602081526000611b0e6020830184614632565b82815260808101611b0e6020830184614588565b82815260406020820152600061401e60408301846145a4565b604051608081016001600160401b0381118282101715614a8b57614a8b614c4f565b60405290565b60405161018081016001600160401b0381118282101715614a8b57614a8b614c4f565b604051601f8201601f191681016001600160401b0381118282101715614adc57614adc614c4f565b604052919050565b60006001600160401b03821115614afd57614afd614c4f565b50601f01601f191660200190565b60008219821115614b1e57614b1e614c23565b500190565b600082614b3257614b32614c39565b500490565b6000816000190483118215151615614b5157614b51614c23565b500290565b600082821015614b6857614b68614c23565b500390565b60005b83811015614b88578181015183820152602001614b70565b83811115612f1b5750506000910152565b600181811c90821680614bad57607f821691505b60208210811415614bce57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415614be857614be8614c23565b5060010190565b600060ff821660ff811415614c0657614c06614c23565b60010192915050565b600082614c1e57614c1e614c39565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ff9aeb4dc8b93920acffb7348f8b2770b1e802bf273c229418fbbce280e42d8b64736f6c63430008040033",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 7,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "_owner",
        "offset": 0,
        "slot": "0",
        "type": "t_address"
      },
      {
        "astId": 7932,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "dropIDs",
        "offset": 0,
        "slot": "1",
        "type": "t_struct(Counter)2411_storage"
      },
      {
        "astId": 7990,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "drops",
        "offset": 0,
        "slot": "2",
        "type": "t_mapping(t_uint256,t_address)"
      },
      {
        "astId": 7994,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "dropAddresses",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 7999,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "tokens",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_uint256,t_struct(Token)19963_storage)"
      },
      {
        "astId": 8001,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "namePrice",
        "offset": 0,
        "slot": "5",
        "type": "t_uint256"
      },
      {
        "astId": 8004,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "market",
        "offset": 0,
        "slot": "6",
        "type": "t_contract(IMarket)19712"
      },
      {
        "astId": 8007,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "media",
        "offset": 0,
        "slot": "7",
        "type": "t_contract(IMedia)19892"
      },
      {
        "astId": 8010,
        "contract": "src/ZooKeeper.sol:ZooKeeper",
        "label": "zoo",
        "offset": 0,
        "slot": "8",
        "type": "t_contract(IERC20)767"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_bytes32": {
        "encoding": "inplace",
        "label": "bytes32",
        "numberOfBytes": "32"
      },
      "t_contract(IERC20)767": {
        "encoding": "inplace",
        "label": "contract IERC20",
        "numberOfBytes": "20"
      },
      "t_contract(IMarket)19712": {
        "encoding": "inplace",
        "label": "contract IMarket",
        "numberOfBytes": "20"
      },
      "t_contract(IMedia)19892": {
        "encoding": "inplace",
        "label": "contract IMedia",
        "numberOfBytes": "20"
      },
      "t_enum(Type)19903": {
        "encoding": "inplace",
        "label": "enum IZoo.Type",
        "numberOfBytes": "1"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_mapping(t_uint256,t_address)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_mapping(t_uint256,t_struct(Token)19963_storage)": {
        "encoding": "mapping",
        "key": "t_uint256",
        "label": "mapping(uint256 => struct IZoo.Token)",
        "numberOfBytes": "32",
        "value": "t_struct(Token)19963_storage"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_struct(BidShares)19570_storage": {
        "encoding": "inplace",
        "label": "struct IMarket.BidShares",
        "members": [
          {
            "astId": 19563,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "prevOwner",
            "offset": 0,
            "slot": "0",
            "type": "t_struct(D256)4192_storage"
          },
          {
            "astId": 19566,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "creator",
            "offset": 0,
            "slot": "1",
            "type": "t_struct(D256)4192_storage"
          },
          {
            "astId": 19569,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "owner",
            "offset": 0,
            "slot": "2",
            "type": "t_struct(D256)4192_storage"
          }
        ],
        "numberOfBytes": "96"
      },
      "t_struct(Breed)19917_storage": {
        "encoding": "inplace",
        "label": "struct IZoo.Breed",
        "members": [
          {
            "astId": 19914,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "count",
            "offset": 0,
            "slot": "0",
            "type": "t_uint256"
          },
          {
            "astId": 19916,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "timestamp",
            "offset": 0,
            "slot": "1",
            "type": "t_uint256"
          }
        ],
        "numberOfBytes": "64"
      },
      "t_struct(Counter)2411_storage": {
        "encoding": "inplace",
        "label": "struct Counters.Counter",
        "members": [
          {
            "astId": 2410,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "_value",
            "offset": 0,
            "slot": "0",
            "type": "t_uint256"
          }
        ],
        "numberOfBytes": "32"
      },
      "t_struct(D256)4192_storage": {
        "encoding": "inplace",
        "label": "struct Decimal.D256",
        "members": [
          {
            "astId": 4191,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "value",
            "offset": 0,
            "slot": "0",
            "type": "t_uint256"
          }
        ],
        "numberOfBytes": "32"
      },
      "t_struct(MediaData)19738_storage": {
        "encoding": "inplace",
        "label": "struct IMedia.MediaData",
        "members": [
          {
            "astId": 19731,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "tokenURI",
            "offset": 0,
            "slot": "0",
            "type": "t_string_storage"
          },
          {
            "astId": 19733,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "metadataURI",
            "offset": 0,
            "slot": "1",
            "type": "t_string_storage"
          },
          {
            "astId": 19735,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "contentHash",
            "offset": 0,
            "slot": "2",
            "type": "t_bytes32"
          },
          {
            "astId": 19737,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "metadataHash",
            "offset": 0,
            "slot": "3",
            "type": "t_bytes32"
          }
        ],
        "numberOfBytes": "128"
      },
      "t_struct(Meta)19931_storage": {
        "encoding": "inplace",
        "label": "struct IZoo.Meta",
        "members": [
          {
            "astId": 19928,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "eggID",
            "offset": 0,
            "slot": "0",
            "type": "t_uint256"
          },
          {
            "astId": 19930,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "dropID",
            "offset": 0,
            "slot": "1",
            "type": "t_uint256"
          }
        ],
        "numberOfBytes": "64"
      },
      "t_struct(Parents)19926_storage": {
        "encoding": "inplace",
        "label": "struct IZoo.Parents",
        "members": [
          {
            "astId": 19919,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "animalA",
            "offset": 0,
            "slot": "0",
            "type": "t_string_storage"
          },
          {
            "astId": 19921,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "animalB",
            "offset": 0,
            "slot": "1",
            "type": "t_string_storage"
          },
          {
            "astId": 19923,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "tokenA",
            "offset": 0,
            "slot": "2",
            "type": "t_uint256"
          },
          {
            "astId": 19925,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "tokenB",
            "offset": 0,
            "slot": "3",
            "type": "t_uint256"
          }
        ],
        "numberOfBytes": "128"
      },
      "t_struct(Rarity)19912_storage": {
        "encoding": "inplace",
        "label": "struct IZoo.Rarity",
        "members": [
          {
            "astId": 19905,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "name",
            "offset": 0,
            "slot": "0",
            "type": "t_string_storage"
          },
          {
            "astId": 19907,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "probability",
            "offset": 0,
            "slot": "1",
            "type": "t_uint256"
          },
          {
            "astId": 19909,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "yield",
            "offset": 0,
            "slot": "2",
            "type": "t_uint256"
          },
          {
            "astId": 19911,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "boost",
            "offset": 0,
            "slot": "3",
            "type": "t_uint256"
          }
        ],
        "numberOfBytes": "128"
      },
      "t_struct(Token)19963_storage": {
        "encoding": "inplace",
        "label": "struct IZoo.Token",
        "members": [
          {
            "astId": 19934,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "rarity",
            "offset": 0,
            "slot": "0",
            "type": "t_struct(Rarity)19912_storage"
          },
          {
            "astId": 19937,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "kind",
            "offset": 0,
            "slot": "4",
            "type": "t_enum(Type)19903"
          },
          {
            "astId": 19939,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "name",
            "offset": 0,
            "slot": "5",
            "type": "t_string_storage"
          },
          {
            "astId": 19941,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "id",
            "offset": 0,
            "slot": "6",
            "type": "t_uint256"
          },
          {
            "astId": 19943,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "timestamp",
            "offset": 0,
            "slot": "7",
            "type": "t_uint256"
          },
          {
            "astId": 19945,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "birthday",
            "offset": 0,
            "slot": "8",
            "type": "t_uint256"
          },
          {
            "astId": 19947,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "customName",
            "offset": 0,
            "slot": "9",
            "type": "t_string_storage"
          },
          {
            "astId": 19950,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "parents",
            "offset": 0,
            "slot": "10",
            "type": "t_struct(Parents)19926_storage"
          },
          {
            "astId": 19953,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "breed",
            "offset": 0,
            "slot": "14",
            "type": "t_struct(Breed)19917_storage"
          },
          {
            "astId": 19956,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "meta",
            "offset": 0,
            "slot": "16",
            "type": "t_struct(Meta)19931_storage"
          },
          {
            "astId": 19959,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "data",
            "offset": 0,
            "slot": "18",
            "type": "t_struct(MediaData)19738_storage"
          },
          {
            "astId": 19962,
            "contract": "src/ZooKeeper.sol:ZooKeeper",
            "label": "bidShares",
            "offset": 0,
            "slot": "22",
            "type": "t_struct(BidShares)19570_storage"
          }
        ],
        "numberOfBytes": "800"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}

// const chainID = '0x539'  // Localhost
const chainID = '0x61'   // Testnet
// const chainID = '0x38'   // Mainnet

async function getZooKeeper() {
    // const Contract = Moralis.Object.extend("Contracts")
    // const query = new Moralis.Query(Contract)
    // query.equalTo("Name", "ZooKeeper")
    // const result = await query.find()[0]
    // const ABI = result.get("ABI")
  	const web3 = Moralis.web3ByChain(chainID);
    return new web3.eth.Contract(ZooKeeper.abi, ZooKeeper.address)
}

Moralis.Cloud.afterSave("BuyEgg", async (request) => {
	const confirmed = request.object.get("confirmed");
  	const logger = Moralis.Cloud.getLogger();
  	if (confirmed) {
      const tokenID = request.object.get("tokenID")
      const currentClass = Moralis.Object.extend("FinalEggs");
      const query1 = new Moralis.Query(currentClass);
      query1.equalTo("EggID", parseInt(tokenID))
      const results = await query1.find()
      const current = results[0];

      const zooKeeper = await getZooKeeper()
      const eggInfo = await zooKeeper.methods.tokens(parseInt(tokenID)).call()
      current.set("EggID", parseInt(tokenID))
      current.set("Owner", request.object.get("from"))
      current.set("BlockNumber", request.object.get("block_number"))
      current.set("Type", "basic")
      current.set("Interactable", true)
      current.set("TokenURI", eggInfo.data.tokenURI)
      current.set("MetaURI", eggInfo.data.metadataURI)
      current.set("Kind", eggInfo.kind)
      await current.save()
      logger.info("Saved Egg:" + tokenID)
  	} else {
    	logger.info("Egg Bought pending confirmation")
      	const FinalEggs = Moralis.Object.extend("FinalEggs");
        const current = new FinalEggs();
        current.set("EggID", parseInt(request.object.get("tokenID")));
        current.set("Owner", request.object.get("from"))
        current.set("BlockNumber", request.object.get("block_number"))
        current.set("Type", "basic")
      	current.set("Interactable", false)
      	current.set("Hatched", false)
        current.save();
      	logger.info("Test Saved at " + Date.now())
    };
});

// Moralis.Cloud.afterSave("Burn", async (request) => {
// 	const confirmed = request.object.get("confirmed");
//   	const logger = Moralis.Cloud.getLogger();
//   	if (confirmed) {
//       const object = request.object
//       const existingEvent = Moralis.Object.extend("FinalEggs");
//       const search = new Moralis.Query(existingEvent);
//       search.equalTo("EggID", parseInt(object.get("tokenID")))
//       const res = await search.find();
//       const egg = res[0]
//       egg.set("Burned", true)
//       egg.save()
//     } else {
//     	logger.info("Egg Hatched pending confirmation")
//     }
// });

Moralis.Cloud.afterSave("Hatch", async (request) => {
	const confirmed = request.object.get("confirmed");
  	const logger = Moralis.Cloud.getLogger();
  	if (confirmed) {
      const object = request.object
      const tokenID = object.get("tokenID")
      const animal = Moralis.Object.extend("FinalAnimals");
      const current = new animal()
      const currentClass = Moralis.Object.extend("FinalEggs");
      const query1 = new Moralis.Query(currentClass);
      query1.equalTo("EggID", parseInt(object.get("eggID")))
      const results = await query1.find()

      const currentEgg = results[0];

      currentEgg.set("AnimalID", parseInt(tokenID))
      currentEgg.set("Hatched", true)
      currentEgg.set("Interactable", true)
      currentEgg.save()

      const zooKeeper = await getZooKeeper()
      const hatchedAnimal = await zooKeeper.methods.tokens(tokenID).call()
      current.set("AnimalID", parseInt(tokenID))
      current.set("Owner", object.get("from"))
      current.set("BlockNumber", request.object.get("block_number"))
      current.set("TokenURI", hatchedAnimal.data.tokenURI)
      current.set("Rarity", hatchedAnimal.rarity.name)
      current.set("Yield", hatchedAnimal.rarity.yield)
      current.set("Boost", hatchedAnimal.rarity.boost)
      current.set("Name", hatchedAnimal.name)
      current.set("Listed", false)
      current.set("Revealed", false)
      current.set("AnimalTypeID", hatchedAnimal.kind)
      current.save()
      logger.info("Saved Animal")
    } else {
    	logger.info("Hatched Animal pending confirmation")
        const currentClass = Moralis.Object.extend("FinalEggs");
        const query1 = new Moralis.Query(currentClass);
        query1.equalTo("EggID", parseInt(object.get("eggID")))
        const results = await query1.find()

        const currentEgg = results[0];

        currentEgg.set("Interactable", false)
      	currentEgg.set("Hatched", true)
        currentEgg.save()
    }
});


Moralis.Cloud.afterSave("Breed", async (request) => {
	const confirmed = request.object.get("confirmed");
  	const logger = Moralis.Cloud.getLogger();
  	if (confirmed) {

      const tokenID = request.object.get("tokenID")
      const currentClass = Moralis.Object.extend("FinalEggs");
      const query1 = new Moralis.Query(currentClass);
      query1.equalTo("EggID", parseInt(tokenID))
      const results = await query1.find()
      const current = results[0];
      current.set("Interactable", true)

      const zooKeeper = await getZooKeeper()
      const eggInfo = await zooKeeper.methods.tokens(parseInt(tokenID)).call()
      current.set("TokenURI", eggInfo.data.tokenURI)
      current.set("MetaURI", eggInfo.data.metadataURI)
      current.save()
      logger.info("saved successfully")

    } else {
      logger.info("Egg Hatched pending confirmation")
      const object = request.object

      const animal1 = object.get("parentA")
      const animal2 = object.get("parentB")
      const existingEvent = Moralis.Object.extend("FinalAnimals");
      const search1 = new Moralis.Query(existingEvent);
      search1.equalTo("AnimalID", parseInt(animal1))
      const res1 = await search1.find()
      const an1 = res1[0]
      an1.set("RecentBreedTime", object.get("block_number"))
      an1.save();

      const existingEvent2 = Moralis.Object.extend("FinalAnimals")
      const srch = new Moralis.Query(existingEvent2);
      srch.equalTo("AnimalID", parseInt(animal2))
      const res2 = await srch.find()
      const an2 = res2[0]
      an2.set("RecentBreedTime", object.get("block_number"))
      an2.save();

      const zooKeeper = await getZooKeeper()
      const ClassCurrent = Moralis.Object.extend("FinalEggs");
      const current = new ClassCurrent();
      const tokenID = object.get("tokenID")
      const eggInfo = await zooKeeper.methods.tokens(tokenID).call()
      current.set("EggID", parseInt(tokenID))
      current.set("ParentA", parseInt(eggInfo.parents.tokenA))
      current.set("ParentB", parseInt(eggInfo.parents.tokenB))
      current.set("Interactable", false)
      current.set("Owner", object.get("from"))
      current.set("BlockNumber", object.get("block_number"))
      current.set("Type", "hybrid")
      current.set("Hatched", false)
      await current.save()
    }
});

 Moralis.Cloud.afterSave("Free", async (request) => {
   	const confirmed = request.object.get("confirmed");
   	const logger = Moralis.Cloud.getLogger();
 	if (confirmed) {
       const object = request.object
       const animal = Moralis.Object.extend("FinalAnimals");
       const query = new Moralis.Query(animal)
       const parsedNum = parseInt(object.get("tokenID"))
       query.equalTo("AnimalID", parsedNum)
       const results = await query.find()
       const result = results[0]
       result.set("Freed", true)
       result.save()
       logger.info("Freed Animal into Wild")
     } else {
     	logger.info("Free animal is pending confirmation")
     }
 });

