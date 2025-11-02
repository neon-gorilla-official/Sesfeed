import { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PlanBadge } from '../components/pricing/PlanBadge';
import { UpgradeModal } from '../components/pricing/UpgradeModal';
import { UpgradePrompt } from '../components/pricing/UpgradePrompt';
import { PlanTier } from '../utils/pricing-config';
import { Button } from '../components/ui/button';

/**
 * Demo page showing all pricing components in action
 * This is for testing and demonstration purposes
 */
export function PricingDemo() {
  const [currentPlan, setCurrentPlan] = useState<PlanTier>('free');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetPlan, setTargetPlan] = useState<PlanTier>('pro');

  const openUpgrade = (plan: PlanTier) => {
    setTargetPlan(plan);
    setIsModalOpen(true);
  };

  const handleUpgrade = async (plan: PlanTier) => {
    // Simulate upgrade
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCurrentPlan(plan);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">
              Pricing Components Demo
            </h1>
            <p className="text-lg text-muted-foreground">
              Testing all pricing UI components and flows
            </p>
          </motion.div>

          {/* Current Plan Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 p-6 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-xl text-foreground mb-4">Current Plan Status</h2>
            <div className="flex items-center gap-4">
              <PlanBadge tier={currentPlan} size="lg" />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => setCurrentPlan('free')}
                  variant={currentPlan === 'free' ? 'default' : 'outline'}
                >
                  Set to Free
                </Button>
                <Button
                  size="sm"
                  onClick={() => setCurrentPlan('pro')}
                  variant={currentPlan === 'pro' ? 'default' : 'outline'}
                >
                  Set to Pro
                </Button>
                <Button
                  size="sm"
                  onClick={() => setCurrentPlan('ultra')}
                  variant={currentPlan === 'ultra' ? 'default' : 'outline'}
                >
                  Set to Ultra
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Plan Badges Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-6 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-xl text-foreground mb-4">Plan Badges</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-muted-foreground w-24">Small:</span>
                <PlanBadge tier="free" size="sm" />
                <PlanBadge tier="pro" size="sm" />
                <PlanBadge tier="ultra" size="sm" />
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-muted-foreground w-24">Medium:</span>
                <PlanBadge tier="free" size="md" />
                <PlanBadge tier="pro" size="md" />
                <PlanBadge tier="ultra" size="md" />
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-muted-foreground w-24">Large:</span>
                <PlanBadge tier="free" size="lg" />
                <PlanBadge tier="pro" size="lg" />
                <PlanBadge tier="ultra" size="lg" />
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm text-muted-foreground w-24">Outlined:</span>
                <PlanBadge tier="free" size="md" variant="outlined" />
                <PlanBadge tier="pro" size="md" variant="outlined" />
                <PlanBadge tier="ultra" size="md" variant="outlined" />
              </div>
            </div>
          </motion.div>

          {/* Upgrade Prompts - Inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 p-6 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-xl text-foreground mb-4">Upgrade Prompts - Inline</h2>
            <div className="space-y-4">
              <UpgradePrompt
                type="accounts"
                currentPlan={currentPlan}
                targetPlan={currentPlan === 'free' ? 'pro' : 'ultra'}
                onUpgrade={() => openUpgrade(currentPlan === 'free' ? 'pro' : 'ultra')}
                variant="inline"
              />
              <UpgradePrompt
                type="frequency"
                currentPlan={currentPlan}
                targetPlan={currentPlan === 'free' ? 'pro' : 'ultra'}
                onUpgrade={() => openUpgrade(currentPlan === 'free' ? 'pro' : 'ultra')}
                variant="inline"
              />
              {currentPlan !== 'ultra' && (
                <UpgradePrompt
                  type="filtration"
                  currentPlan={currentPlan}
                  targetPlan="ultra"
                  onUpgrade={() => openUpgrade('ultra')}
                  variant="inline"
                />
              )}
            </div>
          </motion.div>

          {/* Upgrade Prompts - Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 p-6 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-xl text-foreground mb-4">Upgrade Prompts - Banner</h2>
            <div className="space-y-4">
              <UpgradePrompt
                type="accounts"
                currentPlan={currentPlan}
                targetPlan={currentPlan === 'free' ? 'pro' : 'ultra'}
                onUpgrade={() => openUpgrade(currentPlan === 'free' ? 'pro' : 'ultra')}
                variant="banner"
              />
            </div>
          </motion.div>

          {/* Upgrade Prompts - Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 p-6 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-xl text-foreground mb-4">Upgrade Prompts - Card</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <UpgradePrompt
                type="frequency"
                currentPlan={currentPlan}
                targetPlan={currentPlan === 'free' ? 'pro' : 'ultra'}
                onUpgrade={() => openUpgrade(currentPlan === 'free' ? 'pro' : 'ultra')}
                variant="card"
              />
              {currentPlan !== 'ultra' && (
                <UpgradePrompt
                  type="filtration"
                  currentPlan={currentPlan}
                  targetPlan="ultra"
                  onUpgrade={() => openUpgrade('ultra')}
                  variant="card"
                />
              )}
            </div>
          </motion.div>

          {/* Modal Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-6 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-xl text-foreground mb-4">Upgrade Modal</h2>
            <div className="flex gap-4">
              {currentPlan !== 'pro' && (
                <Button onClick={() => openUpgrade('pro')} className="bg-primary">
                  Open Pro Upgrade Modal
                </Button>
              )}
              {currentPlan !== 'ultra' && (
                <Button onClick={() => openUpgrade('ultra')} className="bg-primary">
                  Open Ultra Upgrade Modal
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentPlan={currentPlan}
        targetPlan={targetPlan}
        onConfirm={handleUpgrade}
      />
    </div>
  );
}
