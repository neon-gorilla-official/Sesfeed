# SES Feed Pricing & Upgrade Copy Guide

This document outlines all pricing-related copy across the SES Feed application.

## Plan Tiers

### Free
- **Name:** Free
- **Subtitle:** Start building your visibility
- **Price:** £0 / forever
- **Description:** Create and publish your first SES Feed to make your brand visible to AIs. Set up once — stay visible automatically with weekly updates.
- **Best for:** Individuals
- **CTA:** Get started free
- **Footer:** No credit card required.

**Features:**
- 1 connected account
- Weekly feed updates
- Generate & install SES.json
- Publish HTML + SES Feed via plugin

---

### Pro
- **Name:** Pro
- **Subtitle:** Daily automation for growing brands
- **Price:** £29.99 / year
- **Description:** Upgrade for automatic daily updates and API-powered content ingestion. Ideal for creators and small teams who want to stay fresh in the AI web.
- **Best for:** Teams & small brands
- **CTA:** Upgrade to Pro
- **Footer:** Full automation, one simple price.

**Features:**
- 5 connected accounts
- Daily feed updates
- API access for content ingestion
- Multi-account setup

---

### Ultra
- **Name:** Ultra
- **Subtitle:** Full control, real-time visibility
- **Price:** £89.99 / year
- **Description:** Gain complete control over your feed with hourly updates and smart filtration. Choose exactly what data LLMs see — across unlimited accounts.
- **Best for:** Agencies & networks
- **CTA:** Upgrade to Ultra
- **Footer:** Maximum visibility. Maximum control.

**Features:**
- Unlimited connected accounts
- Hourly updates
- Advanced control and smart filtration
- Custom data permissions

---

## Upgrade Modal Copy

### Upgrading to Pro
**Header:** Upgrade to Pro  
**Subheader:** Daily updates and API automation for your feeds.

**Body:**
You're currently on the Free plan.

Upgrading to Pro enables:
- 5 connected accounts
- Daily feed updates
- API access for content ingestion
- Multi-account setup

**Plan Summary:**
- Current: Free · Weekly updates · 1 account
- New: Pro · Daily updates · 5 accounts

**CTA:** Confirm Upgrade (£29.99 / year)  
**Secondary:** View all plans

**Success Message:**  
✅ You're now on the Pro plan. Your feeds will update daily.

---

### Upgrading to Ultra
**Header:** Upgrade to Ultra  
**Subheader:** Hourly updates and full control over what LLMs can read.

**Body:**
You're currently on the Pro plan.

Upgrading to Ultra enables:
- Unlimited connected accounts
- Hourly updates
- Advanced control and smart filtration
- Custom data permissions

**Plan Summary:**
- Current: Pro · Daily updates · 5 accounts
- New: Ultra · Hourly updates · Unlimited accounts

**CTA:** Confirm Upgrade (£89.99 / year)  
**Secondary:** View all plans

**Success Message:**  
✅ You're now on the Ultra plan. Full control and hourly updates are active.

---

## Inline Upgrade Prompts

### Account Limit (Free → Pro)
You've connected the maximum number of accounts for your plan (1/1). Upgrade to Pro to manage up to 5 accounts with daily updates.  
**[Upgrade to Pro]**

### Account Limit (Pro → Ultra)
You've connected the maximum number of accounts for your plan (5/5). Upgrade to Ultra for unlimited accounts with hourly updates.  
**[Upgrade to Ultra]**

### Update Frequency (Free)
Weekly updates active. Switch to Pro for daily refreshes or Ultra for hourly visibility.  
**[See plans]**

### Update Frequency (Pro)
Daily updates active. Switch to Ultra for hourly visibility.  
**[See plans]**

### Smart Filtration (Any → Ultra)
Smart filtration is available on Ultra. Gain full control over which data fields your feed exposes to LLMs.  
**[Upgrade to Ultra]**

---

## Feature Tooltips

- **Connected accounts:** Number of social profiles connected to your SES Feed.
- **Update frequency:** How often your feed refreshes with the latest posts and metadata.
- **API access / API ingestion:** Automates feed updates using platform APIs instead of manual publishing.
- **Smart filtration & control:** Lets you control which content types, fields, or posts are shared with AI models.
- **SES.json:** Your structured data file that LLMs can read to understand your verified brand footprint.

---

## Success Notifications

| Event | Notification |
|-------|-------------|
| Feed created | ✅ Your SES Feed has been created. You're now visible to AIs. |
| Upgraded to Pro | ✅ Pro activated — your feeds will now refresh daily. |
| Upgraded to Ultra | ✅ Ultra activated — hourly updates and advanced filtration are enabled. |
| Payment success | Plan updated successfully. You can manage your subscription in Settings. |
| Payment failed | Payment failed — please check your details or contact support. |

---

## Comparison Table

| Feature | Free | Pro | Ultra |
|---------|------|-----|-------|
| Price | £0 / forever | £29.99 / year | £89.99 / year |
| Connected accounts | 1 | 5 | Unlimited |
| Update frequency | Weekly | Daily | Hourly |
| SES.json + HTML publish | ✅ | ✅ | ✅ |
| API ingestion | — | ✅ | ✅ |
| Multi-account management | — | ✅ | ✅ |
| Smart filtration & control | — | — | ✅ |
| Support | Community | Email | Priority |
| Best for | Individuals | Teams & small brands | Agencies & networks |

---

## FAQ Copy

**Q: What happens if I exceed account limits?**  
A: You'll see an inline prompt to upgrade.

**Q: Can I downgrade or cancel?**  
A: Anytime; your feed remains public at current tier limits.

**Q: How do updates work?**  
A: Free plans get weekly updates, Pro gets daily, and Ultra gets hourly. Updates are automatic and keep your AI visibility fresh.

**Q: What is smart filtration?**  
A: Ultra plans can choose exactly what data types are shared with AI systems, giving you fine-grained control over your digital footprint.

**Q: Do prices include VAT?**  
A: VAT may apply depending on your location and will be calculated at checkout.

---

## Legal / Small Print

All plans renew annually. Cancel anytime before renewal to avoid charges.  
Your public SES Feed remains accessible even if you downgrade.  
SES Feed uses OAuth 2.0 for secure API connections.  
VAT may apply depending on your location.

---

## Implementation Notes

All copy is centralized in `/utils/pricing-config.ts` and should be updated there to maintain consistency across:
- Homepage pricing strip (`/components/Pricing.tsx`)
- Full pricing page (`/pages/PricingPage.tsx`)
- Upgrade modals (`/components/pricing/UpgradeModal.tsx`)
- Inline prompts (`/components/pricing/UpgradePrompt.tsx`)
- Plan badges (`/components/pricing/PlanBadge.tsx`)
- Notifications (`/utils/notifications.ts`)

**Testing:** Visit `/pricing-demo` to see all components with live copy.
