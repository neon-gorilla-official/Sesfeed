import { useState } from 'react';
import { motion } from 'motion/react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { Copy, RefreshCw, Check, Upload, UserPlus, Crown, Zap, Sparkles } from 'lucide-react';

export function AccountSettings() {
  const [copied, setCopied] = useState(false);
  const apiKey = 'ses_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const plans = [
    {
      name: 'Free',
      icon: Sparkles,
      current: true,
      price: '£0',
      period: 'forever',
      features: ['1 entity', '2 social connectors', 'Weekly schema updates'],
    },
    {
      name: 'Pro',
      icon: Zap,
      current: false,
      price: '£29',
      period: 'per month',
      features: ['Unlimited connectors', '/knowledge.json file', 'Daily refreshes', 'Auto-ping to search engines'],
    },
    {
      name: 'Enterprise',
      icon: Crown,
      current: false,
      price: 'Custom',
      period: 'pricing',
      features: ['Multi-entity management', 'White-label dashboards', 'Historical archiving', 'Priority support'],
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl text-white mb-2">Account Settings</h1>
          <p className="text-gray-400">Manage your profile, API access, and subscription</p>
        </motion.div>

        {/* Settings Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-[#0B0F17]/80 border border-white/10 p-1 rounded-xl">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-[#4E7CF5] data-[state=active]:text-white rounded-lg px-6 py-2 transition-all"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="api"
                className="data-[state=active]:bg-[#4E7CF5] data-[state=active]:text-white rounded-lg px-6 py-2 transition-all"
              >
                API Keys
              </TabsTrigger>
              <TabsTrigger
                value="subscription"
                className="data-[state=active]:bg-[#4E7CF5] data-[state=active]:text-white rounded-lg px-6 py-2 transition-all"
              >
                Subscription
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="data-[state=active]:bg-[#4E7CF5] data-[state=active]:text-white rounded-lg px-6 py-2 transition-all"
              >
                Team
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
                <div>
                  <h2 className="text-xl text-white mb-4">Profile Information</h2>
                  
                  {/* Logo Upload */}
                  <div className="mb-6">
                    <Label className="text-gray-300 mb-2">Brand Logo</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#4E7CF5] to-[#19D28F] flex items-center justify-center">
                        <span className="text-white text-2xl">JD</span>
                      </div>
                      <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/5 rounded-xl"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload New Logo
                      </Button>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <Input
                        id="name"
                        defaultValue="John Doe"
                        className="bg-[#1a1f2e] border-white/10 text-white mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john@example.com"
                        className="bg-[#1a1f2e] border-white/10 text-white mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="brand" className="text-gray-300">Brand Name</Label>
                      <Input
                        id="brand"
                        defaultValue="Your Brand"
                        className="bg-[#1a1f2e] border-white/10 text-white mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="website" className="text-gray-300">Website</Label>
                      <Input
                        id="website"
                        placeholder="https://yourbrand.com"
                        className="bg-[#1a1f2e] border-white/10 text-white mt-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="border-white/10 text-white hover:bg-white/5 rounded-xl"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-[#4E7CF5] hover:bg-[#4E7CF5]/90 text-white rounded-xl">
                    Save Changes
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* API Keys Tab */}
            <TabsContent value="api">
              <div className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
                <div>
                  <h2 className="text-xl text-white mb-2">API Keys</h2>
                  <p className="text-gray-400 text-sm mb-6">Use these keys to access the SES Feed API programmatically</p>

                  <div className="space-y-4">
                    {/* Live API Key */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-white mb-1">Live API Key</h3>
                          <p className="text-xs text-gray-400">Use this key for production</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#19D28F] animate-pulse shadow-lg shadow-[#19D28F]/50" />
                      </div>
                      
                      <div className="flex gap-2">
                        <div className="flex-1 bg-[#1a1f2e] rounded-lg p-3 font-mono text-sm overflow-x-auto">
                          <code className="text-gray-400">{apiKey}</code>
                        </div>
                        <Button
                          size="sm"
                          onClick={handleCopy}
                          className="bg-[#4E7CF5] hover:bg-[#4E7CF5]/90 text-white rounded-lg px-4"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/5 rounded-xl"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Regenerate Key
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/5 rounded-xl"
                      >
                        View Documentation
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <p className="text-sm text-yellow-200">
                    <strong>Security Notice:</strong> Keep your API keys secure. Don't share them publicly or commit them to version control.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Subscription Tab */}
            <TabsContent value="subscription">
              <div className="space-y-6">
                {/* Current Plan */}
                <div className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h2 className="text-xl text-white mb-6">Your Plan</h2>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {plans.map((plan) => {
                      const Icon = plan.icon;
                      return (
                        <div
                          key={plan.name}
                          className={`rounded-xl p-5 border-2 transition-all ${
                            plan.current
                              ? 'bg-[#4E7CF5]/10 border-[#4E7CF5] shadow-lg shadow-[#4E7CF5]/20'
                              : 'bg-white/5 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {plan.current && (
                            <div className="bg-[#4E7CF5] text-white text-xs px-2 py-1 rounded-full mb-3 w-fit">
                              Current Plan
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-5 h-5 text-white" />
                            <h3 className="text-white">{plan.name}</h3>
                          </div>

                          <div className="mb-4">
                            <span className="text-3xl text-white">{plan.price}</span>
                            <span className="text-gray-400 text-sm ml-2">/ {plan.period}</span>
                          </div>

                          <ul className="space-y-2 mb-4">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#19D28F] mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {!plan.current && (
                            <Button
                              className={`w-full rounded-xl ${
                                plan.name === 'Pro'
                                  ? 'bg-[#4E7CF5] hover:bg-[#4E7CF5]/90 text-white'
                                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                              }`}
                            >
                              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Upgrade'}
                            </Button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team">
              <div className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl text-white mb-1">Team Members</h2>
                    <p className="text-gray-400 text-sm">Invite collaborators to manage your SES Feed</p>
                  </div>
                  <Button className="bg-[#19D28F] hover:bg-[#19D28F]/90 text-[#0B0F17] rounded-xl">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Invite Member
                  </Button>
                </div>

                {/* Team List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4E7CF5] to-[#19D28F] flex items-center justify-center">
                        <span className="text-white text-sm">JD</span>
                      </div>
                      <div>
                        <p className="text-white">John Doe</p>
                        <p className="text-gray-400 text-sm">john@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400 px-3 py-1 bg-white/5 rounded-full">Owner</span>
                    </div>
                  </div>
                </div>

                {/* Empty State */}
                <div className="text-center py-12 border-2 border-dashed border-white/10 rounded-xl">
                  <UserPlus className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400 mb-1">No team members yet</p>
                  <p className="text-gray-500 text-sm">Invite collaborators to help manage your feed</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
