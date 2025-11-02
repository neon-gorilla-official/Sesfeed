import { useState } from 'react';
import { motion } from 'motion/react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  Check, 
  Circle, 
  Plus, 
  ArrowRight, 
  Sparkles, 
  FileJson, 
  ExternalLink, 
  TrendingUp,
  Zap,
  RefreshCw,
  Lock,
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'wouter';
import { UpgradePrompt } from '../../components/pricing/UpgradePrompt';

export function DashboardHome() {
  // Simulate user state - in real app this would come from auth context/API
  const [userPlan] = useState<'free' | 'pro' | 'ultra'>('free');
  const [connectedAccounts, setConnectedAccounts] = useState<any[]>([]);
  const [hasGeneratedFeed, setHasGeneratedFeed] = useState(false);
  const [hasPublishedFeed, setHasPublishedFeed] = useState(false);

  // Calculate progress
  const setupSteps = [
    { id: 'connect', label: 'Connect your first account', completed: connectedAccounts.length > 0 },
    { id: 'generate', label: 'Generate your SES Feed', completed: hasGeneratedFeed },
    { id: 'publish', label: 'Publish to your website', completed: hasPublishedFeed },
  ];
  const completedSteps = setupSteps.filter(s => s.completed).length;
  const isSetupComplete = completedSteps === setupSteps.length;

  // Mock connected platforms
  const mockPlatforms = [
    { name: 'LinkedIn', icon: '💼', connected: true, lastSync: '2 hours ago' },
    { name: 'X (Twitter)', icon: '𝕏', connected: false },
    { name: 'YouTube', icon: '▶️', connected: false },
  ];

  const stats = connectedAccounts.length > 0 ? [
    {
      label: 'Visibility Score',
      value: '67',
      description: 'AI discoverability rating',
      trend: 'Building...',
    },
    {
      label: 'Connected Accounts',
      value: connectedAccounts.length.toString(),
      description: `${userPlan === 'free' ? '1' : userPlan === 'pro' ? '5' : 'Unlimited'} allowed on ${userPlan}`,
      limit: userPlan === 'free' ? 1 : userPlan === 'pro' ? 5 : null,
    },
    {
      label: 'Update Frequency',
      value: userPlan === 'free' ? 'Weekly' : userPlan === 'pro' ? 'Daily' : 'Hourly',
      description: 'Auto-refresh enabled',
    },
  ] : null;

  // Simulate connecting an account
  const handleConnectAccount = (platform: string) => {
    if (connectedAccounts.length >= 1 && userPlan === 'free') {
      // Hit limit - would trigger upgrade prompt
      return;
    }
    setConnectedAccounts([...connectedAccounts, { platform, connectedAt: new Date() }]);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl text-white mb-2">
            {isSetupComplete ? 'Welcome back!' : 'Welcome to SES Feed'}
          </h1>
          <p className="text-gray-400 text-lg">
            {isSetupComplete 
              ? "Here's how the AI web sees you today." 
              : "Let's make your social presence machine-readable."}
          </p>
        </motion.div>

        {/* Setup Progress Card - Only show if not complete */}
        {!isSetupComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-2xl text-white mb-2">Get Started in 3 Steps</h2>
                <p className="text-gray-400">
                  Set up your SES Feed to become visible to AI systems in minutes.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-white font-medium">{completedSteps}/{setupSteps.length}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedSteps / setupSteps.length) * 100}%` }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {setupSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    step.completed 
                      ? 'bg-accent/20 border border-accent/30' 
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.completed 
                      ? 'bg-accent text-white' 
                      : 'bg-white/10 text-gray-400'
                  }`}>
                    {step.completed ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`flex-1 ${
                    step.completed ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.label}
                  </span>
                  {!step.completed && index === completedSteps && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                    >
                      {step.id === 'connect' && 'Start'}
                      {step.id === 'generate' && 'Generate'}
                      {step.id === 'publish' && 'Publish'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats Grid - Only show if accounts connected */}
        {stats && (
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl text-white">{stat.value}</span>
                    {stat.limit && (
                      <span className="text-gray-500 text-lg pb-1">/ {stat.limit}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs">{stat.description}</p>
                  {stat.trend && (
                    <p className="text-accent text-xs mt-1">{stat.trend}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Connected Accounts / Empty State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-white">Your Accounts</h2>
              {connectedAccounts.length > 0 && (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Sync
                </Button>
              )}
            </div>

            {connectedAccounts.length === 0 ? (
              // Empty State
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-white text-lg mb-2">No accounts connected yet</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Connect your first social media account to start building your SES Feed.
                </p>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  {mockPlatforms.slice(0, 3).map((platform) => (
                    <Button
                      key={platform.name}
                      onClick={() => handleConnectAccount(platform.name)}
                      variant="outline"
                      className="border-white/10 text-white hover:bg-white/5 rounded-xl justify-between"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xl">{platform.icon}</span>
                        {platform.name}
                      </span>
                      <Plus className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              // Connected Accounts List
              <>
                <div className="space-y-3 mb-4">
                  {connectedAccounts.map((account, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">
                          {mockPlatforms.find(p => p.name === account.platform)?.icon || '🔗'}
                        </div>
                        <div>
                          <p className="text-white text-sm">{account.platform}</p>
                          <p className="text-gray-500 text-xs">Connected today</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
                        <span className="text-accent text-sm">Active</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add More - with limit indicator */}
                {connectedAccounts.length >= 1 && userPlan === 'free' ? (
                  <UpgradePrompt
                    type="accounts"
                    currentPlan={userPlan}
                    targetPlan="pro"
                    onUpgrade={() => {/* Open upgrade modal */}}
                    variant="inline"
                  />
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Account
                  </Button>
                )}
              </>
            )}
          </motion.div>

          {/* Quick Actions / Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-xl text-white mb-6">Quick Actions</h2>

            <div className="space-y-4">
              {/* Generate Feed */}
              <div className={`p-4 rounded-xl border transition-all ${
                connectedAccounts.length === 0 
                  ? 'bg-white/5 border-white/10 opacity-50' 
                  : 'bg-primary/10 border-primary/30 hover:border-primary/50 cursor-pointer'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    connectedAccounts.length === 0 ? 'bg-white/10' : 'bg-primary/20'
                  }`}>
                    {connectedAccounts.length === 0 ? (
                      <Lock className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FileJson className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-1">Generate SES.json</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Create your structured data feed for AI systems.
                    </p>
                    {connectedAccounts.length > 0 ? (
                      <Link href="/dashboard/feed">
                        <a>
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                          >
                            Generate Feed
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                      </Link>
                    ) : (
                      <p className="text-xs text-gray-500">Connect an account first</p>
                    )}
                  </div>
                </div>
              </div>

              {/* View Analytics */}
              <Link href="/dashboard/visibility">
                <a>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-accent/5 transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white mb-1">Visibility Report</h3>
                        <p className="text-gray-400 text-sm">
                          See how AI systems are discovering your content.
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </a>
              </Link>

              {/* Upgrade Nudge */}
              {userPlan === 'free' && connectedAccounts.length > 0 && (
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-1">Want daily updates?</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        Upgrade to Pro for automatic daily refreshes and 5 accounts.
                      </p>
                      <Link href="/pricing">
                        <a>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10 rounded-lg"
                          >
                            View Plans
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Help Card - Always Visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white mb-1">Need help getting started?</h3>
              <p className="text-gray-400 text-sm">
                Check out our guide or explore what makes your brand AI-readable.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/ses-json">
                <a>
                  <Button
                    variant="outline"
                    className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    Learn About SES
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
