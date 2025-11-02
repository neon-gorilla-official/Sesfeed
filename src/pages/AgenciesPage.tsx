import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  BarChart3,
  Users,
  Palette,
  TrendingUp,
  Zap,
  CheckCircle2,
  Globe,
  FileText,
  Settings
} from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function AgenciesPage() {
  const features = [
    {
      icon: Users,
      title: "Multi-Entity Dashboard",
      description: "Manage dozens (or hundreds) of SES Feeds from one place. Filter by client, connector, or freshness score."
    },
    {
      icon: Palette,
      title: "White-Label Option",
      description: "Use your own brand domain and colors — deliver \"LLM optimization\" as part of your service suite."
    },
    {
      icon: BarChart3,
      title: "Client Reporting",
      description: "Each feed generates analytics: Crawl frequency, Common Crawl inclusion, LLM visibility index, Content freshness graph."
    }
  ];

  const benefits = [
    "Adds measurable structure to your client's online reputation",
    "Delivers new \"content freshness\" signals automatically",
    "Creates new billable value in the AI era"
  ];

  const steps = [
    {
      number: "1",
      title: "Connect",
      description: "Connect each client's site and socials"
    },
    {
      number: "2",
      title: "Configure",
      description: "Configure filtering rules once (post type, keyword, depth)"
    },
    {
      number: "3",
      title: "Automate",
      description: "The plugin runs daily updates — no maintenance"
    },
    {
      number: "4",
      title: "Report",
      description: "Generate reports for SEO + LLM presence"
    }
  ];

  const tiers = [
    {
      name: "Pro Agency",
      clients: "up to 10",
      features: ["Multi-Feed manager", "Shared keys", "Standard support"],
      price: "£99/mo"
    },
    {
      name: "Enterprise Agency",
      clients: "10–100+",
      features: ["White-label dashboards", "SSO integration", "Reporting API", "Priority support", "Custom connectors"],
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
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm tracking-wider">FOR AGENCIES</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground">
              SES Feed for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Agencies</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-primary mb-4">
              Give every client an LLM-readable identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. The Pitch */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-6 text-lg text-foreground">
              <p className="text-2xl">
                You already build visibility for humans.
              </p>
              <p className="text-3xl text-primary">
                Now build visibility for machines.
              </p>
              <p className="max-w-3xl mx-auto">
                SES Feed turns your clients' social activity into structured data that boosts SEO freshness, entity credibility, and AI discoverability — all managed from your agency dashboard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What Agencies Get */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
              What Agencies Get
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
                <h3 className="text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why It Matters */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                Why It Matters
              </h2>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 sm:p-12 border border-primary/30">
              <p className="text-2xl text-center text-foreground mb-8">
                SEO teams fought to get clients seen on Google.<br />
                <span className="text-primary">Now, agencies help clients be understood by AI.</span>
              </p>

              <div className="space-y-4 mt-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works for Agencies */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                How It Works for Agencies
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-2xl text-primary">
                      {step.number}
                    </div>
                    <h3 className="text-xl mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Agency Tiers */}
      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                Agency Tiers
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your agency size
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-3xl border-2 ${
                    tier.name === "Enterprise Agency"
                      ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary'
                      : 'bg-background border-border'
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl mb-2 text-foreground">{tier.name}</h3>
                    <p className="text-muted-foreground">{tier.clients}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl text-foreground mb-2">{tier.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      tier.name === "Enterprise Agency"
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    {tier.name === "Enterprise Agency" ? "Contact Sales" : "Get Started"}
                  </Button>
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
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-full"
                >
                  Get Started Free
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Callout Footer */}
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
              Your clients trust you to make them visible
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              SES Feed makes them unforgettable — even to machines.
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
