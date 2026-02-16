/**
 * Quick sanity mint using backend's web3 service.
 *
 * Usage:
 *   node scripts/mint-test-sbt.js 0xRecipientAddress
 */
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env.development') });

const web3Service = require('../src/services/web3.service');

async function main() {
  const to = process.argv[2];
  if (!to) {
    // eslint-disable-next-line no-console
    console.error('Usage: node scripts/mint-test-sbt.js 0xRecipientAddress');
    process.exit(1);
  }

  const res = await web3Service.mintSBT(to, 'Backend test mint', {
    title: '🧪 Backend Test SBT',
    type: 'Test',
  });

  // eslint-disable-next-line no-console
  console.log('Minted:', res);
}

main().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e);
  process.exit(1);
});
