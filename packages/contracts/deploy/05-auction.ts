// deploy/05_deployauction.ts

import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const deployResult = await deploy('Auction', {
    from: deployer,
    args: [],
    log: true,
  })

  const tokenAddress = (await deployments.get('Token')).address
  const mediaAddress = (await deployments.get('Media')).address

  const auction = await ethers.getContractAt('Auction', deployResult.address)
  auction.configure(mediaAddress, tokenAddress)

  return hre.network.live
}

export default func
func.id = 'deployauction'
func.tags = ['Auction']
// func.dependencies = ['Media', 'Market']
