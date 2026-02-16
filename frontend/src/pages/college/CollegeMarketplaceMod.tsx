import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { MarketplaceItem, Faculty } from '@/lib/types';
import { ShoppingBag, Check, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CollegeMarketplaceMod() {
  const { session } = useAuth();
  const faculty = session?.user as Faculty;
  const { toast } = useToast();
  const [items, setItems] = useState<MarketplaceItem[]>([]);

  const reload = () => { api.getMarketplaceItems().then(all => setItems(all.filter(i => i.collegeId === faculty.collegeId && i.flagged))); };
  useEffect(reload, [faculty.collegeId]);

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><ShoppingBag className="h-6 w-6 text-primary" />Marketplace Moderation</h1>
        {items.length === 0 ? <div className="glass-card p-8 text-center text-muted-foreground">No flagged items</div> : (
          <div className="space-y-3">
            {items.map(i => (
              <div key={i.id} className="glass-card p-4 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground">{i.title} — ₹{i.price}</h3>
                  <p className="text-sm text-destructive">Flagged: {i.flagReason}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={async () => { await api.updateMarketplaceItem(i.id, { flagged: false, flagReason: undefined }); reload(); toast({ title: 'Resolved' }); }} className="px-3 py-2 rounded-lg bg-success/10 text-success text-sm flex items-center gap-1"><Check className="h-4 w-4" />Resolve</button>
                  <button onClick={async () => { await api.deleteMarketplaceItem(i.id); reload(); toast({ title: 'Removed' }); }} className="px-3 py-2 rounded-lg bg-destructive/10 text-destructive text-sm flex items-center gap-1"><Trash2 className="h-4 w-4" />Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
