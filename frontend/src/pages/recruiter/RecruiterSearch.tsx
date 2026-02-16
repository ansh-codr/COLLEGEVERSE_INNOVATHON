import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Student, Recruiter } from '@/lib/types';
import { Search, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RecruiterSearch() {
  const { session } = useAuth();
  const recruiter = session?.user as Recruiter;
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Student | null>(null);

  useEffect(() => { api.getVerifiedStudents().then(setStudents); }, []);

  const filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.skills.some(sk => sk.toLowerCase().includes(search.toLowerCase())));

  const handleShortlist = async (s: Student) => {
    await api.addToShortlist({ studentId: s.id, recruiterId: recruiter.id, notes: '', addedAt: new Date().toISOString() });
    toast({ title: `${s.name} added to shortlist` });
  };

  return (
    <DashboardLayout role="recruiter">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Search className="h-6 w-6 text-primary" />Search Students</h1>
        <div className="relative max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or skill..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(s => (
            <div key={s.id} className="glass-card p-4">
              <div className="flex justify-between items-start mb-2">
                <div><h3 className="font-semibold text-foreground">{s.name}</h3><p className="text-xs text-muted-foreground">{s.email}</p></div>
                <button onClick={() => handleShortlist(s)} className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary"><Plus className="h-3 w-3 inline" /> Shortlist</button>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">{s.skills.map(sk => <span key={sk} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{sk}</span>)}</div>
              <button onClick={() => setSelected(s)} className="text-xs text-cyan hover:underline">View Profile</button>
            </div>
          ))}
        </div>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <div className="glass-card p-6 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between mb-4"><h3 className="font-bold text-foreground">{selected.name}</h3><button onClick={() => setSelected(null)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <p className="text-sm text-muted-foreground mb-2">{selected.email}</p>
              <p className="text-sm text-muted-foreground mb-3">{selected.bio}</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {Object.entries(selected.points).map(([k, v]) => <div key={k} className="p-2 rounded-lg bg-secondary/50 text-center"><p className="text-xs text-muted-foreground capitalize">{k}</p><p className="font-bold text-primary">{v}</p></div>)}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">{selected.skills.map(s => <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{s}</span>)}</div>
              {selected.github && <p className="text-xs text-muted-foreground">GitHub: {selected.github}</p>}
              {selected.linkedin && <p className="text-xs text-muted-foreground">LinkedIn: {selected.linkedin}</p>}
              <button onClick={() => { handleShortlist(selected); setSelected(null); }} className="mt-4 w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Add to Shortlist</button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
