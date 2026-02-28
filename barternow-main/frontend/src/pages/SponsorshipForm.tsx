import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  ShieldCheck, 
  Zap,
  Bell,
  Settings,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import Logo from '../components/ui/Logo';

const SponsorshipForm: React.FC = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get('category') || '';

  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    attendance: '',
    budget: '',
    type: initialCategory
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('lastSponsorshipForm', JSON.stringify(formData));
    navigate('/sponsorship/match');
  };

  return (
    <div className="min-h-screen bg-[#050a14] text-white overflow-hidden relative">
      {/* Small floating accents */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-accent-blue/10 blur-[150px] -z-10" />
      
      {/* Sidebar Nav (Mini) */}
      <header className="px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <Logo className="h-10" />
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-sm font-medium text-white/40">
           <a href="#" className="hover:text-white">Dashboard</a>
           <a href="#" className="text-accent-blue">Sponsorships</a>
           <a href="#" className="hover:text-white">Investors</a>
           <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
             <Users size={18} />
           </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 pt-12 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-6">
          Premium Portal
        </div>
        
        <h1 className="text-6xl font-black mb-6 leading-tight">Sponsorship Details</h1>
        <p className="text-white/40 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Align your event with the right partners. Fill in the details to unlock premium barter matches.
        </p>

        <form onSubmit={handleSubmit} className="relative">
          {/* Floating Action Buttons Left */}
          <div className="absolute right-[-100px] top-1/4 flex flex-col gap-4">
             <button type="button" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/40 hover:text-white group relative">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050a14]" />
             </button>
             <button type="button" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/40 hover:text-white">
                <Settings size={20} />
             </button>
             <button type="button" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/40 hover:text-white">
                <MessageSquare size={20} />
             </button>
          </div>

          <Card className="p-12 text-left bg-white/[0.01] border-white/5 shadow-2xl relative overflow-hidden">
            {/* Form Glow */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-accent-blue/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="space-y-8">
              <Input 
                 placeholder="Event Name" 
                 value={formData.eventName}
                 onChange={e => setFormData({...formData, eventName: e.target.value})}
                 className="py-4 text-lg border-white/5 focus:border-accent-blue/30"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="relative">
                    <label className="absolute -top-3 left-4 bg-[#0d1424] px-2 text-xs font-medium text-accent-blue z-10">Event Date</label>
                    <input 
                       type="date" 
                       className="glass-input w-full py-4 text-white/40 focus:text-white"
                       value={formData.eventDate}
                       onChange={e => setFormData({...formData, eventDate: e.target.value})}
                    />
                 </div>
                 <Input 
                    placeholder="Expected Attendance" 
                    icon={<Users size={18} />} 
                    value={formData.attendance}
                    onChange={e => setFormData({...formData, attendance: e.target.value})}
                 />
              </div>

              <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg">$</div>
                 <input 
                    type="text" 
                    placeholder="Estimated Budget" 
                    className="glass-input w-full pl-10 py-4"
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                 />
              </div>

              <div className="glass-card p-6 bg-accent-blue/5 border-accent-blue/10 flex items-center gap-6">
                 <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                    <ShieldCheck size={28} />
                 </div>
                 <div>
                    <h4 className="font-bold">Investor-Ready Profile</h4>
                    <p className="text-white/30 text-xs">Your details will be formatted for potential premium sponsors automatically.</p>
                 </div>
              </div>

              <Button type="submit" className="w-full py-5 text-xl rounded-full" glow>
                 Find Matches <Zap size={20} />
              </Button>
            </div>
          </Card>
        </form>

        <div className="mt-16 flex items-center justify-center gap-8 text-white/30 text-sm font-medium">
           <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
             <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[10px]">?</span> Need help?
           </a>
           <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
             <ShieldCheck size={16} /> Privacy Secure
           </a>
        </div>
      </main>
    </div>
  );
};

export default SponsorshipForm;
