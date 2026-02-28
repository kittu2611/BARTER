import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Trophy, Zap, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import Logo from '../components/ui/Logo';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('isAuthenticated'));

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-navy relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between backdrop-blur-md bg-navy/50 border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Logo className="h-10" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">How It Works</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Case Studies</a>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" onClick={() => navigate('/requests')}>My Requests</Button>
              <Button variant="secondary" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
              <Button onClick={() => navigate('/signup')}>Sign Up</Button>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 flex flex-col items-center text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold text-accent-blue uppercase tracking-widest mb-8">
            <Sparkles size={14} /> AI-Powered Connections
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1]">
            Find the Right <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">Brand</span> for <br />
            Your Event
          </h1>

          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Revolutionizing sponsorship matching with AI-driven connections. BarterNow helps you find the perfect partners for your next big occasion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="px-10 py-4 text-lg" onClick={() => navigate('/sponsorship/categories')} glow>
              Start Sponsorship
            </Button>
            <Button variant="secondary" className="px-10 py-4 text-lg">
              View Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-24 relative z-10 w-full max-w-5xl mx-auto">
          <div className="glass-card p-4 rounded-3xl border-white/5">
            <div className="bg-[#1a2235] rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
              <video 
                src="/dashboard_preview.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover relative z-0"
              />
              {/* Fallback if video isn't added to public folder yet */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 -z-10">
                Please place 'dashboard_preview.mp4' in the public folder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-8 relative">
        <div className="text-center mb-20">
          <div className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4">Seamless Process</div>
          <h2 className="text-5xl font-bold">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              icon: Globe, 
              title: "Select Category", 
              desc: "Choose from over 50+ event categories to narrow down the most relevant brand partners for your niche." 
            },
            { 
              icon: Zap, 
              title: "Enter Event Details", 
              desc: "Tell us about your audience, reach, and goals. Our AI analyzes your data to find high-affinity brand matches." 
            },
            { 
              icon: Trophy, 
              title: "Get Matched Brands", 
              desc: "Review a curated list of brands that fit your event perfectly. Direct connection, zero friction." 
            }
          ].map((feature, i) => (
            <Card key={i} className="group hover:bg-white/[0.05] transition-all hover:-translate-y-2 p-10 flex flex-col items-start min-h-[300px]">
              <div className="w-14 h-14 bg-accent-blue/10 border border-accent-blue/20 rounded-2xl flex items-center justify-center text-accent-blue mb-8 group-hover:scale-110 group-hover:bg-accent-blue group-hover:text-white transition-all">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed mb-8">{feature.desc}</p>
              <a href="#" className="mt-auto flex items-center gap-2 text-sm font-bold text-accent-blue hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-8 relative">
        <div className="max-w-6xl mx-auto glass-card p-16 rounded-[40px] text-center border-white/5 overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none" />
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 relative z-10">Ready to elevate your event?</h2>
          <p className="text-white/50 text-xl max-w-xl mx-auto mb-12 relative z-10">
            Join thousands of event organizers finding premium brand partners. Start your first match today for free.
          </p>
          
          <Button className="px-12 py-5 text-xl relative z-10" onClick={() => navigate('/signup')} glow>
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center font-bold">B</div>
              <span className="text-xl font-bold tracking-tight">BarterNow</span>
            </div>
            <p className="text-white/30 max-w-xs leading-relaxed">
              The world's leading platform for AI-driven sponsorship matching. Connecting events with the right brands since 2024.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Enterprise</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-white/20 text-xs text-center gap-4">
          <p>© 2024 BarterNow Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#" className="flex items-center gap-2"><Globe size={12} /> 24/7 Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
