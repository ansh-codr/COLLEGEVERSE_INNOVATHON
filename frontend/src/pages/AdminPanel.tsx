import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useState, useEffect } from 'react';
import { api } from '@/lib/mockApi';
import { Shield, Award, ExternalLink, Loader2, Wallet, Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminStudent {
  id: string;
  name: string;
  email: string;
  walletAddress: string | null;
  sbtCount: number;
  verified: boolean;
}

export default function AdminPanel() {
  const { session } = useAuth();
  const { toast } = useToast();
  const [students, setStudents] = useState<AdminStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [mintModal, setMintModal] = useState<string | null>(null);
  const [mintForm, setMintForm] = useState({ title: '', reason: '' });
  const [stats, setStats] = useState<any>(null);

  const EXPLORER = 'https://amoy.polygonscan.com';

  const fetchStudents = async () => {
    try {
      const data = await api.sbtListStudents();
      setStudents(data as AdminStudent[]);
    } catch (err: any) {
      toast({ title: 'Failed to load students', description: err?.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await api.sbtGetStats();
      setStats(data);
    } catch {}
  };

  useEffect(() => {
    fetchStudents();
    fetchStats();
  }, []);

  const handleVerify = async (studentId: string) => {
    setActionLoading(studentId);
    try {
      const res = await api.sbtVerifyStudent(studentId) as any;
      toast({ title: 'Student verified!', description: `Wallet created & SBT minted. TX: ${res.sbt?.txHash?.slice(0, 12)}...` });
      fetchStudents();
    } catch (err: any) {
      toast({ title: 'Verification failed', description: err?.message, variant: 'destructive' });
    } finally {
      setActionLoading(null);
    }
  };

  const handleMint = async () => {
    if (!mintModal || !mintForm.title || !mintForm.reason) return;
    setActionLoading(mintModal);
    try {
      const res = await api.sbtMint(mintModal, mintForm.title, mintForm.reason) as any;
      toast({ title: 'SBT Minted!', description: `Token minted. TX: ${res.sbt?.txHash?.slice(0, 12)}...` });
      setMintModal(null);
      setMintForm({ title: '', reason: '' });
      fetchStudents();
    } catch (err: any) {
      toast({ title: 'Minting failed', description: err?.message, variant: 'destructive' });
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <DashboardLayout role="faculty">
      <div className="max-w-5xl space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />SBT Admin Panel
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Manage student verification & SoulBound Token minting</p>
          </div>
          {stats?.contractAddress && (
            <a href={`${EXPLORER}/address/${stats.contractAddress}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-primary hover:underline">
              Contract <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card p-4 text-center">
            <p className="text-xs text-muted-foreground">Total Students</p>
            <p className="text-2xl font-bold text-foreground">{students.length}</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-xs text-muted-foreground">Verified (Wallets)</p>
            <p className="text-2xl font-bold text-green-400">{students.filter(s => s.verified).length}</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-xs text-muted-foreground">Total SBTs Minted</p>
            <p className="text-2xl font-bold text-primary">{stats?.totalMinted ?? '—'}</p>
          </div>
        </div>

        {/* Student table */}
        {loading ? (
          <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
        ) : (
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left p-3 font-medium text-muted-foreground">Student</th>
                  <th className="text-left p-3 font-medium text-muted-foreground">Wallet</th>
                  <th className="text-center p-3 font-medium text-muted-foreground">SBTs</th>
                  <th className="text-right p-3 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                    <td className="p-3">
                      <p className="font-medium text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.email}</p>
                    </td>
                    <td className="p-3">
                      {s.walletAddress ? (
                        <a href={`${EXPLORER}/address/${s.walletAddress}`} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-mono text-primary hover:underline">
                          <Wallet className="h-3 w-3" />
                          {s.walletAddress.slice(0, 6)}...{s.walletAddress.slice(-4)}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground">No wallet</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Hash className="h-3 w-3" />{s.sbtCount}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      {!s.verified ? (
                        <button
                          onClick={() => handleVerify(s.id)}
                          disabled={actionLoading === s.id}
                          className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-700 disabled:opacity-50 inline-flex items-center gap-1"
                        >
                          {actionLoading === s.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Shield className="h-3 w-3" />}
                          Verify
                        </button>
                      ) : (
                        <button
                          onClick={() => setMintModal(s.id)}
                          disabled={actionLoading === s.id}
                          className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 disabled:opacity-50 inline-flex items-center gap-1"
                        >
                          <Award className="h-3 w-3" />Mint SBT
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {students.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">No students found</div>
            )}
          </div>
        )}

        {/* Mint SBT Modal */}
        {mintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setMintModal(null)}>
            <div className="glass-card p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />Mint Achievement SBT
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground">Title</label>
                  <input
                    value={mintForm.title}
                    onChange={(e) => setMintForm({ ...mintForm, title: e.target.value })}
                    placeholder="e.g. Hackathon Winner"
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Reason</label>
                  <textarea
                    value={mintForm.reason}
                    onChange={(e) => setMintForm({ ...mintForm, reason: e.target.value })}
                    placeholder="e.g. Won first place in Innovathon 2025"
                    rows={3}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleMint}
                  disabled={!mintForm.title || !mintForm.reason || actionLoading === mintModal}
                  className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {actionLoading === mintModal ? <Loader2 className="h-4 w-4 animate-spin" /> : <Award className="h-4 w-4" />}
                  Mint on Polygon
                </button>
                <button onClick={() => setMintModal(null)} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
