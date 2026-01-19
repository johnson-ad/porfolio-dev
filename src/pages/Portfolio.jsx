import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Search } from 'lucide-react'
import { PROJECT_CATEGORIES, PLACEHOLDER_PROJECTS } from '@utils/constants'
import SEO from '@components/common/SEO'
import SectionTitle from '@components/common/SectionTitle'
import ProjectCard from '@components/portfolio/ProjectCard'
import AnimatedSection from '@components/common/AnimatedSection'

const Portfolio = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(PLACEHOLDER_PROJECTS)

  useEffect(() => {
    let filtered = PLACEHOLDER_PROJECTS

    // Filter by category
    if (activeCategory !== 'Tous') {
      filtered = filtered.filter(project => project.category === activeCategory)
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredProjects(filtered)
  }, [activeCategory, searchQuery])

  return (
    <>
      <SEO
        title="Portfolio"
        description="Découvrez mes réalisations et projets web : applications full stack, landing pages, sites e-commerce et plus encore."
        keywords="portfolio, projets web, applications, développement web, react projects"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              {t('portfolio.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-800 sticky top-20 z-30 backdrop-blur-lg bg-white/80 dark:bg-dark-900/80">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder={t('common.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {PROJECT_CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-dark-50 dark:bg-black">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="fade-up"
                  delay={index * 0.1}
                >
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-dark-600 dark:text-dark-400">
                Aucun projet trouvé. Essayez avec d'autres filtres.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Portfolio
