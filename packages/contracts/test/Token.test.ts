import { ethers } from 'hardhat'

import chai, { expect } from 'chai'
import asPromised from 'chai-as-promised'
chai.use(asPromised)

describe('Token', function () {
  let token

  it('should deploy Token contract', async function () {
    const [signer] = await ethers.getSigners()
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy()
  })

  it('should have correct name and symbol and decimal', async () => {
    const [signer] = await ethers.getSigners()
    const Token = await ethers.getContractFactory('')
    token = await Token.deploy()
    const name = await token.name()
    const symbol = await token.symbol()
    const decimals = await token.decimals()
    expect(name.valueOf()).to.eq('Token')
    expect(symbol.valueOf()).to.eq('ZOO')
    expect(decimals.valueOf()).to.eq(18)
  })
})
