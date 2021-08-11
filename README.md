# sdk
![App CI](https://github.com/zoo-labs/sdk/actions/workflows/app.yml/badge.svg)
![Contracts CI](https://github.com/zoo-labs/sdk/actions/workflows/contracts.yml/badge.svg)

> Build scalable, secure NFT applications on top of Moralis

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

You should now have a local blockchain, with contracts deployed, and your app running on https://localhost:3000.


## Moralis integration
We use Moralis to power some of the real-time features of our app. Their
platform provides a scalable caching layer and realtime API which forms an
(optional) backend for our Web3 frontend.

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
