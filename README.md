# CollegeVerse Backend

## Overview
CollegeVerse is a Node.js + Express backend for student verification, profiles, leaderboards, events, teams, clubs, placements, recruiter search, notifications, communities/chat, analytics, audit logs, and observability.

## Architecture (Text Diagram)
```
[Client Apps]
      |
      v
[Express API] ---> [Middleware: Auth/RBAC/Verified]
      |
      +--> [Firestore]
      |
      +--> [Firebase Auth]
      |
      +--> [Socket.io Chat]
      |
      +--> [Observability: metricsLogs, auditLogs]
```

## Tech Stack
- Node.js, Express
- Firebase Admin SDK (Firestore + Auth)
- Socket.io
- Winston logging
- Jest + Supertest + Firebase Emulator (tests)

## Environment Setup
1) Install Node.js (>= 20)
2) Copy env template and set values:
   - [.env.example](.env.example)
3) Configure Firebase Admin credentials:
   - Use per-environment service accounts

## Emulator Setup (Testing)
- Firestore/Auth emulators are defined in [firebase.json](firebase.json).
- Start emulators:
  - `scripts/emulator-setup.sh`
- Run integration tests:
  - `npm run test:integration`

## Run Locally
- Install deps: `npm ci`
- Start API: `npm run start`

## Firebase Blaze Readiness Check
- Ensure these are set in your active env file:
  - `FIREBASE_PROJECT_ID`
  - `FIREBASE_SERVICE_ACCOUNT_PATH` (or inline admin credentials)
  - `FIREBASE_STORAGE_BUCKET`
- Run preflight:
  - `npm run firebase:preflight`

## Deployment Overview
- CI/CD pipeline: [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml)
- Environments: development, staging, production
- Health check: `GET /health`

## Documentation
- Architecture: [docs/architecture.md](docs/architecture.md)
- Collections: [docs/collections.md](docs/collections.md)
- Role access matrix: [docs/role-access-matrix.md](docs/role-access-matrix.md)
- API overview: [docs/api-overview.md](docs/api-overview.md)
- Deployment: [docs/deployment.md](docs/deployment.md)
- Migrations: [docs/migrations.md](docs/migrations.md)
- Testing: [docs/testing.md](docs/testing.md)
- Security: [docs/security.md](docs/security.md)
- Performance: [docs/performance.md](docs/performance.md)

## Web3 (SBT) — Local development (no faucet needed)

This repo can mint student SoulBound Tokens (SBTs) via the backend using `ethers`.

### Quick local setup

#### Fastest option (recommended): one-command in-process chain + backend

This avoids any issues with binding to `127.0.0.1:8545` on Windows.

```powershell
npm run dev:web3
```

It will:
- boot an in-process Hardhat Network
- deploy `CollegeVerseSBT`
- start the backend with `SBT_CONTRACT_ADDRESS` set in-memory

#### Option A (recommended on Node 22): Foundry Anvil

Hardhat v2 can be unstable on Node.js v22. If you're on Node 22 (or don’t want to switch Node versions), use **Foundry Anvil** as the local chain.

1) Install Foundry (once) and ensure `anvil` is on PATH:

```powershell
anvil --version
```

2) Start Anvil (free gas accounts):

```powershell
npm run chain:anvil
```

3) Deploy the SBT contract to Anvil:

```powershell
npm run web3:deploy:anvil
```

4) Mint a quick test token:

```powershell
node scripts/mint-test-sbt.js 0xRecipientAddress
```

> Tip: Anvil prints pre-funded accounts + private keys when it starts. Copy the first private key into `ADMIN_WALLET_PRIVATE_KEY` in `.env.development`.

#### Option B: Hardhat node (works best on Node 18/20)

1) Start a local EVM chain (free gas):

```powershell
npm run chain:local
```

2) In a separate terminal, deploy the SBT contract to the local chain:

```powershell
npm run web3:deploy:local
```

This updates `.env.development` with:
- `POLYGON_AMOY_RPC_URL=http://127.0.0.1:8545`
- `ADMIN_WALLET_PRIVATE_KEY` set to Hardhat account #0 (pre-funded)
- `SBT_CONTRACT_ADDRESS=<local deployed address>`

3) Mint a quick test token (to any address) using the backend mint helper:

```powershell
node scripts/mint-test-sbt.js 0xRecipientAddress
```

### Backend endpoints

SBT endpoints (see `src/routes/v1/sbt.routes.js`):
- `GET /api/v1/sbt/stats`
- `POST /api/v1/sbt/verify/:studentId` (admin-only) — creates custodial wallet + mints first SBT
- `POST /api/v1/sbt/mint/:studentId` (admin-only) — mints an achievement SBT

> Note: For Polygon Amoy, the admin wallet *must* have test POL/MATIC to pay gas. Local mode avoids faucets.
