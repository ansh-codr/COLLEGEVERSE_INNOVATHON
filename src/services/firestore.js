const admin = require('./firebaseAdmin');

if (!admin || typeof admin.firestore !== 'function') {
	module.exports = new Proxy(
		{},
		{
			get() {
				throw new Error(
					'Firestore is not available because Firebase Admin is disabled. Remove DISABLE_FIREBASE_ADMIN=true (or configure Firebase credentials) to use Firestore.'
				);
			},
		}
	);
} else {
	const db = admin.firestore();
	module.exports = db;
}
