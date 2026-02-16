import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Recruiter } from '@/lib/types';
import { Link } from 'react-router-dom';
import { Search, ListChecks, FileText, Zap, Users } from 'lucide-react';

export default function RecruiterDashboard() {
  const { session } = useAuth();
  const recruiter = session?.user as Recruiter;
  const [gigs, setGigs] = useState<any[]>([]);
  const [shortlist, setShortlist] = useState<any[]>([]);

  useEffect(() => {
    api.getGigs().then(g => setGigs(g.filter(x => x.recruiterId === recruiter.id)));
    api.getShortlist(recruiter.id).then(setShortlist);
  }, [recruiter.id]);

  return (
    <DashboardLayout role="recruiter">
      <div className="space-y-6">
        <div><h1 className="text-2xl font-bold text-foreground">Recruiter Dashboard</h1><p className="text-sm text-muted-foreground">{recruiter.company} · {recruiter.name}</p></div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Active Gigs', value: gigs.filter(g => g.status === 'open').length, icon: <Zap className="h-5 w-5" />, color: 'text-warning' },
            { label: 'Shortlisted', value: shortlist.length, icon: <ListChecks className="h-5 w-5" />, color: 'text-primary' },
            { label: 'Total Gigs', value: gigs.length, icon: <Users className="h-5 w-5" />, color: 'text-cyan' },
          ].map(s => (
            <div key={s.label} className="glass-card p-4"><div className={`${s.color} mb-2`}>{s.icon}</div><p className="text-xs text-muted-foreground">{s.label}</p><p className="text-lg font-bold text-foreground">{s.value}</p></div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { label: 'Search Students', href: '/recruiter/search', icon: <Search className="h-4 w-4" /> },
            { label: 'Shortlist', href: '/recruiter/shortlist', icon: <ListChecks className="h-4 w-4" /> },
            { label: 'MCQ Tests', href: '/recruiter/tests', icon: <FileText className="h-4 w-4" /> },
            { label: 'MicroGigs', href: '/recruiter/microgigs', icon: <Zap className="h-4 w-4" /> },
          ].map(l => (
            <Link key={l.href} to={l.href} className="glass-card-hover p-4 flex items-center gap-3"><div className="text-primary">{l.icon}</div><span className="text-sm font-medium text-foreground">{l.label}</span></Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
