jest.mock('../../src/services/firestore', () => {
  const { createFirestoreMock } = require('../mocks/firestore');
  return createFirestoreMock({
    profile: {
      collegeId: 'college_1',
      categoryScores: { academic: 1, sports: 1, cultural: 1 },
      skills: ['JS'],
    },
  });
});

jest.mock('../../src/services/stats.service', () => ({
  incrementPlatformStats: jest.fn(async () => null),
  incrementCollegeStats: jest.fn(async () => null),
}));

jest.mock('../../src/services/audit.service', () => ({
  logAudit: jest.fn(async () => null),
}));

const { updateStudentScore } = require('../../src/services/leaderboard.service');

describe('leaderboard.service', () => {
  it('updates student score without throwing', async () => {
    await expect(updateStudentScore('student_1', 'academic', 5)).resolves.toBeDefined();
  });
});
