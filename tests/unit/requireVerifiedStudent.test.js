const { requireVerifiedStudent } = require('../../src/middleware/requireVerifiedStudent');

const createRes = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
});

const createNext = () => jest.fn();

describe('requireVerifiedStudent middleware', () => {
  it('rejects unverified student', () => {
    const req = { userProfile: { role: 'student', verificationStatus: 'pending' } };
    const res = createRes();
    const next = createNext();

    requireVerifiedStudent(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('allows verified student', () => {
    const req = { userProfile: { role: 'student', verificationStatus: 'verified' } };
    const res = createRes();
    const next = createNext();

    requireVerifiedStudent(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });
});
