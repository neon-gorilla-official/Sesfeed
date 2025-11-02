import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';

interface Platform {
  id: string;
  name: string;
  icon: string;
  color: string;
  connected: boolean;
}

export function ConnectSocialsScreen() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: '#0A66C2', connected: false },
    { id: 'youtube', name: 'YouTube', icon: '▶️', color: '#FF0000', connected: false },
    { id: 'x', name: 'X (Twitter)', icon: '𝕏', color: '#000000', connected: false },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#000000', connected: false },
    { id: 'instagram', name: 'Instagram', icon: '📷', color: '#E4405F', connected: false },
    { id: 'reddit', name: 'Reddit', icon: '🔴', color: '#FF4500', connected: false },
    { id: 'medium', name: 'Medium', icon: 'M', color: '#000000', connected: false },
    { id: 'substack', name: 'Substack', icon: '📰', color: '#FF6719', connected: false },
  ]);

  const [currentStep] = useState(1);
  const totalSteps = 3;

  const handleConnect = (platformId: string) => {
    setPlatforms(platforms.map(p => 
      p.id === platformId ? { ...p, connected: !p.connected } : p
    ));
  };

  const connectedCount = platforms.filter(p => p.connected).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F17] via-[#111726] to-[#0B0F17] p-4 md:p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,124,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,124,245,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4E7CF5] to-[#19D28F]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">Connect your social accounts</h1>
          <p className="text-xl text-gray-400">
            Select the platforms where you publish content. We'll pull your latest activity.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {platforms.map((platform, index) => (
            <motion.button
              key={platform.id}
              onClick={() => handleConnect(platform.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-6 rounded-2xl border-2 transition-all ${
                platform.connected
                  ? 'bg-[#19D28F]/10 border-[#19D28F] shadow-lg shadow-[#19D28F]/20'
                  : 'bg-[#1a1f2e]/50 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Connected Checkmark */}
              {platform.connected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[#19D28F] rounded-full flex items-center justify-center shadow-lg"
                >
                  <Check className="w-4 h-4 text-[#0B0F17]" />
                </motion.div>
              )}

              {/* Platform Icon */}
              <div className="text-4xl mb-3">{platform.icon}</div>
              
              {/* Platform Name */}
              <div className="text-white text-sm">{platform.name}</div>

              {/* Status */}
              <div className={`text-xs mt-2 ${
                platform.connected ? 'text-[#19D28F]' : 'text-gray-500'
              }`}>
                {platform.connected ? 'Connected' : 'Connect'}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Connected Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            {connectedCount > 0 ? (
              <>
                <span className="text-[#19D28F]">{connectedCount}</span> {connectedCount === 1 ? 'platform' : 'platforms'} connected
              </>
            ) : (
              'Select at least one platform to continue'
            )}
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between"
        >
          <Link href="/onboarding/welcome">
            <a>
              <Button
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 py-6"
              >
                Back
              </Button>
            </a>
          </Link>

          <Link href="/onboarding/generate-feed">
            <a>
              <Button
                disabled={connectedCount === 0}
                className="bg-[#4E7CF5] hover:bg-[#4E7CF5]/90 text-white px-8 py-6 rounded-full shadow-lg shadow-[#4E7CF5]/30 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
