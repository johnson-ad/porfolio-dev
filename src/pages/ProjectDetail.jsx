import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react'
import { PLACEHOLDER_PROJECTS } from '@utils/constants'
import SEO from '@components/common/SEO'
import Button from '@components/common/Button'
import AnimatedSection from '@components/common/AnimatedSection'

const ProjectDetail = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const project = PLACEHOLDER_PROJECTS.find(p => p.slug === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projet non trouvé</h2>
          <Button as={Link} to="/portfolio">
            Retour au portfolio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <AnimatedSection animation="fade-up">
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {t('portfolio.back_to_portfolio')}
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Info */}
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-dark-600 dark:text-dark-400 mb-8">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <Button
                      as="a"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      icon={<ExternalLink className="w-5 h-5" />}
                      iconPosition="right"
                    >
                      {t('portfolio.live_demo')}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      icon={<Github className="w-5 h-5" />}
                      iconPosition="right"
                    >
                      {t('portfolio.source_code')}
                    </Button>
                  )}
                </div>
              </div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
                  À propos du projet
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                    Ce projet démontre ma capacité à créer des applications web modernes et performantes. 
                    L'application a été développée avec les dernières technologies et bonnes pratiques du développement web.
                  </p>
                  <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                    L'architecture a été pensée pour être scalable et maintenable, avec une attention particulière 
                    portée à l'expérience utilisateur et aux performances.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2}>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Fonctionnalités clés
                </h3>
                <ul className="space-y-3">
                  {['Interface utilisateur moderne et intuitive', 'Design responsive adapté à tous les écrans', 'Performances optimisées', 'Code maintenable et documenté'].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-dark-700 dark:text-dark-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection animation="fade-left">
                <div className="card p-6 sticky top-32">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                    Détails du projet
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-dark-600 dark:text-dark-400 mb-1">
                        Catégorie
                      </div>
                      <div className="font-semibold text-dark-900 dark:text-white">
                        {project.category}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-dark-600 dark:text-dark-400 mb-2">
                        {t('portfolio.technologies')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-dark-50 dark:bg-black">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dark-900 dark:text-white mb-12">
            Projets similaires
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PLACEHOLDER_PROJECTS.filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <AnimatedSection key={relatedProject.id} animation="fade-up" delay={index * 0.1}>
                  <Link to={`/portfolio/${relatedProject.slug}`} className="block card overflow-hidden group hover:shadow-2xl transition-shadow">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetail
