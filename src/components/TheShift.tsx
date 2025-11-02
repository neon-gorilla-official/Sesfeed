import { motion } from 'motion/react';
import { Users, Database, Rss, Sparkles } from 'lucide-react';

export function TheShift() {
  return (
    <section className="relative py-16 sm:py-24 bg-secondary">
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
              AI doesn't know your brand.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Large Language Models like ChatGPT, Claude, and Gemini don't access your social media content.
              <br className="hidden sm:block" />
              <span className="text-foreground"> That means your posts, tone, and community engagement are invisible to the systems people use to learn, search, and decide what to buy.</span>
            </p>
          </motion.div>
        </div>

        {/* Visual Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Human Side - Full Color */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-card to-secondary rounded-3xl p-6 sm:p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl text-foreground">Human-facing</h3>
            </div>
            <p className="text-sm sm:text-base text-foreground mb-4">
              Person posting on social media
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Rich visual content</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Engaging narratives</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Community interaction</span>
              </div>
            </div>
          </motion.div>

          {/* AI Side - Monochrome, No Data */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-muted rounded-3xl p-6 sm:p-8 shadow-lg border border-border opacity-60"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl text-muted-foreground">AI-facing</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 italic">
              ChatGPT-like interface
            </p>
            <div className="bg-card rounded-xl p-4 border border-border mb-4">
              <p className="text-sm text-muted-foreground text-center">
                ⚠️ No data found
              </p>
            </div>
            <p className="text-xs text-muted-foreground italic">
              LLMs can't access private or restricted social feeds
            </p>
          </motion.div>
        </div>

        {/* Credibility Caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm text-muted-foreground italic px-4">
            Most LLMs can only read public web and news content — not private or restricted social feeds
            <br className="hidden sm:block" />
            <span className="text-foreground">(sources: OpenAI, Anthropic, Google)</span>
          </p>
        </motion.div>

        {/* Key Insight - Moved from solution section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#0A0A0F] rounded-3xl p-6 sm:p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <Rss className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-foreground px-4">
              Think RSS — But for AI
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Ses Feed connects your social world to the AI layer that now defines search, reputation, and discovery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
