import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { FileText, Plus, X, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question { text: string; options: string[]; correct: number }
interface Test { id: string; title: string; questions: Question[]; assigned: boolean }

export default function RecruiterTests() {
  const { toast } = useToast();
  const [tests, setTests] = useState<Test[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([{ text: '', options: ['', '', '', ''], correct: 0 }]);

  const addQuestion = () => setQuestions([...questions, { text: '', options: ['', '', '', ''], correct: 0 }]);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setTests([...tests, { id: Date.now().toString(), title, questions, assigned: false }]);
    setShowForm(false); setTitle(''); setQuestions([{ text: '', options: ['', '', '', ''], correct: 0 }]);
    toast({ title: 'Test created!' });
  };

  const handleAssign = (id: string) => {
    setTests(tests.map(t => t.id === id ? { ...t, assigned: true } : t));
    toast({ title: 'Test assigned to shortlisted students' });
  };

  return (
    <DashboardLayout role="recruiter">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><FileText className="h-6 w-6 text-primary" />MCQ Tests</h1>
          <button onClick={() => setShowForm(true)} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm flex items-center gap-1"><Plus className="h-4 w-4" />Create Test</button>
        </div>
        {tests.length === 0 && !showForm && <div className="glass-card p-8 text-center text-muted-foreground">No tests created yet</div>}
        <div className="space-y-3">
          {tests.map(t => (
            <div key={t.id} className="glass-card p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-foreground">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.questions.length} questions · {t.assigned ? 'Assigned ✓' : 'Not assigned'}</p>
              </div>
              {!t.assigned && <button onClick={() => handleAssign(t.id)} className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">Assign to Shortlist</button>}
            </div>
          ))}
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm overflow-y-auto py-8" onClick={() => setShowForm(false)}>
            <form onSubmit={handleCreate} className="glass-card p-6 max-w-lg w-full mx-4 space-y-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between"><h3 className="font-bold text-foreground">Create MCQ Test</h3><button type="button" onClick={() => setShowForm(false)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <input placeholder="Test Title" required value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm" />
              {questions.map((q, qi) => (
                <div key={qi} className="p-3 rounded-lg bg-secondary/30 space-y-2">
                  <input placeholder={`Question ${qi + 1}`} required value={q.text} onChange={e => { const nq = [...questions]; nq[qi].text = e.target.value; setQuestions(nq); }} className="w-full px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm" />
                  {q.options.map((o, oi) => (
                    <div key={oi} className="flex items-center gap-2">
                      <button type="button" onClick={() => { const nq = [...questions]; nq[qi].correct = oi; setQuestions(nq); }} className={`w-6 h-6 rounded-full border flex items-center justify-center ${q.correct === oi ? 'bg-success border-success' : 'border-border'}`}>
                        {q.correct === oi && <Check className="h-3 w-3 text-success-foreground" />}
                      </button>
                      <input placeholder={`Option ${oi + 1}`} required value={o} onChange={e => { const nq = [...questions]; nq[qi].options[oi] = e.target.value; setQuestions(nq); }} className="flex-1 px-3 py-1.5 rounded-lg bg-input border border-border text-foreground text-sm" />
                    </div>
                  ))}
                </div>
              ))}
              <button type="button" onClick={addQuestion} className="text-sm text-primary hover:underline">+ Add Question</button>
              <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">Create Test</button>
            </form>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
