import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { Check, X, ChevronDown, HelpCircle } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { PricingCard } from '../components/pricing/PricingCard';
import { PLAN_CONFIG, COMPARISON_FEATURES, FEATURE_TOOLTIPS } from '../utils/pricing-config';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip';

export function PricingPage() {
  const plans = [PLAN_CONFIG.free, PLAN_CONFIG.pro, PLAN_CONFIG.ultra];

  const faqs = [
    {
      question: 'What happens if I exceed account limits?',
      answer: "You'll see an inline prompt to upgrade.",
    },
    {
      question: 'Can I downgrade or cancel?',
      answer:
        'Anytime; your feed remains public at current tier limits.',
    },
    {
      question: 'How do updates work?',
      answer:
        'Free plans get weekly updates, Pro gets daily, and Ultra gets hourly. Updates are automatic and keep your AI visibility fresh.',
    },
    {
      question: 'What is smart filtration?',
      answer:
        'Ultra plans can choose exactly what data types are shared with AI systems, giving you fine-grained control over your digital footprint.',
    },
    {
      question: 'Do prices include VAT?',
      answer: 'VAT may apply depending on your location and will be calculated at checkout.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 sm:mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs sm:text-sm tracking-wider">SES FEED PRICING</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground">
              Choose your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                visibility level
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free. Scale to daily or hourly updates as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div key={plan.id} className="flex flex-col">
                <PricingCard
                  plan={plan}
                  isFeatured={plan.id === 'pro'}
                  ctaHref="/signup"
                  delay={index * 0.1}
                />
                {/* Best For Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="mt-4 text-center"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border">
                    <span className="text-xs text-muted-foreground">Best for:</span>
                    <span className="text-xs font-medium text-foreground">{plan.ideal}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 text-foreground">
              Feature comparison
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Everything you need to know about each plan
            </p>
          </motion.div>

          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block overflow-x-auto rounded-2xl border border-border bg-background"
          >
            <table className="w-full">
              <thead className="sticky top-0 z-10">
                <tr className="border-b border-border bg-muted/80 backdrop-blur-sm">
                  <th className="text-left p-4 sm:p-6 text-foreground font-medium">Feature</th>
                  <th className="text-center p-4 sm:p-6 text-foreground font-medium">
                    <div className="flex flex-col items-center gap-1">
                      <span>Free</span>
                      <span className="text-xs font-normal text-muted-foreground">£0/forever</span>
                    </div>
                  </th>
                  <th className="text-center p-4 sm:p-6 text-foreground font-medium bg-primary/5">
                    <div className="flex flex-col items-center gap-1">
                      <span>Pro</span>
                      <span className="text-xs font-normal text-muted-foreground">£29.99/year</span>
                    </div>
                  </th>
                  <th className="text-center p-4 sm:p-6 text-foreground font-medium">
                    <div className="flex flex-col items-center gap-1">
                      <span>Ultra</span>
                      <span className="text-xs font-normal text-muted-foreground">£89.99/year</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((feature, index) => {
                  const tooltip = FEATURE_TOOLTIPS[feature.name];
                  return (
                    <tr
                      key={index}
                      className={`border-b border-border ${
                        index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                      }`}
                    >
                      <td className="p-4 sm:p-6 text-foreground">
                        <div className="flex items-center gap-2">
                          {feature.name}
                          {tooltip && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent side="right" className="max-w-xs">
                                  <p className="text-sm">{tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </td>
                    <td className="text-center p-4 sm:p-6">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? (
                          <Check className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{feature.free}</span>
                      )}
                    </td>
                    <td className="text-center p-4 sm:p-6 bg-primary/5">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground font-medium">{feature.pro}</span>
                      )}
                    </td>
                    <td className="text-center p-4 sm:p-6">
                      {typeof feature.ultra === 'boolean' ? (
                        feature.ultra ? (
                          <Check className="w-5 h-5 text-accent mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground font-medium">{feature.ultra}</span>
                      )}
                    </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile Stacked Cards */}
          <div className="lg:hidden space-y-4">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-background p-4"
              >
                <h3 className="text-xl font-medium text-foreground mb-4">{plan.name}</h3>
                <div className="space-y-3">
                  {COMPARISON_FEATURES.map((feature, index) => {
                    const value = feature[plan.id];
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">{feature.name}</span>
                        <span className="text-sm text-foreground font-medium">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="w-4 h-4 text-accent" />
                            ) : (
                              <X className="w-4 h-4 text-muted-foreground" />
                            )
                          ) : (
                            value
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 text-foreground">
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl text-foreground mb-4">
              Ready to be visible to AI?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every plan includes a live feed that keeps your site fresh, indexable, and visible to
              LLMs — no maintenance, no manual uploads.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              All plans renew annually. Cancel anytime before renewal to avoid charges.
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full shadow-lg shadow-primary/30"
              >
                Get Started Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
