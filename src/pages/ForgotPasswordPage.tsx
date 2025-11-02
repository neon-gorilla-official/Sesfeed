import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Link } from 'wouter';
import { Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F17] via-[#111726] to-[#0B0F17] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,124,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,124,245,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />

      {/* Reset Password Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {!isSuccess ? (
            <>
              {/* Brand Mark */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
                  <span className="text-accent tracking-wider text-sm">SES FEED</span>
                </div>
                <h1 className="text-3xl text-white mb-2">Reset your password</h1>
                <p className="text-gray-400">Enter your email and we'll send you a reset link.</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1a1f2e] border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 shadow-lg shadow-primary/30 transition-all"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending reset link...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
              </form>

              {/* Back to Login */}
              <div className="mt-6">
                <Link href="/login">
                  <a className="flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to login
                  </a>
                </Link>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </motion.div>
              
              <h2 className="text-2xl text-white mb-3">Check your email</h2>
              <p className="text-gray-400 mb-8">
                We've sent a password reset link to<br />
                <span className="text-white">{email}</span>
              </p>

              <div className="space-y-3">
                <Link href="/login">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6">
                    Back to Login
                  </Button>
                </Link>
                
                <button
                  onClick={() => setIsSuccess(false)}
                  className="w-full text-gray-400 hover:text-white text-sm transition-colors py-2"
                >
                  Didn't receive the email? Try again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Back to Homepage */}
        <div className="text-center mt-6">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              ← Back to homepage
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
