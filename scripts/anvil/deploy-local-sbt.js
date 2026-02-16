/**
 * Deploy CollegeVerseSBT to a running local JSON-RPC node (Anvil recommended).
 *
 * Requirements:
 *   - Local RPC running (default: http://127.0.0.1:8545)
 *   - ADMIN_WALLET_PRIVATE_KEY in .env.development (Anvil default key works too)
 *
 * Usage:
 *   node scripts/anvil/deploy-local-sbt.js
 */

require('dotenv').config({ path: '.env.development' });

const fs = require('fs');
const path = require('path');
const { ethers } = require('ethers');

function upsertEnvVar(envText, key, value) {
  const line = `${key}=${value}`;
  const re = new RegExp(`^${key}=.*$`, 'm');
  if (re.test(envText)) return envText.replace(re, line);
  const suffix = envText.endsWith('\n') ? '' : '\n';
  return envText + suffix + line + '\n';
}

async function main() {
  const rpcUrl = process.env.POLYGON_AMOY_RPC_URL || 'http://127.0.0.1:8545';
  const pk = process.env.ADMIN_WALLET_PRIVATE_KEY;
  const bytecode = process.env.SBT_BYTECODE;

  if (!pk) throw new Error('Missing ADMIN_WALLET_PRIVATE_KEY in .env.development');
  if (!bytecode) throw new Error('Missing SBT_BYTECODE in .env.development');

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(pk, provider);

  const network = await provider.getNetwork();
  console.log('RPC:', rpcUrl);
  console.log('chainId:', network.chainId.toString());
  console.log('Deployer:', wallet.address);

  // ABI: minimal surface we need (constructor is empty)
  const abi = [
    'function owner() view returns (address)',
    'function totalMinted() view returns (uint256)',
    'function mint(address to, string tokenURI) external',
  ];

  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const contract = await factory.deploy();
  console.log('Deploy tx:', contract.deploymentTransaction().hash);
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log('✅ Deployed CollegeVerseSBT:', address);

  // update .env.development
  const envPath = path.resolve(process.cwd(), '.env.development');
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf8');
    let next = raw;
    next = upsertEnvVar(next, 'POLYGON_AMOY_RPC_URL', rpcUrl);
    next = upsertEnvVar(next, 'SBT_CONTRACT_ADDRESS', address);
    fs.writeFileSync(envPath, next, 'utf8');
    console.log('📝 Updated .env.development (RPC + SBT_CONTRACT_ADDRESS)');
  }

  // quick sanity reads
  const onchain = new ethers.Contract(address, abi, provider);
  console.log('owner():', await onchain.owner());
  console.log('totalMinted():', (await onchain.totalMinted()).toString());
}

main().catch((e) => {
  console.error('❌ Deploy failed:', e);
  process.exit(1);
});
