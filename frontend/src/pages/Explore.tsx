import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { College } from '@/lib/types';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeftRight } from 'lucide-react';

export default function Explore() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');

  useEffect(() => { api.getColleges().then(c => { setColleges(c); if (c.length >= 2) { setLeft(c[0].id); setRight(c[1].id); } }); }, []);

  const lc = colleges.find(c => c.id === left);
  const rc = colleges.find(c => c.id === right);

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2"><ArrowLeftRight className="h-7 w-7 text-primary" />Compare Colleges</h1>
        <p className="text-muted-foreground mb-8">Side-by-side comparison of top institutions</p>
        <div className="flex flex-wrap gap-4 mb-8">
          <select value={left} onChange={e => setLeft(e.target.value)} className="flex-1 min-w-[200px] px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
            {colleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <div className="flex items-center text-muted-foreground">VS</div>
          <select value={right} onChange={e => setRight(e.target.value)} className="flex-1 min-w-[200px] px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
            {colleges.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        {lc && rc && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[lc, rc].map(c => (
              <div key={c.id} className="glass-card p-6">
                <h2 className="text-xl font-bold text-foreground mb-1">{c.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{c.location}</p>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border/50"><span className="text-sm text-muted-foreground">Ranking</span><span className="font-semibold text-primary">#{c.ranking}</span></div>
                  <div className="flex justify-between py-2 border-b border-border/50"><span className="text-sm text-muted-foreground">Type</span><span className="font-semibold text-foreground">{c.type}</span></div>
                  <div className="flex justify-between py-2 border-b border-border/50"><span className="text-sm text-muted-foreground">Students</span><span className="font-semibold text-foreground">{c.studentCount.toLocaleString()}</span></div>
                  <div className="flex justify-between py-2 border-b border-border/50"><span className="text-sm text-muted-foreground">Established</span><span className="font-semibold text-foreground">{c.established}</span></div>
                  <div className="flex justify-between py-2"><span className="text-sm text-muted-foreground">Departments</span><span className="font-semibold text-foreground">{c.departments.length}</span></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
