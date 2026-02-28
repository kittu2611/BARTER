import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Send,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Bell,
  LayoutDashboard,
  Globe,
  MessageSquare,
  Settings,
  FileText
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import type { SponsorshipRequest } from '../types';
import Logo from '../components/ui/Logo';

const MyRequests: React.FC = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<SponsorshipRequest[]>([]);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem('sponsorshipRequests') || '[]');
    if (savedRequests.length === 0) {
      // Mock initial data if empty
      const initialRequests: SponsorshipRequest[] = [
        { id: '1', brandName: 'TechNova', eventName: 'Global Summit 2024', date: 'Oct 12, 2023', status: 'PENDING', attendance: '10,000', brandLogo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128' },
        { id: '2', brandName: 'Lumina Co.', eventName: 'Creative Expo', date: 'Sep 28, 2023', status: 'SENT', attendance: '5,000', brandLogo: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=128' },
        { id: '3', brandName: 'Aura Energy', eventName: 'Fitness Fest', date: 'Sep 15, 2023', status: 'ACCEPTED', attendance: '2,500', brandLogo: 'https://www.google.com/s2/favicons?domain=nike.com&sz=128' },
        { id: '4', brandName: 'Vortex Media', eventName: 'E-Sports Finals', date: 'Aug 30, 2023', status: 'REJECTED', attendance: '50,000', brandLogo: 'https://www.google.com/s2/favicons?domain=redbull.com&sz=128' },
        { id: '5', brandName: 'CloudScale', eventName: 'Developer Week', date: 'Aug 22, 2023', status: 'ACCEPTED', attendance: '8,000', brandLogo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128' },
      ];
      setRequests(initialRequests);
      localStorage.setItem('sponsorshipRequests', JSON.stringify(initialRequests));
    } else {
      setRequests(savedRequests);
    }
  }, []);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'SENT': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'ACCEPTED': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'REJECTED': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div className="flex h-screen bg-[#050a14] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0a0f1d] flex flex-col">
        <div className="p-8 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
           <Logo className="h-10" />
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <LayoutDashboard size={20} />
            <span className="text-sm font-bold">Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-accent-blue/10 text-accent-blue rounded-xl border border-accent-blue/20">
            <FileText size={20} />
            <span className="text-sm font-bold">My Requests</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <Globe size={20} />
            <span className="text-sm font-bold">Discovery</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <MessageSquare size={20} />
            <span className="text-sm font-bold">Messages</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <Settings size={20} />
            <span className="text-sm font-bold">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between bg-[#0a0f1d]/30 backdrop-blur-md">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
              <input 
                type="text" 
                placeholder="Search requests..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 w-96 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all text-sm"
              />
            </div>

            <div className="flex items-center gap-6">
              <button className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Bell size={18} className="text-white/60" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent-blue rounded-full border-2 border-[#0a0f1d]" />
              </button>
              <div className="flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <div className="text-right">
                  <div className="text-xs font-bold">Alex Rivera</div>
                  <div className="text-[10px] text-white/40">Premium Account</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple overflow-hidden">
                   <img src="https://i.pravatar.cc/150?u=alex" alt="Profile" />
                </div>
              </div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12">
          <div className="mb-12">
            <h1 className="text-4xl font-black mb-2">My Requests</h1>
            <p className="text-white/40">Manage and track your active sponsorship barter proposals across various platforms.</p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white/[0.02] border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all">
                <FileText size={64} />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                   <Send size={20} />
                </div>
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-white/30 mb-2">Total Requests</div>
              <div className="text-4xl font-black mb-2">128</div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-500">
                <TrendingUp size={12} /> +12% from last month
              </div>
            </Card>

            <Card className="p-8 bg-white/[0.02] border-white/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all text-green-500">
                <CheckCircle2 size={64} />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                   <CheckCircle2 size={20} />
                </div>
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-white/30 mb-2">Accepted</div>
              <div className="text-4xl font-black mb-2">42</div>
              <div className="text-[10px] font-bold text-white/30">
                32.8% conversion rate
              </div>
            </Card>

            <Card className="p-8 bg-white/[0.02] border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all text-yellow-500">
                <Clock size={64} />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                   <Clock size={20} />
                </div>
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-white/30 mb-2">Pending</div>
              <div className="text-4xl font-black mb-2">15</div>
              <div className="text-[10px] font-bold text-white/30">
                Avg. response time: 2 days
              </div>
            </Card>
          </div>

          <Card className="bg-white/[0.02] border-white/5 overflow-hidden">
            <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-lg font-bold uppercase tracking-widest">Recent Requests</h3>
              <div className="flex gap-4">
                <Button variant="secondary" className="px-4 py-2 h-auto text-xs flex gap-2 border-white/10 hover:bg-white/10">
                  <Filter size={14} /> Filter
                </Button>
                <Button className="px-4 py-2 h-auto text-xs flex gap-2" onClick={() => navigate('/sponsorship/categories')}>
                  <Plus size={14} /> New Request
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-white/5 text-[10px] font-black uppercase text-white/20 tracking-widest">
                    <th className="px-8 py-5">Brand</th>
                    <th className="px-8 py-5">Event</th>
                    <th className="px-8 py-5">Date</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {requests.map((request) => (
                    <tr key={request.id} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center">
                            <img 
                              src={request.brandLogo} 
                              alt="" 
                              className="w-full h-full object-contain" 
                            />
                          </div>
                          <div>
                            <div className="text-sm font-bold">{request.brandName}</div>
                            <div className="text-[10px] text-white/20 uppercase tracking-widest font-black">ID: #{request.id.slice(0, 6)}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm font-medium">{request.eventName}</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-sm text-white/40">{request.date}</div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(request.status)}`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white">
                            <ArrowUpRight size={18} />
                          </button>
                          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-8 py-6 border-t border-white/5 flex items-center justify-between">
              <div className="text-xs text-white/20">Showing 5 of 128 results</div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="p-2 h-auto text-white/40 hover:text-white">
                  <ChevronLeft size={18} />
                </Button>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg bg-accent-blue text-xs font-bold">1</button>
                  <button className="w-8 h-8 rounded-lg text-xs font-bold text-white/40 hover:bg-white/5">2</button>
                  <button className="w-8 h-8 rounded-lg text-xs font-bold text-white/40 hover:bg-white/5">3</button>
                </div>
                <Button variant="ghost" className="p-2 h-auto text-white/40 hover:text-white">
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MyRequests;
