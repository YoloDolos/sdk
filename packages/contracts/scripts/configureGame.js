const hre = require('hardhat')
const ethers = hre.ethers

const rarities = require('../utils/rarities.json')
const animals = require('../utils/animals.json')
const hybrids = require('../utils/hybrids.json')
const hybrids = require('../utils/hybrids.json')

const ZooToken = require('../deployments/testnet/ZooToken.json')
const ZooMarket = require('../deployments/testnet/ZooMarket.json')
const ZooMedia = require('../deployments/testnet/ZooMedia.json')
const ZooApp = require('../deployments/testnet/ZooApp.json')
const ZooDrop = require('../deployments/testnet/ZooDrop.json')

// Split game data into deploy-sized chunks
function chunks(arr, size) {
  const res = []
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size)
    res.push(chunk)
  }
  return res
}

async function main() {
  const [signer] = await ethers.getSigners()

  const keeper = await (await ethers.getContractAt('ZooApp', ZooApp.address)).connect(signer)
  const drop = await (await ethers.getContractAt('ZooDrop', ZooDrop.address)).connect(signer)
  const media = await (await ethers.getContractAt('ZooMedia', ZooMedia.address)).connect(signer)
  const market = await (await ethers.getContractAt('ZooMarket', ZooMarket.address)).connect(signer)

  // Configure Market
  console.log('market.configure', ZooApp.address, ZooMedia.address)
  await market.configure(ZooApp.address, ZooMedia.address)

  // Configure Media
  console.log('media.configure', ZooApp.address, ZooMarket.address)
  await market.configure(ZooApp.address, ZooMarket.address)

  // Configure game for our Gen 0 drop
  console.log('keeper.configure', ZooMarket.address, ZooMedia.address, ZooToken.address)
  await keeper.configure(ZooMarket.address, ZooMedia.address, ZooToken.address)

  // Configure Drop
  console.log('drop.configure', ZooApp.address)
  await drop.configureApp(ZooApp.address)

  // Setup Gen 0 drop
  console.log('keeper.setDrop', ZooDrop.address)
  await keeper.setDrop(ZooDrop.address)

  // Base Price for Token / Names
  const exp = ethers.BigNumber.from('10').pow(18)
  const basePrice = ethers.BigNumber.from('1500000').mul(exp)

  // Configure Name price
  console.log('keeper.setNamePrice', basePrice)
  await keeper.setNamePrice(basePrice) // about $20 / name

  // Add tokens
  const tokens = [
    {
      name: 'Base Token',
      price: basePrice.mul(10), // about $200 / token
      supply: 16000,
      tokenURI: 'https://db.zoolabs/token.jpg',
      metadataURI: 'https://db.zoolabs.org/token.json',
    },
    {
      name: 'Hybrid Token',
      price: 0,
      supply: 0,
      tokenURI: 'https://db.zoolabs/hybrid.jpg',
      metadataURI: 'https://db.zoolabs.org/hybrid.json',
    },
  ]

  for (const v of tokens) {
    console.log('setToken', v)
    const tx = await drop.setToken(v.name, v.price, v.supply, v.tokenURI, v.metadataURI)
    await tx.wait()
  }

  await drop.configureTokens('Base Token', 'Hybrid Token')

  // Add rarities
  rarities.sort(function (a, b) {
    return a.probability - b.probability
  })

  for (const v of rarities) {
    console.log('setRarity', v)
    const tx = await drop.setRarity(v.name, v.probability, v.yield, v.boost)
    await tx.wait()
  }

  // Add animals
  for (const chunk of chunks(animals, 20)) {
    console.log('setAnimals', chunk)
    const tx = await drop.setAnimals(chunk)
    await tx.wait()
  }

  // Add hybrids
  for (const chunk of chunks(hybrids, 20)) {
    console.log('setHybrids', chunk)
    const tx = await drop.setHybrids(chunk)
    await tx.wait()
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
