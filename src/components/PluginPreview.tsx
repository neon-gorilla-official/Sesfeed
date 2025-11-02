import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Link } from 'wouter';
import { ArrowRight, Plug, Zap, Globe, Shield } from 'lucide-react';

export function PluginPreview() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0A0A0F] to-[#0A0A0F]/50 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E6EFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#65F1B5]/10 border border-[#65F1B5]/30 mb-4 sm:mb-6">
              <Plug className="w-3 h-3 sm:w-4 sm:h-4 text-[#65F1B5]" />
              <span className="text-[#65F1B5] text-xs sm:text-sm tracking-wider">SES FEED PLUGIN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-white">
              Install once.<br />
              <span className="bg-gradient-to-r from-[#2E6EFF] to-[#65F1B5] bg-clip-text text-transparent">
                Stay visible forever.
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              The SES Feed Plugin turns your social activity into a machine-readable feed that lives on your domain — making you visible to LLMs, search engines, and AI systems.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E6EFF]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-[#2E6EFF]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-white mb-1">Auto-updates daily</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Fresh content from all your platforms, aggregated automatically.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E6EFF]/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-[#2E6EFF]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-white mb-1">SEO & LLM optimized</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Structured HTML + JSON-LD that search engines and AIs can understand.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E6EFF]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-[#2E6EFF]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-white mb-1">Secure & private</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Public metadata only, OAuth 2.0, HTTPS, and GDPR-safe.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/plugin">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-[#2E6EFF] hover:bg-[#2557CC] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full shadow-lg shadow-[#2E6EFF]/30"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full"
                >
                  Get Early Access
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#2E6EFF]/20 to-[#65F1B5]/20 rounded-2xl p-4 sm:p-6 md:p-8 border border-[#2E6EFF]/30 backdrop-blur-sm">
              <div className="space-y-3 sm:space-y-4">
                {/* Mock URL Bar */}
                <div className="bg-[#0A0A0F]/50 rounded-lg p-2 sm:p-3 border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 bg-white/5 rounded px-2 sm:px-3 py-1 sm:py-1.5 text-gray-400 text-xs sm:text-sm overflow-hidden">
                      <span className="truncate block">yoursite.com/ses-feed/</span>
                    </div>
                  </div>
                </div>

                {/* Mock Feed Content */}
                <div className="space-y-2 sm:space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-[#0A0A0F]/50 rounded-lg p-3 sm:p-4 border border-white/10">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#2E6EFF] to-[#65F1B5] flex-shrink-0" />
                        <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                          <div className="h-2.5 sm:h-3 bg-white/10 rounded w-3/4" />
                          <div className="h-2 bg-white/5 rounded w-full" />
                          <div className="h-2 bg-white/5 rounded w-2/3" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* JSON Badge */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#0A0A0F]/50 rounded-lg border border-[#65F1B5]/30">
                  <span className="text-[#65F1B5] text-xs sm:text-sm truncate">ses-feed.json</span>
                  <span className="text-gray-500 text-xs whitespace-nowrap ml-2">machine-readable</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#65F1B5]/20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#2E6EFF]/20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
