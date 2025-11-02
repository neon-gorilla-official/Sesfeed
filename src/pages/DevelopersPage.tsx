import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  Code,
  Terminal,
  Webhook,
  FileJson,
  CheckCircle2,
  Zap,
  Book,
  Cpu
} from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function DevelopersPage() {
  const features = [
    {
      icon: FileJson,
      title: "REST & JSON Endpoints",
      items: [
        "/ses-feed.json (full entity feed)",
        "/knowledge.json (fact-layer file)",
        "/validate (schema + crawl audit)"
      ]
    },
    {
      icon: Webhook,
      title: "Webhooks",
      items: [
        "Trigger updates when new social content is posted",
        "Notifications when feeds refresh",
        "Custom event handlers"
      ]
    },
    {
      icon: Code,
      title: "SDKs (coming soon)",
      items: [
        "WordPress integration",
        "Node.js library",
        "Python helpers for custom integrations"
      ]
    }
  ];

  const useCases = [
    "Embed SES Feed output in custom dashboards",
    "Auto-generate structured data from CMS posts",
    "Monitor LLM visibility for clients programmatically",
    "Extend feeds into AI knowledge graphs or internal search tools"
  ];

  const codeExample = `{
  "platform": "youtube",
  "title": "Inside the Continuous Content Engine",
  "url": "https://youtube.com/...",
  "publishedAt": "2025-10-30T12:00:00Z",
  "keywords": ["automation", "seo"],
  "sourceType": "video"
}`;

  const tiers = [
    {
      name: "Free",
      access: "1 feed",
      calls: "1k calls/mo",
      features: ["Basic API access", "Standard endpoints", "Community support"],
      price: "£0"
    },
    {
      name: "Pro Dev",
      access: "Multi-feed",
      calls: "50k calls/mo",
      features: ["Advanced endpoints", "Webhook support", "Priority support", "Usage analytics"],
      price: "£29"
    },
    {
      name: "Enterprise API",
      access: "Unlimited feeds",
      calls: "Custom limits",
      features: ["SLA guarantees", "Dedicated support", "Custom integrations", "White-label options"],
      price: "Custom"
    }
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
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm tracking-wider">FOR DEVELOPERS</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground">
              SES Feed for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Developers</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-primary mb-4">
              Build with the language machines read.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-6 text-lg text-foreground">
              <p className="text-xl max-w-3xl mx-auto">
                The SES Feed Developer API lets you programmatically generate, validate, and extend structured entity feeds across any CMS or platform.
              </p>
              <p className="text-muted-foreground">
                Perfect for developers building automation tools, SEO frameworks, or data pipelines.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Developer Features */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
              Core Developer Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, iIndex) => (
                    <li key={iIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Example Use Cases */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                Example Use Cases
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-6 rounded-xl bg-card border border-border"
                >
                  <Cpu className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Docs Snapshot */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <Book className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm tracking-wider">EXAMPLE OUTPUT</span>
              </div>
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                Docs Snapshot
              </h2>
            </div>

            <div className="rounded-2xl border-2 border-primary bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-mono text-sm">ses-feed-item.json</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent">JSON-LD</span>
              </div>
              <div className="p-6 bg-card">
                <pre className="text-sm text-foreground font-mono overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-6">
              Everything you need — HTML, JSON-LD, NDJSON — pre-validated for schema.org.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Developer Plans */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                Developer Plans
              </h2>
              <p className="text-xl text-muted-foreground">
                Scale from prototype to production
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-3xl border-2 ${
                    tier.name === "Pro Dev"
                      ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary'
                      : 'bg-background border-border'
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl mb-2 text-foreground">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{tier.access}</p>
                    <p className="text-muted-foreground text-sm">{tier.calls}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl text-foreground mb-2">{tier.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      tier.name === "Pro Dev"
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    {tier.name === "Enterprise API" ? "Contact Sales" : "Get Started"}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Call to Action */}
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
              LLMs read structure
            </h2>
            <p className="text-2xl text-primary mb-8">
              Now you can build it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-card hover:bg-card/90 text-foreground border-2 border-border px-12 py-6 rounded-full text-lg"
              >
                <Book className="mr-2 w-5 h-5" />
                View Developer Docs
              </Button>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-full text-lg shadow-2xl shadow-primary/30"
                >
                  Start Free
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
