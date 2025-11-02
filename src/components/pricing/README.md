# SES Feed Pricing Components

This directory contains all reusable pricing components for SES Feed, following a single source of truth pattern.

**📍 Demo Page:** Visit `/pricing-demo` to see all components in action

**📋 Copy Source:** All pricing copy is defined in `/utils/pricing-config.ts`

## Components

### 1. PricingCard
Reusable pricing card component used across homepage, pricing page, and modals.

**Usage:**
```tsx
import { PricingCard } from './components/pricing/PricingCard';
import { PLAN_CONFIG } from './utils/pricing-config';

<PricingCard
  plan={PLAN_CONFIG.pro}
  isFeatured={true}
  isCurrentPlan={false}
  isCompact={false}
  ctaHref="/signup"
  showIdealFor={true}
  delay={0.1}
/>
```

### 2. PlanBadge
Displays current plan with entitlements (accounts, frequency, features).

**Usage:**
```tsx
import { PlanBadge } from './components/pricing/PlanBadge';

<PlanBadge tier="free" size="md" variant="default" />
// Displays: "1 account · Weekly"

<PlanBadge tier="pro" size="sm" variant="outlined" />
// Displays: "5 accounts · Daily · API"
```

### 3. UpgradeModal
Full-featured upgrade modal with plan comparison and confirmation flow.

**Usage:**
```tsx
import { useState } from 'react';
import { UpgradeModal } from './components/pricing/UpgradeModal';

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetPlan, setTargetPlan] = useState<PlanTier>('pro');

  const handleUpgrade = async (plan: PlanTier) => {
    // Your upgrade logic here
    await api.upgradePlan(plan);
  };

  return (
    <>
      <button onClick={() => {
        setTargetPlan('pro');
        setIsModalOpen(true);
      }}>
        Upgrade to Pro
      </button>

      <UpgradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentPlan="free"
        targetPlan={targetPlan}
        onConfirm={handleUpgrade}
      />
    </>
  );
}
```

### 4. UpgradePrompt
Inline prompts for limits and feature gates.

**Usage:**
```tsx
import { UpgradePrompt } from './components/pricing/UpgradePrompt';

// When user hits account limit
<UpgradePrompt
  type="accounts"
  currentPlan="free"
  targetPlan="pro"
  onUpgrade={() => openUpgradeModal('pro')}
  variant="inline"
/>

// As a banner at the top of a page
<UpgradePrompt
  type="frequency"
  currentPlan="pro"
  targetPlan="ultra"
  onUpgrade={() => openUpgradeModal('ultra')}
  variant="banner"
/>

// As a card blocking a feature
<UpgradePrompt
  type="filtration"
  currentPlan="pro"
  targetPlan="ultra"
  onUpgrade={() => openUpgradeModal('ultra')}
  variant="card"
/>
```

## Plan Configuration

All plan data is defined in `/utils/pricing-config.ts` as the single source of truth.

**Key exports:**
- `PLAN_CONFIG` - Complete plan definitions
- `COMPARISON_FEATURES` - Feature comparison table data
- `getPlanConfig(tier)` - Get config for a specific plan
- `getPlanBadge(tier)` - Get formatted badge text
- `canAccessFeature(userTier, requiredTier)` - Check feature access

## Integration Pattern

```tsx
// 1. Import config and components
import { PLAN_CONFIG, getPlanBadge } from './utils/pricing-config';
import { PlanBadge } from './components/pricing/PlanBadge';
import { UpgradeModal } from './components/pricing/UpgradeModal';

// 2. Use in your component
function Dashboard() {
  const userPlan = 'free'; // From your auth/state
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [targetPlan, setTargetPlan] = useState<PlanTier>('pro');

  const openUpgrade = (plan: PlanTier) => {
    setTargetPlan(plan);
    setUpgradeModalOpen(true);
  };

  return (
    <>
      <header>
        <PlanBadge tier={userPlan} />
        <button onClick={() => openUpgrade('pro')}>Upgrade</button>
      </header>

      <UpgradeModal
        isOpen={upgradeModalOpen}
        onClose={() => setUpgradeModalOpen(false)}
        currentPlan={userPlan}
        targetPlan={targetPlan}
      />
    </>
  );
}
```

## Styling

All components use:
- Design tokens from `styles/globals.css`
- Tailwind CSS for utility classes
- Consistent spacing and typography
- Motion animations from `motion/react`

## Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Minimum 44px hit areas
- 4.5:1 contrast ratios
- Screen reader announcements for state changes
