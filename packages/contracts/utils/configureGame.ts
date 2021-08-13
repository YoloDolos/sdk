// Generated from Yield Matrix spreadsheet (see: `yarn matrix`)
import rarities from './rarities.json'
import animals from './animals.json'
import hybrids from './hybrids.json'

// Configure game for our Gen 0 drop
export default async function configureGame(keeper: any, drop: any) {
  // Add Drop to ZooApp
  await keeper.setDrop(drop.address)

  const basePrice = 1500000

  // Set name price
  await keeper.setNamePrice(basePrice) // about $20 / name

  // Configure Drop
  await drop.configureApp(keeper.address)

  // Add tokens
  const tokens = [
    {
      name: 'Base Token',
      price: basePrice * 10, // about $200 / token
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

  tokens.map(async (v) => {
    console.log('Add Token:', v.name)
    await drop.setToken(v.name, v.price, v.supply, v.tokenURI, v.metadataURI)
  })

  await drop.configureTokens('Base Token', 'Hybrid Token')

  // Add rarities
  rarities.sort(function (a, b) {
    return a.probability - b.probability
  })
  rarities.map(async (v) => {
    console.log('Add Rarity:', v.name, v.probability, v.yield, v.boost)
    await drop.setRarity(v.name, v.probability, v.yield, v.boost)
  })

  // Add animals
  animals.map(async (v) => {
    console.log('Add Animal:', v.name)
    await drop.setAnimal(v.name, v.rarity, v.tokenURI, v.metadataURI)
  })

  // Add hybrids
  hybrids.map(async (v) => {
    console.log('Add Hybrid:', v.name)
    await drop.setHybrid(v.name, v.rarity, v.yield, v.parentA, v.parentB, v.tokenURI, v.metadataURI)
  })
}
