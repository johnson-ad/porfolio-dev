import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { PLACEHOLDER_PROJECTS } from '@utils/constants'
import SectionTitle from '@components/common/SectionTitle'
import AnimatedSection from '@components/common/AnimatedSection'
import Button from '@components/common/Button'

const PortfolioSection = () => {
  const { t } = useTranslation()
  const featuredProjects = PLACEHOLDER_PROJECTS.filter(p => p.featured).slice(0, 3)

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="Portfolio"
          title={t('portfolio.title')}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="card overflow-hidden h-full group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.demoUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5 text-dark-900" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 text-dark-900" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" className="text-center">
          <Button
            as={Link}
            to="/portfolio"
            size="lg"
            variant="primary"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            {t('portfolio.view_project')}
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default PortfolioSection
