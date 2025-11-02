import { PlanTier, getPlanBadge } from '../../utils/pricing-config';

interface PlanBadgeProps {
  tier: PlanTier;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined';
}

export function PlanBadge({ tier, size = 'md', variant = 'default' }: PlanBadgeProps) {
  const badge = getPlanBadge(tier);

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const variantClasses = {
    default: 'bg-muted text-foreground',
    outlined: 'border border-border bg-card text-foreground',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeClasses[size]} ${variantClasses[variant]} font-medium tracking-wide`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          tier === 'free' ? 'bg-muted-foreground' : tier === 'pro' ? 'bg-primary' : 'bg-accent'
        }`}
      />
      {badge}
    </span>
  );
}
