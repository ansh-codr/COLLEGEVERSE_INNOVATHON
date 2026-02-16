import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/mockApi';
import type { College } from '@/lib/types';
import { Search, MapPin } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Colleges() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => { api.getColleges().then(setColleges); }, []);

  const filtered = colleges.filter(c =>
    (c.name.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase())) &&
    (!typeFilter || c.type === typeFilter)
  );
  const types = [...new Set(colleges.map(c => c.type))];

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16">
        <h1 className="text-3xl font-bold text-foreground mb-2">Explore Colleges</h1>
        <p className="text-muted-foreground mb-6">Browse and compare top institutions across India</p>
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none">
            <option value="">All Types</option>
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(c => (
            <div key={c.id} onClick={() => navigate(`/colleges/${c.id}`)} className="glass-card-hover p-5 cursor-pointer">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-foreground">{c.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">#{c.ranking}</span>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2"><MapPin className="h-3 w-3" />{c.location}</p>
              <p className="text-xs text-muted-foreground mb-3">{c.description}</p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{c.type}</span><span>{c.studentCount.toLocaleString()} students</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
