import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import { Trophy, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LeaderboardPage() {
  const [tab, setTab] = useState<'college' | 'student'>('college');
  const [category, setCategory] = useState('all');
  const [collegeLB, setCollegeLB] = useState<any[]>([]);
  const [studentLB, setStudentLB] = useState<any[]>([]);

  useEffect(() => { api.getCollegeLeaderboard().then(setCollegeLB); }, []);
  useEffect(() => { api.getStudentLeaderboard(category === 'all' ? undefined : category).then(setStudentLB); }, [category]);

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16">
        <h1 className="text-3xl font-bold text-foreground mb-6">Leaderboards</h1>
        <div className="flex gap-2 mb-6">
          {(['college', 'student'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
              {t === 'college' ? '🏛️ Colleges' : '🎓 Students'}
            </button>
          ))}
        </div>
        {tab === 'student' && (
          <div className="flex gap-1 mb-4">
            {['all', 'cultural', 'sports', 'education'].map(c => (
              <button key={c} onClick={() => setCategory(c)} className={`text-xs px-3 py-1.5 rounded-md ${category === c ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        )}
        <div className="glass-card divide-y divide-border/50">
          {(tab === 'college' ? collegeLB : studentLB).map((item, i) => (
            <div key={item.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <span className={`text-lg font-bold w-8 ${i === 0 ? 'text-warning' : i === 1 ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>#{i + 1}</span>
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{tab === 'college' ? `${item.verifiedStudents} verified students` : item.collegeName}</p>
                </div>
              </div>
              <span className="font-mono text-primary font-semibold">{item.totalPoints} pts</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
