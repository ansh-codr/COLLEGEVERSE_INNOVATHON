import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Club, Faculty } from '@/lib/types';
import { Shield, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CollegeClubApprovals() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const { toast } = useToast();
  const [clubs, setClubs] = useState<Club[]>([]);

  const reload = () => { api.getClubs(faculty.collegeId).then(setClubs); };
  useEffect(reload, [faculty.collegeId]);

  const pending = clubs.filter(c => c.status === 'pending');

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Shield className="h-6 w-6 text-primary" />Club Approvals</h1>
        {pending.length === 0 ? <div className="glass-card p-8 text-center text-muted-foreground">No pending club applications</div> : (
          <div className="space-y-3">
            {pending.map(c => (
              <div key={c.id} className="glass-card p-4 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.category} · Sponsor: {c.sponsor}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.purpose}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={async () => { await api.approveClub(c.id); reload(); toast({ title: 'Club approved!' }); }} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-success/10 text-success text-sm"><Check className="h-4 w-4" />Approve</button>
                  <button onClick={async () => { await api.rejectClub(c.id); reload(); toast({ title: 'Club rejected.' }); }} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-destructive/10 text-destructive text-sm"><X className="h-4 w-4" />Reject</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
