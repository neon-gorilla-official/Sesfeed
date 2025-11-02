import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function WelcomeScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F17] via-[#111726] to-[#0B0F17] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,124,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,124,245,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Animated Connection Visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg width="800" height="400" viewBox="0 0 800 400">
          {/* Socials Node */}
          <motion.circle
            cx="150"
            cy="200"
            r="40"
            fill="none"
            stroke="#4E7CF5"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.text
            x="150"
            y="205"
            textAnchor="middle"
            fill="#4E7CF5"
            fontSize="14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Socials
          </motion.text>

          {/* Connection Line 1 */}
          <motion.line
            x1="190"
            y1="200"
            x2="360"
            y2="200"
            stroke="#19D28F"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* SES Feed Node (Center) */}
          <motion.circle
            cx="400"
            cy="200"
            r="50"
            fill="none"
            stroke="#19D28F"
            strokeWidth="3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.circle
            cx="400"
            cy="200"
            r="50"
            fill="none"
            stroke="#19D28F"
            strokeWidth="1"
            opacity="0.3"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
          />
          <motion.text
            x="400"
            y="205"
            textAnchor="middle"
            fill="#19D28F"
            fontSize="16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            SES Feed
          </motion.text>

          {/* Connection Line 2 */}
          <motion.line
            x1="450"
            y1="200"
            x2="610"
            y2="200"
            stroke="#4E7CF5"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          />

          {/* LLMs Node */}
          <motion.circle
            cx="650"
            cy="200"
            r="40"
            fill="none"
            stroke="#4E7CF5"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          />
          <motion.text
            x="650"
            y="205"
            textAnchor="middle"
            fill="#4E7CF5"
            fontSize="14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            LLMs
          </motion.text>

          {/* Data Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              r="3"
              fill="#19D28F"
              initial={{ cx: 190, cy: 200, opacity: 0 }}
              animate={{
                cx: [190, 400, 610],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: 2.5 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Brand Mark */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-3 h-3 rounded-full bg-[#19D28F] animate-pulse shadow-lg shadow-[#19D28F]/50" />
          <span className="text-[#19D28F] tracking-wider text-sm">SES FEED</span>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-6xl text-white mb-6"
        >
          Welcome to SES Feed
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl text-gray-400 mb-12"
        >
          Let's make your brand visible to AIs.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link href="/onboarding/connect-socials">
            <a>
              <Button className="bg-[#4E7CF5] hover:bg-[#4E7CF5]/90 text-white px-12 py-7 text-lg rounded-full shadow-2xl shadow-[#4E7CF5]/40 transition-all group">
                Start Setup
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </Link>
        </motion.div>

        {/* Skip Option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8"
        >
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Skip and explore dashboard →
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
