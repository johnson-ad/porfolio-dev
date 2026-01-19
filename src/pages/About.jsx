import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react'
import { SKILLS, EXPERIENCE } from '@utils/constants'
import SEO from '@components/common/SEO'
import SectionTitle from '@components/common/SectionTitle'
import AnimatedSection from '@components/common/AnimatedSection'
import Button from '@components/common/Button'
import Card from '@components/common/Card'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('about.title')}
        description={t('about.description', { years: 5 })}
        keywords="à propos, développeur, expérience, compétences, parcours professionnel"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <AnimatedSection animation="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-400 mb-6 leading-relaxed">
                {t('about.description', { years: 5 })}
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
                Passionné par les technologies web et l'innovation, je crée des solutions digitales 
                qui transforment les idées en réalité. Chaque projet est une opportunité d'apprendre 
                et de repousser les limites du possible.
              </p>
              <Button
                icon={<Download className="w-5 h-5" />}
                iconPosition="right"
              >
                {t('about.download_cv')}
              </Button>
            </AnimatedSection>

            {/* Right: Image */}
            <AnimatedSection animation="fade-left">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
                    alt="Profile"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-400 rounded-2xl opacity-20 -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-400 rounded-2xl opacity-20 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionTitle
            title={t('about.skills_title')}
            subtitle="Compétences"
          />

          <div className="space-y-12">
            {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
              <AnimatedSection key={category} animation="fade-up" delay={categoryIndex * 0.1}>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 capitalize">
                  {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'Outils & DevOps'}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-dark-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="ml-auto text-sm text-primary-600 dark:text-primary-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-dark-50 dark:bg-black">
        <div className="container-custom">
          <SectionTitle
            title={t('about.experience_title')}
            subtitle="Expérience"
          />

          <div className="max-w-4xl mx-auto">
            {EXPERIENCE.map((exp, index) => (
              <AnimatedSection key={exp.id} animation="fade-up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="relative pl-8 pb-12 border-l-2 border-primary-600 dark:border-primary-400 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full" />
                  
                  <Card className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-dark-600 dark:text-dark-400 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionTitle
            title="Certifications & Réalisations"
            subtitle="Accomplissements"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Certifications',
                items: ['AWS Certified', 'React Advanced', 'Node.js Expert']
              },
              {
                icon: Briefcase,
                title: 'Projets Livrés',
                items: ['50+ projets', '30+ clients', '99% satisfaction']
              },
              {
                icon: GraduationCap,
                title: 'Formation',
                items: ['Master Informatique', 'Formation continue', 'Auto-apprentissage']
              }
            ].map((achievement, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 0.1}>
                <Card hover className="p-8 text-center h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center"
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                    {achievement.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {achievement.items.map((item, idx) => (
                      <li key={idx} className="text-dark-600 dark:text-dark-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
