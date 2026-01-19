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
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-black dark:to-dark-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
            >
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                ✨ {filteredProjects.length} Projets Réalisés
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-dark-900 via-primary-600 to-secondary-600 dark:from-white dark:via-primary-400 dark:to-secondary-400">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl md:text-2xl text-dark-600 dark:text-dark-400 leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/95 dark:bg-dark-900/95 border-b border-dark-200 dark:border-dark-800 sticky top-0 z-30 backdrop-blur-md shadow-sm">
        <div className="container-custom">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400 group-focus-within:text-primary-500 transition-colors" />
              <input
                type="text"
                placeholder={t('common.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-50 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all placeholder:text-dark-400"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {PROJECT_CATEGORIES.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Counter */}
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4 text-sm text-dark-600 dark:text-dark-400"
            >
              {filteredProjects.length} {filteredProjects.length === 1 ? 'projet trouvé' : 'projets trouvés'}
            </motion.p>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gradient-to-b from-white via-dark-50/50 to-white dark:from-black dark:via-dark-900 dark:to-black">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <>
              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap justify-center gap-6 mb-12 p-6 bg-white dark:bg-dark-900 rounded-2xl shadow-lg border border-dark-200 dark:border-dark-800"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {filteredProjects.length}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-400 font-medium">
                    Projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
                  </div>
                </div>
                <div className="w-px bg-dark-200 dark:bg-dark-800" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
                    {activeCategory}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-400 font-medium">
                    Catégorie active
                  </div>
                </div>
              </motion.div>

              {/* Projects Grid */}
              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-dark-100 dark:bg-dark-800 rounded-full flex items-center justify-center">
                  <span className="text-5xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
                  Aucun projet trouvé
                </h3>
                <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
                  Essayez avec d'autres filtres ou modifiez votre recherche.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory('Tous')
                    setSearchQuery('')
                  }}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Réinitialiser les filtres
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

export default Portfolio
