import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Code } from 'lucide-react';

export function LiveFeedPreview() {
  const [feedView, setFeedView] = useState<'html' | 'json'>('html');

  const feedSample = {
    html: [
      {
        title: "Why Marketing Engineering is eating traditional SEO",
        platform: "LinkedIn",
        date: "2024-10-28",
        engagement: "847 impressions",
      },
      {
        title: "How we scaled a SaaS client 27× ROI in Q3",
        platform: "X",
        date: "2024-10-25",
        engagement: "1.2K views",
      },
      {
        title: "Behind-the-scenes: Our automation stack",
        platform: "YouTube",
        date: "2024-10-20",
        engagement: "3.4K views",
      },
    ],
    json: `{
  "@context": "https://schema.org",
  "@type": "SocialMediaPosting",
  "headline": "Why Marketing Engineering is eating traditional SEO",
  "author": {
    "@type": "Organization",
    "name": "Neon Gorilla"
  },
  "datePublished": "2024-10-28",
  "url": "https://linkedin.com/...",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/ViewAction",
    "userInteractionCount": 847
  }
}`
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
            Your brand, made machine-readable
          </h2>
          <p className="text-xl text-muted-foreground">
            Every post, video, and review in one structured feed
          </p>
        </motion.div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-muted p-1">
            <button
              onClick={() => setFeedView('html')}
              className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
                feedView === 'html'
                  ? 'bg-background text-foreground shadow-lg'
                  : 'text-muted-foreground'
              }`}
            >
              <Eye className="w-4 h-4" />
              Human View
            </button>
            <button
              onClick={() => setFeedView('json')}
              className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
                feedView === 'json'
                  ? 'bg-background text-foreground shadow-lg'
                  : 'text-muted-foreground'
              }`}
            >
              <Code className="w-4 h-4" />
              Machine View
            </button>
          </div>
        </div>

        {/* Feed Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={feedView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border overflow-hidden bg-card"
          >
            {feedView === 'html' ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <h3 className="text-xl text-foreground">/ses-feed/</h3>
                  <span className="text-sm text-muted-foreground">Last updated: Today</span>
                </div>
                <div className="space-y-4">
                  {feedSample.html.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors border border-border"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-foreground flex-1">{post.title}</h4>
                        <span className="text-xs text-muted-foreground">{post.platform}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.engagement}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <h3 className="text-xl text-foreground font-mono">/ses-feed.json</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent">JSON-LD</span>
                </div>
                <pre className="text-sm text-muted-foreground font-mono overflow-x-auto">
                  <code>{feedSample.json}</code>
                </pre>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Feeds update daily — so your AI presence is always fresh.
        </p>
      </div>
    </section>
  );
}
