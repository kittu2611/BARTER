import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import Logo from '../components/ui/Logo';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, brandName: company }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login after successful signup
        navigate('/login');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section: Branding */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 relative overflow-hidden bg-[#050a14]">
        {/* Abstract background glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-blue/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-purple/20 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 mb-12">
            <Logo className="h-12" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Join the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
              of Sponsorships
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12">
            The premium ecosystem for creators and brands to forge authentic partnerships through a streamlined, data-driven platform.
          </p>

          <div className="flex items-center gap-8 border-t border-white/5 pt-12">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050a14] bg-white/10" />
              ))}
            </div>
            <p className="text-sm font-medium text-white/40">
              Trusted by 2,000+ top creators worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#0a0f1d]">
        <Card className="w-full max-w-md p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-white/50">Start your journey with BarterNow today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Company / Brand Name" 
              placeholder="e.g. BarterNow Inc." 
              icon={<User size={18} />} 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@company.com" 
              icon={<Mail size={18} />} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••" 
              icon={<Lock size={18} />} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <Button type="submit" className="w-full text-lg shadow-blue-500/20 shadow-xl" glow disabled={loading}>
              {loading ? 'Creating Account...' : 'Continue'} <ArrowRight size={20} />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#121826] px-2 text-white/30">Or continue with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-colors mb-8">
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5 grayscale invert opacity-70" alt="Google" />
            <span className="font-medium">Google</span>
          </button>

          <p className="text-center text-white/50">
            Already have an account?{' '}
            <Link to="/login" className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-4">
              Sign In
            </Link>
          </p>
        </Card>

        <div className="fixed bottom-8 right-12 flex gap-6 text-sm text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white/60 transition-colors">Support</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
