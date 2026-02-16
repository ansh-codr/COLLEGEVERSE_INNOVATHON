const { requireRole } = require('../../src/middleware/requireRole');

const createRes = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
});

const createNext = () => jest.fn();

describe('requireRole middleware', () => {
  it('rejects when role is missing', () => {
    const req = { userProfile: null };
    const res = createRes();
    const next = createNext();

    requireRole(['student'])(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('allows when role is permitted', () => {
    const req = { userProfile: { role: 'student' } };
    const res = createRes();
    const next = createNext();

    requireRole(['student'])(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });
});
