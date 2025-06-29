import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlayCircle, Star, Users, Trophy, ArrowRight } from 'lucide-react'

function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "Premium Content",
      description: "Access exclusive high-quality content from top creators"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Insights",
      description: "Learn from industry experts and thought leaders"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Connect with like-minded individuals and grow together"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievements",
      description: "Track your progress and unlock new milestones"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold text-white"
          >
            Premium<span className="text-primary-500">Platform</span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-glow rounded-full text-white font-semibold shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Unlock Your
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Premium Experience
              </span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Join thousands of users who have transformed their learning journey with our exclusive content platform
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-primary-500/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                <div className="p-6 bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-primary-500/50 transition-all duration-300 h-full">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? 5 : 0
                    }}
                    className="text-primary-500 mb-4 inline-block"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">10K+</div>
              <div className="text-neutral-300">Active Users</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary-400 mb-2">500+</div>
              <div className="text-neutral-300">Premium Courses</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent-400 mb-2">95%</div>
              <div className="text-neutral-300">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default App
