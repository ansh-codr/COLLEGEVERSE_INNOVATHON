import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Notice, Faculty } from '@/lib/types';
import { Bell, Plus, Trash2, Edit, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CollegeNotices() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const { toast } = useToast();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: '', content: '', priority: 'medium' as Notice['priority'] });

  useEffect(() => { api.getNotices(faculty.collegeId).then(setNotices); }, [faculty.collegeId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await api.updateNotice(editId, form);
      toast({ title: 'Notice updated' });
    } else {
      await api.createNotice({ ...form, collegeId: faculty.collegeId, createdBy: faculty.id, date: new Date().toISOString().split('T')[0] });
      toast({ title: 'Notice created' });
    }
    setShowForm(false); setEditId(null); setForm({ title: '', content: '', priority: 'medium' });
    api.getNotices(faculty.collegeId).then(setNotices);
  };

  const handleDelete = async (id: string) => { await api.deleteNotice(id); api.getNotices(faculty.collegeId).then(setNotices); toast({ title: 'Notice deleted' }); };

  const startEdit = (n: Notice) => { setForm({ title: n.title, content: n.content, priority: n.priority }); setEditId(n.id); setShowForm(true); };

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Bell className="h-6 w-6 text-primary" />Notices</h1>
          <button onClick={() => { setForm({ title: '', content: '', priority: 'medium' }); setEditId(null); setShowForm(true); }} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm flex items-center gap-1"><Plus className="h-4 w-4" />New</button>
        </div>
        <div className="space-y-3">
          {notices.map(n => (
            <div key={n.id} className="glass-card p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{n.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${n.priority === 'high' ? 'bg-destructive/10 text-destructive' : n.priority === 'medium' ? 'bg-warning/10 text-warning' : 'bg-secondary text-secondary-foreground'}`}>{n.priority}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{n.content}</p>
                  <p className="text-xs text-muted-foreground mt-2">{n.date}</p>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => startEdit(n)} className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(n.id)} className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setShowForm(false)}>
            <form onSubmit={handleSubmit} className="glass-card p-6 max-w-md w-full mx-4 space-y-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between"><h3 className="font-bold text-foreground">{editId ? 'Edit' : 'New'} Notice</h3><button type="button" onClick={() => setShowForm(false)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <input placeholder="Title" required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              <textarea placeholder="Content" required rows={3} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm resize-none" />
              <select value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value as Notice['priority'] })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
                <option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option>
              </select>
              <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">{editId ? 'Update' : 'Create'}</button>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
