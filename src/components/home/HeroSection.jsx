import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import Button from '@components/common/Button'

const HeroSection = () => {
  const { t } = useTranslation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-400 rounded-full blur-3xl opacity-20"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {t('contact.info.available')}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-lg md:text-xl text-dark-600 dark:text-dark-400 font-normal block mb-2">
                {t('hero.greeting')}
              </span>
              <span className="text-dark-900 dark:text-white block">
                {t('hero.title')}
              </span>
              <span className="gradient-text block mt-2">
                {t('hero.subtitle')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                as={Link}
                to="/portfolio"
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                {t('hero.cta_primary')}
              </Button>
              <Button
                as={Link}
                to="/contact"
                size="lg"
                variant="outline"
              >
                {t('hero.cta_secondary')}
              </Button>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
            >
              {['React', 'Node.js', 'TypeScript', 'Tailwind', 'Supabase'].map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 rounded-lg shadow-md"
                >
                  <span className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Illustration / Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              {/* Main Card - Code Editor Mockup */}
              <div className="card p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="space-y-3 font-mono text-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="overflow-hidden"
                  >
                    <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">developer</span>{' '}
                    <span className="text-dark-600 dark:text-dark-400">=</span>{' '}
                    <span className="text-green-600 dark:text-green-400">{'{'}</span>
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="overflow-hidden pl-4"
                  >
                    <span className="text-blue-600 dark:text-blue-400">name</span>
                    <span className="text-dark-600 dark:text-dark-400">:</span>{' '}
                    <span className="text-orange-600 dark:text-orange-400">'Full Stack'</span>,
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="overflow-hidden pl-4"
                  >
                    <span className="text-blue-600 dark:text-blue-400">skills</span>
                    <span className="text-dark-600 dark:text-dark-400">:</span>{' '}
                    <span className="text-green-600 dark:text-green-400">[</span>
                    <span className="text-orange-600 dark:text-orange-400">'React', 'Node.js'</span>
                    <span className="text-green-600 dark:text-green-400">]</span>,
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="overflow-hidden pl-4"
                  >
                    <span className="text-blue-600 dark:text-blue-400">passion</span>
                    <span className="text-dark-600 dark:text-dark-400">:</span>{' '}
                    <span className="text-orange-600 dark:text-orange-400">'Building amazing apps'</span>
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="overflow-hidden"
                  >
                    <span className="text-green-600 dark:text-green-400">{'}'}</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-dark-400 dark:text-dark-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default HeroSection
