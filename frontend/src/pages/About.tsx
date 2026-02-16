import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GraduationCap, Users, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16">
        <h1 className="text-3xl font-bold gradient-text mb-4">About CollegeVerse</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">CollegeVerse is the unified digital ecosystem connecting every college, student, faculty member, and recruiter on one platform.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { icon: <GraduationCap className="h-6 w-6 text-primary" />, title: 'For Students', desc: 'Verified identity, SBT wallet, MicroGigs, Marketplace, communities, events, placements, and more.' },
            { icon: <Users className="h-6 w-6 text-violet" />, title: 'For Faculty', desc: 'Manage student verification, notices, events, communities, clubs, and campus analytics.' },
            { icon: <Shield className="h-6 w-6 text-cyan" />, title: 'Trust & Verification', desc: 'Every student is verified by their college. Soulbound Tokens (SBTs) create an immutable record of achievements.' },
            { icon: <Zap className="h-6 w-6 text-warning" />, title: 'Economic Ecosystem', desc: 'Students earn through gigs and marketplace. Faculty earn from workshops. Colleges benefit from the ecosystem.' },
          ].map(item => (
            <div key={item.title} className="glass-card p-6">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
