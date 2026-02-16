import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function AuthGuard({ children, roles = [], subRoles = [] }) {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace('/login');
      return;
    }

    if (roles.length > 0 && profile && !roles.includes(profile.role)) {
      router.replace('/dashboard');
      return;
    }

    if (subRoles.length > 0 && profile && !subRoles.includes(profile.subRole)) {
      router.replace('/dashboard');
    }
  }, [loading, user, profile, roles, subRoles, router]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;
  if (roles.length > 0 && profile && !roles.includes(profile.role)) return null;
  if (subRoles.length > 0 && profile && !subRoles.includes(profile.subRole)) return null;

  return children;
}
