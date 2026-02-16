import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Community, Faculty } from '@/lib/types';
import { Users } from 'lucide-react';

export default function CollegeCommunities() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => { api.getCommunities(faculty.collegeId).then(setCommunities); }, [faculty.collegeId]);

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Users className="h-6 w-6 text-primary" />Communities</h1>
        <div className="space-y-3">
          {communities.map(c => (
            <div key={c.id} className="glass-card p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.type} · {c.members.length} members</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${c.type === 'mandatory' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'}`}>{c.type}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
