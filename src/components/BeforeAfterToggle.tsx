import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function BeforeAfterToggle() {
  const [beforeAfter, setBeforeAfter] = useState<'before' | 'after'>('before');

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-muted p-1">
            <button
              onClick={() => setBeforeAfter('before')}
              className={`px-6 py-3 rounded-full transition-all ${
                beforeAfter === 'before'
                  ? 'bg-background text-foreground shadow-lg'
                  : 'text-muted-foreground'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setBeforeAfter('after')}
              className={`px-6 py-3 rounded-full transition-all ${
                beforeAfter === 'after'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground'
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Prompt Display */}
        <div className="mb-8 p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-muted-foreground text-sm mb-1">AI Query:</p>
          <p className="text-foreground text-lg">"Who is Neon Gorilla?"</p>
        </div>

        {/* Response Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={beforeAfter}
            initial={{ opacity: 0, x: beforeAfter === 'before' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: beforeAfter === 'before' ? 20 : -20 }}
            transition={{ duration: 0.4 }}
            className={`p-8 rounded-2xl border-2 ${
              beforeAfter === 'before'
                ? 'bg-muted/30 border-border'
                : 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary'
            }`}
          >
            {/* Section Header */}
            <div className="mb-6">
              <h3 className="text-sm tracking-wider text-muted-foreground mb-2">
                {beforeAfter === 'before' ? 'Before – Without SES Feed' : 'After – With SES Feed Enabled'}
              </h3>
            </div>

            {beforeAfter === 'before' ? (
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Neon Gorilla is a UK-based marketing agency that offers SEO, CRO, and automation services for eCommerce and SaaS businesses.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Their website describes their focus on performance marketing and data-led strategy.
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm italic text-muted-foreground">
                    This summary is typical of current LLM responses — generated from crawlable web content like homepages, About pages, and directory listings. Social content, tone, and recent activity are not visible.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Neon Gorilla is a marketing and automation agency focused on performance systems and AI-powered growth architecture.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Their recent posts discuss automation workflows, technical SEO frameworks, and the future of marketing engineering — content that previously lived only on social platforms.
                </p>
                
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground mb-3">
                    Through the SES Feed protocol, LLMs can now read a structured feed containing:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Verified social handles and account metadata</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Post titles, captions, and timestamps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Cross-platform activity summaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>Public engagement data</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-start gap-2 pt-4 border-t border-border">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5" />
                  <p className="text-sm italic text-muted-foreground">
                    This allows models to generate more accurate, up-to-date brand profiles using official, machine-readable inputs rather than secondary web references.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Supporting Caption */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Neon Gorilla recently integrated SES Feed — enabling LLMs to read verified public data directly from their social ecosystem for the first time.
          </p>
        </div>
      </div>
    </section>
  );
}
