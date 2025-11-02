import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function GenerateFeedScreen() {
  const [currentStep] = useState(2);
  const totalSteps = 3;
  const [isGenerating, setIsGenerating] = useState(false);
  const [, setLocation] = useLocation();

  const [jsonPreview] = useState(`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand",
  "socialFeeds": [
    {
      "platform": "LinkedIn",
      "handle": "@yourbrand",
      "feedUrl": "https://api.sesfeed.com/...",
      "lastUpdated": "2025-11-01T12:00:00Z"
    },
    {
      "platform": "YouTube",
      "handle": "@yourbrand",
      "feedUrl": "https://api.sesfeed.com/...",
      "lastUpdated": "2025-11-01T12:00:00Z"
    }
  ]
}`);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setLocation('/onboarding/success');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F17] via-[#111726] to-[#0B0F17] p-4 md:p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,124,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,124,245,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4E7CF5] to-[#19D28F]"
              initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">Generate your SES.json file</h1>
          <p className="text-xl text-gray-400">
            We'll compile your connected accounts into a machine-readable format.
          </p>
        </motion.div>

        {/* JSON Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            {/* Code Window */}
            <div className="bg-[#0d1117] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Window Header */}
              <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-gray-400 text-sm ml-2">ses.json</span>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto">
                <AnimatePresence mode="wait">
                  {!isGenerating ? (
                    <motion.pre
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm"
                    >
                      <code>
                        {jsonPreview.split('\n').map((line, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="whitespace-pre"
                          >
                            {line.includes('"@') || line.includes('"name"') || line.includes('"platform"') ? (
                              <span className="text-[#79c0ff]">{line}</span>
                            ) : line.includes(':') ? (
                              <>
                                <span className="text-[#79c0ff]">{line.split(':')[0]}:</span>
                                <span className="text-[#a5d6ff]">{line.split(':')[1]}</span>
                              </>
                            ) : (
                              <span className="text-gray-500">{line}</span>
                            )}
                          </motion.div>
                        ))}
                      </code>
                    </motion.pre>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center py-20"
                    >
                      <div className="text-center">
                        <Loader2 className="w-12 h-12 text-[#19D28F] animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Generating your feed...</p>
                        <p className="text-sm text-gray-500 mt-2">Pulling latest content from connected platforms</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4E7CF5]/20 to-[#19D28F]/20 rounded-2xl blur-xl -z-10" />
          </div>
        </motion.div>

        {/* Info Box */}
        {!isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-[#4E7CF5]/10 border border-[#4E7CF5]/30 rounded-xl p-4 mb-8"
          >
            <p className="text-sm text-gray-300">
              <span className="text-[#4E7CF5]">💡 Tip:</span> Your SES.json file will be automatically updated as you publish new content on your connected platforms.
            </p>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between"
        >
          <Link href="/onboarding/connect-socials">
            <a>
              <Button
                variant="outline"
                disabled={isGenerating}
                className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 py-6 disabled:opacity-50"
              >
                Back
              </Button>
            </a>
          </Link>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="bg-[#19D28F] hover:bg-[#19D28F]/90 text-[#0B0F17] px-8 py-6 rounded-full shadow-lg shadow-[#19D28F]/30 disabled:opacity-50 group"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate Feed
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
