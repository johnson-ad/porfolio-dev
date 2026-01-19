import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden h-full group relative"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Image */}
      <Link to={`/portfolio/${project.slug}`} className="block">
        <div className="relative h-64 overflow-hidden bg-dark-100 dark:bg-dark-800">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action Buttons - Always visible on mobile, hover on desktop */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.demoUrl && (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-dark-900 rounded-lg hover:bg-primary-500 hover:text-white transition-colors font-semibold text-sm shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Demo</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-900 text-white rounded-lg hover:bg-dark-800 transition-colors font-semibold text-sm shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">Code</span>
              </motion.a>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm text-primary-600 dark:text-primary-400 text-xs font-bold rounded-lg shadow-lg">
              {project.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/portfolio/${project.slug}`} className="group/title">
          <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-3 group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400 transition-colors flex items-center gap-2">
            {project.title}
            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
          </h3>
        </Link>
        
        <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-dark-100 to-dark-50 dark:from-dark-800 dark:to-dark-700 text-dark-700 dark:text-dark-300 rounded-lg hover:shadow-md transition-shadow"
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1.5 text-xs font-semibold text-dark-500 dark:text-dark-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 rounded-xl transition-colors pointer-events-none" />
    </motion.div>
  )
}

export default ProjectCard
