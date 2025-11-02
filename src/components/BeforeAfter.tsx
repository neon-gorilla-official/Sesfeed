import { motion } from 'motion/react';
import { AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function BeforeAfter() {
  return (
    <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground px-4">
              The Invisible Problem, Made Visible
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              See how AI blindness affects real brands — and how Ses Feed fixes it.
            </p>
          </motion.div>
        </div>

        {/* Before/After Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* BEFORE Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-muted to-secondary rounded-3xl p-6 sm:p-8 border-2 border-border h-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted border border-border mb-4 sm:mb-6">
                <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-xs sm:text-sm tracking-wider">BEFORE</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-foreground">
                Without SES Feed
              </h3>

              {/* Query */}
              <div className="bg-card rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-border">
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">AI Query:</p>
                <p className="text-sm sm:text-base text-foreground">"Who is Neon Gorilla?"</p>
              </div>

              {/* Response */}
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Neon Gorilla is a UK-based marketing agency that offers SEO, CRO, and automation services for eCommerce and SaaS brands. Their website highlights results-driven strategies and digital growth campaigns.
                </p>
              </div>

              {/* Label */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/50 rounded-xl">
                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  Generic, metadata-level summary — similar to what LLMs currently return when they can only read your homepage or LinkedIn snippet.
                </p>
              </div>
            </div>
          </motion.div>

          {/* AFTER Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 sm:p-8 border-2 border-primary h-full shadow-lg shadow-primary/10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-primary text-xs sm:text-sm tracking-wider">AFTER</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-foreground">
                With SES Feed Enabled
              </h3>

              {/* Query */}
              <div className="bg-card rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-primary/20">
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">AI Query:</p>
                <p className="text-sm sm:text-base text-foreground">"Who is Neon Gorilla?"</p>
              </div>

              {/* Response */}
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-primary/20">
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3 sm:mb-4">
                  Neon Gorilla is a high-performance marketing and automation agency known for <span className="text-primary">"Marketing Engineering"</span> — a data-driven approach that blends creativity with systems thinking.
                </p>
                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3 sm:mb-4">
                  They regularly post insights about AI-powered content systems, SEO automation, and conversion optimisation on LinkedIn and YouTube. Their tone is bold, confident, and technical — they explain marketing like it's a game they've already mastered.
                </p>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  Their founder, <span className="text-primary">Ben Fildes</span>, leads the charge on LinkedIn under the "Era of Marketing Engineering" banner, positioning Neon Gorilla as a movement redefining how marketing teams build, automate, and grow.
                </p>
              </div>

              {/* Label */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-accent/10 rounded-xl border border-accent/30">
                <p className="text-xs sm:text-sm text-foreground italic">
                  Dynamic, contextual brand portrait — pulled from social tone, client proof, and content signals — giving LLMs a true sense of voice, activity, and identity.
                </p>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Arrow Indicator (Desktop) */}
        <div className="hidden lg:flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-16 h-16 rounded-full bg-card shadow-xl flex items-center justify-center border-2 border-primary"
          >
            <ArrowRight className="w-8 h-8 text-primary" />
          </motion.div>
        </div>

        {/* Key Difference Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-border">
            <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-4 text-foreground">
              Key Difference
            </h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">Before:</p>
                <p className="text-sm sm:text-base text-foreground">
                  Flat factual summary from static website data.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-accent mb-2">After:</p>
                <p className="text-sm sm:text-base text-foreground">
                  Dynamic, contextual brand portrait with voice, activity, and identity.
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-border">
              <p className="text-base sm:text-lg text-muted-foreground mb-2">
                This is exactly what SES Feed unlocks:
              </p>
              <p className="text-lg sm:text-xl text-foreground">
                LLMs don't just <span className="text-accent">know about you</span> — they{' '}
                <span className="text-accent">understand you</span> the way your followers do.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Link to Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/showcase" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg cursor-pointer">
            See more interactive examples
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
