import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { CheckCircle2, Copy, Eye, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

export function SuccessScreen() {
  const [copied, setCopied] = useState(false);
  const feedUrl = 'https://sesfeed.com/your-brand/ses.json';

  const handleCopy = () => {
    navigator.clipboard.writeText(feedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F17] via-[#111726] to-[#0B0F17] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,124,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,124,245,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Celebration Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#19D28F]/30 rounded-full blur-[150px] animate-pulse" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-[#19D28F]/20 rounded-full flex items-center justify-center mx-auto relative">
            <CheckCircle2 className="w-16 h-16 text-[#19D28F]" />
            
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 border-4 border-[#19D28F] rounded-full"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-6xl text-white mb-4"
        >
          Your SES Feed is live
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl text-gray-400 mb-12"
        >
          Your brand is now visible to AIs.
        </motion.p>

        {/* Feed URL Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8"
        >
          <p className="text-sm text-gray-400 mb-2">Your SES Feed URL</p>
          <div className="flex items-center gap-2 bg-[#1a1f2e] rounded-lg p-3 mb-4">
            <code className="text-[#19D28F] text-sm flex-1 text-left">{feedUrl}</code>
            <Button
              size="sm"
              onClick={handleCopy}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg"
            >
              {copied ? 'Copied!' : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            Add this URL to your website's &lt;head&gt; tag to let AI crawlers discover your feed
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <Link href="/dashboard">
            <Button className="w-full bg-[#4E7CF5] hover:bg-[#4E7CF5]/90 text-white rounded-xl py-6 shadow-lg shadow-[#4E7CF5]/30 group">
              View Dashboard
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link>

          <Button
            onClick={handleCopy}
            variant="outline"
            className="w-full border-white/10 text-white hover:bg-white/5 rounded-xl py-6"
          >
            <Copy className="mr-2 w-4 h-4" />
            Copy URL
          </Button>

          <Link href="/dashboard/feed">
            <Button
              variant="outline"
              className="w-full border-white/10 text-white hover:bg-white/5 rounded-xl py-6"
            >
              <Eye className="mr-2 w-4 h-4" />
              Preview Feed
            </Button>
          </Link>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-[#4E7CF5]/10 border border-[#4E7CF5]/30 rounded-xl p-6"
        >
          <h3 className="text-lg text-white mb-3">What happens next?</h3>
          <ul className="text-sm text-gray-400 space-y-2 text-left max-w-md mx-auto">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#19D28F] mt-1.5" />
              <span>AI crawlers will start discovering your feed within 24-48 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#19D28F] mt-1.5" />
              <span>Your feed updates automatically when you post new content</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#19D28F] mt-1.5" />
              <span>Track your AI visibility in the dashboard analytics</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
