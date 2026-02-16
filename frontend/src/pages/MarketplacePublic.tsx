import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/mockApi';
import type { MarketplaceItem } from '@/lib/types';
import { ShoppingBag, Search } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MarketplacePublic() {
  const [items, setItems] = useState<MarketplaceItem[]>([]);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('');
  const navigate = useNavigate();

  useEffect(() => { api.getMarketplaceItems().then(setItems); }, []);

  const categories = [...new Set(items.map(i => i.category))];
  const filtered = items.filter(i => i.status === 'available' && (!cat || i.category === cat) && (!search || i.title.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2"><ShoppingBag className="h-7 w-7 text-violet" />Marketplace</h1>
            <p className="text-muted-foreground mt-1">Buy & sell within your verified campus community</p>
          </div>
          <button onClick={() => navigate('/login/student')} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Login to Buy/Sell</button>
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <select value={cat} onChange={e => setCat(e.target.value)} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map(item => (
            <div key={item.id} className="glass-card-hover p-4">
              <div className="w-full aspect-square rounded-lg bg-secondary/50 flex items-center justify-center mb-3">
                <ShoppingBag className="h-8 w-8 text-muted-foreground/30" />
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-lg font-bold text-primary mb-1">₹{item.price}</p>
              <p className="text-xs text-muted-foreground mb-2">{item.condition} · {item.location}</p>
              <button onClick={() => navigate('/login/student')} className="w-full text-xs py-2 rounded-lg bg-violet/10 text-violet hover:bg-violet/20 transition-colors">Login to Buy</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
