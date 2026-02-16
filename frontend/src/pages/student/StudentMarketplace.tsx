import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { MarketplaceItem, Student } from '@/lib/types';
import { ShoppingBag, Search, Plus, X, AlertTriangle, MessageSquare, Flag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentMarketplace() {
  const { session, isVerified } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [items, setItems] = useState<MarketplaceItem[]>([]);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('');
  const [tab, setTab] = useState<'browse' | 'my' | 'sell'>('browse');
  const [msgModal, setMsgModal] = useState<string | null>(null);
  const [sellForm, setSellForm] = useState({ title: '', category: 'Books', price: 0, condition: 'Good', description: '', location: '' });
  const verified = isVerified();

  const reload = () => { api.getMarketplaceItems().then(setItems); };
  useEffect(reload, []);

  const categories = [...new Set(items.map(i => i.category))];
  const filtered = items.filter(i => i.status === 'available' && i.sellerId !== student.id && (!cat || i.category === cat) && (!search || i.title.toLowerCase().includes(search.toLowerCase())));
  const myItems = items.filter(i => i.sellerId === student.id);

  const handleReserve = async (id: string) => { await api.reserveItem(id); reload(); toast({ title: 'Item reserved!' }); };
  const handleFlag = async (id: string) => { await api.flagItem(id, 'Reported by user'); reload(); toast({ title: 'Item reported' }); };
  const handleDelete = async (id: string) => { await api.deleteMarketplaceItem(id); reload(); toast({ title: 'Listing removed' }); };

  const handleSell = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.createMarketplaceItem({ ...sellForm, sellerId: student.id, collegeId: student.collegeId });
    setSellForm({ title: '', category: 'Books', price: 0, condition: 'Good', description: '', location: '' });
    setTab('my');
    reload();
    toast({ title: 'Item listed!' });
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><ShoppingBag className="h-6 w-6 text-violet" />Marketplace</h1>
          <div className="flex gap-2">
            {(['browse', 'my', 'sell'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${tab === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                {t === 'browse' ? 'Browse' : t === 'my' ? 'My Listings' : '+ Sell'}
              </button>
            ))}
          </div>
        </div>

        {!verified && <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20"><AlertTriangle className="h-5 w-5 text-warning" /><p className="text-sm text-muted-foreground">Marketplace is only available for verified students.</p></div>}

        {tab === 'browse' && (
          <>
            <div className="flex flex-wrap gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <select value={cat} onChange={e => setCat(e.target.value)} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
                <option value="">All</option>{categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(item => (
                <div key={item.id} className="glass-card p-4">
                  <div className="w-full aspect-video rounded-lg bg-secondary/50 flex items-center justify-center mb-3"><ShoppingBag className="h-6 w-6 text-muted-foreground/30" /></div>
                  <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                  <p className="text-lg font-bold text-primary">₹{item.price}</p>
                  <p className="text-xs text-muted-foreground mb-3">{item.condition} · {item.location}</p>
                  <div className="flex gap-2">
                    <button disabled={!verified} onClick={() => handleReserve(item.id)} className="flex-1 text-xs py-2 rounded-lg bg-primary/10 text-primary disabled:opacity-50">Reserve</button>
                    <button onClick={() => setMsgModal(item.id)} className="text-xs py-2 px-3 rounded-lg bg-secondary text-secondary-foreground"><MessageSquare className="h-3 w-3" /></button>
                    <button onClick={() => handleFlag(item.id)} className="text-xs py-2 px-3 rounded-lg bg-destructive/10 text-destructive"><Flag className="h-3 w-3" /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'my' && (
          <div className="space-y-3">
            {myItems.length === 0 ? <p className="text-sm text-muted-foreground">No listings yet</p> : myItems.map(item => (
              <div key={item.id} className="glass-card p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-foreground text-sm">{item.title} — ₹{item.price}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === 'available' ? 'bg-success/10 text-success' : item.status === 'reserved' ? 'bg-warning/10 text-warning' : 'bg-muted text-muted-foreground'}`}>{item.status}</span>
                </div>
                <button onClick={() => handleDelete(item.id)} className="text-xs px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive">Remove</button>
              </div>
            ))}
          </div>
        )}

        {tab === 'sell' && (
          <form onSubmit={handleSell} className="glass-card p-6 space-y-4 max-w-lg">
            <h3 className="font-semibold text-foreground">List an Item</h3>
            <input placeholder="Title" required value={sellForm.title} onChange={e => setSellForm({ ...sellForm, title: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <div className="grid grid-cols-2 gap-3">
              <select value={sellForm.category} onChange={e => setSellForm({ ...sellForm, category: e.target.value })} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
                {['Books', 'Electronics', 'Notes', 'Instruments', 'Clothing', 'Other'].map(c => <option key={c}>{c}</option>)}
              </select>
              <input type="number" placeholder="Price (₹)" required value={sellForm.price || ''} onChange={e => setSellForm({ ...sellForm, price: +e.target.value })} className="px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none" />
            </div>
            <select value={sellForm.condition} onChange={e => setSellForm({ ...sellForm, condition: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm">
              {['New', 'Like New', 'Good', 'Fair'].map(c => <option key={c}>{c}</option>)}
            </select>
            <textarea placeholder="Description" rows={3} value={sellForm.description} onChange={e => setSellForm({ ...sellForm, description: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm resize-none focus:outline-none" />
            <input placeholder="Pickup Location" value={sellForm.location} onChange={e => setSellForm({ ...sellForm, location: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none" />
            <button type="submit" disabled={!verified} className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-50">List Item</button>
          </form>
        )}

        {msgModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setMsgModal(null)}>
            <div className="glass-card p-6 max-w-sm w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between mb-4"><h3 className="font-bold text-foreground">Message Seller</h3><button onClick={() => setMsgModal(null)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <textarea placeholder="Hi, I'm interested in..." rows={3} className="w-full px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm resize-none mb-3" />
              <button onClick={() => { setMsgModal(null); toast({ title: 'Message sent!' }); }} className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Send</button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
