import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Gig, GigApplication, Recruiter, Student } from '@/lib/types';
import { Zap, Plus, X, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RecruiterMicroGigs() {
  const { session } = useAuth();
  const recruiter = session?.user as Recruiter;
  const { toast } = useToast();
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedGig, setSelectedGig] = useState<string | null>(null);
  const [apps, setApps] = useState<(GigApplication & { student?: Student })[]>([]);
  const [form, setForm] = useState({ title: '', description: '', skills: '', reward: 0, deadline: '', mode: 'remote' as Gig['mode'], category: 'Development', duration: '1 week', paid: true });

  const reload = () => { api.getGigs().then(g => setGigs(g.filter(x => x.recruiterId === recruiter.id))); };
  useEffect(reload, [recruiter.id]);

  const loadApps = async (gigId: string) => {
    setSelectedGig(gigId);
    const a = await api.getGigApplications(gigId);
    const withStudents = await Promise.all(a.map(async app => ({ ...app, student: await api.getStudentById(app.studentId) })));
    setApps(withStudents.filter(x => x.student));
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.createGig({ ...form, skills: form.skills.split(',').map(s => s.trim()), recruiterId: recruiter.id });
    setShowForm(false); reload();
    toast({ title: 'Gig created!' });
  };

  const handleAppAction = async (appId: string, status: GigApplication['status']) => {
    await api.updateGigApp(appId, status);
    if (selectedGig) loadApps(selectedGig);
    toast({ title: `Application ${status}` });
  };

  return (
    <DashboardLayout role="recruiter">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Zap className="h-6 w-6 text-warning" />My MicroGigs</h1>
          <button onClick={() => setShowForm(true)} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm flex items-center gap-1"><Plus className="h-4 w-4" />Post Gig</button>
        </div>
        <div className="space-y-3">
          {gigs.map(g => (
            <div key={g.id} className="glass-card p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-foreground">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.category} · {g.mode} · {g.paid ? `₹${g.reward}` : 'Unpaid'}</p>
              </div>
              <button onClick={() => loadApps(g.id)} className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground">View Applicants</button>
            </div>
          ))}
        </div>

        {selectedGig && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setSelectedGig(null)}>
            <div className="glass-card p-6 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between mb-4"><h3 className="font-bold text-foreground">Applicants</h3><button onClick={() => setSelectedGig(null)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              {apps.length === 0 ? <p className="text-sm text-muted-foreground">No applicants yet</p> : (
                <div className="space-y-2">
                  {apps.map(a => (
                    <div key={a.id} className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                      <div><p className="text-sm font-medium text-foreground">{a.student?.name}</p><span className={`text-xs px-2 py-0.5 rounded-full ${a.status === 'accepted' ? 'bg-success/10 text-success' : a.status === 'rejected' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>{a.status}</span></div>
                      {a.status === 'applied' && (
                        <div className="flex gap-1">
                          <button onClick={() => handleAppAction(a.id, 'accepted')} className="p-1.5 rounded-lg bg-success/10 text-success"><Check className="h-4 w-4" /></button>
                          <button onClick={() => handleAppAction(a.id, 'rejected')} className="p-1.5 rounded-lg bg-destructive/10 text-destructive"><X className="h-4 w-4" /></button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm overflow-y-auto py-8" onClick={() => setShowForm(false)}>
            <form onSubmit={handleCreate} className="glass-card p-6 max-w-md w-full mx-4 space-y-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between"><h3 className="font-bold text-foreground">Post MicroGig</h3><button type="button" onClick={() => setShowForm(false)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <input placeholder="Title" required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <textarea placeholder="Description" rows={2} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm resize-none" />
              <input placeholder="Skills (comma-separated)" value={form.skills} onChange={e => setForm({ ...form, skills: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <div className="grid grid-cols-2 gap-3">
                <input type="number" placeholder="Reward (₹)" value={form.reward || ''} onChange={e => setForm({ ...form, reward: +e.target.value })} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
                <input type="date" required value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select value={form.mode} onChange={e => setForm({ ...form, mode: e.target.value as Gig['mode'] })} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm"><option value="remote">Remote</option><option value="on-campus">On-Campus</option></select>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">{['Development', 'Design', 'Data Science', 'Writing', 'Creative'].map(c => <option key={c}>{c}</option>)}</select>
              </div>
              <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Post Gig</button>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
