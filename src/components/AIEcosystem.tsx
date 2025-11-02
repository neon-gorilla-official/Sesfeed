import { motion } from 'motion/react';
import { Globe, Zap, Database, ChevronRight } from 'lucide-react';

export function AIEcosystem() {
  return (
    <section className="py-20 bg-gradient-to-br from-card to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
            How it feeds the AI ecosystem
          </h2>
          <p className="text-xl text-muted-foreground">
            Humans see your socials. AIs see your SES Feed.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="grid md:grid-cols-5 gap-4 items-center">
          {/* Step 1: Social Platforms */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border text-center"
          >
            <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-foreground">X / YouTube / Reddit</p>
          </motion.div>

          <div className="flex justify-center">
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Step 2: SES Feed Filter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary text-center"
          >
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-foreground">Feed Filter</p>
            <p className="text-xs text-muted-foreground mt-1">by post type, keyword, tone</p>
          </motion.div>

          <div className="flex justify-center">
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Step 3: Structured Output */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-card border border-border text-center"
          >
            <Database className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-sm text-foreground">/ses-feed.json</p>
          </motion.div>

          <div className="col-span-full flex justify-center my-4">
            <ChevronRight className="w-6 h-6 text-muted-foreground rotate-90" />
          </div>

          {/* Step 4: Crawlers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-full md:col-span-5 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 text-center"
          >
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground">GPTBot</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground">Google</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground">Common Crawl</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground">Bing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
