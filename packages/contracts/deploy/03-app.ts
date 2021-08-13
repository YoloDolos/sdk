// deploy/03_deploy_app.ts

import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const tokenAddress = (await deployments.get('Token')).address
  const marketAddress = (await deployments.get('Market')).address
  const mediaAddress = (await deployments.get('Media')).address

  const deployResult = await deploy('app', {
    from: deployer,
    args: [],
    log: true,
  })

  const appAddress = deployResult.address

  const token = await ethers.getContractAt('Token', tokenAddress)
  const market = await ethers.getContractAt('Market', marketAddress)
  const media = await ethers.getContractAt('Media', mediaAddress)
  const app = await ethers.getContractAt('app', appAddress)

  // Configure contracts to talk to each other
  market.configure(appAddress, mediaAddress)
  media.configure(appAddress, marketAddress)
  app.configure(tokenAaddress, marketAddress, mediaAddress)

  // Mint ZOO to app for yield
  token.mint(appAddress, 1000000000000)

  return hre.network.live
}

export default func
func.id = 'app'
func.tags = ['App']
// func.dependencies = ['Media', 'Market']
