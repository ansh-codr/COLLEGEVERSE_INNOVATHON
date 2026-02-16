import DashboardLayout from '@/components/layout/DashboardLayout';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import { Trophy } from 'lucide-react';

export default function StudentLeaderboard() {
  const [tab, setTab] = useState<'college' | 'student'>('student');
  const [category, setCategory] = useState('all');
  const [collegeLB, setCollegeLB] = useState<any[]>([]);
  const [studentLB, setStudentLB] = useState<any[]>([]);

  useEffect(() => { api.getCollegeLeaderboard().then(setCollegeLB); }, []);
  useEffect(() => { api.getStudentLeaderboard(category === 'all' ? undefined : category).then(setStudentLB); }, [category]);

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Trophy className="h-6 w-6 text-warning" />Leaderboard</h1>
        <div className="flex gap-2">
          {(['student', 'college'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${tab === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>{t === 'college' ? 'Colleges' : 'Students'}</button>
          ))}
        </div>
        {tab === 'student' && (
          <div className="flex gap-1">{['all', 'cultural', 'sports', 'education'].map(c => (
            <button key={c} onClick={() => setCategory(c)} className={`text-xs px-3 py-1.5 rounded-md ${category === c ? 'bg-primary/20 text-primary' : 'text-muted-foreground'}`}>{c.charAt(0).toUpperCase() + c.slice(1)}</button>
          ))}</div>
        )}
        <div className="glass-card divide-y divide-border/50">
          {(tab === 'college' ? collegeLB : studentLB).map((item, i) => (
            <div key={item.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className={`font-bold w-8 ${i === 0 ? 'text-warning' : 'text-muted-foreground'}`}>#{i + 1}</span>
                <div><p className="font-medium text-foreground text-sm">{item.name}</p><p className="text-xs text-muted-foreground">{tab === 'college' ? `${item.verifiedStudents} students` : item.collegeName}</p></div>
              </div>
              <span className="font-mono text-primary font-semibold text-sm">{item.totalPoints} pts</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
