# Zoo SDK
![App CI](https://github.com/zoo-labs/sdk/actions/workflows/app.yml/badge.svg)
![Contracts CI](https://github.com/zoo-labs/sdk/actions/workflows/contracts.yml/badge.svg)

> Build scalable and secure NFT powered apps and games

# 🏄‍♂️ Quick Start

Prerequisites: [Node](https://nodejs.org/dist/latest-v12.x/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork 🏗 nft:

```bash
git clone https://github.com/zoo-labs/sdk.git sdk
```

> install and start your local 👷‍ chain:

```bash
cd sdk
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd sdk
yarn start
```

You should now have a local blockchain, with contracts deployed, and your app
running on https://localhost:3000.

# Features
- React / Redux Storybook components
- Easily adapt for any app, game or marketplace
- Market / Media contracts fully compatible with Zora Protocol
- Moralis integration for on-chain caching / scalability
- Mobile friendly tokens
- On-chain randomization built-in (Commit / Reveal and Chainlink)
- Support for Bonding curves
- Integrated support for on-chain randomizaion
- Customizable NFT
- Zap Protocol VRF (Soon)

Full set of mobile friendly React / Redux NFT marketplace components
- OpenZepplin based ERC20 and ERC721 implementation
- Integrated React and Redux app, with Storybook of all components
Builds on top of [Zora] protocol Market and Media contracts.


## Mnemonic
You can generate a new mnemonic which will be used for deployment and testing by
adding a mnemonic.txt file to packages/contracts. You can also use `yarn
generate` and `yarn account` to create a new mnemonic securely.



## Moralis integration
[Moralis](http://moralis.io) provides a scalable caching layer and cloud
function powered backend for our serverless Web3 app.

### Plugins
Moralis servers support plugins which can listen to and respond to events on a
given contract. Moralis watches the `Keeper` contract for any new NFT events and
updates various NFT tables accordingly.

```shell
yarn moralis:plugins
```

### Cloud Functions
Moralis Cloud Functions are used to update cached NFT state when key events are
fired.

```shell
yarn moralis:functions
```

### Running Local Devchain Proxy
To connect your local blockchain to Moralis:

```shell
yarn moralis:proxy
```

This requires `frpc`, which can be installed with `brew install frpc` on macOS.
