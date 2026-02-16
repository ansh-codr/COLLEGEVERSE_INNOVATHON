import { useState } from 'react';
import { api } from '@/lib/mockApi';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.submitContactInquiry(form);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background"><Navbar />
      <div className="container-main pt-24 pb-16 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2"><Mail className="h-7 w-7 text-primary" />Contact Us</h1>
        <p className="text-muted-foreground mb-8">Have a question? We'd love to hear from you.</p>
        {sent ? (
          <div className="glass-card p-8 text-center"><CheckCircle className="h-12 w-12 text-success mx-auto mb-3" /><p className="font-semibold text-foreground">Message Sent!</p><p className="text-sm text-muted-foreground mt-1">We'll get back to you soon.</p></div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <input placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <input type="email" placeholder="Your Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            <textarea placeholder="Your Message" required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
            <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">Send Message</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
