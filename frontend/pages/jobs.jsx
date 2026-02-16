import { useState } from 'react';
import AuthGuard from '../components/AuthGuard';
import Layout from '../components/Layout';
import ErrorBanner from '../components/ErrorBanner';
import api from '../lib/axiosClient';

export default function JobsPage() {
  const [jobId, setJobId] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apply = async () => {
    if (!jobId.trim()) {
      setError('Enter a job id first');
      return;
    }

    setLoading(true);
    setError('');
    setResponseData(null);

    try {
      const response = await api.post(`/student/jobs/${jobId.trim()}/apply`);
      setResponseData(response?.data?.data || null);
    } catch (err) {
      setError(err?.response?.data?.error?.message || err.message || 'Failed to apply');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthGuard roles={['student']}>
      <Layout>
        <h1>Jobs</h1>
        <p>Testing call: POST /student/jobs/:id/apply</p>
        <ErrorBanner message={error} />
        <div style={{ display: 'flex', gap: 8 }}>
          <input value={jobId} onChange={(e) => setJobId(e.target.value)} placeholder="Job ID" />
          <button onClick={apply} disabled={loading}>{loading ? 'Applying...' : 'Apply'}</button>
        </div>
        <pre style={{ background: '#f8fafc', padding: 12, borderRadius: 8, marginTop: 12 }}>
          {JSON.stringify(responseData, null, 2)}
        </pre>
      </Layout>
    </AuthGuard>
  );
}
