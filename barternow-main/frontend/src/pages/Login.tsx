import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Eye } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import Logo from '../components/ui/Logo';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user data (brandName)
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
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
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center bg-[#0a0f1d] relative z-10 border-r border-white/5 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[150px] rounded-full" />

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Logo className="h-14" />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Empowering Sponsorships</h2>
          <p className="text-white/50 max-w-md mx-auto leading-relaxed text-lg">
            The world's leading platform for seamless brand-creator partnerships. Trade value, grow together.
          </p>

          <div className="flex justify-center gap-4 mt-12">
            <div className="w-12 h-1.5 bg-accent-blue rounded-full" />
            <div className="w-12 h-1.5 bg-white/10 rounded-full" />
            <div className="w-12 h-1.5 bg-white/10 rounded-full" />
          </div>
        </div>

        <div className="absolute bottom-12 text-white/20 text-sm">
          © 2024 BarterNow Inc. All rights reserved.
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#050a14]">
        <Card className="w-full max-w-md p-10 bg-white/[0.02]">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-white/50">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@company.com" 
              icon={<Mail size={18} />} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-medium text-white/60">Password</label>
                <a href="#" className="text-xs text-accent-blue hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="glass-input w-full pl-11 pr-11 text-white input-bg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="rounded bg-white/5 border-white/10 text-accent-blue focus:ring-offset-[#0a0f1d]" />
              <label htmlFor="remember" className="text-sm text-white/50 cursor-pointer">Keep me signed in</label>
            </div>

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <Button type="submit" className="w-full text-lg shadow-blue-500/20 shadow-xl" glow disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'} <ArrowRight size={20} />
            </Button>
          </form>

          <div className="flex gap-4 my-8">
            <button className="flex-1 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl py-2.5 hover:bg-white/10 transition-colors">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5 grayscale invert opacity-70" alt="Google" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl py-2.5 hover:bg-white/10 transition-colors">
              <img src="https://github.com/favicon.ico" className="w-5 h-5 invert opacity-70" alt="GitHub" />
              <span className="text-sm font-medium">GitHub</span>
            </button>
          </div>

          <p className="text-center text-white/50">
            Don't have an account?{' '}
            <Link to="/signup" className="text-accent-blue hover:text-accent-blue/80 font-medium underline underline-offset-4">
              Sign Up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
