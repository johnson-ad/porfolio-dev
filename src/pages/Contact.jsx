import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { contactService } from '@services/supabase'
import { SOCIAL_LINKS } from '@utils/constants'
import SEO from '@components/common/SEO'
import Button from '@components/common/Button'
import Input from '@components/common/Input'
import TextArea from '@components/common/TextArea'
import AnimatedSection from '@components/common/AnimatedSection'
import Card from '@components/common/Card'
import toast from 'react-hot-toast'

const Contact = () => {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const { error } = await contactService.create({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        created_at: new Date().toISOString()
      })

      if (error) throw error

      toast.success(t('contact.success'))
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error(t('contact.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}` },
    { icon: Phone, label: 'Téléphone', value: SOCIAL_LINKS.phone, href: `tel:${SOCIAL_LINKS.phone}` },
    { icon: MapPin, label: 'Localisation', value: 'Paris, France', href: null }
  ]

  return (
    <>
      <SEO
        title={t('contact.title')}
        description="Contactez-moi pour discuter de votre projet web. Disponible pour de nouveaux projets freelance."
        keywords="contact, devis, projet web, freelance"
      />

      <section className="pt-32 pb-16 min-h-screen gradient-bg">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              {t('contact.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection animation="fade-right">
              <Card className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label={t('contact.form.name')}
                    {...register('name', { required: 'Le nom est requis' })}
                    error={errors.name?.message}
                    placeholder="John Doe"
                  />

                  <Input
                    label={t('contact.form.email')}
                    type="email"
                    {...register('email', {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Email invalide'
                      }
                    })}
                    error={errors.email?.message}
                    placeholder="john@example.com"
                  />

                  <Input
                    label={t('contact.form.subject')}
                    {...register('subject', { required: 'Le sujet est requis' })}
                    error={errors.subject?.message}
                    placeholder="Mon projet web"
                  />

                  <TextArea
                    label={t('contact.form.message')}
                    rows={6}
                    {...register('message', { required: 'Le message est requis' })}
                    error={errors.message?.message}
                    placeholder="Décrivez votre projet..."
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    loading={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection animation="fade-left">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                    {t('contact.info.title')}
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-dark-900 dark:text-white mb-1">
                            {info.label}
                          </div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-dark-600 dark:text-dark-400">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={0.2}>
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                    {t('contact.info.availability')}
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-dark-700 dark:text-dark-300">
                      {t('contact.info.available')}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-dark-600 dark:text-dark-400 mb-1">
                      {t('contact.info.response_time')}
                    </div>
                    <div className="font-semibold text-dark-900 dark:text-white">
                      {t('contact.info.hours')}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-dark-200 dark:border-dark-700">
                    <div className="text-sm text-dark-600 dark:text-dark-400 mb-3">
                      Suivez-moi
                    </div>
                    <div className="flex gap-3">
                      {[
                        { icon: Linkedin, url: SOCIAL_LINKS.linkedin, color: 'hover:text-blue-600' },
                        { icon: Github, url: SOCIAL_LINKS.github, color: 'hover:text-gray-900 dark:hover:text-white' }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 bg-dark-100 dark:bg-dark-800 rounded-lg transition-all ${social.color}`}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
