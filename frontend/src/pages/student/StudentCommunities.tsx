import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Community, Student } from '@/lib/types';
import { Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentCommunities() {
  const { session } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [communities, setCommunities] = useState<Community[]>([]);

  const reload = () => { api.getCommunities(student.collegeId).then(setCommunities); };
  useEffect(reload, [student.collegeId]);

  const handleJoin = async (id: string) => { await api.joinCommunity(id, student.id); reload(); toast({ title: 'Joined community!' }); };
  const handleLeave = async (id: string) => { await api.leaveCommunity(id, student.id); reload(); toast({ title: 'Left community' }); };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Users className="h-6 w-6 text-primary" />Communities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communities.map(c => {
            const isMember = c.members.includes(student.id);
            return (
              <div key={c.id} className="glass-card p-5">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{c.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${c.type === 'mandatory' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'}`}>{c.type}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{c.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{c.members.length} members</span>
                  {c.type === 'optional' && (
                    isMember
                      ? <button onClick={() => handleLeave(c.id)} className="text-xs px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive">Leave</button>
                      : <button onClick={() => handleJoin(c.id)} className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">Join</button>
                  )}
                  {c.type === 'mandatory' && <span className="text-xs text-success">Auto-joined</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
