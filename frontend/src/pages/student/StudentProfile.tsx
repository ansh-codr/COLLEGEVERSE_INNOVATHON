import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Student } from '@/lib/types';
import { Save, X, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentProfile() {
  const { session, refreshUser } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ ...student });
  const [aiModal, setAiModal] = useState(false);

  const handleSave = async () => {
    await api.updateStudent(student.id, { name: form.name, bio: form.bio, skills: form.skills, github: form.github, linkedin: form.linkedin, leetcode: form.leetcode, codeforces: form.codeforces, codechef: form.codechef });
    await refreshUser();
    setEditing(false);
    toast({ title: 'Profile updated!' });
  };

  return (
    <DashboardLayout role="student">
      <div className="max-w-3xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
          <div className="flex gap-2">
            <button onClick={() => setAiModal(true)} className="px-3 py-2 rounded-lg bg-violet/10 text-violet text-sm font-medium hover:bg-violet/20 flex items-center gap-1"><Sparkles className="h-4 w-4" />AI Resume</button>
            {editing ? (
              <>
                <button onClick={handleSave} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1"><Save className="h-4 w-4" />Save</button>
                <button onClick={() => { setForm({ ...student }); setEditing(false); }} className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"><X className="h-4 w-4" /></button>
              </>
            ) : (
              <button onClick={() => setEditing(true)} className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">Edit</button>
            )}
          </div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="text-xs text-muted-foreground">Name</label><input disabled={!editing} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full mt-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm disabled:opacity-60" /></div>
            <div><label className="text-xs text-muted-foreground">Email</label><input disabled value={student.email} className="w-full mt-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm opacity-60" /></div>
          </div>
          <div><label className="text-xs text-muted-foreground">Bio</label><textarea disabled={!editing} value={form.bio || ''} onChange={e => setForm({ ...form, bio: e.target.value })} rows={2} className="w-full mt-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm disabled:opacity-60 resize-none" /></div>
          <div><label className="text-xs text-muted-foreground">Skills (comma-separated)</label><input disabled={!editing} value={form.skills.join(', ')} onChange={e => setForm({ ...form, skills: e.target.value.split(',').map(s => s.trim()) })} className="w-full mt-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm disabled:opacity-60" /></div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="font-semibold text-foreground">Integrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(['github', 'linkedin', 'leetcode', 'codeforces', 'codechef'] as const).map(key => (
              <div key={key}><label className="text-xs text-muted-foreground capitalize">{key}</label><input disabled={!editing} value={(form as any)[key] || ''} onChange={e => setForm({ ...form, [key]: e.target.value })} className="w-full mt-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm disabled:opacity-60" /></div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-semibold text-foreground mb-3">Points Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(student.points).map(([k, v]) => (
              <div key={k} className="p-3 rounded-lg bg-secondary/50 text-center"><p className="text-xs text-muted-foreground capitalize">{k}</p><p className="text-lg font-bold text-primary">{v}</p></div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-semibold text-foreground mb-3">Achievements ({student.achievements.length})</h3>
          {student.achievements.length === 0 ? <p className="text-sm text-muted-foreground">No achievements yet</p> : (
            <div className="space-y-2">{student.achievements.map((a, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-secondary/30">
                <span className="text-sm text-foreground">{a.title}</span>
                <span className="text-xs text-muted-foreground">{a.date} · +{a.points}pts</span>
              </div>
            ))}</div>
          )}
        </div>

        {aiModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setAiModal(false)}>
            <div className="glass-card p-6 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2"><Sparkles className="h-5 w-5 text-violet" />AI Resume Helper</h3>
              <div className="p-4 rounded-lg bg-secondary/50 text-sm text-muted-foreground whitespace-pre-line">
                {`${student.name}\n${student.email}\n\nSkills: ${student.skills.join(', ')}\n\nExperience:\n- ${student.achievements.map(a => a.title).join('\n- ') || 'Build your achievements to enhance your resume'}\n\nCertifications:\n- ${student.certificates.map(c => c.title).join('\n- ') || 'Add certifications to stand out'}\n\n💡 This is a placeholder resume template. In production, an AI model would generate a tailored resume based on your profile data.`}
              </div>
              <button onClick={() => setAiModal(false)} className="mt-4 w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Close</button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
