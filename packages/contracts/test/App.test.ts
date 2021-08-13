import { deployments, ethers, getNamedAccounts } from 'hardhat'

// import { App__factory, Media__factory, Market__factory, Token, Drop } from '../types';

// import { Media } from '../types/Media';
// import { Token } from '../types/Token';
// import { Faucet } from '../types/Faucet';
// import { Market } from '../types/Market';
// import { App } from '../types/App';
import chai, { expect } from 'chai'
// import configureGame from '../utils/configureGame';
import { BigNumber, Bytes, BytesLike, utils } from 'ethers'

import { solidity } from 'ethereum-waffle'
import '@nomiclabs/hardhat-ethers'
import { hex } from 'chalk'

chai.use(solidity)

let zooToken: any
let zooDrop: any
let zooMarket: any
let zooApp: any
let zooMedia: any
let signers: any
let mintAmt = 100000000
let owner
let mediaAddress: string
let marketAddress: string
let tokenPrice: any

const setupTest = deployments.createFixture(async ({ deployments, getNamedAccounts, ethers }, options) => {
  const contracts = await deployments.fixture() // ensure you start from a fresh deployments

  signers = await ethers.getSigners()

  zooToken = await ethers.getContractAt('Token', contracts.Token.address, signers[0])

  zooMarket = await ethers.getContractAt('Market', contracts.Market.address, signers[0])

  zooMedia = await ethers.getContractAt('Media', contracts.Media.address, signers[0])

  zooApp = await ethers.getContractAt('App', contracts.App.address, signers[0])

  zooDrop = await ethers.getContractAt('Drop', contracts.Drop.address, signers[0])

  // this mint is executed once and then createFixture will ensure it is snapshotted
  // await zooToken.mint(tokenOwner.deployer, 100000).then(tx => tx.wait());

  const getDeployer = await getNamedAccounts()

  owner = getDeployer.deployer

  tokenPrice = await zooDrop.tokenPrice()

  return true
})

describe('Token', () => {
  it.only('testing 1 2 3', async function () {
    // const { tokenOwner } = await setupTest()

    await setupTest()

    // console.log(zooToken)

    // console.log(tokenOwner)
    // await tokenOwner.TokenContract.mint(2);
  })
})

describe('App', () => {
  before(async () => {})

  beforeEach(async () => {})

  async function addAnimals() {}

  async function addHybrids() {}

  async function breedHybrid() {
    await zooToken.approve(zooApp.address, tokenPrice * 100)

    const buyFirstToken = await zooApp.buyToken(1)

    const buyFirstTokenReceipt = await buyFirstToken.wait()

    let sender = buyFirstTokenReceipt.events

    let from_add

    let token_id_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_1 = sender[i].args['tokenID']
      }
    }

    const buySecondToken = await zooApp.buyToken(1)

    const buySecondTokenReceipt = await buySecondToken.wait()

    sender = buySecondTokenReceipt.events

    let token_id_2

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_2 = sender[i].args['tokenID']
      }
    }

    const firstHatchedAnimal = await zooApp.hatchToken(1, token_id_1)

    const hatchFirstAnimalReceipt = await firstHatchedAnimal.wait()

    sender = hatchFirstAnimalReceipt.events

    let token_id_Animal_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_1 = sender[i].args['tokenID']
      }
    }

    let secondHatchedAnimal = await zooApp.hatchToken(1, token_id_2)

    const secondHatchedAnimalReceipt = await secondHatchedAnimal.wait()

    sender = secondHatchedAnimalReceipt.events

    let token_id_Animal_2

    let token_id_hybridToken

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_2 = sender[i].args['tokenID']
      }
    }

    const breedTx = await zooApp.breedAnimals(1, parseInt(token_id_Animal_1), parseInt(token_id_Animal_2))

    const breedReceipt = await breedTx.wait()

    sender = breedReceipt.events

    sender.forEach((element) => {
      if (element.event == 'Breed') {
        token_id_hybridToken = element.args['_tokenTokenId']
      }
    })

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Breed') {
        token_id_hybridToken = sender[i].args['tokenID']
      }
    }

    return parseInt(token_id_hybridToken)
  }

  it.only('Should configure a playable game', async () => {
    // Increase allowance so we can buy 100 tokens for testing
    //  const tokenPrice = await zooDrop.methods.tokenPrice().call();
    //  const tsx = zooToken.methods
    //     .approve(keeperAdd, tokenPrice*100)
    //     .send({ from: account })

    const approve = await zooToken.approve(zooApp.address, parseInt(tokenPrice) * 100)

    // // Buy initial two tokens
    // await zooApp.methods.buyToken(1).send({ from: account }).then((res) => {
    //     console.log('buyToken', res)
    //  })

    // await zooApp.methods.buyToken(1).send({ from: account }).then((res) => {
    //     console.log('buyToken', res)
    //  })

    await zooApp.buyToken(1)

    await zooApp.buyToken(1)

    // // Hatch tokens into animals
    // await zooApp.methods.hatchToken(1, 1).send({ from: account }).then((res) => {
    //   console.log('hatchToken', res);
    // })

    // await zooApp.methods.hatchToken(1, 2).send({ from: account }).then((res) => {
    //   console.log('hatchToken', res);
    // })

    await zooApp.hatchToken(1, 1)

    await zooApp.hatchToken(1, 2)

    // Breed animals into hybrid token
    // await zooApp.methods.breedAnimals(1, 3, 4).send({ from: account }).then((res) => {
    //   console.log('breedAnimals', res)
    // })

    await zooApp.breedAnimals(1, 3, 4)

    // Hatch hybrid token into hybrid animal
    // await zooApp.methods.hatchToken(1, 5).send({ from: account }).then((res) => {
    //   console.log('hatchToken', res);
    // })

    await zooApp.hatchToken(1, 5)

    // Free animal and collect yield
    // await zooApp.methods.freeAnimal(6).send({ from: account }).then((res) => {
    //     console.log('freeAnimal', res);
    //  })

    await zooApp.freeAnimal(6)

    // if (tokenBalance > 1) {
    //    const tokenID = await zooMedia.methods
    //       .tokenOfOwnerByIndex(account, 1)
    //       .call();
    //    console.log("tokenID", tokenID);
    //    const tokenURI = await zooMedia.methods.tokenURI(tokenID).call();
    //    console.log("tokenURI", tokenURI);
    //    const token = await zooApp.methods.tokens(tokenID).call();
    //    console.log("token", token);
    // }

    // TOTAL EGGS AFTER THIS TEST = 2
  })

  /*
    Deploy Script
    */
  it.only('Should get the Drop owner', async () => {
    const zooDropOwner: string = await zooApp.owner()

    expect(zooDropOwner).to.equal(owner)
  })

  /**
   * DROP
   */
  // it("Should create a new App contract with AddDrop event", async () => {

  //     const block = await ethers.provider.getBlockNumber();

  //     await zooApp.connect(signers[0]).addDrop("test1", 16000, 210);

  //     let events = await zooApp.queryFilter(zooApp.filters.AddDrop(null, null), block);

  //     expect(events.length).eq(1);

  //     const log = zooApp.interface.parseLog(events[0]);

  //     expect(log.name).to.equal("AddDrop");

  //     expect(log.args._dropID.toNumber()).to.equal(2);
  // });

  /**
   * BUYING EGGS
   */
  it.only('Should buy a basic token', async () => {
    const buyToken = await zooApp.buyToken(1)

    const buyTokenReceipt = await buyToken.wait()

    const sender = buyTokenReceipt.events

    let from_add: any

    let token_id: any

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id = sender[i].args['tokenID']
      }
    }

    expect(from_add).to.equal(owner)

    expect(parseInt(token_id._hex)).to.equal(7)

    // add check for types mapping
    // expect(await zooApp.types(parseInt(token_id._hex))).to.equal(parseInt(token_id._hex));

    // // check tokens mapping for new token
    // let token = await zooApp.tokens(parseInt(token_id._hex));

    // console.log(token.tokenCreationTime)

    // expect(token.tokenCreationTime.toNumber()).to.greaterThan(0);

    // TOTAL EGGS AFTER THIS TEST = 3
  })

  it.only('Should buy multiple basic tokens', async () => {
    const preTokenSupply = await zooDrop.tokenSupply()

    for (var i = 0; i < 3; i++) {
      await zooApp.buyToken(1)
    }

    const totalSupply = await zooDrop.totalSupply()

    const postTokenSupply = await zooDrop.tokenSupply()

    // expect(parseInt(postTokenSupply)).to.be.equal(parseInt(preTokenSupply) - parseInt(totalSupply))

    // TOTAL EGGS AFTER THIS TEST = 6
  })

  it('Should revert when totalSupply of tokens are reaching', async () => {
    await zooApp.connect(owner).addDrop('test3', 1, 210)

    await zooApp.setTokenURI(3, 'basicToken', 'basicToken.tokenURI1')
    await zooApp.setMetadataURI(3, 'basicToken', 'basicToken.metadataURI1')
    await zooApp.setTokenURI(3, 'hybridToken', 'hybridToken.tokenURI1')
    await zooApp.setMetadataURI(3, 'hybridToken', 'hybridToken.metadataURI1')

    const dropAddress = await zooApp.drops(3)

    const drop = await ethers.getContractAt('Drop', dropAddress)

    await zooToken.approve(zooApp.address, 500)

    const preBal = await zooToken.balanceOf(owner.address)

    await zooApp.connect(signers[0]).buyToken(3)

    const postBal = await zooToken.balanceOf(owner.address)

    const totalSupply = await drop.totalSupply()

    const currentSupply = await drop.currentSupply()

    await expect(zooApp.connect(signers[0]).buyToken(3)).to.be.revertedWith('There are no more Tokens that can be purchased')

    expect(parseInt(postBal._hex)).to.equal(parseInt(preBal._hex) - 210)

    expect(parseInt(totalSupply._hex)).to.equal(1)

    expect(parseInt(currentSupply._hex)).to.equal(0)
  })

  it.only('Should revert when not enough balance', async () => {
    await zooToken.connect(signers[1]).approve(signers[2].address, BigInt(1e30))

    await zooToken.connect(signers[1]).transfer(signers[2].address, BigInt(1e22))

    await zooToken.connect(signers[1]).approve(zooApp.address, parseInt(tokenPrice))

    await expect(zooApp.connect(signers[1]).buyToken(1)).to.be.revertedWith('ZK: Not Enough ZOO to purchase Token')
  })

  // Skip for now
  it('Should share bidshare from buy token to contract owner', async () => {})

  /**
   * HATCHING EGGS
   */
  it.only('Should hatch & burn basic token', async () => {
    const totalSupply = await zooDrop.totalSupply()

    await zooToken.approve(zooApp.address, tokenPrice)

    const buyToken = await zooApp.buyToken(1)

    const buyTokenReceipt = await buyToken.wait()

    let sender = buyTokenReceipt.events

    let from_add: any

    let token_id: any

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id = sender[i].args['tokenID']
      }
    }

    const hatchToken = await zooApp.hatchToken(1, parseInt(token_id))

    const hatchTokenReceipt = await hatchToken.wait()

    sender = hatchTokenReceipt.events

    let from_add2: any

    let token_id2: any

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add2 = sender[i].args['from']

        token_id2 = sender[i].args['tokenID']
      }
    }

    expect(from_add2).to.equal(owner)

    expect(parseInt(token_id2)).to.equal(12)

    const newAnimal = await zooDrop.animals(1)

    expect(newAnimal[0].name).to.not.equal('')
  })

  it.only('Should hatch & burn hybrid token', async () => {
    const token = await breedHybrid()

    const hatchToken = await zooApp.hatchToken(1, token)

    const hatchTokenReceipt = await hatchToken.wait()

    let sender = hatchTokenReceipt.events

    let from_add2

    let token_id2

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add2 = sender[i].args['from']

        token_id2 = sender[i].args['tokenID']
      }
    }

    expect(from_add2).to.equal(owner)

    expect(parseInt(token_id2)).to.equal(18)
  })

  it.only('Should revert when hatching token with invalid tokenid', async () => {
    await zooToken.approve(zooApp.address, tokenPrice)

    await zooApp.buyToken(1)

    await expect(zooApp.hatchToken(1, 525600)).to.be.revertedWith('Token is burned or does not exist')
  })

  it('Should revert when token creation time restriction is not met', async () => {})

  /**
   * BREEDING
   */
  it.only('Should breed a hybrid token', async () => {
    await zooToken.approve(zooApp.address, tokenPrice * 100)

    const buyFirstToken = await zooApp.buyToken(1)

    const buyFirstTokenReceipt = await buyFirstToken.wait()

    let sender = buyFirstTokenReceipt.events

    let from_add

    let token_id_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_1 = sender[i].args['tokenID']
      }
    }

    const buySecondToken = await zooApp.buyToken(1)

    const buySecondTokenReceipt = await buySecondToken.wait()

    sender = buySecondTokenReceipt.events

    let token_id_2

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_2 = sender[i].args['tokenID']
      }
    }

    const firstHatchedAnimal = await zooApp.hatchToken(1, parseInt(token_id_1))

    const hatchFirstAnimalReceipt = await firstHatchedAnimal.wait()

    sender = hatchFirstAnimalReceipt.events

    let token_id_Animal_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_1 = sender[i].args['tokenID']
      }
    }

    let secondHatchedAnimal = await zooApp.hatchToken(1, parseInt(token_id_2))

    const secondHatchedAnimalReceipt = await secondHatchedAnimal.wait()

    sender = secondHatchedAnimalReceipt.events

    let token_id_Animal_2

    let token_id_hybridToken

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_2 = sender[i].args['tokenID']
      }
    }

    await ethers.provider.send('evm_setNextBlockTimestamp', [9617249934])

    const breedTx = await zooApp.breedAnimals(1, token_id_Animal_1, token_id_Animal_2)

    const breedReceipt = await breedTx.wait()

    sender = breedReceipt.events

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Breed') {
        token_id_hybridToken = sender[i].args['tokenID']
      }
    }

    expect(parseInt(token_id_hybridToken)).to.equal(24)

    // const tokenType = await zooApp.connect(owner).types(token_id_hybridToken);
    // expect(tokenType).to.equal(2);
  })

  it.only('Should revert when there is breedCooldown', async () => {
    const buyFirstToken = await zooApp.buyToken(1)

    const buyFirstTokenReceipt = await buyFirstToken.wait()

    let sender = buyFirstTokenReceipt.events

    let from_add

    let token_id_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_1 = sender[i].args['tokenID']
      }
    }

    const buySecondToken = await zooApp.buyToken(1)

    const buySecondTokenReceipt = await buySecondToken.wait()

    sender = buySecondTokenReceipt.events

    let token_id_2

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_2 = sender[i].args['tokenID']
      }
    }

    const firstHatchedAnimal = await zooApp.hatchToken(1, token_id_1)

    const hatchFirstAnimalReceipt = await firstHatchedAnimal.wait()

    sender = hatchFirstAnimalReceipt.events

    let token_id_Animal_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_1 = sender[i].args['tokenID']
      }
    }

    let secondHatchedAnimal = await zooApp.hatchToken(1, token_id_2)

    const secondHatchedAnimalReceipt = await secondHatchedAnimal.wait()

    sender = secondHatchedAnimalReceipt.events

    let token_id_Animal_2

    let token_id_hybridToken

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_2 = sender[i].args['tokenID']
      }
    }

    // await expect(zooApp.breedAnimals(1, token_id_Animal_2, token_id_Animal_1))
    //     .to.be.revertedWith("Must wait for cooldown to finish.")
  })
  it.only('Should revert when breeding with a hybrid', async () => {
    const buyFirstToken = await zooApp.buyToken(1)

    const buyFirstTokenReceipt = await buyFirstToken.wait()

    let sender = buyFirstTokenReceipt.events

    let from_add

    let token_id_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_1 = sender[i].args['tokenID']
      }
    }

    const buySecondToken = await zooApp.buyToken(1)

    const buySecondTokenReceipt = await buySecondToken.wait()

    sender = buySecondTokenReceipt.events

    let token_id_2

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'BuyToken') {
        from_add = sender[i].args['from']

        token_id_2 = sender[i].args['tokenID']
      }
    }

    const firstHatchedAnimal = await zooApp.hatchToken(1, token_id_1)

    const hatchFirstAnimalReceipt = await firstHatchedAnimal.wait()

    sender = hatchFirstAnimalReceipt.events

    let token_id_Animal_1

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_1 = sender[i].args['tokenID']
      }
    }

    let secondHatchedAnimal = await zooApp.hatchToken(1, token_id_2)

    const secondHatchedAnimalReceipt = await secondHatchedAnimal.wait()

    sender = secondHatchedAnimalReceipt.events

    let token_id_Animal_2

    let token_id_hybridToken

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Animal_2 = sender[i].args['tokenID']
      }
    }

    // await ethers.provider.send("evm_increaseTime", [432000]);
    await ethers.provider.send('evm_setNextBlockTimestamp', [19234499888])

    const breedTx = await zooApp.breedAnimals(1, token_id_Animal_1, token_id_Animal_2)

    const breedReceipt = await breedTx.wait()

    sender = breedReceipt.events

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Breed') {
        token_id_hybridToken = sender[i].args['tokenID']
      }
    }

    const firstHatchedHybridAnimal = await zooApp.hatchToken(1, token_id_hybridToken)

    const firstHatchedHybridAnimalReceipt = await firstHatchedHybridAnimal.wait()

    sender = firstHatchedHybridAnimalReceipt.events

    let token_id_Hybrid_Animal

    for (var i = 0; i < sender.length; i++) {
      if (sender[i].event === 'Hatch') {
        from_add = sender[i].args['from']

        token_id_Hybrid_Animal = sender[i].args['tokenID']
      }
    }

    expect(parseInt(token_id_Hybrid_Animal)).to.equal(34)

    // await ethers.provider.send("evm_increaseTime", [432000]);
    await ethers.provider.send('evm_setNextBlockTimestamp', [38468999776])

    await expect(zooApp.breedAnimals(1, token_id_Animal_1, token_id_Hybrid_Animal)).to.be.revertedWith('Only BASE_ANIMAL can breed.')
  })

  it.only('Should revert when breeding with two hybrids', async () => {
    const token_1 = breedHybrid()

    const token_2 = breedHybrid()

    await expect(zooApp.breedAnimals(1, token_1, token_2)).to.be.revertedWith('Only BASE_ANIMAL can breed.')
  })

  // // /**
  // //  * FREEING
  // //  */

  it('Should free a basic animal', async () => {
    await zooToken.approve(zooApp.address, 600)

    const buyToken = await zooApp.connect(owner).buyToken(1)

    const buyTokenReceipt = await buyToken.wait()

    let sender = buyTokenReceipt.events

    let from_add
    let token_id

    sender.forEach((element) => {
      if (element.event == 'BuyToken') {
        from_add = element.args['_from']
        token_id = element.args['_tokenID']
      }
    })

    const hatchToken = await zooApp.hatchToken(1, token_id)
    const hatchTokenReceipt = await hatchToken.wait()

    sender = hatchTokenReceipt.events

    let from_add2
    let token_id2
    let _yield

    sender.forEach((element) => {
      if (element.event == 'Hatch') {
        from_add2 = element.args['_from']
        token_id2 = element.args['_tokenID']
      }
    })

    //     const prevBalance = await zooToken.balanceOf(owner.address);

    // TODO increase block number and test yield
    // await ethers.provider.send("evm_setNextBlockTimestamp", [9617249934]);

    // const freedReceipt = await freed.wait();

    // sender = freedReceipt.events;

    // sender.forEach(element => {
    //     if (element.event == "Burn") {
    //         from_add2 = element.args["_from"]
    //         token_id2 = element.args["_tokenID"]
    //     } else if (element.event == "FreeAnimal") {
    //         from_add = element.args["_from"]
    //         token_id = element.args["_tokenID"]
    //         _yield = element.args["_yield"]
    //     }
    // });

    // expect(from_add2).to.equal(owner.address);
    // expect(token_id2.toNumber()).to.equal(38);

    // expect(from_add).to.equal(owner.address);
    // expect(token_id.toNumber()).to.equal(38);
    // expect(_yield.toNumber()).to.greaterThan(0);

    // const newAnimal = await zooApp.animals(token_id.toNumber());
    // expect(newAnimal.name).to.equal('');

    // const newBalance = await zooToken.balanceOf(owner.address);
    // expect(newBalance.toNumber()).to.greaterThan(prevBalance.toNumber());
  })

  it('Should free a hybrid animal', async () => {
    // await ethers.provider.send("evm_increaseTime", [432000]);
    // await ethers.provider.send("evm_setNextBlockTimestamp", [96172499440]);
    // const tokenId = await breedHybrid();
    // const hatchToken = await zooApp.hatchToken(1, tokenId)
    // const hatchTokenReceipt = await hatchToken.wait();
    // let sender = hatchTokenReceipt.events;
    // let from_add
    // let token_id
    // let from_add2
    // let token_id2
    // let _yield
    // sender.forEach(element => {
    //     if (element.event == "Hatch") {
    //         from_add2 = element.args["_from"]
    //         token_id2 = element.args["_tokenID"]
    //     }
    // });
    // const prevBalance = await zooToken.balanceOf(owner.address);
    // // TODO increase block number and test yield
    // await ethers.provider.send("evm_setNextBlockTimestamp", [192344998892]);
    // const freed = await zooApp.freeAnimal(token_id2);
    // const freedReceipt = await freed.wait();
    // sender = freedReceipt.events
    // sender.forEach(element => {
    //     if (element.event == "Burn") {
    //         from_add2 = element.args["_from"]
    //         token_id2 = element.args["_tokenID"]
    //     } else if (element.event == "FreeAnimal") {
    //         from_add = element.args["_from"]
    //         token_id = element.args["_tokenID"]
    //         _yield = element.args["_yield"]
    //     }
    // });
    // expect(from_add2).to.equal(owner.address);
    // expect(token_id2.toNumber()).to.equal(44);
    // expect(from_add).to.equal(owner.address);
    // expect(token_id.toNumber()).to.equal(44);
    // expect(_yield.toNumber()).to.greaterThan(0);
    // const newAnimal = await zooApp.animals(token_id.toNumber());
    // expect(newAnimal.name).to.equal('');
    // const newBalance = await zooToken.balanceOf(owner.address);
    // expect(newBalance.toNumber()).to.greaterThan(prevBalance.toNumber());
  })
})
