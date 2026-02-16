/**
 * Compile contracts/CollegeVerseSBT.sol locally and print:
 *  - ABI (JSON)
 *  - Bytecode (0x...)
 *
 * This avoids Remix and lets scripts/deploy-sbt.js deploy automatically.
 *
 * Usage:
 *   node scripts/compile-sbt-bytecode.js
 */
const path = require('path');
const fs = require('fs');
const solc = require('solc');

function findImports(importPath) {
  // Support node_modules imports like @openzeppelin/...
  try {
    const fullPath = require.resolve(importPath, { paths: [process.cwd()] });
    return { contents: fs.readFileSync(fullPath, 'utf8') };
  } catch (e) {
    // Support relative imports (not used here, but harmless)
    try {
      const fullPath = path.resolve(process.cwd(), importPath);
      return { contents: fs.readFileSync(fullPath, 'utf8') };
    } catch (e2) {
      return { error: `File not found: ${importPath}` };
    }
  }
}

function main() {
  const sourcePath = path.resolve(__dirname, '../contracts/CollegeVerseSBT.sol');
  const source = fs.readFileSync(sourcePath, 'utf8');

  const input = {
    language: 'Solidity',
    sources: {
      'CollegeVerseSBT.sol': { content: source },
    },
    settings: {
      optimizer: { enabled: true, runs: 200 },
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode.object'],
        },
      },
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
    console.error('Could not find compiled contract output for CollegeVerseSBT');
    process.exit(1);
  }

  const abi = contract.abi;
  const bytecode = '0x' + contract.evm.bytecode.object;

  // eslint-disable-next-line no-console
  console.log('ABI_JSON=' + JSON.stringify(abi));
  // eslint-disable-next-line no-console
  console.log('SBT_BYTECODE=' + bytecode);
}

main();
