import { useEffect, useState } from 'react';
import AuthGuard from '../components/AuthGuard';
import Layout from '../components/Layout';
import ErrorBanner from '../components/ErrorBanner';
import api from '../lib/axiosClient';

export default function NotificationsPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const response = await api.get('/user/notifications');
        setData(response?.data?.data || null);
      } catch (err) {
        setError(err?.response?.data?.error?.message || err.message || 'Failed to load notifications');
      }
    };

    load();
  }, []);

  return (
    <AuthGuard>
      <Layout>
        <h1>Notifications</h1>
        <p>Testing call: GET /user/notifications</p>
        <ErrorBanner message={error} />
        <pre style={{ background: '#f8fafc', padding: 12, borderRadius: 8 }}>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </AuthGuard>
  );
}
