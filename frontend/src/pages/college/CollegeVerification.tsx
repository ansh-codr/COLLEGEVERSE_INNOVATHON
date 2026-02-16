import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Student, Faculty } from '@/lib/types';
import { UserCheck, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DotLottieLoader from '@/components/Loader';

export default function CollegeVerification() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const { toast } = useToast();
  const [pending, setPending] = useState<Student[]>([]);
  const [loading, setLoading] = useState('');

  useEffect(() => { api.getPendingStudents(faculty.collegeId).then(setPending); }, [faculty.collegeId]);

  const handleApprove = async (id: string) => {
    setLoading(id);
    await api.approveStudent(id, faculty.collegeId);
    setPending(p => p.filter(s => s.id !== id));
    toast({ title: 'Student verified! SBT #1 issued.' });
    setLoading('');
  };

  const handleReject = async (id: string) => {
    setLoading(id);
    await api.rejectStudent(id);
    setPending(p => p.filter(s => s.id !== id));
    toast({ title: 'Student rejected.' });
    setLoading('');
  };

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><UserCheck className="h-6 w-6 text-primary" />Student Verification</h1>
        {pending.length === 0 ? <div className="glass-card p-8 text-center text-muted-foreground">No pending verifications</div> : (
          <div className="space-y-3">
            {pending.map(s => (
              <div key={s.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.email}</p>
                  <div className="flex gap-1 mt-1">{s.skills.slice(0, 3).map(sk => <span key={sk} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{sk}</span>)}</div>
                </div>
                <div className="flex gap-2">
                  <button disabled={loading === s.id} onClick={() => handleApprove(s.id)} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-success/10 text-success text-sm font-medium hover:bg-success/20 disabled:opacity-50">
                    {loading === s.id ? <DotLottieLoader size={16} /> : <Check className="h-4 w-4" />} Approve
                  </button>
                  <button disabled={loading === s.id} onClick={() => handleReject(s.id)} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 disabled:opacity-50">
                    <X className="h-4 w-4" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
