# SES Feed User Journey

This document outlines the streamlined user journey from signup to upgrade.

## 🎯 Design Philosophy

**Progressive Disclosure & Natural Upgrade Discovery**

Instead of forcing users through lengthy onboarding, we let them discover value through actual usage. Users naturally encounter upgrade prompts when hitting free tier limitations, making the upgrade feel like a logical next step rather than a sales pitch.

---

## 🚀 User Flow

### 1. **Landing Page** (`/`)
- User learns about SES Feed
- Clear value proposition about AI visibility
- CTA: "Get Started Free" → `/signup`

### 2. **Sign Up** (`/signup`)
- Quick account creation (name, email, password)
- Or sign up with Google
- **Immediately redirects to:** `/dashboard` ✅

### 3. **Dashboard - First Visit** (`/dashboard`)

**Empty State Experience:**

The dashboard shows:
- Welcome message: "Let's make your social presence machine-readable"
- **Setup Progress Card** with 3 clear steps:
  1. ✓ Connect your first account
  2. ○ Generate your SES Feed
  3. ○ Publish to your website
- Progress bar showing 0/3 completion
- Clear "Start" button on first step

**Key Features:**
- Empty state for "Your Accounts" with platform connection buttons
- Locked actions (Generate Feed) until prerequisites are met
- Help resources always visible
- Subtle upgrade nudge in sidebar (not pushy)

### 4. **Connecting First Account**

**User clicks a platform (e.g., LinkedIn):**
- OAuth connection flow
- Returns to dashboard
- ✅ Step 1 complete! Progress: 1/3
- Account card now shows in "Your Accounts" section
- "Generate Feed" button becomes active
- **First limit discovery:** If they try to add a 2nd account → Upgrade prompt appears

### 5. **Generate Feed** (`/dashboard/feed`)

**Pre-generation state:**
- Explains what SES.json is
- Shows benefits (Structured, Auto-Updated, AI-Readable)
- Large "Generate SES Feed" button
- Shows current plan's update frequency

**Post-generation:**
- ✅ Success message
- Visual + JSON preview tabs
- Download button
- Clear installation instructions (3 steps)
- **Natural upgrade moment:** "Want daily updates?" card shows Pro benefits

### 6. **Natural Upgrade Triggers**

Users discover upgrade value through:

**Account Limit** (1/1 for Free):
```
"You've connected the maximum number of accounts for your plan (1/1).
Upgrade to Pro to manage up to 5 accounts with daily updates."
[Upgrade to Pro]
```

**Update Frequency** (Weekly on Free):
```
"Weekly updates active.
Switch to Pro for daily refreshes or Ultra for hourly visibility."
[See plans]
```

**Advanced Features** (Smart Filtration):
```
"Smart filtration is available on Ultra.
Gain full control over which data fields your feed exposes to LLMs."
[Upgrade to Ultra]
```

### 7. **Visibility Report** (`/dashboard/visibility`)

- Shows AI discovery metrics
- Citation tracking
- Crawl activity
- Natural place to show value being delivered
- Subtle upgrade prompts for better monitoring

### 8. **Upgrade Flow**

**When user clicks upgrade:**
1. Inline prompt → Upgrade modal opens
2. Modal shows:
   - Current vs. New plan comparison
   - Clear feature delta
   - Price and billing
   - "Confirm Upgrade" button
3. After upgrade:
   - ✅ Success toast notification
   - Dashboard reflects new capabilities
   - Features unlock automatically

---

## 📊 Dashboard States

### New User (0 accounts)
```
┌─────────────────────────────────────┐
│ Welcome to SES Feed                 │
│ Let's make your presence readable   │
│                                     │
│ 📊 Setup Progress: 0/3              │
│ ▱▱▱▱▱▱▱▱▱▱                         │
│                                     │
│ 1. Connect account      [Start]    │
│ 2. Generate feed        [Locked]   │
│ 3. Publish              [Locked]   │
└─────────────────────────────────────┘
```

### First Account Connected
```
┌─────────────────────────────────────┐
│ Welcome to SES Feed                 │
│                                     │
│ 📊 Setup Progress: 1/3              │
│ ████▱▱▱▱▱▱                         │
│                                     │
│ ✓ LinkedIn connected                │
│                                     │
│ [Generate SES Feed] ← Active!       │
└─────────────────────────────────────┘
```

### Feed Generated
```
┌─────────────────────────────────────┐
│ Welcome back!                       │
│                                     │
│ Stats: 67 Visibility | 1 Account    │
│                                     │
│ 💼 LinkedIn - Active                │
│ Weekly updates (Free plan)          │
│                                     │
│ 💡 Want daily? [Upgrade to Pro]     │
└─────────────────────────────────────┘
```

### At Free Limit
```
┌─────────────────────────────────────┐
│ Your Accounts (1/1 - Free)          │
│                                     │
│ 💼 LinkedIn - Active                │
│                                     │
│ ⚠️ Account limit reached            │
│ Upgrade to Pro for 5 accounts       │
│ [Upgrade to Pro]                    │
└─────────────────────────────────────┘
```

---

## 🎨 UX Principles Applied

### 1. **Immediate Value**
- No lengthy onboarding process
- Users land in the product, not a tutorial
- Actions available immediately

### 2. **Progressive Disclosure**
- Features unlock as users progress
- Locked features show what's next
- Clear visual hierarchy

### 3. **Contextual Upgrades**
- Upgrade prompts appear when users need features
- Not pushy or interrupting
- Always explain the specific benefit

### 4. **Clear Progress**
- Visual progress indicator
- Checklist shows completion
- Sense of accomplishment

### 5. **Empty States That Guide**
- Never show a blank screen
- Empty states suggest next action
- Include helpful context

### 6. **Natural Freemium Flow**
```
Signup (free) 
  ↓
Use product (value delivery)
  ↓
Hit limit (natural friction)
  ↓
See upgrade benefit (clear ROI)
  ↓
Upgrade (feels logical, not forced)
```

---

## 🔄 Update Frequency Discovery

Users naturally learn about update frequency through:

1. **Dashboard Stats Card**
   - Shows "Weekly" (Free) vs "Daily" (Pro) vs "Hourly" (Ultra)
   - Small inline button to compare plans

2. **Feed Preview Page**
   - Top info bar shows refresh rate
   - "Upgrade for Daily" button if on Free

3. **After Generation**
   - Success message mentions update schedule
   - Card showing upgrade benefits

This way, users understand the value of faster updates through actual usage, not just marketing copy.

---

## ✨ Key Differences from Old Flow

### Old (Removed)
- `/onboarding/welcome` - Welcome screen
- `/onboarding/connect-socials` - Connection wizard
- `/onboarding/generate-feed` - Generation step
- `/onboarding/success` - Success screen

**Problems:**
- 4-step process before reaching dashboard
- Felt like gatekeeping
- Couldn't explore dashboard until "done"
- Artificial progress

### New (Current)
- `/dashboard` - Single destination
- All setup happens in context
- Can skip around freely
- Natural exploration

**Benefits:**
- Immediate product access
- Flexibility to explore
- Progressive disclosure
- Natural upgrade discovery
- Less cognitive load

---

## 📈 Expected Conversion Path

```
100 Signups
  ↓
  85 Connect 1st account (85%)
    ↓
    70 Generate feed (82%)
      ↓
      40 Try to add 2nd account → Hit limit (57%)
        ↓
        12 Upgrade to Pro (30% of limited users)
```

The key insight: Users who hit limits are already engaged and see value. They're most likely to convert.

---

## 🛠️ Technical Implementation

### State Management
Currently using local state. In production:
- User plan from auth context
- Connected accounts from API
- Setup progress calculated from actual data
- Real-time updates on account connection

### Upgrade Flow
1. User clicks upgrade prompt
2. `UpgradeModal` opens with plan comparison
3. Payment processed (Stripe integration point)
4. Success toast notification
5. Dashboard state updates
6. New features unlock

### Components Used
- `DashboardLayout` - Consistent shell
- `UpgradePrompt` - Contextual upgrade CTAs
- `UpgradeModal` - Full upgrade flow
- `PlanBadge` - Plan status display
- Toast notifications from `notifications.ts`

---

This journey creates a smooth, natural path from free user to paying customer by letting them discover value through usage rather than being told about it upfront.
