const fs = require('fs');
const admin = require('firebase-admin');

const config = require('../config');

let app;

const initFirebaseAdmin = () => {
  if (app) return app;

  const hasInlineCreds = !!(
    config.firebase.projectId
    && config.firebase.clientEmail
    && config.firebase.privateKey
  );

  const isTestEmulator = config.env === 'test' && process.env.FIRESTORE_EMULATOR_HOST;

  if (!hasInlineCreds && !config.firebase.serviceAccountPath && !isTestEmulator) {
    throw new Error('Firebase admin credentials are missing');
  }

  let credential;

  if (config.firebase.serviceAccountPath) {
    if (!fs.existsSync(config.firebase.serviceAccountPath)) {
      throw new Error('Firebase service account path does not exist');
    }
    const raw = fs.readFileSync(config.firebase.serviceAccountPath, 'utf8');
    const serviceAccount = JSON.parse(raw);
    credential = admin.credential.cert(serviceAccount);
  } else if (hasInlineCreds) {
    credential = admin.credential.cert({
      projectId: config.firebase.projectId,
      clientEmail: config.firebase.clientEmail,
      privateKey: config.firebase.privateKey.replace(/\\n/g, '\n'),
    });
  } else {
    credential = admin.credential.applicationDefault();
  }

  app = admin.initializeApp({
    credential,
    projectId: config.firebase.projectId || process.env.GCLOUD_PROJECT || 'demo-test',
    storageBucket: config.firebase.storageBucket || undefined,
  });

  return app;
};

initFirebaseAdmin();

module.exports = admin;
