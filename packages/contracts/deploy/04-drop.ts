// deploy/04_deploydrop.ts

import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import configureGame from '../utils/configureGame'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const deployResult = await deploy('Drop', {
    from: deployer,
    args: ['Gen 0'],
    log: true,
  })

  if (!deployResult.newlyDeployed) return false

  const drop = await ethers.getContractAt('Drop', deployResult.address)
  const keeperAddress = (await deployments.get('App')).address
  const keeper = await ethers.getContractAt('App', keeperAddress)

  // Configure game executes a very long series of transactions which set the
  // initial state for our Gen 0 drop. Do not expect this to work during
  // Testnet or Mainnet deployment -- use the standalone `yarn deploy:drop` to
  // update Testnet or Mainnet contracts.
  await configureGame(keeper, drop)

  return hre.network.live
}

export default func
func.id = 'deploydrop'
func.tags = ['Drop']
// func.dependencies = ['App']
