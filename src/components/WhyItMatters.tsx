import { motion } from 'motion/react';
import { Brain, Link2, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'wouter';

export function WhyItMatters() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-card to-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground px-4">
              Ses Feed makes your brand visible to AI.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Ses Feed bridges the gap between your social channels and LLMs.
              <br className="hidden sm:block" />
              It's an API-led live feed that lets AIs understand your brand holistically — your activity, tone, and proof — not just your homepage.
            </p>
          </motion.div>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Brand Perception */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#2E6EFF] to-[#1a4fcc] flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl mb-3 text-foreground">
              Brand Perception
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              You look credible and active inside AI results.
            </p>
          </motion.div>

          {/* Citation Frequency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#65F1B5] to-[#3dd68f] flex items-center justify-center mb-4">
              <Link2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl mb-3 text-foreground">
              Citation Frequency
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              LLMs start referencing your posts and pages.
            </p>
          </motion.div>

          {/* Customer Connection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#2E6EFF] to-[#65F1B5] flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl mb-3 text-foreground">
              Customer Connection
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              People meet your brand through AI, not ads.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center px-4"
        >
          <Link href="/ses-json">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
            >
              Setup Your SES Feed
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
