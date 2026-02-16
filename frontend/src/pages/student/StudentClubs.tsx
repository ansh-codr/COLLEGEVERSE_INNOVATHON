import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Club, Student } from '@/lib/types';
import { Users, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentClubs() {
  const { session } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [clubs, setClubs] = useState<Club[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', category: 'Technical', purpose: '', sponsor: '' });

  const reload = () => { api.getClubs(student.collegeId).then(setClubs); };
  useEffect(reload, [student.collegeId]);

  const handleJoin = async (id: string) => { await api.joinClub(id, student.id); reload(); toast({ title: 'Joined club!' }); };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.createClubApplication({ ...form, collegeId: student.collegeId, createdBy: student.id });
    setShowForm(false);
    setForm({ name: '', category: 'Technical', purpose: '', sponsor: '' });
    reload();
    toast({ title: 'Club application submitted! Awaiting faculty approval.' });
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Users className="h-6 w-6 text-primary" />Clubs</h1>
          <button onClick={() => setShowForm(true)} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm flex items-center gap-1"><Plus className="h-4 w-4" />Create Club</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clubs.filter(c => c.status === 'approved').map(c => (
            <div key={c.id} className="glass-card p-5">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{c.category}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{c.purpose}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">{c.members.length} members</span>
                {c.members.includes(student.id) ? <span className="text-xs text-success">Joined ✓</span> : <button onClick={() => handleJoin(c.id)} className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">Join</button>}
              </div>
            </div>
          ))}
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setShowForm(false)}>
            <form onSubmit={handleCreate} className="glass-card p-6 max-w-md w-full mx-4 space-y-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between"><h3 className="font-bold text-foreground">Create Club Application</h3><button type="button" onClick={() => setShowForm(false)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <input placeholder="Club Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
                {['Technical', 'Cultural', 'Sports', 'Social', 'Academic'].map(c => <option key={c}>{c}</option>)}
              </select>
              <textarea placeholder="Purpose" required rows={2} value={form.purpose} onChange={e => setForm({ ...form, purpose: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm resize-none" />
              <input placeholder="Faculty Sponsor Name" required value={form.sponsor} onChange={e => setForm({ ...form, sponsor: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Submit Application</button>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
