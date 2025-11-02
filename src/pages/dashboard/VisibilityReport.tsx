import { motion } from 'motion/react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { TrendingUp, Calendar, ThumbsUp, MessageSquare, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function VisibilityReport() {
  const visibilityData = [
    { date: 'Oct 1', score: 45 },
    { date: 'Oct 8', score: 52 },
    { date: 'Oct 15', score: 58 },
    { date: 'Oct 22', score: 71 },
    { date: 'Oct 29', score: 87 },
  ];

  const llmCoverage = [
    { name: 'ChatGPT', status: 'active', lastCrawl: '2 hours ago', citations: 12 },
    { name: 'Gemini', status: 'active', lastCrawl: '5 hours ago', citations: 8 },
    { name: 'Claude', status: 'active', lastCrawl: '1 day ago', citations: 5 },
    { name: 'Perplexity', status: 'pending', lastCrawl: 'Not yet', citations: 0 },
  ];

  const topPosts = [
    {
      title: 'The Future of Marketing Engineering',
      platform: 'LinkedIn',
      date: 'Oct 31',
      engagement: { likes: 342, comments: 28, shares: 54 },
      sentiment: 'positive',
    },
    {
      title: 'AI Content Systems Explained',
      platform: 'YouTube',
      date: 'Oct 30',
      engagement: { views: 12453, likes: 892, comments: 124 },
      sentiment: 'positive',
    },
    {
      title: 'Automation Workflow Best Practices',
      platform: 'LinkedIn',
      date: 'Oct 28',
      engagement: { likes: 278, comments: 19, shares: 31 },
      sentiment: 'positive',
    },
    {
      title: 'Technical SEO in 2025',
      platform: 'YouTube',
      date: 'Oct 25',
      engagement: { views: 8234, likes: 531, comments: 87 },
      sentiment: 'positive',
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl text-white mb-2">AI Visibility Report</h1>
          <p className="text-gray-400">Track how AI systems discover and cite your content</p>
        </motion.div>

        {/* Overview Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm">Citations This Month</p>
              <TrendingUp className="w-5 h-5 text-[#19D28F]" />
            </div>
            <p className="text-4xl text-white mb-2">25</p>
            <p className="text-sm text-[#19D28F]">+18 from last month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm">Last Crawl Date</p>
              <Calendar className="w-5 h-5 text-[#4E7CF5]" />
            </div>
            <p className="text-4xl text-white mb-2">2h ago</p>
            <p className="text-sm text-gray-400">Auto-refresh enabled</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm">Content Indexed</p>
              <Eye className="w-5 h-5 text-[#4E7CF5]" />
            </div>
            <p className="text-4xl text-white mb-2">247</p>
            <p className="text-sm text-gray-400">posts across 4 platforms</p>
          </motion.div>
        </div>

        {/* Visibility Over Time Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl text-white mb-6">Visibility Score Over Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visibilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1f2e',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#4E7CF5"
                  strokeWidth={3}
                  dot={{ fill: '#4E7CF5', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* LLM Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl text-white mb-6">LLM Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {llmCoverage.map((llm, index) => (
              <div
                key={llm.name}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white">{llm.name}</h3>
                  <div className={`w-2 h-2 rounded-full ${
                    llm.status === 'active' ? 'bg-[#19D28F] animate-pulse shadow-lg shadow-[#19D28F]/50' : 'bg-gray-500'
                  }`} />
                </div>
                <p className="text-sm text-gray-400 mb-1">Last crawl: {llm.lastCrawl}</p>
                <p className="text-sm text-gray-400">Citations: <span className="text-white">{llm.citations}</span></p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Referenced Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <h2 className="text-xl text-white mb-6">Top Referenced Posts</h2>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-white mb-1">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400">{post.platform}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{post.date}</span>
                      <span className="text-gray-600">•</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        post.sentiment === 'positive' ? 'bg-[#19D28F]/20 text-[#19D28F]' : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {post.sentiment}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 text-sm">
                  {post.engagement.likes && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{post.engagement.likes.toLocaleString()}</span>
                    </div>
                  )}
                  {post.engagement.views && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>{post.engagement.views.toLocaleString()}</span>
                    </div>
                  )}
                  {post.engagement.comments && (
                    <div className="flex items-center gap-1 text-gray-400">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.engagement.comments}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
