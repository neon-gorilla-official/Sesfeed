import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Globe, 
  RefreshCw,
  Code,
  Search,
  Lock,
  Settings,
  BarChart3
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Navigation } from '../components/Navigation';

export function Plugin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
              SES Feed Plugin
            </h1>
            <p className="text-2xl text-gray-400 mb-4">
              The new version of RSS — for LLMs.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
              Turn your social activity into a machine-readable, crawlable feed that boosts SEO freshness and makes AIs understand who you are.
            </p>
            <Link href="/signup">
              <Button 
                size="lg"
                className="bg-[#2E6EFF] hover:bg-[#2557CC] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#2E6EFF]/30"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What the plugin does */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#0A0A0F]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-white">
              What the plugin does
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2E6EFF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2E6EFF]">1</span>
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-3">
                    Connect your socials (we handle the APIs)
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Sign in with YouTube, Reddit, Instagram, Facebook Pages, X, Wikipedia/Wikidata and your site/blog. We use official/public APIs and OAuth; we only fetch public metadata.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2E6EFF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2E6EFF]">2</span>
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-3">
                    Filter exactly what shows up
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Choose platforms, post types, keywords, and data depth (titles, descriptions, hashtags, links, even comments) before it's published to your feed. (Granular, channel-level control is part of the spec's "unified data model" + schema layer.)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2E6EFF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2E6EFF]">3</span>
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-3">
                    Aggregate to two outputs (on your domain)
                  </h3>
                  <div className="space-y-3 text-gray-400">
                    <p>
                      <span className="text-[#65F1B5]">HTML page at /ses-feed/</span> — human-readable, crawlable.
                    </p>
                    <p>
                      <span className="text-[#65F1B5]">JSON feed at /ses-feed.json</span> — programmatic for LLMs/tools.
                    </p>
                    <p className="text-sm">
                      (Also supports NDJSON streaming and a /knowledge.json entity file.)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2E6EFF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2E6EFF]">4</span>
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-3">
                    Keep it fresh automatically
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We update on schedules per connector (hourly/daily/weekly), cache for speed, and ping search engines so it's re-crawled.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/waitlist">
              <Button 
                size="lg"
                className="bg-[#2E6EFF] hover:bg-[#2557CC] text-white px-8 py-6 rounded-full"
              >
                Create My Feed
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-white">
              Why it matters
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2E6EFF]/20 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#2E6EFF]" />
              </div>
              <h3 className="text-xl text-white mb-3">LLM visibility</h3>
              <p className="text-gray-400 leading-relaxed">
                LLMs read structured HTML/JSON-LD; the feed gives them verified signals (with sameAs links) so they can recognise and cite you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2E6EFF]/20 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-[#2E6EFF]" />
              </div>
              <h3 className="text-xl text-white mb-3">SEO freshness</h3>
              <p className="text-gray-400 leading-relaxed">
                A steady stream of indexable content improves recency and depth on your site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2E6EFF]/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#2E6EFF]" />
              </div>
              <h3 className="text-xl text-white mb-3">Entity authority</h3>
              <p className="text-gray-400 leading-relaxed">
                Consolidates socials, site, and mentions into one canonical source node.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/waitlist">
              <Button 
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 rounded-full"
              >
                See It In Action
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#0A0A0F]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-white">
              What's inside
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start gap-4"
            >
              <Code className="w-6 h-6 text-[#65F1B5] flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Schema.org everywhere</h4>
                <p className="text-gray-400 text-sm">
                  SocialMediaPosting, VideoObject, DiscussionForumPosting, DataFeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start gap-4"
            >
              <Globe className="w-6 h-6 text-[#65F1B5] flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Discovery built-in</h4>
                <p className="text-gray-400 text-sm">
                  Sitemap links, &lt;link rel="alternate" /&gt;, robots allowed, pings to Google/Bing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start gap-4"
            >
              <Zap className="w-6 h-6 text-[#65F1B5] flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Performance</h4>
                <p className="text-gray-400 text-sm">
                  Cached render &lt;300ms; scalable JSON sizes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start gap-4"
            >
              <BarChart3 className="w-6 h-6 text-[#65F1B5] flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Validation</h4>
                <p className="text-gray-400 text-sm">
                  Rich Results tests, crawl stats, Lighthouse/PageSpeed checks.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start gap-4"
            >
              <Lock className="w-6 h-6 text-[#65F1B5] flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Security</h4>
                <p className="text-gray-400 text-sm">
                  OAuth 2.0, HTTPS, public metadata only, GDPR-safe.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/waitlist">
              <Button 
                size="lg"
                className="bg-[#2E6EFF] hover:bg-[#2557CC] text-white px-8 py-6 rounded-full"
              >
                Start Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How setup works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-white">
              How setup works <span className="text-gray-500">(minutes)</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2E6EFF]/10 to-[#65F1B5]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#2E6EFF]/30"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Settings className="w-6 h-6 text-[#65F1B5] flex-shrink-0 mt-1" />
                <p className="text-white text-lg">
                  Install the plugin → Sign in to your socials
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Settings className="w-6 h-6 text-[#65F1B5] flex-shrink-0 mt-1" />
                <p className="text-white text-lg">
                  Pick filters (platforms, keywords, depth)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Settings className="w-6 h-6 text-[#65F1B5] flex-shrink-0 mt-1" />
                <p className="text-white text-lg">
                  Click Publish — we create /ses-feed/ + /ses-feed.json and start daily/rolling updates automatically.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/waitlist">
              <Button 
                size="lg"
                className="bg-[#2E6EFF] hover:bg-[#2557CC] text-white px-8 py-6 rounded-full"
              >
                Generate My Feed
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-white">
              FAQ <span className="text-gray-500">(quick)</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-white mb-3 text-lg">
                Will this expose private data?
              </h4>
              <p className="text-gray-400">
                No — only public metadata, stored and served securely with OAuth and HTTPS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-white mb-3 text-lg">
                Does Google/LLMs actually read this?
              </h4>
              <p className="text-gray-400">
                Yes — we output HTML + JSON-LD, link from sitemap and headers, and ping crawlers for re-indexing; it's designed for LLM/search ingestion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-white mb-3 text-lg">
                How often does it update?
              </h4>
              <p className="text-gray-400">
                Per-platform cadences (hourly/daily/weekly) with site-level freshness signals on every publish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-[#0A0A0F]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#65F1B5]" />
              <span className="text-white tracking-wider">SES FEED</span>
            </div>
            <p className="text-gray-500 text-sm">
              Making your brand machine-readable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
