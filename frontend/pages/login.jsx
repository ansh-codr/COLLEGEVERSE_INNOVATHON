import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import ErrorBanner from '../components/ErrorBanner';

export default function LoginPage() {
  const { login, error } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLocalError('');
    setLoading(true);

    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setLocalError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', fontFamily: 'sans-serif' }}>
      <h1>Login</h1>
      <ErrorBanner message={localError || error} />
      <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
        <button disabled={loading} type="submit">{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </div>
  );
}
