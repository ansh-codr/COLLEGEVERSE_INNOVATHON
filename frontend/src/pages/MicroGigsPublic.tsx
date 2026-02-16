import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/mockApi';
import type { Gig } from '@/lib/types';
import { Zap, Search } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MicroGigsPublic() {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('');
  const navigate = useNavigate();

  useEffect(() => { api.getGigs().then(setGigs); }, []);

  const categories = [...new Set(gigs.map(g => g.category))];
  const filtered = gigs.filter(g => g.status === 'open' && (!cat || g.category === cat) && (!search || g.title.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2"><Zap className="h-7 w-7 text-warning" />MicroGigs</h1>
            <p className="text-muted-foreground mt-1">Short-term tasks with real rewards</p>
          </div>
          <button onClick={() => navigate('/login/student')} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Login to Apply</button>
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search gigs..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <select value={cat} onChange={e => setCat(e.target.value)} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(g => (
            <div key={g.id} className="glass-card-hover p-5">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-foreground text-sm">{g.title}</h3>
                {g.paid && <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">₹{g.reward}</span>}
              </div>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{g.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">{g.skills.map(s => <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{s}</span>)}</div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{g.mode} · {g.duration}</span>
                <button onClick={() => navigate('/login/student')} className="text-primary hover:underline">Login to Apply →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
