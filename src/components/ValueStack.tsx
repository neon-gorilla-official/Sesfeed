import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Link } from 'wouter';

export function ValueStack() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-[#0A0A0F] via-card to-[#0A0A0F] overflow-hidden">
      {/* Subtle glow lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Manifesto Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight px-4">
              Your social media is{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your voice
              </span>
              .
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground leading-relaxed px-4">
              Don't let it vanish behind the AI curtain.
            </p>
          </div>
        </motion.div>

        {/* Supporting Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Ses Feed ensures the world's new interface — LLMs — truly understand who you are.
          </p>
        </motion.div>

        {/* Dual CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <Link href="/ses-json">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
            >
              Create SES.json File (free)
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-muted hover:bg-muted/80 border-2 border-border text-foreground px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all"
            >
              Upgrade for API Access
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Pulse animation overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
}
