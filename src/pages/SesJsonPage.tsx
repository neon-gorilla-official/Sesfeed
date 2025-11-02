import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Navigation } from '../components/Navigation';
import { 
  Copy, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Plus, 
  Trash2,
  ExternalLink,
  FileJson,
  Activity,
  Shield,
  Globe,
  Zap,
  Code,
  Terminal
} from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'wouter';

interface SesJson {
  entity: string;
  website: string;
  updated: string;
  feeds: string[];
  profiles: string[];
  contact?: string;
}

export function SesJsonPage() {
  const [entity, setEntity] = useState('');
  const [website, setWebsite] = useState('');
  const [contact, setContact] = useState('');
  const [profiles, setProfiles] = useState<string[]>(['']);
  const [feeds, setFeeds] = useState<string[]>(['']);
  const [isValid, setIsValid] = useState(false);
  const [jsonOutput, setJsonOutput] = useState('');

  useEffect(() => {
    generateJson();
  }, [entity, website, contact, profiles, feeds]);

  const generateJson = () => {
    const data: SesJson = {
      entity: entity || 'Your Entity Name',
      website: website || 'https://yourdomain.com',
      updated: new Date().toISOString(),
      feeds: feeds.filter(f => f.trim() !== '').length > 0 
        ? feeds.filter(f => f.trim() !== '')
        : ['https://yourdomain.com/ses-feed.json'],
      profiles: profiles.filter(p => p.trim() !== '')
    };

    if (contact) {
      data.contact = contact;
    }

    const json = JSON.stringify(data, null, 2);
    setJsonOutput(json);
    
    // Simple validation
    setIsValid(
      entity.trim() !== '' && 
      website.trim() !== '' && 
      website.startsWith('http')
    );
  };

  const addProfile = () => {
    setProfiles([...profiles, '']);
  };

  const updateProfile = (index: number, value: string) => {
    const newProfiles = [...profiles];
    newProfiles[index] = value;
    setProfiles(newProfiles);
  };

  const removeProfile = (index: number) => {
    setProfiles(profiles.filter((_, i) => i !== index));
  };

  const addFeed = () => {
    setFeeds([...feeds, '']);
  };

  const updateFeed = (index: number, value: string) => {
    const newFeeds = [...feeds];
    newFeeds[index] = value;
    setFeeds(newFeeds);
  };

  const removeFeed = (index: number) => {
    setFeeds(feeds.filter((_, i) => i !== index));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput);
    toast.success('JSON copied to clipboard!');
  };

  const downloadJson = () => {
    const blob = new Blob([jsonOutput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ses.json';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('ses.json downloaded!');
  };

  const validateJson = () => {
    if (isValid) {
      toast.success('✓ Valid ses.json structure!');
    } else {
      toast.error('Please fill in required fields (entity name and valid website URL)');
    }
  };

  const detectPlatform = (url: string): string => {
    if (url.includes('linkedin.com')) return 'Li';
    if (url.includes('twitter.com') || url.includes('x.com')) return '𝕏';
    if (url.includes('youtube.com')) return 'YT';
    if (url.includes('reddit.com')) return 'Re';
    if (url.includes('github.com')) return 'GH';
    if (url.includes('instagram.com')) return 'IG';
    if (url.includes('facebook.com')) return 'FB';
    return '↗';
  };

  const benefits = [
    {
      icon: Activity,
      title: 'Declare identity',
      description: 'One canonical map of your entity, profiles, and feeds.'
    },
    {
      icon: Shield,
      title: 'Guide crawlers',
      description: 'Send GPTBot, Googlebot, and CCBot to your structured data.'
    },
    {
      icon: Globe,
      title: 'Standardise visibility',
      description: 'Like robots.txt, but for identity and freshness.'
    }
  ];

  const bots = [
    { name: 'Googlebot', color: 'text-blue-500' },
    { name: 'GPTBot', color: 'text-green-500' },
    { name: 'PerplexityBot', color: 'text-purple-500' },
    { name: 'CCBot', color: 'text-orange-500' }
  ];

  const faqs = [
    {
      q: 'Does this improve rankings?',
      a: 'No guarantees. It improves machine understanding and crawl discovery.'
    },
    {
      q: 'Is it free?',
      a: 'Yes. ses.json is an open format.'
    },
    {
      q: 'Do I need the plugin?',
      a: 'No. But SES Feed keeps your ses.json up to date and publishes a live feed crawlers love.'
    },
    {
      q: 'Where do I host it?',
      a: 'At the domain root (/ses.json) or /.well-known/ses.json.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm tracking-wider">OPEN PROTOCOL</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground">
              The web's heartbeat: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ses.json</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A tiny file that tells AI and search who you are, what you own, and where your live data lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#generator">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full">
                  Setup Your SES Feed
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-2 border-border px-8 py-6 rounded-full">
                Read the spec
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Generator Module */}
      <section id="generator" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                Generate in 10 seconds
              </h2>
              <p className="text-muted-foreground">
                Fill in your details, copy the JSON, and place it at <code className="px-2 py-1 rounded bg-muted text-accent">/ses.json</code>
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-background border border-border">
                  <h3 className="text-xl mb-4 text-foreground">Entity Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="entity" className="text-foreground">Entity / Organization Name *</Label>
                      <Input
                        id="entity"
                        value={entity}
                        onChange={(e) => setEntity(e.target.value)}
                        placeholder="Neon Gorilla"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="website" className="text-foreground">Website URL *</Label>
                      <Input
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://neongorilla.co.uk"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact" className="text-foreground">Contact Email (optional)</Label>
                      <Input
                        id="contact"
                        type="email"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="contact@neongorilla.co.uk"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl text-foreground">Social Profiles</h3>
                    <Button size="sm" variant="outline" onClick={addProfile}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {profiles.map((profile, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="flex-1 relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
                            {detectPlatform(profile)}
                          </span>
                          <Input
                            value={profile}
                            onChange={(e) => updateProfile(index, e.target.value)}
                            placeholder="https://linkedin.com/company/your-company"
                            className="pl-10"
                          />
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeProfile(index)}
                          className="flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-background border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl text-foreground">Feeds</h3>
                    <Button size="sm" variant="outline" onClick={addFeed}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {feeds.map((feed, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={feed}
                          onChange={(e) => updateFeed(index, e.target.value)}
                          placeholder="https://yourdomain.com/ses-feed.json"
                          className="flex-1"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeFeed(index)}
                          className="flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* JSON Preview */}
              <div className="space-y-4">
                <div className="sticky top-24">
                  <div className="rounded-2xl border-2 border-primary bg-card overflow-hidden">
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b border-border flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileJson className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-mono text-sm">ses.json</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isValid ? (
                          <div className="flex items-center gap-1 text-accent text-sm">
                            <CheckCircle2 className="w-4 h-4" />
                            Valid
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-yellow-500 text-sm">
                            <XCircle className="w-4 h-4" />
                            Incomplete
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-6 bg-card max-h-96 overflow-y-auto">
                      <pre className="text-sm text-foreground font-mono">
                        <code>{jsonOutput}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <Button onClick={copyToClipboard} className="w-full bg-primary hover:bg-primary/90">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button onClick={downloadJson} variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button onClick={validateJson} variant="outline" className="w-full">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Validate
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Place at <code className="px-2 py-1 rounded bg-muted text-accent">/ses.json</code> or <code className="px-2 py-1 rounded bg-muted text-accent">/.well-known/ses.json</code>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What it does */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
              What it does
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
                Example
              </h2>
              <p className="text-muted-foreground">
                A minimal, valid ses.json file
              </p>
            </div>

            <div className="rounded-2xl border-2 border-accent bg-card overflow-hidden">
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 border-b border-border">
                <span className="text-foreground font-mono text-sm">Neon Gorilla example</span>
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
          </motion.div>
        </div>
      </section>

      {/* Proof & Signals */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8 text-foreground">Bots that read it</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {bots.map((bot, index) => (
                <div key={index} className={`px-6 py-3 rounded-full bg-card border border-border ${bot.color}`}>
                  {bot.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automation Upsell */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-card border-2 border-primary"
          >
            <div className="text-center">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl mb-4 text-foreground">
                Keep your heartbeat alive automatically
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Manually updating ses.json works. Keeping it live and structured is better. 
                Install SES Feed to auto-publish <code className="px-2 py-1 rounded bg-muted text-accent">/ses-feed/</code> (HTML) and <code className="px-2 py-1 rounded bg-muted text-accent">/ses-feed.json</code> (JSON) — your activity, everywhere.
              </p>
              <Link href="/plugin">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full">
                  Get SES Feed (Pro)
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spec & Dev Docs */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
              Spec & Developer Docs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <Code className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl mb-2 text-foreground">JSON Schema</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Validate your ses.json against the official schema
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Schema
                <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <Terminal className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl mb-2 text-foreground">Test with cURL</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Quick command to check your deployment
              </p>
              <code className="block p-3 rounded bg-muted text-foreground text-xs">
                curl -I https://yourdomain.com/ses.json
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-4 text-foreground">
              FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-lg mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Badge */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-6 text-foreground">
              Show you're running ses.json
            </h2>
            <div className="p-6 rounded-2xl bg-card border-2 border-accent inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent text-accent mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <span>Running ses.json</span>
              </div>
              <code className="block p-4 rounded bg-muted text-foreground text-sm">
                {`<a href="https://sesfeed.org" rel="nofollow">✅ Running ses.json</a>`}
              </code>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Maintained by <span className="text-primary">Neon Gorilla</span> • Open spec • <a href="#" className="underline hover:text-foreground">GitHub</a>
          </p>
        </div>
      </section>
    </div>
  );
}
