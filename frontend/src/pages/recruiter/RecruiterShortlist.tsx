import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Recruiter, ShortlistEntry, Student } from '@/lib/types';
import { ListChecks, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RecruiterShortlist() {
  const { session } = useAuth();
  const recruiter = session?.user as Recruiter;
  const { toast } = useToast();
  const [entries, setEntries] = useState<(ShortlistEntry & { student?: Student })[]>([]);

  const reload = async () => {
    const list = await api.getShortlist(recruiter.id);
    const withStudents = await Promise.all(list.map(async e => ({ ...e, student: await api.getStudentById(e.studentId) })));
    setEntries(withStudents.filter(e => e.student));
  };
  useEffect(() => { reload(); }, [recruiter.id]);

  const handleRemove = async (studentId: string) => {
    await api.removeFromShortlist(recruiter.id, studentId);
    reload();
    toast({ title: 'Removed from shortlist' });
  };

  const handleNote = async (studentId: string, notes: string) => {
    await api.updateShortlistNote(recruiter.id, studentId, notes);
    reload();
  };

  return (
    <DashboardLayout role="recruiter">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><ListChecks className="h-6 w-6 text-primary" />Shortlist</h1>
        {entries.length === 0 ? <div className="glass-card p-8 text-center text-muted-foreground">No shortlisted candidates. Search and add students.</div> : (
          <div className="space-y-3">
            {entries.map(e => (
              <div key={e.studentId} className="glass-card p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{e.student?.name}</h3>
                    <p className="text-sm text-muted-foreground">{e.student?.email}</p>
                    <div className="flex gap-1 mt-1">{e.student?.skills.slice(0, 4).map(s => <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{s}</span>)}</div>
                  </div>
                  <button onClick={() => handleRemove(e.studentId)} className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"><Trash2 className="h-4 w-4" /></button>
                </div>
                <textarea placeholder="Notes..." value={e.notes} onChange={ev => handleNote(e.studentId, ev.target.value)} rows={1} className="w-full mt-2 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm resize-none" />
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
