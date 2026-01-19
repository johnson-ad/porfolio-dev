import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Zap, Shield, Clock, HeadphonesIcon } from 'lucide-react'
import { SERVICES } from '@utils/constants'
import SEO from '@components/common/SEO'
import SectionTitle from '@components/common/SectionTitle'
import AnimatedSection from '@components/common/AnimatedSection'
import Card from '@components/common/Card'
import Button from '@components/common/Button'

const Services = () => {
  const { t } = useTranslation()

  const benefits = [
    {
      icon: Zap,
      title: 'Livraison Rapide',
      description: 'Respect des délais avec méthodologie agile'
    },
    {
      icon: Shield,
      title: 'Code de Qualité',
      description: 'Standards professionnels et bonnes pratiques'
    },
    {
      icon: Clock,
      title: 'Support Réactif',
      description: 'Disponibilité et communication constante'
    },
    {
      icon: HeadphonesIcon,
      title: 'Accompagnement',
      description: 'Conseil et formation sur vos outils'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Découverte',
      description: 'Analyse de vos besoins et définition des objectifs'
    },
    {
      step: '02',
      title: 'Conception',
      description: 'Design et architecture de la solution'
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Codage et intégration des fonctionnalités'
    },
    {
      step: '04',
      title: 'Livraison',
      description: 'Tests, déploiement et formation'
    }
  ]

  return (
    <>
      <SEO
        title="Services"
        description="Services de développement web : landing pages, applications full stack, e-commerce, maintenance et support technique."
        keywords="services web, développement, landing page, application web, e-commerce, maintenance"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.id} animation="fade-up" delay={index * 0.1}>
                <Card hover className="p-8 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl flex items-center justify-center text-5xl mb-6"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-3">
                    {t(service.title)}
                  </h3>

                  <p className="text-dark-600 dark:text-dark-400 mb-6 text-lg">
                    {t(service.description)}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {t(service.features, { returnObjects: true }).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-700 dark:text-dark-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-dark-200 dark:border-dark-700 flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {service.price}
                    </p>
                    <Button
                      as={Link}
                      to="/contact"
                      variant="outline"
                      size="sm"
                    >
                      Demander un devis
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-dark-50 dark:bg-black">
        <div className="container-custom">
          <SectionTitle
            title="Pourquoi me choisir ?"
            subtitle="Avantages"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 0.1}>
                <Card className="p-6 text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center"
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    {benefit.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionTitle
            title="Mon processus de travail"
            subtitle="Comment je travaille"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <Card className="p-6 h-full">
                    <div className="text-6xl font-bold text-primary-100 dark:text-primary-900/30 mb-4">
                      {item.step}
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-dark-600 dark:text-dark-400">
                      {item.description}
                    </p>
                  </Card>

                  {/* Arrow connector (except last item) */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/contact"
                size="lg"
                className="bg-white text-primary-600 hover:bg-white/90"
              >
                {t('services.cta')}
              </Button>
              <Button
                as={Link}
                to="/portfolio"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Voir mes réalisations
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Services
