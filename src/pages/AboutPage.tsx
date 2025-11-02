import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Globe,
  Zap,
  Award,
  Users,
  Target
} from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function AboutPage() {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "↑43%", label: "Higher Google recrawl rate" },
    { value: "↑27%", label: "Increase in branded search visibility" },
    { value: "↑19%", label: "Improvement in AI-generated summaries" }
  ];

  const testResults = [
    {
      brand: "ChooseMyCar.com",
      result: "Improved entity recognition in AI search results"
    },
    {
      brand: "Monday.com",
      result: "Validated schema-layer integration (sandbox trial)"
    },
    {
      brand: "Independent creators",
      result: "Consistent SEO freshness boosts and accurate AI summaries"
    }
  ];

  const benefits = [
    "More frequent Google indexation",
    "Increased topical authority",
    "Better brand portrayal in AI-driven answers"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Transition Animation */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Animated Transition */}
            <div className="mb-12 h-32 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {showTransition ? (
                  <motion.div
                    key="rss"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="text-6xl sm:text-7xl text-orange-500">
                      RSS
                    </div>
                    <div className="text-lg sm:text-xl text-muted-foreground">
                      Really Simple Syndication
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ses"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="text-6xl sm:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      SES
                    </div>
                    <div className="text-lg sm:text-xl text-muted-foreground">
                      Search Everywhere Syndication
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Arrow Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-16 bg-muted-foreground" />
              <ArrowRight className="w-6 h-6 text-primary" />
              <div className="h-px w-16 bg-muted-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-foreground max-w-4xl mx-auto">
                The same idea that made blogs readable by humans
              </h1>
              <p className="text-2xl sm:text-3xl text-primary mb-4">
                now makes brands understandable by machines.
              </p>
              <p className="text-xl text-muted-foreground">
                The next evolution of visibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1. What We Do */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">What We Do</h2>
            </div>

            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p className="text-2xl text-center text-muted-foreground mb-8">
                The internet has changed.
              </p>
              
              <p>
                People still see you on social media — but machines, search engines, and AI models don't.
              </p>

              <p className="text-xl text-primary">
                SES Feed bridges that gap.
              </p>

              <p>
                We take your public signals — posts, videos, reviews, and mentions — and syndicate them across your site in a structured format that Google, GPTs, and knowledge engines can read, understand, and trust.
              </p>

              <p className="text-center text-xl pt-8 border-t border-border">
                If RSS was built for people,<br />
                <span className="text-primary">SES is built for the machines that people now rely on.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What SES Feed Means */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">What SES Feed Means</h2>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 sm:p-12 border border-primary/30">
              <div className="space-y-6 text-lg text-foreground">
                <p>
                  <span className="text-2xl text-primary">SES = Search Everywhere Syndication.</span>
                </p>
                
                <p>
                  It's the evolution of RSS (Really Simple Syndication) — a new layer of visibility for the AI era.
                </p>

                <p>
                  Where RSS once told readers when you posted, SES now tells AIs <span className="text-primary">who you are</span>, <span className="text-primary">what you say</span>, and <span className="text-primary">what you do</span>.
                </p>

                <p className="text-center pt-6 border-t border-border text-xl">
                  It's the same foundation — just rebuilt for the world we live in now.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. How It Started */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">How It Started</h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-4 text-lg text-foreground">
                  <p>
                    SES Feed was founded by <span className="text-primary">Ben Fildes</span>, a digital marketer and technologist who studied Modern Digital Marketing at Keele University, completing a Master's Degree in data-driven marketing and automation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-4 text-lg text-foreground">
                  <p>
                    While leading his agency, <span className="text-primary">Neon Gorilla</span>, Ben saw the shift up close. His clients were building vibrant communities on social media — but when searched through AI tools like ChatGPT, they were invisible.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 border-l-4 border-primary">
                <p className="text-xl text-foreground italic">
                  "We realised the problem wasn't content — it was structure. The AIs couldn't see the activity happening off-site."
                </p>
                <p className="text-muted-foreground mt-4">
                  — Ben Fildes, Founder
                </p>
              </div>

              <p className="text-lg text-foreground">
                That observation led to SES Feed — a system that turns your online footprint into structured, discoverable intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Academic & Research Foundation */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm tracking-wider">RESEARCH-BACKED</span>
              </div>
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">Academic & Research Foundation</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-lg text-foreground space-y-6">
                <p>
                  In collaboration with <span className="text-primary">Keele University's Business School</span>, we studied the relationship between structured data, SEO freshness, and AI discoverability.
                </p>
                
                <p>
                  Across 150+ sites in fast-moving sectors, we found that brands implementing structured syndication feeds saw:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border text-center"
                  >
                    <div className="text-3xl mb-2 text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/30 mt-8">
                <p className="text-xl text-foreground text-center">
                  This data confirmed what we suspected —<br />
                  <span className="text-primary">LLMs don't "read the web" like humans;</span><br />
                  they read feeds, schema, and structure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Tested in the Wild */}
      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm tracking-wider">REAL RESULTS</span>
              </div>
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">Tested in the Wild</h2>
              <p className="text-xl text-muted-foreground">
                We've trialled SES Feed across real-world brands
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {testResults.map((test, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-foreground">{test.brand}</h3>
                      <p className="text-muted-foreground">{test.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl p-8 border border-border">
              <p className="text-center text-lg text-muted-foreground mb-6">
                Across these tests, clients reported:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xl text-foreground mt-8 pt-8 border-t border-border">
                In short: their websites came alive — and <span className="text-primary">stayed alive</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Why It Matters */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">Why It Matters</h2>
            </div>

            <div className="space-y-8 text-lg text-foreground">
              <div className="grid sm:grid-cols-2 gap-8 text-center">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-xl">The old web was made of <span className="text-primary">blogs</span>.</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-xl">The new web is made of <span className="text-accent">knowledge</span>.</p>
                </div>
              </div>

              <div className="text-center space-y-6 py-8">
                <p>
                  Where RSS helped people subscribe,<br />
                  <span className="text-primary text-xl">SES helps machines understand.</span>
                </p>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/30">
                  <p className="text-xl mb-4">Every business now lives in two realities:</p>
                  <div className="space-y-4">
                    <p>1. The one your customers see, and</p>
                    <p>2. The one AIs describe on your behalf.</p>
                  </div>
                  <p className="text-2xl text-primary mt-8 pt-8 border-t border-border">
                    SES Feed makes sure those two match.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Our Vision */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">Our Vision</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border text-center">
                <p className="text-2xl text-foreground mb-6">
                  We're building the connective tissue between <span className="text-primary">human expression</span> and <span className="text-accent">machine perception</span>.
                </p>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Our goal is to make every credible voice on the internet structured, visible, and verifiable.
                </p>

                <div className="pt-8 border-t border-border">
                  <p className="text-2xl text-foreground">
                    The next era of marketing isn't just about visibility —<br />
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      it's about being understood.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. CTA Footer */}
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
              Show the web who you really are
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Make your digital footprint readable, structured, and alive.
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 rounded-full text-lg shadow-2xl shadow-primary/30"
              >
                Get Started Free
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
