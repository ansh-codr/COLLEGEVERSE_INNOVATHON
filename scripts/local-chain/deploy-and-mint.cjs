/**
 * Local-chain deploy + mint without running an external node.
 * Uses hardhat's in-process network via `npx hardhat run`.
 *
 * Usage:
 *   npx hardhat run scripts/local-chain/deploy-and-mint.cjs --config hardhat.config.cjs
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
  const [admin] = await hre.ethers.getSigners();
  console.log('Admin:', admin.address);

  const SBT = await hre.ethers.getContractFactory('CollegeVerseSBT');
  const sbt = await SBT.deploy();
  await sbt.waitForDeployment();

  const address = await sbt.getAddress();
  console.log('✅ Deployed:', address);

  const meta = { name: 'Local Test', description: 'Local test mint', image: '', attributes: [] };
  const uri = 'data:application/json;base64,' + Buffer.from(JSON.stringify(meta)).toString('base64');

  const tx = await sbt.mint(admin.address, uri, 'Local test mint');
  const receipt = await tx.wait();
  console.log('✅ Mint tx:', receipt.hash);

  const total = await sbt.totalMinted();
  console.log('totalMinted:', total.toString());

  // Update .env.development for backend
  const envPath = path.resolve(process.cwd(), '.env.development');
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf8');
    let next = raw;
    // Backend expects an RPC URL; for purely in-process runs, backend can't attach.
    // User should run `npm run chain:local` for a persistent RPC if needed.
    next = upsertEnvVar(next, 'SBT_CONTRACT_ADDRESS', address);
    fs.writeFileSync(envPath, next, 'utf8');
    console.log('📝 Updated .env.development SBT_CONTRACT_ADDRESS (for when you run a persistent local node).');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
