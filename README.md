# nft
![App CI](https://github.com/nft-labs/nft/actions/workflows/app.yml/badge.svg)
![Contracts CI](https://github.com/nft-labs/nft/actions/workflows/contracts.yml/badge.svg)

> An autonomous ecosystem where nft owners breed, collect, and trade exotic hybrid animals via NFTs.

# 🏄‍♂️ Quick Start

Prerequisites: [Node](https://nodejs.org/dist/latest-v12.x/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork 🏗 nft:

```bash
git clone https://github.com/nft-labs/nft.git
```

> install and start your 👷‍ Hardhat chain:

```bash
cd nft
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd nft
yarn start
```

You should now have a local blockchain, with contracts deployed, and your app running on https://localhost:3000.


## Moralis integration
NFT builds on top of Moralis, which provides both cloud functions and a realtime
API for the React frontend.

### Plugins
Moralis servers support plugins which can listen to and respond to events on a given
contract. For NFT, we Moralis watches the `Keeper` contract for any new NFT
events and updates various NFT tables accordingly.

```shell
yarn moralis:plugins
```

### Cloud Functions
Moralis Cloud Functions are used to update cached NFT state when key events are
fired.

```shell
yarn moralis:functions
```

## Running Local Devchain Proxy
To connect your local blockchain to Moralis:

```shell
yarn moralis:proxy
```

This requires `frpc`, which can be installed with `brew install frpc` on macOS.
