import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PlanTier } from '../../utils/pricing-config';

interface UpgradePromptProps {
  type: 'accounts' | 'frequency' | 'api' | 'filtration';
  currentPlan: PlanTier;
  targetPlan: PlanTier;
  onUpgrade: () => void;
  variant?: 'inline' | 'banner' | 'card';
}

const promptMessages = {
  accounts: {
    title: 'Account limit reached',
    message: "You've connected the maximum number of accounts for your plan.",
    free: "You've connected the maximum number of accounts for your plan (1/1). Upgrade to Pro to manage up to 5 accounts with daily updates.",
    pro: "You've connected the maximum number of accounts for your plan (5/5). Upgrade to Ultra for unlimited accounts with hourly updates.",
  },
  frequency: {
    title: 'Upgrade for faster updates',
    message: 'Get your content to AI systems faster.',
    free: 'Weekly updates active. Switch to Pro for daily refreshes or Ultra for hourly visibility.',
    pro: 'Daily updates active. Switch to Ultra for hourly visibility.',
  },
  api: {
    title: 'API access required',
    message: 'Automate content ingestion with our API.',
    free: 'API access is available on Pro and Ultra plans.',
    pro: '', // Pro already has API
  },
  filtration: {
    title: 'Smart filtration available on Ultra',
    message: 'Gain full control over which data fields your feed exposes to LLMs.',
    free: 'Smart filtration is available on Ultra. Gain full control over which data fields your feed exposes to LLMs.',
    pro: 'Smart filtration is available on Ultra. Gain full control over which data fields your feed exposes to LLMs.',
  },
};

export function UpgradePrompt({
  type,
  currentPlan,
  targetPlan,
  onUpgrade,
  variant = 'inline',
}: UpgradePromptProps) {
  const prompt = promptMessages[type];
  const message = prompt[currentPlan] || prompt.message;

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-4 flex items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{prompt.title}</p>
            <p className="text-sm text-muted-foreground mt-0.5">{message}</p>
          </div>
        </div>
        <Button
          onClick={onUpgrade}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg whitespace-nowrap"
        >
          Upgrade
          <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
        </Button>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className="bg-card border border-border rounded-xl p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">{prompt.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{message}</p>
        <Button
          onClick={onUpgrade}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
        >
          Upgrade to {targetPlan === 'pro' ? 'Pro' : 'Ultra'}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    );
  }

  // inline variant
  return (
    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg border border-border">
      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
      <p className="text-sm text-foreground flex-1">{message}</p>
      <Button
        onClick={onUpgrade}
        size="sm"
        variant="ghost"
        className="text-primary hover:text-primary/80 hover:bg-primary/10"
      >
        Upgrade
      </Button>
    </div>
  );
}
