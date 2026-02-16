import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { motion } from 'framer-motion';
import { GraduationCap, AlertCircle, Loader2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

export default function LoginStudent() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // College email check
    const collegeEmailDomains = ['iitd.ac.in', 'iitb.ac.in', 'nitt.ac.in', 'bits.ac.in', 'dtu.ac.in'];
    const domain = email.split('@')[1];
    if (!collegeEmailDomains.includes(domain)) {
      setError('Please use your college email address (e.g., name@iitd.ac.in). Personal emails are not allowed for full access.');
      return;
    }
    try {
      await login(email, password);
      navigate('/student/dashboard');
    } catch {
      setError('Invalid email or password. Try: arjun@iitd.ac.in / pass123');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-main pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
            <h1 className="text-2xl font-bold text-foreground">Student Login</h1>
            <p className="text-sm text-muted-foreground mt-1">Use your college email to sign in</p>
          </div>
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            {error && (
              <div className="flex gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>{error}</span>
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">College Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="name@iitd.ac.in" className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <button type="submit" disabled={loading} className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Signing in...</> : 'Sign In'}
            </button>
            <div className="text-xs text-muted-foreground mt-3 p-3 rounded-lg bg-secondary/50">
              <strong>Demo accounts:</strong><br />
              Verified: arjun@iitd.ac.in / pass123<br />
              Pending: priya@iitd.ac.in / pass123
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/signup/student" className="text-primary hover:underline font-medium">Sign up</Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
