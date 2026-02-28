import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  ShieldCheck, 
  FileText, 
  MessageSquare, 
  Search, 
  Bell, 
  Save, 
  Send,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  CheckCircle2,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { BRANDS } from '../data/brands';
import type { Brand } from '../types';
import Logo from '../components/ui/Logo';

const BrandMatch: React.FC = () => {
  const navigate = useNavigate();
  
  // Logic to find top 5 matches
  const lastForm = JSON.parse(localStorage.getItem('lastSponsorshipForm') || '{}');
  const userBudget = parseInt(lastForm.budget?.replace(/[^0-9]/g, '') || '0');
  
  const matchedBrands = BRANDS
    .filter(brand => {
       // Filter by exact category, fallback to all if no category selected
       const selectedCategory = lastForm.type ? lastForm.type.toLowerCase().replace(/[^a-z0-9]/g, '') : '';
       if (!selectedCategory) return true;
       
       const brandCategory = brand.category.toLowerCase().replace(/[^a-z0-9]/g, '');
       return brandCategory.includes(selectedCategory) || selectedCategory.includes(brandCategory);
    })
    .map(brand => {
       // Calculate match percentage based on budget
       let score = 70 + Math.floor(Math.random() * 20); // Base high match for filtered brands
       if (userBudget > 0) {
         if (userBudget >= brand.minBudget && userBudget <= brand.maxBudget) score += 10;
         else if (userBudget < brand.minBudget) score -= 10;
       }
       return { ...brand, matchPercentage: Math.min(score, 99) };
    })
    .sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0))
    .slice(0, 5);

  const [selectedBrand, setSelectedBrand] = useState<Brand>(matchedBrands[0] || BRANDS[0]);
  const [proposal, setProposal] = useState(selectedBrand.proposalTemplate || `Hi ${selectedBrand.name} team,\n\nI'm reaching out from the BarterNow community to propose an exclusive sponsorship for our upcoming event. We believe your brand values align perfectly with our audience.\n\nLooking forward to discussing this!`);

  const handleSendProposal = () => {
    const requests = JSON.parse(localStorage.getItem('sponsorshipRequests') || '[]');
    const newRequest = {
      id: `REQ-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      brandName: selectedBrand.name,
      brandLogo: selectedBrand.logo,
      eventName: lastForm.eventName || "New Event",
      date: new Date().toLocaleDateString(),
      status: 'SENT',
      attendance: lastForm.attendance || '5,000'
    };
    localStorage.setItem('sponsorshipRequests', JSON.stringify([newRequest, ...requests]));
    navigate('/requests');
  };

  return (
    <div className="flex h-screen bg-[#050a14] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0a0f1d] flex flex-col">
        <div className="p-8 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <Logo className="h-10 md:h-12" />
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[2px] px-4 mb-4">Menu</p>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <Compass size={20} />
            <span className="text-sm font-bold">Discover</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-accent-blue/10 text-accent-blue rounded-xl border border-accent-blue/20">
            <ShieldCheck size={20} />
            <span className="text-sm font-bold">Matched Brands</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <FileText size={20} />
            <span className="text-sm font-bold">Active Proposals</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <MessageSquare size={20} />
            <span className="text-sm font-bold">Messages</span>
            <span className="ml-auto bg-accent-blue text-white text-[10px] px-2 py-0.5 rounded-full">3</span>
          </button>
        </nav>

        <div className="p-4">
          <div className="glass-card p-6 bg-gradient-to-br from-accent-blue/10 to-transparent border-accent-blue/20">
            <p className="text-[10px] font-black text-accent-blue uppercase mb-2">Pro Plan</p>
            <h4 className="font-bold text-sm mb-4">Unlimited Barters</h4>
            <div className="w-full h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
               <div className="w-3/4 h-full bg-accent-blue" />
            </div>
            <Button variant="ghost" className="w-full text-xs py-2 h-auto">Upgrade Now</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-bold text-white/40">
              <a href="#" className="hover:text-white">Dashboard</a>
              <a href="#" className="text-white border-b-2 border-accent-blue pb-[26px]">Brands</a>
              <a href="#" className="hover:text-white">Proposals</a>
              <a href="#" className="hover:text-white">Analytics</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
              <input 
                type="text" 
                placeholder="Search brands..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all text-sm"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Bell size={18} className="text-white/60" />
            </button>
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden flex items-center justify-center">
               <img src="https://i.pravatar.cc/150?u=ryan" alt="User" />
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Brand List Column */}
          <section className="w-[380px] border-r border-white/5 p-8 overflow-y-auto bg-[#0a0f1d]/30">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Brand Matches</h2>
              <p className="text-white/40 text-sm">Based on your reach & budget compatibility</p>
            </div>

            <div className="space-y-4">
              {matchedBrands.map((brand) => (
                <Card 
                  key={brand.id}
                  className={`p-6 cursor-pointer border-white/5 hover:border-accent-blue/30 transition-all group ${selectedBrand.id === brand.id ? 'bg-accent-blue/10 border-accent-blue/30 ring-1 ring-accent-blue/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'bg-white/[0.02]'}`}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setProposal(brand.proposalTemplate || `Hi ${brand.name} team,\n\nI'm reaching out from the BarterNow community to propose an exclusive sponsorship for our upcoming event. We believe your brand values align perfectly with our audience.\n\nLooking forward to discussing this!`);
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden border border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="w-8 h-8 object-contain p-0.5 bg-white/80 rounded-full" 
                      />
                    </div>
                    <div className="bg-accent-blue/10 text-accent-blue text-[10px] font-black px-2 py-1 rounded-md border border-accent-blue/20">
                      {brand.matchPercentage}% Match
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{brand.name}</h4>
                  <p className="text-white/40 text-xs mb-4">{brand.category}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-white/40 uppercase tracking-wider">{brand.sponsorshipType}</span>
                    <span className="text-[10px] font-bold bg-white/5 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Premium</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Proposal Editor Column */}
          <section className="flex-1 p-10 overflow-y-auto">
            <div className="flex items-start justify-between mb-12">
              <div className="flex gap-8 items-center">
                <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center relative p-4 border border-white/10 shadow-2xl">
                  <img 
                    src={selectedBrand.logo} 
                    alt={selectedBrand.name} 
                    className="w-16 h-16 object-contain p-1 bg-white/80 rounded-full" 
                  />
                  <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-4 border-[#050a14] rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-4xl font-bold">{selectedBrand.name}</h1>
                    <CheckCircle2 size={24} className="text-accent-blue fill-accent-blue/10" />
                  </div>
                  <p className="text-white/40 leading-relaxed max-w-lg text-sm">
                    Global Brand • Active in 'Lifestyle & Wellness'
                  </p>
                  <div className="flex gap-8 mt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Users size={16} className="text-white/40" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">5M+</div>
                        <div className="text-[10px] text-white/20 uppercase font-black">Potential Reach</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <TrendingUp size={16} className="text-white/40" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">High</div>
                        <div className="text-[10px] text-white/20 uppercase font-black">Campaign Velocity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" className="px-8 flex gap-2 items-center border-white/10 hover:bg-white/10">
                  <MessageSquare size={18} className="fill-white" /> Save
                </Button>
                <Button className="px-8 shadow-blue-500/30 shadow-[0_0_30px_-5px]" onClick={handleSendProposal} glow>
                  <Send size={18} /> Send Proposal
                </Button>
              </div>
            </div>

            <Card className="p-0 border-white/5 overflow-hidden bg-[#0a0f1d]/50">
              <div className="px-8 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Proposal Editor</span>
                  <div className="flex items-center gap-4 text-white/20">
                    <Bold size={16} className="cursor-pointer hover:text-white transition-colors" />
                    <Italic size={16} className="cursor-pointer hover:text-white transition-colors" />
                    <List size={16} className="cursor-pointer hover:text-white transition-colors" />
                    <LinkIcon size={16} className="cursor-pointer hover:text-white transition-colors" />
                  </div>
                </div>
                <span className="text-[10px] text-white/20 italic">Saved 2 minutes ago</span>
              </div>
              <div className="p-8 space-y-8">
                <div>
                   <label className="text-[10px] font-black uppercase text-white/40 tracking-widest block mb-4">Campaign Subject</label>
                   <div className="glass-card p-4 bg-white/5 border-white/10 rounded-2xl relative overflow-hidden group hover:border-accent-blue/30 transition-all">
                      <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-all" />
                      <p className="text-white font-bold relative z-10">Exclusive Content Partnership: Summer Performance Series</p>
                   </div>
                </div>
                <div>
                   <label className="text-[10px] font-black uppercase text-white/40 tracking-widest block mb-4">Proposal Details</label>
                   <textarea 
                     className="w-full h-48 bg-transparent text-white/60 leading-relaxed resize-none focus:outline-none"
                     value={proposal}
                     onChange={(e) => setProposal(e.target.value)}
                   />
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-8 mt-8">
               <Card className="p-6 bg-white/[0.02] border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                        <Users size={20} />
                     </div>
                     <h4 className="font-bold">What I Offer</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-white/50">
                     <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        2x Instagram Feed Posts
                     </li>
                     <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        Weekly Story Updates
                     </li>
                  </ul>
               </Card>
               <Card className="p-6 bg-white/[0.02] border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                        <Save size={20} />
                     </div>
                     <h4 className="font-bold">Requested Items</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-white/50">
                     <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                        1x Summer Performance Gear
                     </li>
                     <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                        Travel Stipend for Event
                     </li>
                  </ul>
               </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BrandMatch;
