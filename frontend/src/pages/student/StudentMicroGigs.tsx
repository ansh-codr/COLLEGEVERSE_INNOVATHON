import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Gig, GigApplication, Student } from '@/lib/types';
import { Zap, Search, AlertTriangle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentMicroGigs() {
  const { session, isVerified } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [apps, setApps] = useState<GigApplication[]>([]);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('');
  const [tab, setTab] = useState<'browse' | 'my'>('browse');
  const [loading, setLoading] = useState('');
  const verified = isVerified();

  const reload = () => {
    api.getGigs().then(setGigs);
    api.getGigApplications(undefined, student.id).then(setApps);
  };
  useEffect(reload, [student.id]);

  const categories = [...new Set(gigs.map(g => g.category))];
  const filtered = gigs.filter(g => g.status === 'open' && (!cat || g.category === cat) && (!search || g.title.toLowerCase().includes(search.toLowerCase())));
  const myApps = apps.map(a => ({ ...a, gig: gigs.find(g => g.id === a.gigId) })).filter(a => a.gig);
  const appliedGigIds = apps.map(a => a.gigId);

  const handleApply = async (gigId: string) => {
    setLoading(gigId);
    await api.applyToGig(gigId, student.id);
    reload();
    toast({ title: 'Applied successfully!' });
    setLoading('');
  };

  const handleWithdraw = async (appId: string) => {
    await api.withdrawGig(appId);
    reload();
    toast({ title: 'Application withdrawn' });
  };

  const handleComplete = async (app: GigApplication) => {
    setLoading(app.id);
    await api.completeGig(app.id, student.id, gigs.find(g => g.id === app.gigId)?.title || '');
    reload();
    toast({ title: 'Gig completed! SBT issued to your wallet 🎉' });
    setLoading('');
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Zap className="h-6 w-6 text-warning" />MicroGigs</h1>
          <div className="flex gap-2">
            {(['browse', 'my'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${tab === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                {t === 'browse' ? 'Browse Gigs' : `My Applications (${apps.length})`}
              </button>
            ))}
          </div>
        </div>

        {!verified && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <p className="text-sm text-muted-foreground">You must be verified to apply for gigs. Contact your college to get verified.</p>
          </div>
        )}

        {tab === 'browse' ? (
          <>
            <div className="flex flex-wrap gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search gigs..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <select value={cat} onChange={e => setCat(e.target.value)} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
                <option value="">All</option>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map(g => (
                <div key={g.id} className="glass-card p-5">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-sm">{g.title}</h3>
                    {g.paid && <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">₹{g.reward}</span>}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{g.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">{g.skills.map(s => <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{s}</span>)}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{g.mode} · {g.duration}</span>
                    {appliedGigIds.includes(g.id) ? (
                      <span className="text-xs px-3 py-1 rounded-lg bg-success/10 text-success">Applied ✓</span>
                    ) : (
                      <button disabled={!verified || loading === g.id} onClick={() => handleApply(g.id)} className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground disabled:opacity-50 flex items-center gap-1">
                        {loading === g.id ? <Loader2 className="h-3 w-3 animate-spin" /> : null} Apply
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-3">
            {myApps.length === 0 ? <p className="text-muted-foreground text-sm">No applications yet</p> : myApps.map(a => (
              <div key={a.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">{a.gig?.title}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${a.status === 'completed' ? 'bg-success/10 text-success' : a.status === 'accepted' ? 'bg-cyan/10 text-cyan' : a.status === 'rejected' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>{a.status}</span>
                </div>
                <div className="flex gap-2">
                  {a.status === 'applied' && <button onClick={() => handleWithdraw(a.id)} className="text-xs px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive">Withdraw</button>}
                  {a.status === 'accepted' && <button disabled={loading === a.id} onClick={() => handleComplete(a)} className="text-xs px-3 py-1.5 rounded-lg bg-success/10 text-success flex items-center gap-1">{loading === a.id ? <Loader2 className="h-3 w-3 animate-spin" /> : null}Mark Complete</button>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
