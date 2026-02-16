import type {
  College, Student, Faculty, Recruiter, Gig, GigApplication,
  MarketplaceItem, WalletSBT, Community, Club, Event, Team,
  Placement, Notice, ChatMessage, Competition, ShortlistEntry, Session, UserRole
} from './types';

const delay = (ms = 300) => new Promise(r => setTimeout(r, ms + Math.random() * 200));

function load<T>(key: string, def: T): T {
  try { const v = localStorage.getItem('cv_' + key); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function save(key: string, v: unknown) { localStorage.setItem('cv_' + key, JSON.stringify(v)); }
const uid = () => Math.random().toString(36).slice(2, 10);

// ─── SEED DATA ───────────────────────────────────────────

const seedColleges: College[] = [
  { id: 'c1', name: 'IIT Delhi', location: 'New Delhi', ranking: 1, type: 'IIT', studentCount: 8500, departments: ['CSE', 'ECE', 'Mechanical', 'Civil', 'Chemical'], description: 'Premier engineering institute known for cutting-edge research and innovation.', established: 1961 },
  { id: 'c2', name: 'IIT Bombay', location: 'Mumbai', ranking: 2, type: 'IIT', studentCount: 10000, departments: ['CSE', 'EE', 'Mechanical', 'Aerospace', 'Chemistry'], description: 'Leading technical institute with world-class facilities and global recognition.', established: 1958 },
  { id: 'c3', name: 'NIT Trichy', location: 'Tiruchirappalli', ranking: 8, type: 'NIT', studentCount: 6000, departments: ['CSE', 'ECE', 'Civil', 'Mechanical', 'Instrumentation'], description: 'Top NIT with strong placement record and vibrant campus life.', established: 1964 },
  { id: 'c4', name: 'BITS Pilani', location: 'Pilani', ranking: 5, type: 'Private', studentCount: 4500, departments: ['CSE', 'ECE', 'EEE', 'Pharmacy', 'Economics'], description: 'Premier private university known for flexible academics and strong industry ties.', established: 1964 },
  { id: 'c5', name: 'DTU', location: 'New Delhi', ranking: 12, type: 'State', studentCount: 7000, departments: ['CSE', 'IT', 'ECE', 'Mechanical', 'Civil'], description: 'Delhi Technological University - a top state engineering college.', established: 1941 },
];

const seedStudents: Student[] = [
  { id: 's1', name: 'Arjun Patel', email: 'arjun@iitd.ac.in', password: 'pass123', collegeId: 'c1', verificationStatus: 'verified', avatar: '', skills: ['React', 'Python', 'ML'], points: { cultural: 85, sports: 60, education: 92, coding: 88 }, github: 'arjunpatel', linkedin: 'arjunpatel', leetcode: 'arjunp', achievements: [{ title: 'Hackathon Winner', date: '2025-03-15', points: 50 }, { title: 'Research Paper Published', date: '2025-06-01', points: 80 }], certificates: [{ title: 'AWS Solutions Architect', issuer: 'AWS', date: '2025-01-10' }], bio: 'CS undergrad passionate about AI and distributed systems.' },
  { id: 's2', name: 'Priya Sharma', email: 'priya@iitd.ac.in', password: 'pass123', collegeId: 'c1', verificationStatus: 'pending', avatar: '', skills: ['Java', 'Spring', 'SQL'], points: { cultural: 70, sports: 45, education: 88, coding: 75 }, achievements: [], certificates: [], bio: 'Aspiring software engineer.' },
  { id: 's3', name: 'Rahul Kumar', email: 'rahul@iitb.ac.in', password: 'pass123', collegeId: 'c2', verificationStatus: 'verified', avatar: '', skills: ['C++', 'Algorithms', 'System Design'], points: { cultural: 40, sports: 90, education: 95, coding: 96 }, github: 'rahulk', leetcode: 'rahulk99', achievements: [{ title: 'ICPC Regionalist', date: '2025-02-20', points: 100 }], certificates: [{ title: 'Google Cloud Professional', issuer: 'Google', date: '2025-04-15' }], bio: 'Competitive programmer and systems enthusiast.' },
  { id: 's4', name: 'Sneha Reddy', email: 'sneha@nitt.ac.in', password: 'pass123', collegeId: 'c3', verificationStatus: 'pending', avatar: '', skills: ['UI/UX', 'Figma', 'React'], points: { cultural: 95, sports: 30, education: 78, coding: 65 }, achievements: [{ title: 'Best Design Award', date: '2025-05-10', points: 40 }], certificates: [], bio: 'Designer who codes.' },
  { id: 's5', name: 'Amit Singh', email: 'amit@bits.ac.in', password: 'pass123', collegeId: 'c4', verificationStatus: 'rejected', avatar: '', skills: ['Blockchain', 'Solidity', 'Web3'], points: { cultural: 55, sports: 70, education: 82, coding: 78 }, achievements: [], certificates: [], bio: 'Web3 enthusiast.' },
];

const seedFaculty: Faculty[] = [
  { id: 'f1', name: 'Dr. Rajesh Gupta', email: 'rajesh@iitd.ac.in', password: 'pass123', collegeId: 'c1', role: 'admin', department: 'CSE' },
  { id: 'f2', name: 'Prof. Meera Iyer', email: 'meera@iitb.ac.in', password: 'pass123', collegeId: 'c2', role: 'normal', department: 'ECE' },
  { id: 'f3', name: 'Dr. Suresh Nair', email: 'suresh@nitt.ac.in', password: 'pass123', collegeId: 'c3', role: 'admin', department: 'CSE' },
];

const seedRecruiters: Recruiter[] = [
  { id: 'r1', name: 'Vikram Mehta', email: 'vikram@techcorp.com', password: 'pass123', company: 'TechCorp', position: 'Engineering Manager' },
  { id: 'r2', name: 'Ananya Das', email: 'ananya@innolabs.com', password: 'pass123', company: 'InnovateLabs', position: 'Talent Acquisition Lead' },
];

const seedGigs: Gig[] = [
  { id: 'g1', title: 'Build a React Dashboard', description: 'Create a responsive analytics dashboard with charts and data visualization.', skills: ['React', 'TailwindCSS', 'Chart.js'], reward: 5000, deadline: '2026-03-15', mode: 'remote', category: 'Development', duration: '2 weeks', paid: true, recruiterId: 'r1', status: 'open' },
  { id: 'g2', title: 'ML Model for Sentiment Analysis', description: 'Train and deploy a sentiment analysis model for product reviews.', skills: ['Python', 'ML', 'NLP'], reward: 8000, deadline: '2026-04-01', mode: 'remote', category: 'Data Science', duration: '3 weeks', paid: true, recruiterId: 'r1', status: 'open' },
  { id: 'g3', title: 'Campus Event Photography', description: 'Photograph the annual tech fest events over 3 days.', skills: ['Photography', 'Editing'], reward: 3000, deadline: '2026-03-20', mode: 'on-campus', category: 'Creative', duration: '3 days', paid: true, recruiterId: 'r2', status: 'open' },
  { id: 'g4', title: 'Open Source Documentation', description: 'Write comprehensive docs for an open-source library.', skills: ['Technical Writing', 'Markdown'], reward: 0, deadline: '2026-05-01', mode: 'remote', category: 'Writing', duration: '1 week', paid: false, recruiterId: 'r2', status: 'open' },
  { id: 'g5', title: 'UI/UX Redesign for Mobile App', description: 'Redesign the user experience for our mobile banking app.', skills: ['Figma', 'UI/UX', 'Mobile Design'], reward: 12000, deadline: '2026-03-30', mode: 'remote', category: 'Design', duration: '4 weeks', paid: true, recruiterId: 'r1', status: 'open' },
];

const seedMarketplace: MarketplaceItem[] = [
  { id: 'm1', title: 'Engineering Mathematics Textbook', category: 'Books', price: 350, condition: 'Good', description: 'Kreyszig Advanced Engineering Mathematics, 10th edition. Minor highlighting.', location: 'IIT Delhi Campus', sellerId: 's1', collegeId: 'c1', status: 'available', flagged: false, createdAt: '2026-01-15' },
  { id: 'm2', title: 'TI-84 Scientific Calculator', category: 'Electronics', price: 2500, condition: 'Like New', description: 'Barely used TI-84 Plus CE. Comes with original case and USB cable.', location: 'IIT Delhi Hostel', sellerId: 's1', collegeId: 'c1', status: 'available', flagged: false, createdAt: '2026-01-20' },
  { id: 'm3', title: 'Coding Bootcamp Notes Bundle', category: 'Notes', price: 150, condition: 'New', description: 'Comprehensive DSA + System Design handwritten notes. 200+ pages.', location: 'IIT Bombay', sellerId: 's3', collegeId: 'c2', status: 'available', flagged: false, createdAt: '2026-02-01' },
  { id: 'm4', title: 'Desk Lamp with USB Charger', category: 'Electronics', price: 800, condition: 'Good', description: 'LED desk lamp with 3 brightness levels and built-in USB charger.', location: 'NIT Trichy', sellerId: 's4', collegeId: 'c3', status: 'available', flagged: false, createdAt: '2026-02-05' },
  { id: 'm5', title: 'Guitar (Acoustic)', category: 'Instruments', price: 4000, condition: 'Fair', description: 'Yamaha F310 acoustic guitar. Some wear but sounds great.', location: 'BITS Pilani', sellerId: 's5', collegeId: 'c4', status: 'available', flagged: false, createdAt: '2026-02-10' },
];

const seedCommunities: Community[] = [
  { id: 'com1', name: 'IIT Delhi - Official', collegeId: 'c1', type: 'mandatory', members: ['s1', 's2'], description: 'Official community for all IIT Delhi students.' },
  { id: 'com2', name: 'Coding Club IITD', collegeId: 'c1', type: 'optional', members: ['s1'], description: 'For coding enthusiasts at IIT Delhi.' },
  { id: 'com3', name: 'IIT Bombay - Official', collegeId: 'c2', type: 'mandatory', members: ['s3'], description: 'Official community for all IIT Bombay students.' },
];

const seedClubs: Club[] = [
  { id: 'cl1', name: 'AI Research Club', collegeId: 'c1', category: 'Technical', purpose: 'Explore AI/ML research and build projects together.', sponsor: 'Dr. Rajesh Gupta', status: 'approved', members: ['s1'], createdBy: 's1' },
  { id: 'cl2', name: 'Music Society', collegeId: 'c1', category: 'Cultural', purpose: 'Unite musicians on campus for jams and performances.', sponsor: 'Prof. Anita Roy', status: 'pending', members: [], createdBy: 's2' },
];

const seedEvents: Event[] = [
  { id: 'e1', title: 'TechFest 2026', collegeId: 'c1', type: 'Technical', date: '2026-03-15', description: 'Annual technical festival with hackathons, workshops, and talks.', tags: ['hackathon', 'workshop', 'tech'], applicants: ['s1'] },
  { id: 'e2', title: 'Cultural Night', collegeId: 'c1', type: 'Cultural', date: '2026-04-10', description: 'An evening of music, dance, and drama performances.', tags: ['music', 'dance', 'cultural'], applicants: [] },
  { id: 'e3', title: 'Sports Meet 2026', collegeId: 'c2', type: 'Sports', date: '2026-03-25', description: 'Inter-department sports competition.', tags: ['sports', 'competition'], applicants: ['s3'] },
];

const seedTeams: Team[] = [
  { id: 't1', eventId: 'e1', name: 'Team Alpha', members: ['s1'], openSlots: 2, createdBy: 's1' },
];

const seedPlacements: Placement[] = [
  { id: 'p1', title: 'Software Engineer', company: 'Google', collegeId: 'c1', deadline: '2026-03-20', description: 'Full-time SWE role for 2026 batch.', requirements: ['DSA', 'System Design', 'CS Fundamentals'], applicants: ['s1'], package: '₹45 LPA' },
  { id: 'p2', title: 'Product Manager', company: 'Microsoft', collegeId: 'c1', deadline: '2026-04-15', description: 'APM role for graduating students.', requirements: ['Product Sense', 'Analytics', 'Communication'], applicants: [], package: '₹38 LPA' },
  { id: 'p3', title: 'Data Scientist', company: 'Amazon', collegeId: 'c2', deadline: '2026-03-30', description: 'DS role in the Alexa team.', requirements: ['Python', 'ML', 'Statistics'], applicants: ['s3'], package: '₹42 LPA' },
];

const seedNotices: Notice[] = [
  { id: 'n1', title: 'Placement Drive Schedule Released', content: 'The placement drive for 2026 batch begins March 1st. Check the placements portal for details.', collegeId: 'c1', createdBy: 'f1', date: '2026-02-01', priority: 'high' },
  { id: 'n2', title: 'Library Hours Extended', content: 'Library will remain open until midnight during exam season (Feb 20 - Mar 10).', collegeId: 'c1', createdBy: 'f1', date: '2026-02-10', priority: 'medium' },
];

const seedSBTs: WalletSBT[] = [
  { id: 'sbt1', studentId: 's1', title: 'Verified Student Identity', reason: 'Identity verified by IIT Delhi administration', issuedBy: 'IIT Delhi', date: '2025-08-15', txHash: '0x7a3b...e4f1' },
  { id: 'sbt2', studentId: 's1', title: 'Hackathon Winner', reason: 'Won TechFest 2025 Hackathon', issuedBy: 'IIT Delhi TechFest', date: '2025-03-15', txHash: '0x9c2d...b8a3' },
  { id: 'sbt3', studentId: 's3', title: 'Verified Student Identity', reason: 'Identity verified by IIT Bombay administration', issuedBy: 'IIT Bombay', date: '2025-09-01', txHash: '0x5e1f...c7d2' },
  { id: 'sbt4', studentId: 's3', title: 'ICPC Regionalist', reason: 'Qualified for ICPC Regionals 2025', issuedBy: 'ICPC Foundation', date: '2025-02-20', txHash: '0x3d4e...a1b5' },
];

const seedCompetitions: Competition[] = [
  { id: 'comp1', title: 'Inter-IIT Tech Meet', type: 'all-college', date: '2026-04-15', description: 'Annual inter-IIT technical competition with multiple problem statements.', participants: ['s1', 's3'], status: 'upcoming', category: 'Technical' },
  { id: 'comp2', title: 'Delhi Area Coding Championship', type: 'area', date: '2026-03-25', description: 'Coding competition for all Delhi-NCR colleges.', participants: [], status: 'upcoming', category: 'Coding' },
  { id: 'comp3', title: 'National Sports Olympiad', type: 'all-college', date: '2026-05-01', description: 'Multi-sport competition across all participating colleges.', participants: ['s3'], status: 'upcoming', category: 'Sports' },
];

const seedGigApps: GigApplication[] = [];
const seedMessages: ChatMessage[] = [
  { id: 'msg1', communityId: 'com1', senderId: 's1', senderName: 'Arjun Patel', text: 'Hey everyone! Excited for TechFest?', timestamp: '2026-02-10T10:30:00Z' },
  { id: 'msg2', communityId: 'com1', senderId: 's2', senderName: 'Priya Sharma', text: 'Yes! Can\'t wait. Anyone forming teams?', timestamp: '2026-02-10T10:32:00Z' },
];
const seedShortlist: ShortlistEntry[] = [];

// ─── DATA ACCESS ──────────────────────────────────────────

class MockDB {
  get colleges() { return load('colleges', seedColleges); }
  set colleges(v) { save('colleges', v); }
  get students() { return load('students', seedStudents); }
  set students(v) { save('students', v); }
  get faculty() { return load('faculty', seedFaculty); }
  set faculty(v) { save('faculty', v); }
  get recruiters() { return load('recruiters', seedRecruiters); }
  set recruiters(v) { save('recruiters', v); }
  get gigs() { return load('gigs', seedGigs); }
  set gigs(v) { save('gigs', v); }
  get gigApps() { return load('gigApps', seedGigApps); }
  set gigApps(v) { save('gigApps', v); }
  get marketplace() { return load('marketplace', seedMarketplace); }
  set marketplace(v) { save('marketplace', v); }
  get sbts() { return load('sbts', seedSBTs); }
  set sbts(v) { save('sbts', v); }
  get communities() { return load('communities', seedCommunities); }
  set communities(v) { save('communities', v); }
  get clubs() { return load('clubs', seedClubs); }
  set clubs(v) { save('clubs', v); }
  get events() { return load('events', seedEvents); }
  set events(v) { save('events', v); }
  get teams() { return load('teams', seedTeams); }
  set teams(v) { save('teams', v); }
  get placements() { return load('placements', seedPlacements); }
  set placements(v) { save('placements', v); }
  get notices() { return load('notices', seedNotices); }
  set notices(v) { save('notices', v); }
  get messages() { return load('messages', seedMessages); }
  set messages(v) { save('messages', v); }
  get competitions() { return load('competitions', seedCompetitions); }
  set competitions(v) { save('competitions', v); }
  get shortlist() { return load('shortlist', seedShortlist); }
  set shortlist(v) { save('shortlist', v); }
}

const db = new MockDB();

// ─── API ──────────────────────────────────────────────────

export const api = {
  // Auth
  async login(email: string, password: string): Promise<Session & { user: Student | Faculty | Recruiter }> {
    await delay();
    const s = db.students.find(x => x.email === email && x.password === password);
    if (s) return { role: 'student', userId: s.id, token: 'tok_' + uid(), user: s };
    const f = db.faculty.find(x => x.email === email && x.password === password);
    if (f) return { role: 'faculty', userId: f.id, token: 'tok_' + uid(), user: f };
    const r = db.recruiters.find(x => x.email === email && x.password === password);
    if (r) return { role: 'recruiter', userId: r.id, token: 'tok_' + uid(), user: r };
    throw new Error('Invalid credentials');
  },

  // Colleges
  async getColleges() { await delay(); return db.colleges; },
  async getCollegeById(id: string) { await delay(); return db.colleges.find(c => c.id === id); },

  // Students
  async getStudents() { await delay(); return db.students; },
  async getStudentById(id: string) { await delay(); return db.students.find(s => s.id === id); },
  async updateStudent(id: string, data: Partial<Student>) {
    await delay();
    const all = db.students;
    const idx = all.findIndex(s => s.id === id);
    if (idx === -1) throw new Error('Student not found');
    all[idx] = { ...all[idx], ...data };
    db.students = all;
    return all[idx];
  },
  async getVerifiedStudents() { await delay(); return db.students.filter(s => s.verificationStatus === 'verified'); },

  // Verification
  async getPendingStudents(collegeId: string) {
    await delay();
    return db.students.filter(s => s.collegeId === collegeId && s.verificationStatus === 'pending');
  },
  async approveStudent(studentId: string, collegeId: string) {
    await delay();
    const all = db.students;
    const idx = all.findIndex(s => s.id === studentId);
    if (idx === -1) throw new Error('Student not found');
    all[idx].verificationStatus = 'verified';
    db.students = all;
    // Issue SBT #1
    const college = db.colleges.find(c => c.id === collegeId);
    const sbt: WalletSBT = {
      id: 'sbt_' + uid(), studentId, title: 'Verified Student Identity',
      reason: `Identity verified by ${college?.name || 'College'} administration`,
      issuedBy: college?.name || 'College', date: new Date().toISOString().split('T')[0],
      txHash: '0x' + uid() + '...' + uid().slice(0, 4),
    };
    const sbts = db.sbts;
    sbts.push(sbt);
    db.sbts = sbts;
    return all[idx];
  },
  async rejectStudent(studentId: string) {
    await delay();
    const all = db.students;
    const idx = all.findIndex(s => s.id === studentId);
    if (idx === -1) throw new Error('Student not found');
    all[idx].verificationStatus = 'rejected';
    db.students = all;
    return all[idx];
  },

  // Wallet
  async getWallet(studentId: string) { await delay(); return db.sbts.filter(s => s.studentId === studentId); },
  async issueSbt(studentId: string, data: Omit<WalletSBT, 'id' | 'studentId'>) {
    await delay();
    const sbt: WalletSBT = { id: 'sbt_' + uid(), studentId, ...data };
    const all = db.sbts; all.push(sbt); db.sbts = all;
    return sbt;
  },

  // Leaderboards
  async getCollegeLeaderboard() {
    await delay();
    const colleges = db.colleges;
    const students = db.students;
    return colleges.map(c => {
      const cs = students.filter(s => s.collegeId === c.id && s.verificationStatus === 'verified');
      const total = cs.reduce((a, s) => a + s.points.cultural + s.points.sports + s.points.education + s.points.coding, 0);
      return { ...c, totalPoints: total, verifiedStudents: cs.length };
    }).sort((a, b) => b.totalPoints - a.totalPoints);
  },
  async getStudentLeaderboard(category?: string, collegeId?: string) {
    await delay();
    let students = db.students.filter(s => s.verificationStatus === 'verified');
    if (collegeId) students = students.filter(s => s.collegeId === collegeId);
    return students.map(s => {
      const pts = category === 'cultural' ? s.points.cultural : category === 'sports' ? s.points.sports : category === 'education' ? s.points.education : s.points.cultural + s.points.sports + s.points.education + s.points.coding;
      const college = db.colleges.find(c => c.id === s.collegeId);
      return { ...s, totalPoints: pts, collegeName: college?.name || '' };
    }).sort((a, b) => b.totalPoints - a.totalPoints);
  },

  // Gigs
  async getGigs() { await delay(); return db.gigs; },
  async createGig(data: Omit<Gig, 'id' | 'status'>) {
    await delay();
    const gig: Gig = { id: 'g_' + uid(), status: 'open', ...data };
    const all = db.gigs; all.push(gig); db.gigs = all;
    return gig;
  },
  async getGigApplications(gigId?: string, studentId?: string) {
    await delay();
    let apps = db.gigApps;
    if (gigId) apps = apps.filter(a => a.gigId === gigId);
    if (studentId) apps = apps.filter(a => a.studentId === studentId);
    return apps;
  },
  async applyToGig(gigId: string, studentId: string) {
    await delay();
    const app: GigApplication = { id: 'ga_' + uid(), gigId, studentId, status: 'applied' };
    const all = db.gigApps; all.push(app); db.gigApps = all;
    return app;
  },
  async withdrawGig(appId: string) {
    await delay();
    let all = db.gigApps;
    all = all.filter(a => a.id !== appId);
    db.gigApps = all;
  },
  async updateGigApp(appId: string, status: GigApplication['status']) {
    await delay();
    const all = db.gigApps;
    const idx = all.findIndex(a => a.id === appId);
    if (idx !== -1) all[idx].status = status;
    db.gigApps = all;
    return all[idx];
  },
  async completeGig(appId: string, studentId: string, gigTitle: string) {
    await delay();
    const all = db.gigApps;
    const idx = all.findIndex(a => a.id === appId);
    if (idx !== -1) all[idx].status = 'completed';
    db.gigApps = all;
    // Issue SBT
    await api.issueSbt(studentId, {
      title: 'MicroGig Completed',
      reason: `Completed microgig: ${gigTitle}`,
      issuedBy: 'CollegeVerse',
      date: new Date().toISOString().split('T')[0],
      txHash: '0x' + uid() + '...' + uid().slice(0, 4),
    });
    return all[idx];
  },

  // Marketplace
  async getMarketplaceItems() { await delay(); return db.marketplace; },
  async createMarketplaceItem(data: Omit<MarketplaceItem, 'id' | 'status' | 'flagged' | 'createdAt'>) {
    await delay();
    const item: MarketplaceItem = { id: 'm_' + uid(), status: 'available', flagged: false, createdAt: new Date().toISOString().split('T')[0], ...data };
    const all = db.marketplace; all.push(item); db.marketplace = all;
    return item;
  },
  async reserveItem(itemId: string) {
    await delay();
    const all = db.marketplace;
    const idx = all.findIndex(i => i.id === itemId);
    if (idx !== -1) all[idx].status = 'reserved';
    db.marketplace = all;
    return all[idx];
  },
  async flagItem(itemId: string, reason: string) {
    await delay();
    const all = db.marketplace;
    const idx = all.findIndex(i => i.id === itemId);
    if (idx !== -1) { all[idx].flagged = true; all[idx].flagReason = reason; }
    db.marketplace = all;
    return all[idx];
  },
  async deleteMarketplaceItem(itemId: string) {
    await delay();
    db.marketplace = db.marketplace.filter(i => i.id !== itemId);
  },
  async updateMarketplaceItem(itemId: string, data: Partial<MarketplaceItem>) {
    await delay();
    const all = db.marketplace;
    const idx = all.findIndex(i => i.id === itemId);
    if (idx !== -1) all[idx] = { ...all[idx], ...data };
    db.marketplace = all;
    return all[idx];
  },

  // Communities
  async getCommunities(collegeId?: string) {
    await delay();
    return collegeId ? db.communities.filter(c => c.collegeId === collegeId) : db.communities;
  },
  async joinCommunity(communityId: string, studentId: string) {
    await delay();
    const all = db.communities;
    const idx = all.findIndex(c => c.id === communityId);
    if (idx !== -1 && !all[idx].members.includes(studentId)) all[idx].members.push(studentId);
    db.communities = all;
    return all[idx];
  },
  async leaveCommunity(communityId: string, studentId: string) {
    await delay();
    const all = db.communities;
    const idx = all.findIndex(c => c.id === communityId);
    if (idx !== -1) all[idx].members = all[idx].members.filter(m => m !== studentId);
    db.communities = all;
  },

  // Clubs
  async getClubs(collegeId?: string) {
    await delay();
    return collegeId ? db.clubs.filter(c => c.collegeId === collegeId) : db.clubs;
  },
  async createClubApplication(data: Omit<Club, 'id' | 'status' | 'members'>) {
    await delay();
    const club: Club = { id: 'cl_' + uid(), status: 'pending', members: [], ...data };
    const all = db.clubs; all.push(club); db.clubs = all;
    return club;
  },
  async approveClub(clubId: string) {
    await delay();
    const all = db.clubs;
    const idx = all.findIndex(c => c.id === clubId);
    if (idx !== -1) all[idx].status = 'approved';
    db.clubs = all;
    return all[idx];
  },
  async rejectClub(clubId: string) {
    await delay();
    const all = db.clubs;
    const idx = all.findIndex(c => c.id === clubId);
    if (idx !== -1) all[idx].status = 'rejected';
    db.clubs = all;
    return all[idx];
  },
  async joinClub(clubId: string, studentId: string) {
    await delay();
    const all = db.clubs;
    const idx = all.findIndex(c => c.id === clubId);
    if (idx !== -1 && !all[idx].members.includes(studentId)) all[idx].members.push(studentId);
    db.clubs = all;
  },

  // Events
  async getEvents(collegeId?: string) {
    await delay();
    return collegeId ? db.events.filter(e => e.collegeId === collegeId) : db.events;
  },
  async createEvent(data: Omit<Event, 'id' | 'applicants'>) {
    await delay();
    const event: Event = { id: 'e_' + uid(), applicants: [], ...data };
    const all = db.events; all.push(event); db.events = all;
    return event;
  },
  async applyToEvent(eventId: string, studentId: string) {
    await delay();
    const all = db.events;
    const idx = all.findIndex(e => e.id === eventId);
    if (idx !== -1 && !all[idx].applicants.includes(studentId)) all[idx].applicants.push(studentId);
    db.events = all;
  },
  async deleteEvent(eventId: string) { await delay(); db.events = db.events.filter(e => e.id !== eventId); },

  // Teams
  async getTeams(eventId: string) { await delay(); return db.teams.filter(t => t.eventId === eventId); },
  async createTeam(data: Omit<Team, 'id'>) {
    await delay();
    const team: Team = { id: 't_' + uid(), ...data };
    const all = db.teams; all.push(team); db.teams = all;
    return team;
  },
  async joinTeam(teamId: string, studentId: string) {
    await delay();
    const all = db.teams;
    const idx = all.findIndex(t => t.id === teamId);
    if (idx !== -1 && all[idx].openSlots > 0) {
      all[idx].members.push(studentId);
      all[idx].openSlots--;
    }
    db.teams = all;
  },

  // Placements
  async getPlacements(collegeId?: string) {
    await delay();
    return collegeId ? db.placements.filter(p => p.collegeId === collegeId) : db.placements;
  },
  async applyToPlacement(placementId: string, studentId: string) {
    await delay();
    const all = db.placements;
    const idx = all.findIndex(p => p.id === placementId);
    if (idx !== -1 && !all[idx].applicants.includes(studentId)) all[idx].applicants.push(studentId);
    db.placements = all;
  },

  // Notices
  async getNotices(collegeId: string) { await delay(); return db.notices.filter(n => n.collegeId === collegeId); },
  async createNotice(data: Omit<Notice, 'id'>) {
    await delay();
    const notice: Notice = { id: 'n_' + uid(), ...data };
    const all = db.notices; all.push(notice); db.notices = all;
    return notice;
  },
  async updateNotice(id: string, data: Partial<Notice>) {
    await delay();
    const all = db.notices;
    const idx = all.findIndex(n => n.id === id);
    if (idx !== -1) all[idx] = { ...all[idx], ...data };
    db.notices = all;
    return all[idx];
  },
  async deleteNotice(id: string) { await delay(); db.notices = db.notices.filter(n => n.id !== id); },

  // Messages
  async getMessages(communityId: string) { await delay(); return db.messages.filter(m => m.communityId === communityId); },
  async sendMessage(data: Omit<ChatMessage, 'id' | 'timestamp'>) {
    await delay();
    const blockedWords = ['spam', 'abuse', 'hate'];
    if (blockedWords.some(w => data.text.toLowerCase().includes(w))) {
      throw new Error('Message blocked by AI moderation: contains prohibited content.');
    }
    const msg: ChatMessage = { id: 'msg_' + uid(), timestamp: new Date().toISOString(), ...data };
    const all = db.messages; all.push(msg); db.messages = all;
    return msg;
  },
  async deleteMessage(id: string) { await delay(); db.messages = db.messages.filter(m => m.id !== id); },

  // Competitions
  async getCompetitions() { await delay(); return db.competitions; },
  async joinCompetition(compId: string, studentId: string) {
    await delay();
    const all = db.competitions;
    const idx = all.findIndex(c => c.id === compId);
    if (idx !== -1 && !all[idx].participants.includes(studentId)) all[idx].participants.push(studentId);
    db.competitions = all;
  },

  // Shortlist
  async getShortlist(recruiterId: string) { await delay(); return db.shortlist.filter(s => s.recruiterId === recruiterId); },
  async addToShortlist(entry: ShortlistEntry) {
    await delay();
    const all = db.shortlist; all.push(entry); db.shortlist = all;
  },
  async removeFromShortlist(recruiterId: string, studentId: string) {
    await delay();
    db.shortlist = db.shortlist.filter(s => !(s.recruiterId === recruiterId && s.studentId === studentId));
  },
  async updateShortlistNote(recruiterId: string, studentId: string, notes: string) {
    await delay();
    const all = db.shortlist;
    const idx = all.findIndex(s => s.recruiterId === recruiterId && s.studentId === studentId);
    if (idx !== -1) all[idx].notes = notes;
    db.shortlist = all;
  },

  // Faculty
  async getFacultyById(id: string) { await delay(); return db.faculty.find(f => f.id === id); },

  // Analytics (mock)
  async getCollegeAnalytics(collegeId: string) {
    await delay();
    const students = db.students.filter(s => s.collegeId === collegeId);
    const verified = students.filter(s => s.verificationStatus === 'verified').length;
    const events = db.events.filter(e => e.collegeId === collegeId);
    const totalApplicants = events.reduce((a, e) => a + e.applicants.length, 0);
    const gigApps = db.gigApps;
    const completedGigs = gigApps.filter(a => a.status === 'completed' && students.some(s => s.id === a.studentId)).length;
    const marketItems = db.marketplace.filter(m => m.collegeId === collegeId);
    return {
      totalStudents: students.length, verified, pending: students.length - verified,
      totalEvents: events.length, totalApplicants,
      completedGigs, activeGigs: gigApps.filter(a => a.status === 'applied').length,
      marketplaceVolume: marketItems.reduce((a, m) => a + m.price, 0),
      marketplaceItems: marketItems.length,
    };
  },

  // Contact inquiry (mock)
  async submitContactInquiry(data: { name: string; email: string; message: string; collegeId?: string }) {
    await delay();
    console.log('Contact inquiry submitted:', data);
    return { success: true };
  },

  // Reset
  resetAll() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('cv_'));
    keys.forEach(k => localStorage.removeItem(k));
    localStorage.removeItem('cv_session');
  },
};
