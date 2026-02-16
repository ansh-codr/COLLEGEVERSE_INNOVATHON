import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Faculty } from '@/lib/types';
import { BarChart3 } from 'lucide-react';

export default function CollegeAnalytics() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const [data, setData] = useState<any>(null);

  useEffect(() => { api.getCollegeAnalytics(faculty.collegeId).then(setData); }, [faculty.collegeId]);

  if (!data) return <DashboardLayout role="faculty"><p className="text-muted-foreground">Loading...</p></DashboardLayout>;

  const cards = [
    { label: 'Total Students', value: data.totalStudents },
    { label: 'Verified Students', value: data.verified },
    { label: 'Pending Verification', value: data.pending },
    { label: 'Total Events', value: data.totalEvents },
    { label: 'Event Applicants', value: data.totalApplicants },
    { label: 'Completed Gigs', value: data.completedGigs },
    { label: 'Active Gig Apps', value: data.activeGigs },
    { label: 'Marketplace Volume', value: `₹${data.marketplaceVolume}` },
    { label: 'Marketplace Items', value: data.marketplaceItems },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><BarChart3 className="h-6 w-6 text-primary" />Analytics</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(c => (
            <div key={c.label} className="glass-card p-5 text-center">
              <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
              <p className="text-2xl font-bold text-foreground">{c.value}</p>
            </div>
          ))}
        </div>
        <div className="glass-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Verification Rate</h3>
          <div className="w-full bg-secondary rounded-full h-4 overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${data.totalStudents ? (data.verified / data.totalStudents * 100) : 0}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{data.verified}/{data.totalStudents} students verified ({data.totalStudents ? Math.round(data.verified / data.totalStudents * 100) : 0}%)</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
