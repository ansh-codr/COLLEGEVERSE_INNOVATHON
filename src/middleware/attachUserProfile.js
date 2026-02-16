const db = require('../services/firestore');
const CustomError = require('../utils/CustomError');
const { Roles } = require('../utils/roles');
const { incrementPlatformStats, incrementCollegeStats } = require('../services/stats.service');

const getEmailDomain = (email) => {
  if (!email || !email.includes('@')) return '';
  return email.split('@')[1].toLowerCase();
};

const resolveCollegeByDomain = async (domain) => {
  const snapshot = await db
    .collection('colleges')
    .where('domain', '==', domain)
    .where('isActive', '==', true)
    .limit(2)
    .get();

  if (snapshot.empty) return null;
  if (snapshot.size > 1) {
    throw new CustomError('Multiple colleges share the same domain', 409, 'domain_conflict');
  }
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
};

const createUserDoc = async ({ uid, email }) => {
  const domain = getEmailDomain(email);
  const college = domain ? await resolveCollegeByDomain(domain) : null;

  if (!college) {
    throw new CustomError('College domain not registered', 403, 'college_domain_invalid');
  }

  const role = Roles.STUDENT;

  const userDoc = {
    uid,
    email,
    role,
    subRole: null,
    collegeId: college ? college.id : null,
    verificationStatus: 'pending',
    schemaVersion: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await db.collection('users').doc(uid).set(userDoc);

  await incrementPlatformStats({
    totalUsers: 1,
    totalStudents: 1,
  });

  await incrementCollegeStats(userDoc.collegeId, {
    totalStudents: 1,
  });
  return userDoc;
};

const attachUserProfile = async (req, res, next) => {
  try {
    if (!req.auth || !req.auth.uid) {
      throw new CustomError('Missing authentication context', 401, 'auth_missing');
    }

    const uid = req.auth.uid;
    const email = req.auth.email;

    if (!email) {
      throw new CustomError('Email not available for user', 400, 'email_missing');
    }

    const userRef = db.collection('users').doc(uid);
    const userSnap = await userRef.get();

    const userDoc = userSnap.exists
      ? { id: userSnap.id, ...userSnap.data() }
      : await createUserDoc({ uid, email });

    req.userProfile = userDoc;
    return next();
  } catch (error) {
    const err = error instanceof CustomError
      ? error
      : new CustomError('Failed to load user profile', 500, 'profile_load_failed');
    return next(err);
  }
};

module.exports = {
  attachUserProfile,
};
