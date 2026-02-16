import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Competition, Student } from '@/lib/types';
import { Swords } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentCompetitions() {
  const { session } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [comps, setComps] = useState<Competition[]>([]);

  const reload = () => { api.getCompetitions().then(setComps); };
  useEffect(reload, []);

  const handleJoin = async (id: string) => { await api.joinCompetition(id, student.id); reload(); toast({ title: 'Registered!' }); };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Swords className="h-6 w-6 text-primary" />Competitions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {comps.map(c => (
            <div key={c.id} className="glass-card p-5">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-foreground">{c.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{c.type === 'area' ? 'Area-wise' : 'All College'}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{c.description}</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">{c.date} · {c.category} · {c.participants.length} joined</span>
                {c.participants.includes(student.id) ? <span className="text-success">Registered ✓</span> : <button onClick={() => handleJoin(c.id)} className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">Register</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
