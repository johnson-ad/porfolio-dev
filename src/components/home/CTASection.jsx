import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@components/common/Button'
import AnimatedSection from '@components/common/AnimatedSection'

const CTASection = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à concrétiser votre projet ?
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-8">
            Transformons ensemble votre vision en une application web performante et sur mesure. 
            Contactez-moi dès aujourd'hui pour discuter de vos besoins.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Démarrer un projet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                Voir le portfolio
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Livraison rapide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Code de qualité</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Support continu</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default CTASection
