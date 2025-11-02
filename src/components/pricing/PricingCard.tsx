import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Check, Sparkles, Zap, Rocket } from 'lucide-react';
import { PlanConfig } from '../../utils/pricing-config';
import { Link } from 'wouter';

interface PricingCardProps {
  plan: PlanConfig;
  isFeatured?: boolean;
  isCurrentPlan?: boolean;
  isCompact?: boolean;
  ctaAction?: () => void;
  ctaHref?: string;
  showIdealFor?: boolean;
  delay?: number;
}

const planIcons = {
  free: Sparkles,
  pro: Zap,
  ultra: Rocket,
};

export function PricingCard({
  plan,
  isFeatured = false,
  isCurrentPlan = false,
  isCompact = false,
  ctaAction,
  ctaHref,
  showIdealFor = false,
  delay = 0,
}: PricingCardProps) {
  const Icon = planIcons[plan.id];

  const handleCtaClick = () => {
    if (ctaAction) {
      ctaAction();
    }
  };

  const ctaButton = (
    <Button
      onClick={handleCtaClick}
      disabled={isCurrentPlan}
      className={`w-full ${
        isFeatured
          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30'
          : isCurrentPlan
          ? 'bg-muted/50 text-muted-foreground cursor-not-allowed'
          : 'bg-muted hover:bg-muted/80 text-foreground'
      } rounded-xl ${isCompact ? 'py-4' : 'py-5 sm:py-6'} text-sm sm:text-base transition-all`}
    >
      {isCurrentPlan ? 'Current Plan' : plan.cta}
    </Button>
  );

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-2xl ${isCompact ? 'p-4 sm:p-6' : 'p-6 sm:p-8'} border transition-all duration-300 flex flex-col ${
        isFeatured
          ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary shadow-xl shadow-primary/20'
          : 'bg-card border-border hover:border-border/60'
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm shadow-lg whitespace-nowrap">
            Most Popular
          </div>
        </div>
      )}

      {/* Icon */}
      {!isCompact && (
        <div className="mb-4 sm:mb-6">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
              isFeatured ? 'bg-primary' : 'bg-muted'
            }`}
          >
            <Icon
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isFeatured ? 'text-primary-foreground' : 'text-foreground'
              }`}
            />
          </div>
        </div>
      )}

      {/* Plan Name & Subtitle */}
      <div className={`${isCompact ? 'mb-3' : 'mb-4'}`}>
        <h3 className={`${isCompact ? 'text-xl' : 'text-2xl sm:text-3xl'} mb-1 text-foreground`}>
          {plan.name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{plan.subtitle}</p>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className={`${isCompact ? 'text-3xl' : 'text-4xl sm:text-5xl'} text-foreground`}>
          {plan.priceDisplay}
        </span>
        <span className="text-sm sm:text-base text-muted-foreground ml-2">/ {plan.period}</span>
      </div>

      {/* Description */}
      {!isCompact && (
        <p className="text-sm sm:text-base text-muted-foreground mb-6">{plan.description}</p>
      )}

      {/* Features */}
      <ul className={`space-y-2 sm:space-y-3 ${isCompact ? 'mb-4' : 'mb-6 sm:mb-8'}`}>
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-3">
            <div
              className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
                isFeatured ? 'bg-primary/20' : 'bg-muted'
              }`}
            >
              <Check
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  isFeatured ? 'text-primary' : 'text-accent'
                }`}
              />
            </div>
            <span className="text-sm sm:text-base text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto">
        {ctaHref ? <Link href={ctaHref}>{ctaButton}</Link> : ctaButton}
        
        {/* Footer Microcopy */}
        {!isCompact && (
          <p className="text-xs text-center text-muted-foreground mt-3">{plan.footerMicrocopy}</p>
        )}
      </div>
    </motion.div>
  );

  return content;
}
