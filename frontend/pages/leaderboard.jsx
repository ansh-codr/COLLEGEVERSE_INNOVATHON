import { useEffect, useState } from 'react';
import AuthGuard from '../components/AuthGuard';
import Layout from '../components/Layout';
import ErrorBanner from '../components/ErrorBanner';
import api from '../lib/axiosClient';

export default function LeaderboardPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const response = await api.get('/leaderboard');
        setData(response?.data?.data || null);
      } catch (err) {
        setError(err?.response?.data?.error?.message || err.message || 'Failed to load leaderboard');
      }
    };

    load();
  }, []);

  return (
    <AuthGuard>
      <Layout>
        <h1>Leaderboard</h1>
        <p>Testing call: GET /leaderboard</p>
        <ErrorBanner message={error} />
        <pre style={{ background: '#f8fafc', padding: 12, borderRadius: 8 }}>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </AuthGuard>
  );
}
