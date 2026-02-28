import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  Smartphone, 
  Music, 
  Dumbbell, 
  HeartHandshake, 
  Shirt, 
  Armchair, 
  Gamepad2, 
  Car,
  ChevronRight,
  Plus,
  Zap,
  Globe
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import Logo from '../components/ui/Logo';

const iconMap: Record<string, any> = {
  Smartphone,
  Music,
  Dumbbell,
  HeartHandshake,
  Shirt,
  Armchair,
  Gamepad2,
  Car,
};

const Categories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050a14] text-white">
      {/* Dashboard Nav */}
      <header className="px-8 py-6 flex items-center justify-between border-b border-white/5 bg-[#0a0f1d]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
            <Logo className="h-10" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/40">
            <a href="#" className="hover:text-white transition-colors">Browse</a>
            <a href="#" className="hover:text-white transition-colors">Deals</a>
            <a href="#" className="hover:text-white transition-colors text-white">My Barters</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="text" 
              placeholder="Find items to swap..." 
              className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition-all text-sm"
            />
          </div>
          <button className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Bell size={18} className="text-white/60" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent-blue rounded-full border-2 border-[#0a0f1d]" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10 overflow-hidden flex items-center justify-center">
             <span className="text-xs font-bold">JD</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-12">
          <div className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4">Step 1: Choose Interest</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl font-black mb-4">
                What are you looking to <span className="text-accent-blue">trade</span> <br /> today?
              </h1>
              <p className="text-white/40 text-lg">Select a category to explore available items or list your own for exchange.</p>
            </div>
            <Button className="rounded-full px-8 py-4 shadow-lg shadow-accent-blue/20" glow>
             <Plus size={20} /> List an Item
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <Card 
                key={cat.id} 
                className="group relative p-8 cursor-pointer hover:bg-white/[0.04] active:scale-[0.98] transition-all flex flex-col items-start border-white/5 hover:border-accent-blue/30"
                onClick={() => navigate(`/sponsorship/form?category=${encodeURIComponent(cat.title.toLowerCase())}`)}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{cat.title}</h3>
                    {cat.isHot && (
                      <span className="px-2 py-0.5 rounded-md bg-accent-blue/10 text-accent-blue text-[10px] font-black uppercase tracking-widest">Hot</span>
                    )}
                  </div>
                  <p className="text-white/30 text-sm leading-relaxed">{cat.description}</p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-transparent group-hover:text-accent-blue transition-all">
                  EXPLORE <ChevronRight size={14} />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trending Section */}
        <div className="mt-20">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Trending Barters</h2>
              <a href="#" className="text-sm font-bold text-accent-blue hover:underline">View all activity</a>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'iPhone 14 Pro', offer: 'Camera Lens' },
                { name: 'Rolex Datejust', offer: 'E-Bike' },
                { name: 'Vintage Mustang', offer: 'Real Estate Equity' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl flex items-center justify-between border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl" />
                    <div>
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-white/30 text-xs">for {item.offer}</p>
                    </div>
                  </div>
                  <Zap size={16} className="text-accent-blue" />
                </div>
              ))}
           </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="mt-20 py-12 px-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex gap-12">
            {[
              { val: '12k+', label: 'SUCCESSFUL SWAPS' },
              { val: '450', label: 'DAILY LISTINGS' },
              { val: '$2.4M', label: 'VALUE EXCHANGED' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-black text-accent-blue uppercase">{stat.val}</div>
                <div className="text-[10px] font-bold text-white/20 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
         </div>
         <div className="flex items-center gap-8 text-xs text-white/30 font-medium">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <div className="flex items-center gap-2"><Globe className="text-white/20" size={14} /> 24/7 Support</div>
         </div>
      </footer>
    </div>
  );
};

export default Categories;
