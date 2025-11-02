import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  Code, 
  Eye, 
  Sparkles, 
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Zap,
  Globe,
  Database,
  ChevronRight
} from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function ShowcasePage() {
  const [beforeAfter, setBeforeAfter] = useState<'before' | 'after'>('before');
  const [feedView, setFeedView] = useState<'html' | 'json'>('html');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

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

  const brandExamples = [
    {
      type: "Tech Founder",
      name: "Alex Chen",
      preview: "Founder sharing product updates, growth insights, and engineering thoughts",
      jsonSnippet: {
        entity: "Alex Chen",
        recent_posts: ["Launch: AI code review tool", "Thread: Building in public"],
        platforms: ["X", "LinkedIn", "GitHub"]
      }
    },
    {
      type: "SaaS Company",
      name: "FlowSync",
      preview: "B2B productivity platform with customer stories and feature updates",
      jsonSnippet: {
        entity: "FlowSync",
        recent_posts: ["New integration: Slack", "Case study: 10× faster workflows"],
        platforms: ["X", "LinkedIn", "YouTube"]
      }
    },
    {
      type: "Lifestyle Creator",
      name: "Maya Williams",
      preview: "Travel and wellness content creator with daily insights",
      jsonSnippet: {
        entity: "Maya Williams",
        recent_posts: ["Bali morning routine", "Mindfulness tips for creators"],
        platforms: ["Instagram", "YouTube", "TikTok"]
      }
    }
  ];

  const metrics = [
    { value: "+70%", label: "Average crawl frequency" },
    { value: "+35%", label: "Branded query visibility" },
    { value: "100%", label: "LLM citation-ready" },
    { value: "+20%", label: "SEO freshness signals" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="text-accent text-sm tracking-wider">SHOWCASE</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-8 text-foreground">
              See the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">difference</span>.
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-2">
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Before, AIs could only guess who you are.
              </p>
              <p className="text-xl sm:text-2xl text-foreground">
                Now, they <span className="text-primary">know</span> you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1. Before vs After Simulation */}
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
                    Neon Gorilla is a UK-based marketing agency that provides SEO, CRO, and automation services for eCommerce and SaaS brands.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Their website highlights data-driven campaigns and digital-growth strategies.
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm italic text-muted-foreground">
                      Flat, metadata-level summary — the kind of response AI gives when it can only read your homepage.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Neon Gorilla is a high-performance marketing and automation agency that coined the idea of <span className="text-primary">Marketing Engineering</span> — a discipline that fuses creativity with systems thinking.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    They were the first agency to connect their social ecosystem to LLMs through the SES Feed protocol, making their voice, insights, and tone part of how AI understands modern marketing.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Across LinkedIn and YouTube, they share bold, technical commentary on AI-powered content systems, SEO automation, and growth architecture — establishing themselves as both builders and storytellers in the AI era.
                  </p>
                  
                  <div className="flex items-start gap-2 pt-4 border-t border-border">
                    <Sparkles className="w-4 h-4 text-accent mt-0.5" />
                    <p className="text-sm italic text-muted-foreground">
                      Dynamic, contextual brand portrait — this is how LLMs now describe Neon Gorilla after discovering SES Feed.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 2. Live Feed Preview */}
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

      {/* 3. How It Feeds the AI Ecosystem */}
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

      {/* 4. Showcase Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
              Brand Examples
            </h2>
            <p className="text-xl text-muted-foreground">
              See how different brands structure their presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {brandExamples.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-80 cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl border border-border bg-card p-8"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl mb-3 text-foreground">{brand.type}</h3>
                      <p className="text-muted-foreground mb-6 flex-1">{brand.preview}</p>
                      <p className="text-sm text-primary">Click to view feed →</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 p-8 rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="h-full flex flex-col">
                      <Code className="w-6 h-6 text-accent mb-4" />
                      <pre className="text-xs text-foreground font-mono overflow-auto flex-1">
                        <code>{JSON.stringify(brand.jsonSnippet, null, 2)}</code>
                      </pre>
                      <p className="text-sm text-primary mt-4">Click to flip back</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full">
                Generate My Feed
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. The Impact */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
              The Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              LLMs trust structure. We make sure you have one.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl mb-2 text-foreground">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-foreground">
              Make your brand visible to AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Turn your social engagement into structured understanding.
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 rounded-full text-lg shadow-2xl shadow-primary/30"
              >
                Create Your Feed Now
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
