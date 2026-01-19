import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SERVICES } from '@utils/constants'
import SectionTitle from '@components/common/SectionTitle'
import AnimatedSection from '@components/common/AnimatedSection'
import Card from '@components/common/Card'
import Button from '@components/common/Button'

const ServicesSection = () => {
  const { t } = useTranslation()

  return (
    <section className="section-padding bg-dark-50 dark:bg-black">
      <div className="container-custom">
        <SectionTitle
          subtitle="Services"
          title={t('services.title')}
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="fade-up"
              delay={index * 0.1}
            >
              <Card hover className="h-full p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl flex items-center justify-center text-4xl mb-6"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-3">
                  {t(service.title)}
                </h3>

                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  {t(service.description)}
                </p>

                <ul className="space-y-3 mb-6">
                  {t(service.features, { returnObjects: true }).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-dark-700 dark:text-dark-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-dark-200 dark:border-dark-700">
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {service.price}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" className="text-center">
          <Button
            as={Link}
            to="/services"
            size="lg"
            variant="primary"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            {t('services.cta')}
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ServicesSection
