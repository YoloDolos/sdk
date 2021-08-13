import { HardhatUserConfig } from 'hardhat/config'

import fs from 'fs'


function mnemonic() {
  try {
    return fs.readFileSync(`./mnemonic.txt`).toString().trim()
  } catch (e) {
    console.log('☢️  warning: No mnemonic file created for a deploy account. Try `yarn run generate` and then `yarn run account`.')
  }
  return ''
}

//
// Select the network you want to deploy to here:
//
const networks: HardhatUserConfig['networks'] = {
  hardhat: {
    chainId: 1337,
    allowUnlimitedContractSize: true,
    mining: {
      auto: true,
      interval: 5000,
    },
    accounts: {
      mnemonic: mnemonic(),
      accountsBalance: '10000000000000000000000',
      count: 20,
    },
  },
  coverage: {
    url: 'http://127.0.0.1:8555',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: true,
  },
  mainnet: {
    url: 'https://bsc-dataseed.binance.org/',
    chainId: 56,
    accounts: {
      mnemonic: mnemonic(),
    },
  },
  testnet: {
    url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    chainId: 97,
    accounts: {
      mnemonic: mnemonic(),
    },
  },
}

export default networks
