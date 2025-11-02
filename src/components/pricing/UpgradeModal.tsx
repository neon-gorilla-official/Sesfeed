import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Check, X, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { PlanTier, getPlanConfig, PLAN_CONFIG } from '../../utils/pricing-config';
import { PlanBadge } from './PlanBadge';
import { notifications } from '../../utils/notifications';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan: PlanTier;
  targetPlan: PlanTier;
  onConfirm?: (plan: PlanTier) => void | Promise<void>;
}

export function UpgradeModal({
  isOpen,
  onClose,
  currentPlan,
  targetPlan,
  onConfirm,
}: UpgradeModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const current = getPlanConfig(currentPlan);
  const target = getPlanConfig(targetPlan);

  const handleConfirm = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (onConfirm) {
        await onConfirm(targetPlan);
      }
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
      // Show success notification
      if (targetPlan === 'pro') {
        notifications.upgradedToPro();
      } else if (targetPlan === 'ultra') {
        notifications.upgradedToUltra();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upgrade failed. Please try again.');
      setIsLoading(false);
      notifications.paymentFailed();
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setError(null);
    setIsLoading(false);
    onClose();
  };

  const handleViewAllPlans = () => {
    handleClose();
    window.location.href = '/pricing';
  };

  // Calculate delta features
  const deltaFeatures = target.features.filter(
    (feature) => !current.features.includes(feature)
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-xl bg-card border-border">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            /* Success State */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.6, delay: 0.2 }}
                className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl text-foreground mb-3">
                You're now on the {target.name} plan.
              </h2>
              <p className="text-muted-foreground mb-8">
                {target.id === 'pro'
                  ? 'Your feeds will update daily.'
                  : 'Full control and hourly updates are active.'}
              </p>

              <Button
                onClick={handleClose}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6"
              >
                Go to Dashboard
              </Button>
            </motion.div>
          ) : (
            /* Upgrade Form */
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl text-foreground mb-2">
                  Upgrade to {target.name}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  {target.id === 'pro'
                    ? 'Daily updates and API automation for your feeds.'
                    : 'Hourly updates and full control over what LLMs can read.'}
                </p>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Current Plan Notice */}
                <p className="text-sm text-muted-foreground">
                  You're currently on the {current.name} plan.
                </p>
                {/* Current vs New Plan */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground mb-2">Current</p>
                    <PlanBadge tier={currentPlan} size="sm" />
                    <p className="text-sm text-foreground mt-3">{current.priceDisplay}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary">
                    <p className="text-xs text-muted-foreground mb-2">New</p>
                    <PlanBadge tier={targetPlan} size="sm" />
                    <p className="text-sm text-foreground mt-3">{target.priceDisplay}</p>
                  </div>
                </div>

                {/* What You'll Unlock */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">
                    Upgrading to {target.name} enables:
                  </h3>
                  <ul className="space-y-2">
                    {deltaFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-accent/20 p-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Comparison Summary */}
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="bg-muted/50 p-3 border-b border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Plan summary</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Current:</span>
                      <span className="text-foreground">
                        {current.name} · {current.frequency.charAt(0).toUpperCase() + current.frequency.slice(1)} updates · {current.accounts} {current.accounts === 1 ? 'account' : 'accounts'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">New:</span>
                      <span className="text-accent font-medium">
                        {target.name} · {target.frequency.charAt(0).toUpperCase() + target.frequency.slice(1)} updates · {target.accounts} {target.accounts === 'unlimited' ? '' : 'accounts'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <p className="text-sm text-destructive-foreground">{error}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-xs text-primary hover:text-primary/80"
                      onClick={() => window.open('mailto:support@sesfeed.com', '_blank')}
                    >
                      Contact Support
                    </Button>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleViewAllPlans}
                    variant="outline"
                    className="sm:flex-1 border-border text-foreground hover:bg-muted rounded-xl py-6"
                  >
                    View all plans
                  </Button>
                  <Button
                    onClick={handleConfirm}
                    disabled={isLoading}
                    className="sm:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Upgrading...
                      </>
                    ) : (
                      <>
                        Confirm Upgrade ({target.priceDisplay} / year)
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
