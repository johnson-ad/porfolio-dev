import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Star, Quote } from 'lucide-react'
import { PLACEHOLDER_TESTIMONIALS } from '@utils/constants'
import SectionTitle from '@components/common/SectionTitle'
import AnimatedSection from '@components/common/AnimatedSection'
import Card from '@components/common/Card'
import { formatDate } from '@utils/helpers'

const TestimonialsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-dark-50 dark:bg-black">
      <div className="container-custom">
        <SectionTitle
          subtitle="Témoignages"
          title={t('testimonials.title')}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {PLACEHOLDER_TESTIMONIALS.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              animation="fade-up"
              delay={index * 0.1}
            >
              <Card hover className="h-full p-8 relative">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute top-6 right-6 text-primary-200 dark:text-primary-900/30"
                >
                  <Quote className="w-12 h-12" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-dark-700 dark:text-dark-300 mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-dark-900 dark:text-dark-50">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
