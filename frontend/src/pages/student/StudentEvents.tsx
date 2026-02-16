import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/mockApi';
import type { Event, Student, Team } from '@/lib/types';
import { Calendar, Users, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StudentEvents() {
  const { session } = useAuth();
  const student = session?.user as Student;
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([]);
  const [teams, setTeams] = useState<Record<string, Team[]>>({});
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    api.getEvents(student.collegeId).then(async evts => {
      setEvents(evts);
      const t: Record<string, Team[]> = {};
      for (const e of evts) { t[e.id] = await api.getTeams(e.id); }
      setTeams(t);
    });
  }, [student.collegeId]);

  const handleApply = async (eventId: string) => {
    await api.applyToEvent(eventId, student.id);
    const evts = await api.getEvents(student.collegeId);
    setEvents(evts);
    toast({ title: 'Applied to event!' });
  };

  const handleCreateTeam = async (eventId: string) => {
    if (!teamName) return;
    await api.createTeam({ eventId, name: teamName, members: [student.id], openSlots: 2, createdBy: student.id });
    teams[eventId] = await api.getTeams(eventId);
    setTeams({ ...teams });
    setTeamName('');
    toast({ title: 'Team created!' });
  };

  const handleJoinTeam = async (teamId: string, eventId: string) => {
    await api.joinTeam(teamId, student.id);
    teams[eventId] = await api.getTeams(eventId);
    setTeams({ ...teams });
    toast({ title: 'Joined team!' });
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2"><Calendar className="h-6 w-6 text-primary" />Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map(e => (
            <div key={e.id} className="glass-card-hover p-5">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-foreground">{e.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{e.type}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{e.description}</p>
              <p className="text-xs text-muted-foreground mb-3">📅 {e.date}</p>
              <div className="flex flex-wrap gap-1 mb-3">{e.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{t}</span>)}</div>
              <div className="flex gap-2">
                {e.applicants.includes(student.id) ? (
                  <span className="text-xs px-3 py-1.5 rounded-lg bg-success/10 text-success">Applied ✓</span>
                ) : (
                  <button onClick={() => handleApply(e.id)} className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">Apply</button>
                )}
                <button onClick={() => setSelectedEvent(e)} className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground flex items-center gap-1"><Users className="h-3 w-3" />Teams</button>
              </div>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
            <div className="glass-card p-6 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between mb-4"><h3 className="font-bold text-foreground">Teams — {selectedEvent.title}</h3><button onClick={() => setSelectedEvent(null)}><X className="h-5 w-5 text-muted-foreground" /></button></div>
              <div className="space-y-2 mb-4">
                {(teams[selectedEvent.id] || []).map(t => (
                  <div key={t.id} className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                    <div><p className="text-sm font-medium text-foreground">{t.name}</p><p className="text-xs text-muted-foreground">{t.members.length} members · {t.openSlots} slots open</p></div>
                    {t.openSlots > 0 && !t.members.includes(student.id) && <button onClick={() => handleJoinTeam(t.id, selectedEvent.id)} className="text-xs px-3 py-1 rounded-lg bg-primary text-primary-foreground">Join</button>}
                  </div>
                ))}
                {(teams[selectedEvent.id] || []).length === 0 && <p className="text-sm text-muted-foreground">No teams yet</p>}
              </div>
              <div className="flex gap-2">
                <input value={teamName} onChange={e => setTeamName(e.target.value)} placeholder="Team name..." className="flex-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm" />
                <button onClick={() => handleCreateTeam(selectedEvent.id)} className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm"><Plus className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
