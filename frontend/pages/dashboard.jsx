import { useEffect, useState } from 'react';
import AuthGuard from '../components/AuthGuard';
import Layout from '../components/Layout';
import ErrorBanner from '../components/ErrorBanner';
import api from '../lib/axiosClient';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const { profile } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const response = await api.get('/student/profile');
        setData(response?.data?.data || null);
      } catch (err) {
        setError(err?.response?.data?.error?.message || err.message || 'Failed to load profile');
      }
    };

    load();
  }, []);

  return (
    <AuthGuard>
      <Layout>
        <h1>Dashboard</h1>
        <p>Role: {profile?.role || 'unknown'} | SubRole: {profile?.subRole || 'none'}</p>
        <ErrorBanner message={error} />
        <pre style={{ background: '#f8fafc', padding: 12, borderRadius: 8 }}>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </AuthGuard>
  );
}
