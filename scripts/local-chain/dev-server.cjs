/**
 * Local Web3 Dev Server (no persistent RPC needed)
 *
 * Boots an in-process Hardhat Network, deploys CollegeVerseSBT, then starts the backend server
 * with environment variables patched in-memory.
 *
 * Why: On some Windows setups, binding a persistent JSON-RPC port (8545) can be flaky.
 * This script avoids external RPC entirely while keeping the backend mint flow working.
 *
 * Usage:
 *   node scripts/local-chain/dev-server.cjs
 */

const path = require('path');

async function main() {
  // Ensure Hardhat loads the repo config.
  process.env.HARDHAT_CONFIG = process.env.HARDHAT_CONFIG || path.resolve(process.cwd(), 'hardhat.config.cjs');

  // Always run in development mode for env loading.
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';

  // Make sure Web3 service treats this as local, but it won't actually use the URL while we patch contract address.
  process.env.POLYGON_AMOY_RPC_URL = process.env.POLYGON_AMOY_RPC_URL || 'http://127.0.0.1:8545';

  // Spin up Hardhat Runtime Environment in-process.
  // eslint-disable-next-line global-require
  const hre = require('hardhat');

  const [deployer] = await hre.ethers.getSigners();
  process.env.ADMIN_WALLET_PRIVATE_KEY = process.env.ADMIN_WALLET_PRIVATE_KEY || hre.network.config.accounts?.[0] || '';
  console.log('Hardhat in-process network:', hre.network.name);
  console.log('Deployer:', deployer.address);

  const SBT = await hre.ethers.getContractFactory('CollegeVerseSBT');
  const sbt = await SBT.deploy();
  await sbt.waitForDeployment();

  const address = await sbt.getAddress();
  process.env.SBT_CONTRACT_ADDRESS = address;
  console.log('✅ Deployed CollegeVerseSBT:', address);

  // Quick self-test: mint to a second local account using the contract instance.
  const [, recipient] = await hre.ethers.getSigners();
  const tokenUri = "data:application/json;base64,eyJuYW1lIjoiQ29sbGVnZVZlcnNlIFNCVCIsImRlc2NyaXB0aW9uIjoiTG9jYWwgZGV2IHNlbGYtdGVzdCBtaW50In0=";
  const mintTx = await sbt.mint(recipient.address, tokenUri, 'Local dev self-test mint');
  await mintTx.wait();
  const total = await sbt.totalMinted();
  console.log('✅ Self-test mint OK -> recipient:', recipient.address);
  console.log('totalMinted:', total.toString());

  // Start backend server in the same process with patched env.
  // Important: require config AFTER env vars are set.
  // eslint-disable-next-line global-require
  require('../../src/server');
  const port = Number(process.env.PORT) || 4000;
  console.log(`✅ Backend bootstrapped (check logs). Expected URL: http://localhost:${port}`);
}

main().catch((e) => {
  console.error('❌ dev-server failed:', e);
  process.exit(1);
});
