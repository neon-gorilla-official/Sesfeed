import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { 
  FileJson, 
  Link2, 
  Activity, 
  CheckCircle2, 
  Globe,
  Zap,
  RefreshCw,
  Shield,
  Eye,
  Network,
  Terminal
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';

export function ProtocolPage() {
  const benefits = [
    {
      signal: 'Entity verification',
      effect: 'Links domain ↔ social ↔ feed',
      outcome: 'Cleaner Knowledge Graph & AI profiles'
    },
    {
      signal: 'Crawl discovery',
      effect: 'Directs GPTBot, Googlebot, CCBot to your feeds',
      outcome: 'Faster, deeper indexing'
    },
    {
      signal: 'Trust signal',
      effect: 'Transparent identity map',
      outcome: 'Stronger E-E-A-T signals'
    },
    {
      signal: 'Standardisation',
      effect: 'Recognisable machine endpoint',
      outcome: 'The visibility counterpart to robots.txt'
    }
  ];

  const mechanisms = [
    {
      mechanism: 'Frequent updates',
      triggers: 'Higher crawl frequency',
      matters: 'Better SEO freshness'
    },
    {
      mechanism: 'Structured schema',
      triggers: 'Clear entity understanding',
      matters: 'Improved E-E-A-T'
    },
    {
      mechanism: 'Cross-platform links',
      triggers: 'Unified digital footprint',
      matters: 'Stronger brand graph'
    },
    {
      mechanism: 'Open accessibility',
      triggers: 'Public crawlable feed',
      matters: 'LLM training visibility'
    }
  ];

  const systemLayers = [
    {
      layer: 'ses.json (open spec)',
      function: 'Universal identity declaration',
      maintainedBy: 'The open web (Neon Gorilla stewards spec)'
    },
    {
      layer: 'SES Feed plugin',
      function: 'Automates feeds & schema',
      maintainedBy: 'Neon Gorilla'
    },
    {
      layer: 'Authority.blog',
      function: 'Networked authority verification',
      maintainedBy: 'Ecosystem validator'
    },
    {
      layer: 'Crawlers & LLMs',
      function: 'Consume structured signals',
      maintainedBy: 'External beneficiaries'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <FileJson className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm tracking-wider">OPEN PROTOCOL</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground">
              The SES Protocol
            </h1>
            
            <p className="text-2xl sm:text-3xl text-muted-foreground mb-4">
              Search Everywhere Syndication
            </p>
            
            <p className="text-xl text-muted-foreground">
              The Web's Heartbeat File
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is ses.json */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h2 className="text-4xl text-foreground">What is ses.json?</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <code className="px-2 py-1 rounded bg-muted text-accent">ses.json</code> is a lightweight, open file—like <code className="px-2 py-1 rounded bg-muted text-accent">robots.txt</code> or <code className="px-2 py-1 rounded bg-muted text-accent">llms.txt</code>—that lives at the root of your domain:
              </p>

              <div className="p-4 rounded-xl bg-card border border-border">
                <code className="text-primary">https://yourdomain.com/ses.json</code>
              </div>

              <p>
                It gives search engines and large-language-model crawlers a single, structured reference of who you are and where you exist online:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>what channels you own</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>where your live feeds are</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span>when they were last updated</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example File */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-10 h-10 text-accent" />
              <h2 className="text-3xl text-foreground">Example File</h2>
            </div>

            <div className="rounded-2xl border-2 border-accent bg-card overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 border-b border-border">
                <span className="text-foreground font-mono text-sm">ses.json</span>
              </div>
              <div className="p-6 bg-card">
                <pre className="text-sm text-foreground font-mono overflow-x-auto">
                  <code>{`{
  "entity": "Neon Gorilla",
  "website": "https://neongorilla.co.uk",
  "updated": "2025-10-31T12:00:00Z",
  "feeds": [
    "https://neongorilla.co.uk/ses-feed.json"
  ],
  "profiles": [
    "https://linkedin.com/company/neon-gorilla",
    "https://x.com/neongorilla",
    "https://youtube.com/@neongorilla",
    "https://reddit.com/r/neongorilla"
  ],
  "contact": "contact@neongorilla.co.uk"
}`}</code>
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground mb-6">It tells machines four things:</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground mb-2">Entity</h3>
                  <p className="text-muted-foreground text-sm">Who you are.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground mb-2">Website</h3>
                  <p className="text-muted-foreground text-sm">Your canonical domain.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground mb-2">Feeds</h3>
                  <p className="text-muted-foreground text-sm">Where your structured activity lives.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground mb-2">Profiles</h3>
                  <p className="text-muted-foreground text-sm">Your verified public channels.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-10 h-10 text-primary" />
              <h2 className="text-3xl text-foreground">Benefits of ses.json</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 text-foreground">Signal</th>
                    <th className="text-left p-4 text-foreground">Effect</th>
                    <th className="text-left p-4 text-foreground">Practical Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {benefits.map((benefit, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4 text-foreground">{benefit.signal}</td>
                      <td className="p-4 text-muted-foreground">{benefit.effect}</td>
                      <td className="p-4 text-muted-foreground">{benefit.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <p className="text-xl text-foreground italic text-center">
                "Hey Google, OpenAI, Perplexity — here's the authoritative map of me."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SES Feed Plugin */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h2 className="text-4xl text-foreground">The SES Feed Plugin — Proof of Life Layer</h2>
            </div>

            <p className="text-xl text-muted-foreground mb-8">
              While <code className="px-2 py-1 rounded bg-muted text-accent">ses.json</code> declares your identity, the SES Feed Plugin keeps it alive.
            </p>

            <div className="mb-12">
              <h3 className="text-2xl text-foreground mb-6">What it does</h3>
              <div className="space-y-4">
                {[
                  'Aggregates your latest posts from YouTube, LinkedIn, Reddit, TikTok, X, and blogs',
                  'Publishes structured data at /ses-feed.json',
                  'Generates a crawlable HTML page at /ses-feed/',
                  'Adds valid JSON-LD for every item (title, timestamp, authorship)',
                  'Updates automatically on schedule',
                  'Connects seamlessly to ses.json'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <Activity className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 text-foreground">Mechanism</th>
                    <th className="text-left p-4 text-foreground">What it triggers</th>
                    <th className="text-left p-4 text-foreground">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanisms.map((mech, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4 text-foreground">{mech.mechanism}</td>
                      <td className="p-4 text-muted-foreground">{mech.triggers}</td>
                      <td className="p-4 text-muted-foreground">{mech.matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-accent/30">
              <p className="text-xl text-foreground text-center">
                <span className="text-primary font-mono">ses.json</span> = identity map. <span className="text-accent font-mono">SES Feed</span> = evidence of life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How They Connect */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <RefreshCw className="w-10 h-10 text-accent" />
              <h2 className="text-3xl text-foreground">How They Connect</h2>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-card border-2 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <FileJson className="w-6 h-6 text-primary" />
                  <h3 className="text-xl text-foreground font-mono">[ses.json]</h3>
                </div>
                <p className="text-muted-foreground mb-2">↓ declares identity</p>
                <p className="text-foreground">"Here's my brand, socials, and feed."</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-xl text-muted-foreground">
                  <span>→ points to</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <code className="text-accent">/ses-feed.json</code>
                  <p className="text-sm text-muted-foreground mt-2">(structured live data)</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <code className="text-accent">/ses-feed/</code>
                  <p className="text-sm text-muted-foreground mt-2">(HTML version)</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 mt-8">
                <p className="text-lg text-foreground text-center">
                  Together they form a closed loop of authenticity:<br />
                  <span className="text-muted-foreground">
                    you declare who you are → you prove you're active → crawlers and AIs verify your entity.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-10 h-10 text-primary" />
              <h2 className="text-3xl text-foreground">Why This Matters</h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Modern search and AI systems rely on structured, open data.
                They scrape HTML + JSON-LD from trusted domains to update their knowledge graphs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border-l-4 border-red-500">
                <h3 className="text-foreground mb-2">If your data is <span className="text-red-500">Inaccessible</span></h3>
                <p className="text-muted-foreground">Then you're invisible.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border-l-4 border-yellow-500">
                <h3 className="text-foreground mb-2">If your data is <span className="text-yellow-500">Unstructured</span></h3>
                <p className="text-muted-foreground">Then you're misrepresented.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border-l-4 border-accent">
                <h3 className="text-foreground mb-2">If your data is <span className="text-accent">Structured and fresh</span></h3>
                <p className="text-muted-foreground">Then you're citable and trusted.</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/30">
              <p className="text-xl text-foreground text-center">
                SES makes sure you're the last one.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Hierarchy */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Network className="w-10 h-10 text-accent" />
              <h2 className="text-3xl text-foreground">The System Hierarchy</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 text-foreground">Layer</th>
                    <th className="text-left p-4 text-foreground">Function</th>
                    <th className="text-left p-4 text-foreground">Maintained by</th>
                  </tr>
                </thead>
                <tbody>
                  {systemLayers.map((layer, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4 text-foreground font-mono text-sm">{layer.layer}</td>
                      <td className="p-4 text-muted-foreground">{layer.function}</td>
                      <td className="p-4 text-muted-foreground">{layer.maintainedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-foreground mb-8 text-center">TL;DR</h2>

            <div className="space-y-4 mb-12">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-foreground mb-2 font-mono">ses.json</h3>
                <p className="text-muted-foreground">Tells the world who you are and where your heartbeat lives.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-foreground mb-2 font-mono">SES Feed</h3>
                <p className="text-muted-foreground">Keeps that heartbeat alive — fresh, structured, visible.</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary">
                <h3 className="text-foreground mb-2">Together</h3>
                <p className="text-foreground">Make your brand visible, credible, and legible to search and AI.</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl text-foreground mb-6">Add Your Heartbeat Today</h3>
              
              <div className="p-6 rounded-xl bg-card border border-border inline-block mb-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Terminal className="w-5 h-5" />
                  <span className="text-sm">Terminal</span>
                </div>
                <code className="block p-4 rounded bg-muted text-accent font-mono">
                  curl -o ses.json https://sesfeed.org/generator
                </code>
              </div>

              <p className="text-muted-foreground mb-6">
                Then place it at your domain root and share it with <span className="text-accent">#sesjson</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ses-json">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full">
                    Generate ses.json
                  </Button>
                </Link>
                <Link href="/plugin">
                  <Button size="lg" variant="outline" className="border-2 border-border px-8 py-6 rounded-full">
                    Get SES Feed Plugin
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
