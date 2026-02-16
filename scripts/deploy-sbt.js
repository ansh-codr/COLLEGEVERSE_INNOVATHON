/**
 * Deploy CollegeVerseSBT to Polygon Amoy testnet
 *
 * Usage:
 *   1. Set ADMIN_WALLET_PRIVATE_KEY in .env.development (must have MATIC on Amoy)
 *   2. Run: node scripts/deploy-sbt.js
 *   3. Copy the contract address to .env.development SBT_CONTRACT_ADDRESS
 *
 * Get Amoy testnet MATIC from: https://faucet.polygon.technology/
 */
const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env.development') });

const RPC_URL = process.env.POLYGON_AMOY_RPC_URL || 'https://rpc-amoy.polygon.technology';
const RAW_PRIVATE_KEY = process.env.ADMIN_WALLET_PRIVATE_KEY;
const normalizePrivateKey = (value) => {
  if (!value) return '';
  let key = value.trim();
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1).trim();
  }
  // Add 0x prefix if missing and looks like a 64-hex string.
  if (!key.startsWith('0x') && /^[0-9a-fA-F]{64}$/.test(key)) {
    key = `0x${key}`;
  }
  return key;
};
const PRIVATE_KEY = normalizePrivateKey(RAW_PRIVATE_KEY);
const MAX_FEE_GWEI = process.env.DEPLOY_MAX_FEE_GWEI;
const MAX_PRIORITY_GWEI = process.env.DEPLOY_MAX_PRIORITY_GWEI;

if (!PRIVATE_KEY) {
  console.error('❌ Set ADMIN_WALLET_PRIVATE_KEY in .env.development');
  console.log('   Ensure it is a 64-hex private key (with or without 0x).');
  console.log('   Generate one: node -e "console.log(require(\'ethers\').Wallet.createRandom().privateKey)"');
  process.exit(1);
}

if (!/^0x[0-9a-fA-F]{64}$/.test(PRIVATE_KEY)) {
  console.error('❌ ADMIN_WALLET_PRIVATE_KEY is not a valid 32-byte hex key.');
  console.log('   Expected format: 0x + 64 hex characters (no spaces).');
  console.log(`   Current length: ${PRIVATE_KEY.length} characters`);
  process.exit(1);
}

const USE_LOCAL_COMPILE = process.env.USE_LOCAL_COMPILE === '1';

const COMPILED_ABI = [
  'function mint(address to, string uri, string reason) public returns (uint256)',
  'function totalMinted() public view returns (uint256)',
  'function tokenURI(uint256 tokenId) public view returns (string)',
  'function ownerOf(uint256 tokenId) public view returns (address)',
  'function balanceOf(address owner) public view returns (uint256)',
  'event SBTMinted(address indexed to, uint256 indexed tokenId, string reason)',
];

const compileLocally = () => {
  // Lazy-load solc to avoid cost when not needed
  // eslint-disable-next-line global-require
  const solc = require('solc');

  const sourcePath = path.resolve(__dirname, '../contracts/CollegeVerseSBT.sol');
  const source = fs.readFileSync(sourcePath, 'utf8');

  const findImports = (importPath) => {
    try {
      const fullPath = require.resolve(importPath, { paths: [process.cwd()] });
      return { contents: fs.readFileSync(fullPath, 'utf8') };
    } catch (e) {
      try {
        const fullPath = path.resolve(process.cwd(), importPath);
        return { contents: fs.readFileSync(fullPath, 'utf8') };
      } catch (e2) {
        return { error: `File not found: ${importPath}` };
      }
    }
  };

  const input = {
    language: 'Solidity',
    sources: { 'CollegeVerseSBT.sol': { content: source } },
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: 'paris',
      outputSelection: { '*': { '*': ['abi', 'evm.bytecode.object'] } },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));
  if (output.errors?.length) {
    const fatal = output.errors.filter((e) => e.severity === 'error');
    for (const e of output.errors) {
      // eslint-disable-next-line no-console
      console.error(e.formattedMessage);
    }
    if (fatal.length) process.exit(1);
  }

  const contract = output.contracts['CollegeVerseSBT.sol']?.CollegeVerseSBT;
  if (!contract) {
    // eslint-disable-next-line no-console
    console.error('Could not compile CollegeVerseSBT locally');
    process.exit(1);
  }

  return {
    abi: contract.abi,
    bytecode: '0x' + contract.evm.bytecode.object,
  };
};

// If we don't have bytecode or we explicitly request local compile, compile now.
let ABI = COMPILED_ABI;
let BYTECODE = process.env.SBT_BYTECODE || '';
if (!BYTECODE || USE_LOCAL_COMPILE) {
  const compiled = compileLocally();
  ABI = compiled.abi;
  BYTECODE = compiled.bytecode;
}

async function main() {
  if (!BYTECODE) {
    console.log('╔══════════════════════════════════════════════════════════════╗');
    console.log('║  QUICKEST WAY: Deploy via Remix IDE                        ║');
    console.log('╠══════════════════════════════════════════════════════════════╣');
    console.log('║  1. Open https://remix.ethereum.org                        ║');
    console.log('║  2. Create file: CollegeVerseSBT.sol                       ║');
    console.log('║  3. Paste the contract from contracts/CollegeVerseSBT.sol   ║');
    console.log('║  4. Compile with Solidity ^0.8.20                          ║');
    console.log('║  5. Deploy → Injected Provider (MetaMask on Amoy)          ║');
    console.log('║     OR Deploy → External HTTP Provider (paste RPC URL)     ║');
    console.log('║  6. initialOwner = your admin wallet address               ║');
    console.log('║  7. Copy deployed contract address                         ║');
    console.log('║  8. Paste into .env.development SBT_CONTRACT_ADDRESS=      ║');
    console.log('╚══════════════════════════════════════════════════════════════╝');
    console.log();
    console.log('Your admin wallet address:');

    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    console.log(`  ${wallet.address}`);

    const balance = await provider.getBalance(wallet.address);
    console.log(`  Balance: ${ethers.formatEther(balance)} MATIC`);

    if (balance === 0n) {
      console.log('\n⚠️  No MATIC! Get testnet MATIC from:');
      console.log('   https://faucet.polygon.technology/');
    }

    return;
  }

  console.log('🚀 Deploying CollegeVerseSBT to Polygon Amoy...');

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  console.log(`  Deployer: ${wallet.address}`);
  const balance = await provider.getBalance(wallet.address);
  console.log(`  Balance: ${ethers.formatEther(balance)} MATIC`);

  const factory = new ethers.ContractFactory(ABI, BYTECODE, wallet);
  const overrides = {};
  if (MAX_FEE_GWEI) {
    overrides.maxFeePerGas = ethers.parseUnits(MAX_FEE_GWEI, 'gwei');
  }
  if (MAX_PRIORITY_GWEI) {
    overrides.maxPriorityFeePerGas = ethers.parseUnits(MAX_PRIORITY_GWEI, 'gwei');
  }

  const constructorAbi = ABI.find((entry) => entry.type === 'constructor');
  const constructorInputs = constructorAbi?.inputs || [];
  const deployArgs = [];

  if (constructorInputs.length === 1 && constructorInputs[0].type === 'address') {
    deployArgs.push(wallet.address);
  }

  const contract = await factory.deploy(...deployArgs, overrides);
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`\n✅ Contract deployed at: ${address}`);
  console.log(`   Explorer: https://amoy.polygonscan.com/address/${address}`);
  console.log(`\n   Add to .env.development:`);
  console.log(`   SBT_CONTRACT_ADDRESS=${address}`);
}

main().catch(console.error);
