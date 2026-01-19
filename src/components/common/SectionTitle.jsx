import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <AnimatedSection 
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <motion.p 
          className="text-primary-600 dark:text-primary-400 font-semibold mb-3 uppercase tracking-wider text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-dark-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>
    </AnimatedSection>
  )
}

export default SectionTitle
