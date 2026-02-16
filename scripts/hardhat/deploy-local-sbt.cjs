/**
 * Deploy CollegeVerseSBT to a local Hardhat node (or in-process Hardhat network).
 *
 * Usage:
 *   1) Start node: npx hardhat node
 *   2) Deploy:     npx hardhat run scripts/hardhat/deploy-local-sbt.cjs --network localhost
 *
 * Output:
 *   Prints contract address and writes it into .env.development as SBT_CONTRACT_ADDRESS.
 */
const fs = require('fs');
const path = require('path');
const hre = require('hardhat');

function upsertEnvVar(envText, key, value) {
  const line = `${key}=${value}`;
  const re = new RegExp(`^${key}=.*$`, 'm');
  if (re.test(envText)) return envText.replace(re, line);
  const suffix = envText.endsWith('\n') ? '' : '\n';
  return envText + suffix + line + '\n';
}

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log('Deployer:', deployer.address);

  const SBT = await hre.ethers.getContractFactory('CollegeVerseSBT');
  const sbt = await SBT.deploy();
  await sbt.waitForDeployment();

  const address = await sbt.getAddress();
  console.log('✅ Local SBT deployed:', address);

  // Write to .env.development
  // NOTE: This works best when you run backend in the same "local chain" mode.
  // If you're using a separate node (localhost), keep the node running.
  const envPath = path.resolve(process.cwd(), '.env.development');
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf8');
    let next = raw;
    // Default to in-process hardhat network URL placeholder; if user runs a node, they'll override.
    next = upsertEnvVar(next, 'POLYGON_AMOY_RPC_URL', 'http://127.0.0.1:8545');
    next = upsertEnvVar(next, 'SBT_CONTRACT_ADDRESS', address);
    fs.writeFileSync(envPath, next, 'utf8');
    console.log('📝 Updated .env.development (RPC + SBT_CONTRACT_ADDRESS)');
  } else {
    console.log('⚠️  .env.development not found; skipping env update');
  }

  console.log('Explorer: (local)');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
