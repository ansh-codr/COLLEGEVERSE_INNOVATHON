import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Faculty } from '@/lib/types';
import { Link } from 'react-router-dom';
import { UserCheck, Bell, Calendar, BarChart3, Shield, Users } from 'lucide-react';

export default function CollegeDashboard() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const [analytics, setAnalytics] = useState<any>(null);

  useEffect(() => { api.getCollegeAnalytics(faculty.collegeId).then(setAnalytics); }, [faculty.collegeId]);

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div><h1 className="text-2xl font-bold text-foreground">Faculty Dashboard</h1><p className="text-sm text-muted-foreground">Welcome, {faculty.name}</p></div>
        {analytics && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Students', value: analytics.totalStudents, icon: <Users className="h-5 w-5" />, color: 'text-primary' },
              { label: 'Verified', value: analytics.verified, icon: <UserCheck className="h-5 w-5" />, color: 'text-success' },
              { label: 'Pending', value: analytics.pending, icon: <Shield className="h-5 w-5" />, color: 'text-warning' },
              { label: 'Events', value: analytics.totalEvents, icon: <Calendar className="h-5 w-5" />, color: 'text-violet' },
            ].map(s => (
              <div key={s.label} className="glass-card p-4"><div className={`${s.color} mb-2`}>{s.icon}</div><p className="text-xs text-muted-foreground">{s.label}</p><p className="text-lg font-bold text-foreground">{s.value}</p></div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: 'Verify Students', href: '/college/verification', icon: <UserCheck className="h-4 w-4" /> },
            { label: 'Manage Notices', href: '/college/notices', icon: <Bell className="h-4 w-4" /> },
            { label: 'Manage Events', href: '/college/events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Analytics', href: '/college/analytics', icon: <BarChart3 className="h-4 w-4" /> },
            { label: 'Club Approvals', href: '/college/clubs-approvals', icon: <Shield className="h-4 w-4" /> },
          ].map(l => (
            <Link key={l.href} to={l.href} className="glass-card-hover p-4 flex items-center gap-3"><div className="text-primary">{l.icon}</div><span className="text-sm font-medium text-foreground">{l.label}</span></Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
