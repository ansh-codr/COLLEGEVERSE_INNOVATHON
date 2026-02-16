import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Event, Faculty } from '@/lib/types';
import { Calendar, Plus, Trash2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CollegeEvents() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', type: 'Technical', date: '', description: '', tags: '' });

  const reload = () => { api.getEvents(faculty.collegeId).then(setEvents); };
  useEffect(reload, [faculty.collegeId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.createEvent({ title: form.title, type: form.type, date: form.date, description: form.description, tags: form.tags.split(',').map(t => t.trim()), collegeId: faculty.collegeId });
    setShowForm(false); setForm({ title: '', type: 'Technical', date: '', description: '', tags: '' }); reload();
    toast({ title: 'Event created' });
  };

  const handleDelete = async (id: string) => { await api.deleteEvent(id); reload(); toast({ title: 'Event deleted' }); };

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Calendar className="h-6 w-6 text-primary" />Events</h1>
          <button onClick={() => setShowForm(true)} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm flex items-center gap-1"><Plus className="h-4 w-4" />New</button>
        </div>
        <div className="space-y-3">
          {events.map(e => (
            <div key={e.id} className="glass-card p-4 flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-foreground">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.type} · {e.date} · {e.applicants.length} applicants</p>
              </div>
              <button onClick={() => handleDelete(e.id)} className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setShowForm(false)}>
            <form onSubmit={handleSubmit} className="glass-card p-6 max-w-md w-full mx-4 space-y-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between"><h3 className="font-bold text-foreground">New Event</h3><button type="button" onClick={() => setShowForm(false)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <input placeholder="Title" required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
                {['Technical', 'Cultural', 'Sports', 'Workshop'].map(t => <option key={t}>{t}</option>)}
              </select>
              <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <textarea placeholder="Description" rows={2} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm resize-none" />
              <input placeholder="Tags (comma-separated)" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Create</button>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
