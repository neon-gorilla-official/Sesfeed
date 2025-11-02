import { useState } from 'react';
import { motion } from 'motion/react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  Copy, 
  ExternalLink, 
  RefreshCw, 
  Eye, 
  Code, 
  Download,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Lock,
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { UpgradePrompt } from '../../components/pricing/UpgradePrompt';

export function FeedPreview() {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [userPlan] = useState<'free' | 'pro' | 'ultra'>('free');

  const feedUrl = 'https://yourbrand.com/ses.json';

  const jsonData = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand",
  "url": "https://yourbrand.com",
  "description": "AI-powered marketing and automation",
  "socialFeeds": [
    {
      "platform": "LinkedIn",
      "handle": "@yourbrand",
      "profileUrl": "https://linkedin.com/company/yourbrand",
      "feedUrl": "https://api.sesfeed.com/feeds/linkedin/...",
      "lastUpdated": "2025-11-01T12:00:00Z",
      "postCount": 247,
      "recentPosts": [
        {
          "title": "The Future of Marketing Engineering",
          "url": "https://linkedin.com/posts/...",
          "published": "2025-10-31T14:30:00Z",
          "engagement": { "likes": 342, "comments": 28 }
        }
      ]
    }
  ],
  "meta": {
    "generated": "2025-11-01T12:00:00Z",
    "version": "1.0",
    "refreshRate": "${userPlan === 'free' ? 'weekly' : userPlan === 'pro' ? 'daily' : 'hourly'}"
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2000);
  };

  const updateFrequencyInfo = {
    free: { label: 'Weekly', description: 'Feed refreshes every 7 days' },
    pro: { label: 'Daily', description: 'Feed refreshes every 24 hours' },
    ultra: { label: 'Hourly', description: 'Feed refreshes every hour' },
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl text-white mb-2">Your SES Feed</h1>
            <p className="text-gray-400 text-lg">
              Generate and manage your structured social feed for AI systems.
            </p>
          </div>
          {hasGenerated && (
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Regenerating...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate Feed
                </>
              )}
            </Button>
          )}
        </motion.div>

        {/* Update Frequency Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-white font-medium">{updateFrequencyInfo[userPlan].label} Updates</p>
              <p className="text-gray-400 text-sm">{updateFrequencyInfo[userPlan].description}</p>
            </div>
          </div>
          {userPlan === 'free' && (
            <Button
              size="sm"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 rounded-lg"
            >
              Upgrade for Daily
            </Button>
          )}
        </motion.div>

        {!hasGenerated ? (
          // Generation Card - Empty State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl text-white mb-3">Ready to Generate Your Feed?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Create your SES.json file to make your social presence machine-readable. 
              This structured data helps AI systems understand and cite your content accurately.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mb-3 mx-auto">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-white text-sm font-medium mb-1">Structured</h3>
                <p className="text-gray-400 text-xs">Schema.org compatible JSON-LD</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-3 mx-auto">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-white text-sm font-medium mb-1">Auto-Updated</h3>
                <p className="text-gray-400 text-xs">{updateFrequencyInfo[userPlan].label} refresh</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mb-3 mx-auto">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-white text-sm font-medium mb-1">AI-Readable</h3>
                <p className="text-gray-400 text-xs">Optimized for LLM parsing</p>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 shadow-lg shadow-primary/30"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Generating Your Feed...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate SES Feed
                </>
              )}
            </Button>
          </motion.div>
        ) : (
          // Feed Generated - Show Preview
          <>
            {/* Success Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-accent/20 border border-accent/30 rounded-xl p-4 flex items-center gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <div className="flex-1">
                <p className="text-white font-medium">Feed generated successfully!</p>
                <p className="text-gray-400 text-sm">Your SES.json is ready to publish to your website.</p>
              </div>
            </motion.div>

            {/* Feed Preview Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
            >
              <Tabs defaultValue="visual" className="w-full">
                <div className="border-b border-white/10 p-4">
                  <TabsList className="bg-white/5">
                    <TabsTrigger value="visual" className="data-[state=active]:bg-primary">
                      <Eye className="w-4 h-4 mr-2" />
                      Visual
                    </TabsTrigger>
                    <TabsTrigger value="code" className="data-[state=active]:bg-primary">
                      <Code className="w-4 h-4 mr-2" />
                      JSON
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="visual" className="p-6 m-0">
                  <div className="space-y-6">
                    {/* Feed URL */}
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Feed URL</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={feedUrl}
                          readOnly
                          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm"
                        />
                        <Button
                          onClick={() => window.open(feedUrl, '_blank')}
                          variant="outline"
                          className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Feed Info */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-xs mb-1">Platform</p>
                        <p className="text-white font-medium">LinkedIn</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-xs mb-1">Posts Indexed</p>
                        <p className="text-white font-medium">247</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-xs mb-1">Last Updated</p>
                        <p className="text-white font-medium">2 hours ago</p>
                      </div>
                    </div>

                    {/* Recent Posts Preview */}
                    <div>
                      <h3 className="text-white mb-3">Recent Posts in Feed</h3>
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                          <h4 className="text-white text-sm mb-2">The Future of Marketing Engineering</h4>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span>342 likes</span>
                            <span>28 comments</span>
                            <span className="ml-auto">2 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="p-6 m-0">
                  <div className="relative">
                    <pre className="bg-[#0a0e16] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm text-gray-300 max-h-[500px] overflow-y-auto">
                      <code>{jsonData}</code>
                    </pre>
                    <Button
                      onClick={handleCopy}
                      size="sm"
                      className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-lg"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Installation Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <h2 className="text-xl text-white mb-4">Next Steps: Publish Your Feed</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Download the SES.json file</h3>
                    <p className="text-gray-400 text-sm mb-2">Save your generated feed to your local machine.</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download SES.json
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Upload to your website root</h3>
                    <p className="text-gray-400 text-sm">Place the file at <code className="text-accent">https://yourdomain.com/ses.json</code></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">You're live!</h3>
                    <p className="text-gray-400 text-sm">AI systems can now discover and verify your social content.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Upgrade Prompt - Contextual */}
            {userPlan === 'free' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <UpgradePrompt
                  type="frequency"
                  currentPlan={userPlan}
                  targetPlan="pro"
                  onUpgrade={() => {/* Navigate to pricing */}}
                  variant="card"
                />
              </motion.div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
