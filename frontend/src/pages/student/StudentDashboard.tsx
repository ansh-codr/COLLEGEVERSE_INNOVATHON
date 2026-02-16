import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import { Link } from 'react-router-dom';
import type { Student } from '@/lib/types';
import { Shield, Wallet, Zap, ShoppingBag, Calendar, Trophy, AlertTriangle } from 'lucide-react';

export default function StudentDashboard() {
  const { session, isVerified } = useAuth();
  const student = session?.user as Student;
  const [sbts, setSbts] = useState<any[]>([]);
  const [apps, setApps] = useState<any[]>([]);

  useEffect(() => {
    if (student) {
      api.getWallet(student.id).then(setSbts);
      api.getGigApplications(undefined, student.id).then(setApps);
    }
  }, [student]);

  const verified = isVerified();

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, {student?.name?.split(' ')[0]}!</h1>
          <p className="text-sm text-muted-foreground">Here's your overview</p>
        </div>

        {!verified && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20">
            <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Verification Pending</p>
              <p className="text-xs text-muted-foreground">Your identity is not yet verified. Some features are locked until your college verifies you.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Status', value: verified ? 'Verified ✓' : 'Pending', icon: <Shield className="h-5 w-5" />, color: verified ? 'text-success' : 'text-warning' },
            { label: 'SBTs', value: sbts.length, icon: <Wallet className="h-5 w-5" />, color: 'text-primary' },
            { label: 'Gig Apps', value: apps.length, icon: <Zap className="h-5 w-5" />, color: 'text-cyan' },
            { label: 'Points', value: student ? student.points.cultural + student.points.sports + student.points.education + student.points.coding : 0, icon: <Trophy className="h-5 w-5" />, color: 'text-violet' },
          ].map(s => (
            <div key={s.label} className="glass-card p-4">
              <div className={`${s.color} mb-2`}>{s.icon}</div>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="text-lg font-bold text-foreground">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: 'My Wallet', href: '/student/wallet', icon: <Wallet className="h-4 w-4" /> },
            { label: 'MicroGigs', href: '/student/microgigs', icon: <Zap className="h-4 w-4" /> },
            { label: 'Marketplace', href: '/student/marketplace', icon: <ShoppingBag className="h-4 w-4" /> },
            { label: 'Events', href: '/student/events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Leaderboard', href: '/student/leaderboard', icon: <Trophy className="h-4 w-4" /> },
          ].map(l => (
            <Link key={l.href} to={l.href} className="glass-card-hover p-4 flex items-center gap-3">
              <div className="text-primary">{l.icon}</div>
              <span className="text-sm font-medium text-foreground">{l.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
