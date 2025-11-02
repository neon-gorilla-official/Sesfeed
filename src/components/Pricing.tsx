import { motion } from 'motion/react';
import { PricingCard } from './pricing/PricingCard';
import { PLAN_CONFIG } from '../utils/pricing-config';
import { Link } from 'wouter';

export function Pricing() {
  const plans = [PLAN_CONFIG.free, PLAN_CONFIG.pro, PLAN_CONFIG.ultra];

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Start free. Upgrade any time.
            </p>
          </motion.div>
        </div>

        {/* Compact Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isFeatured={plan.id === 'pro'}
              isCompact={true}
              ctaHref="/signup"
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Microcopy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground">
            No credit card required for Free.{' '}
            <Link href="/pricing" className="text-primary hover:text-primary/80 transition-colors">
              View detailed comparison →
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            All plans renew annually. Your public SES Feed remains accessible even if you downgrade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
