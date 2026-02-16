import DashboardLayout from '@/components/layout/DashboardLayout';
import { Briefcase, MessageSquare } from 'lucide-react';

export default function CollegeRecruiters() {
  const mockRecruiters = [
    { name: 'Vikram Mehta', company: 'TechCorp', status: 'Active', messages: 3 },
    { name: 'Ananya Das', company: 'InnovateLabs', status: 'Active', messages: 1 },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Briefcase className="h-6 w-6 text-primary" />Recruiter Engagement</h1>
        <div className="space-y-3">
          {mockRecruiters.map(r => (
            <div key={r.name} className="glass-card p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-foreground">{r.name}</h3>
                <p className="text-sm text-muted-foreground">{r.company} · {r.status}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4" />{r.messages} messages
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
