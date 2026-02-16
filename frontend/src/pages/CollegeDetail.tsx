import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '@/lib/mockApi';
import type { College } from '@/lib/types';
import { MapPin, Users, Calendar, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function CollegeDetail() {
  const { id } = useParams();
  const [college, setCollege] = useState<College | null>(null);
  useEffect(() => { if (id) api.getCollegeById(id).then(c => setCollege(c || null)); }, [id]);

  if (!college) return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Loading...</div>;

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16">
        <Link to="/colleges" className="text-sm text-primary hover:underline flex items-center gap-1 mb-6"><ArrowLeft className="h-4 w-4" />Back to Colleges</Link>
        <div className="glass-card p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{college.name}</h1>
              <p className="text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-4 w-4" />{college.location}</p>
            </div>
            <span className="text-lg px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">#{college.ranking}</span>
          </div>
          <p className="text-muted-foreground mb-6">{college.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-secondary/50"><p className="text-xs text-muted-foreground">Type</p><p className="font-semibold text-foreground">{college.type}</p></div>
            <div className="p-4 rounded-lg bg-secondary/50"><p className="text-xs text-muted-foreground flex items-center gap-1"><Users className="h-3 w-3" />Students</p><p className="font-semibold text-foreground">{college.studentCount.toLocaleString()}</p></div>
            <div className="p-4 rounded-lg bg-secondary/50"><p className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />Est.</p><p className="font-semibold text-foreground">{college.established}</p></div>
            <div className="p-4 rounded-lg bg-secondary/50"><p className="text-xs text-muted-foreground">Depts</p><p className="font-semibold text-foreground">{college.departments.length}</p></div>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Departments</h3>
          <div className="flex flex-wrap gap-2">{college.departments.map(d => <span key={d} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">{d}</span>)}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
