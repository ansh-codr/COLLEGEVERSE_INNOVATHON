import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { ChatMessage, Community, Student } from '@/lib/types';
import { MessageSquare, Send, Trash2, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentChat() {
  const { session } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [communities, setCommunities] = useState<Community[]>([]);
  const [selected, setSelected] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    api.getCommunities(student.collegeId).then(c => {
      setCommunities(c);
      if (c.length > 0 && !selected) setSelected(c[0].id);
    });
  }, [student.collegeId]);

  useEffect(() => { if (selected) api.getMessages(selected).then(setMessages); }, [selected]);

  const handleSend = async () => {
    if (!text.trim()) return;
    try {
      await api.sendMessage({ communityId: selected, senderId: student.id, senderName: student.name, text });
      setText('');
      setMessages(await api.getMessages(selected));
    } catch (err: any) {
      toast({ title: 'Blocked', description: err.message, variant: 'destructive' });
    }
  };

  const handleDelete = async (id: string) => {
    await api.deleteMessage(id);
    setMessages(await api.getMessages(selected));
  };

  return (
    <DashboardLayout role="student">
      <div className="flex h-[calc(100vh-8rem)] gap-4">
        <div className="w-48 shrink-0 space-y-1">
          <h3 className="text-sm font-semibold text-foreground mb-2">Channels</h3>
          {communities.map(c => (
            <button key={c.id} onClick={() => setSelected(c.id)} className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${selected === c.id ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              # {c.name.split(' - ').pop()}
            </button>
          ))}
        </div>
        <div className="flex-1 glass-card flex flex-col">
          <div className="p-3 border-b border-border/50 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="font-medium text-sm text-foreground">{communities.find(c => c.id === selected)?.name || 'Chat'}</span>
          </div>
          <div className="p-3 bg-cyan/5 border-b border-border/50 flex items-center gap-2 text-xs text-cyan">
            <Shield className="h-3 w-3" /> AI moderation is active. Messages containing prohibited words will be blocked.
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(m => (
              <div key={m.id} className={`flex gap-2 ${m.senderId === student.id ? 'justify-end' : ''}`}>
                <div className={`max-w-[70%] p-3 rounded-lg ${m.senderId === student.id ? 'bg-primary/20' : 'bg-secondary/50'}`}>
                  <p className="text-xs font-semibold text-foreground mb-1">{m.senderName}</p>
                  <p className="text-sm text-foreground">{m.text}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-muted-foreground">{new Date(m.timestamp).toLocaleTimeString()}</span>
                    {m.senderId === student.id && <button onClick={() => handleDelete(m.id)} className="text-destructive/60 hover:text-destructive"><Trash2 className="h-3 w-3" /></button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border/50 flex gap-2">
            <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Type a message..." className="flex-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm" />
            <button onClick={handleSend} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground"><Send className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
