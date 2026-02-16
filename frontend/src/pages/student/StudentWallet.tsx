import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { WalletSBT } from '@/lib/types';
import { Wallet, Shield, Award, Hexagon, ExternalLink } from 'lucide-react';

const EXPLORER = 'https://amoy.polygonscan.com';

export default function StudentWallet() {
  const { session } = useAuth();
  const [sbts, setSbts] = useState<WalletSBT[]>([]);
  const [walletInfo, setWalletInfo] = useState<{ address: string | null }>({ address: null });

  useEffect(() => {
    if (session) {
      api.sbtGetTokens(session.userId).then(setSbts).catch(() => {
        api.getWallet(session.userId).then(setSbts).catch(() => {});
      });
      api.sbtGetWallet(session.userId).then((w: any) => setWalletInfo(w)).catch(() => {});
    }
  }, [session]);

  return (
    <DashboardLayout role="student">
      <div className="max-w-3xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Wallet className="h-6 w-6 text-primary" />SBT Wallet</h1>
          <p className="text-sm text-muted-foreground mt-1">Your Soulbound Token timeline — immutable proof of your achievements</p>
        </div>

        <div className="glass-card p-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Total SBTs: <span className="text-foreground font-bold">{sbts.length}</span></p>
          {walletInfo.address && (
            <a href={`${EXPLORER}/address/${walletInfo.address}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-primary hover:underline">
              <Wallet className="h-3 w-3" />
              {walletInfo.address.slice(0, 6)}...{walletInfo.address.slice(-4)}
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>

        {sbts.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <Hexagon className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground">No SBTs yet. Get verified to receive your first SBT!</p>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-6">
              {sbts.map((sbt, i) => (
                <div key={sbt.id} className="relative pl-14">
                  <div className={`absolute left-4 top-3 w-5 h-5 rounded-full flex items-center justify-center ${i === 0 ? 'bg-primary glow-primary' : 'bg-secondary border border-border'}`}>
                    {sbt.title.includes('Verified') ? <Shield className="h-3 w-3 text-primary-foreground" /> : <Award className="h-3 w-3 text-foreground" />}
                  </div>
                  <div className="glass-card-hover p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{sbt.title}</h3>
                      <span className="text-xs text-muted-foreground">{sbt.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{sbt.reason}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Issued by: <span className="text-foreground">{sbt.issuedBy}</span></span>
                      {sbt.txHash && sbt.txHash.startsWith('0x') ? (
                        <a href={`${EXPLORER}/tx/${sbt.txHash}`} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 font-mono text-primary/70 hover:text-primary hover:underline">
                          {sbt.txHash.slice(0, 10)}...{sbt.txHash.slice(-4)}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="font-mono text-primary/70">{sbt.txHash}</span>
                      )}
                    </div>
                    {sbt.tokenId !== undefined && (
                      <p className="text-xs text-muted-foreground mt-1">Token #{sbt.tokenId} · Polygon Amoy</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
