import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }) {
  const { profile, logout } = useAuth();

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 1000, margin: '0 auto', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <strong>CollegeVerse Frontend Basic Integration</strong>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/events">Events</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/notifications">Notifications</Link>
          {(profile?.subRole === 'adminFaculty' || profile?.role === 'admin') && <Link href="/admin">Admin</Link>}
          <button onClick={logout}>Logout</button>
        </div>
      </header>
      {children}
    </div>
  );
}
