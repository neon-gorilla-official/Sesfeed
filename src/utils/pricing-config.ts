/**
 * Single Source of Truth for SES Feed Pricing
 * Used across all pricing displays, modals, and dashboard
 */

export type PlanTier = 'free' | 'pro' | 'ultra';

export interface PlanConfig {
  id: PlanTier;
  name: string;
  subtitle: string;
  priceYear: number;
  priceDisplay: string;
  period: string;
  accounts: number | 'unlimited';
  frequency: 'weekly' | 'daily' | 'hourly';
  api: boolean;
  filtration: boolean;
  features: string[];
  description: string;
  ideal: string;
  cta: string;
  footerMicrocopy: string;
}

export const PLAN_CONFIG: Record<PlanTier, PlanConfig> = {
  free: {
    id: 'free',
    name: 'Free',
    subtitle: 'Start building your visibility',
    priceYear: 0,
    priceDisplay: '£0',
    period: 'forever',
    accounts: 1,
    frequency: 'weekly',
    api: false,
    filtration: false,
    features: [
      '1 connected account',
      'Weekly feed updates',
      'Generate & install SES.json',
      'Publish HTML + SES Feed via plugin',
    ],
    description: 'Create and publish your first SES Feed to make your brand visible to AIs. Set up once — stay visible automatically with weekly updates.',
    ideal: 'Individuals',
    cta: 'Get started free',
    footerMicrocopy: 'No credit card required.',
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Daily automation for growing brands',
    priceYear: 29.99,
    priceDisplay: '£29.99',
    period: 'year',
    accounts: 5,
    frequency: 'daily',
    api: true,
    filtration: false,
    features: [
      '5 connected accounts',
      'Daily feed updates',
      'API access for content ingestion',
      'Multi-account setup',
    ],
    description: 'Upgrade for automatic daily updates and API-powered content ingestion. Ideal for creators and small teams who want to stay fresh in the AI web.',
    ideal: 'Teams & small brands',
    cta: 'Upgrade to Pro',
    footerMicrocopy: 'Full automation, one simple price.',
  },
  ultra: {
    id: 'ultra',
    name: 'Ultra',
    subtitle: 'Full control, real-time visibility',
    priceYear: 89.99,
    priceDisplay: '£89.99',
    period: 'year',
    accounts: 'unlimited',
    frequency: 'hourly',
    api: true,
    filtration: true,
    features: [
      'Unlimited connected accounts',
      'Hourly updates',
      'Advanced control and smart filtration',
      'Custom data permissions',
    ],
    description: 'Gain complete control over your feed with hourly updates and smart filtration. Choose exactly what data LLMs see — across unlimited accounts.',
    ideal: 'Agencies & networks',
    cta: 'Upgrade to Ultra',
    footerMicrocopy: 'Maximum visibility. Maximum control.',
  },
};

// Comparison features for detailed pricing table
export interface ComparisonFeature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  ultra: boolean | string;
}

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    name: 'Connected accounts',
    free: '1',
    pro: '5',
    ultra: 'Unlimited',
  },
  {
    name: 'Update frequency',
    free: 'Weekly',
    pro: 'Daily',
    ultra: 'Hourly',
  },
  {
    name: 'SES.json + HTML publish',
    free: true,
    pro: true,
    ultra: true,
  },
  {
    name: 'API ingestion',
    free: false,
    pro: true,
    ultra: true,
  },
  {
    name: 'Multi-account management',
    free: false,
    pro: true,
    ultra: true,
  },
  {
    name: 'Smart filtration & control',
    free: false,
    pro: false,
    ultra: true,
  },
  {
    name: 'Support',
    free: 'Community',
    pro: 'Email',
    ultra: 'Priority',
  },
  {
    name: 'Best for',
    free: 'Individuals',
    pro: 'Teams & small brands',
    ultra: 'Agencies & networks',
  },
];

// Helper functions
export function getPlanConfig(tier: PlanTier): PlanConfig {
  return PLAN_CONFIG[tier];
}

export function getPlanBadge(tier: PlanTier): string {
  const plan = PLAN_CONFIG[tier];
  const accountsText = plan.accounts === 'unlimited' ? 'Unlimited' : `${plan.accounts} account${plan.accounts > 1 ? 's' : ''}`;
  
  let badge = `${accountsText} · ${plan.frequency.charAt(0).toUpperCase() + plan.frequency.slice(1)}`;
  
  if (plan.api) {
    badge += ' · API';
  }
  
  if (plan.filtration) {
    badge += ' · Filtration';
  }
  
  return badge;
}

export function canAccessFeature(userTier: PlanTier, requiredTier: PlanTier): boolean {
  const tiers: PlanTier[] = ['free', 'pro', 'ultra'];
  return tiers.indexOf(userTier) >= tiers.indexOf(requiredTier);
}

// Tooltip/Help text
export const FEATURE_TOOLTIPS: Record<string, string> = {
  'Connected accounts': 'Number of social profiles connected to your SES Feed.',
  'Update frequency': 'How often your feed refreshes with the latest posts and metadata.',
  'API access': 'Automates feed updates using platform APIs instead of manual publishing.',
  'API ingestion': 'Automates feed updates using platform APIs instead of manual publishing.',
  'Smart filtration': 'Lets you control which content types, fields, or posts are shared with AI models.',
  'Smart filtration & control': 'Lets you control which content types, fields, or posts are shared with AI models.',
  'SES.json': 'Your structured data file that LLMs can read to understand your verified brand footprint.',
};
