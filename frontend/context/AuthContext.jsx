import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../lib/firebaseClient';
import api from '../lib/axiosClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const bootstrap = async () => {
    const response = await api.post('/auth/bootstrap');
    setProfile(response?.data?.data || null);
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      setError('Firebase Auth is not configured. Add NEXT_PUBLIC_FIREBASE_* values.');
      return () => {};
    }

    const unsubscribe = onAuthStateChanged(auth, async (nextUser) => {
      setUser(nextUser);
      setError('');

      if (nextUser) {
        try {
          await bootstrap();
        } catch (err) {
          setError(err?.response?.data?.error?.message || err.message || 'Bootstrap failed');
          setProfile(null);
        }
      } else {
        setProfile(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    if (!auth) throw new Error('Firebase Auth is not configured');
    setError('');
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (!auth) return;
    setError('');
    await signOut(auth);
  };

  const value = useMemo(() => ({
    user,
    profile,
    loading,
    error,
    login,
    logout,
    refreshProfile: bootstrap,
  }), [user, profile, loading, error]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
};
