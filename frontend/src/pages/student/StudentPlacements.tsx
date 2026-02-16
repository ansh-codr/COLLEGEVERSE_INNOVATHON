import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Placement, Student } from '@/lib/types';
import { Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentPlacements() {
  const { session } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [placements, setPlacements] = useState<Placement[]>([]);

  useEffect(() => { api.getPlacements(student.collegeId).then(setPlacements); }, [student.collegeId]);

  const handleApply = async (id: string) => {
    await api.applyToPlacement(id, student.id);
    setPlacements(await api.getPlacements(student.collegeId));
    toast({ title: 'Applied to placement!' });
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Briefcase className="h-6 w-6 text-primary" />Placements</h1>
        <div className="space-y-4">
          {placements.map(p => (
            <div key={p.id} className="glass-card p-5">
              <div className="flex justify-between mb-2">
                <div><h3 className="font-semibold text-foreground">{p.title}</h3><p className="text-sm text-muted-foreground">{p.company} · {p.package}</p></div>
                {p.applicants.includes(student.id) ? (
                  <span className="text-xs px-3 py-1 rounded-lg bg-success/10 text-success h-fit">Applied ✓</span>
                ) : (
                  <button onClick={() => handleApply(p.id)} className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground h-fit">Apply</button>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-2">{p.description}</p>
              <div className="flex flex-wrap gap-1">{p.requirements.map(r => <span key={r} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{r}</span>)}</div>
              <p className="text-xs text-muted-foreground mt-2">Deadline: {p.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
