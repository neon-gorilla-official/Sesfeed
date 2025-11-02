import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function FooterCTA() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-[#0A0A0F] via-[#1a1a2e] to-[#0A0A0F]">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759771963810-74bce93400e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc3RyZWFtJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE4Mjg3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Data visualization"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#2E6EFF]/10 border border-[#2E6EFF]/30">
            <div className="w-2 h-2 rounded-full bg-[#65F1B5] animate-pulse" />
            <span className="text-[#65F1B5] text-xs sm:text-sm tracking-wider">READY TO START?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight px-4">
            Start free. Stay visible.
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Your brand deserves to exist in the age of AI.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-4 pt-8"
          >
            <Link href="/ses-json">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#2E6EFF] hover:bg-[#2557CC] text-white px-10 sm:px-16 py-7 sm:py-9 text-xl sm:text-2xl rounded-full shadow-2xl shadow-[#2E6EFF]/40 hover:shadow-[#2E6EFF]/60 transition-all duration-300 group"
              >
                Setup Your SES Feed →
              </Button>
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 px-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#65F1B5]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#65F1B5]" />
              <span>Free plan forever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#65F1B5]" />
              <span>Upgrade anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
