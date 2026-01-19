import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@components/common/SEO'
import AnimatedSection from '@components/common/AnimatedSection'
import Card from '@components/common/Card'
import { formatDate } from '@utils/helpers'

const Blog = () => {
  const { t } = useTranslation()

  // Placeholder blog posts
  const posts = [
    {
      id: 1,
      slug: 'react-best-practices-2024',
      title: 'React Best Practices en 2024',
      excerpt: 'Découvrez les meilleures pratiques pour développer des applications React modernes et performantes.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      category: 'React',
      readTime: '5 min',
      date: '2024-01-15'
    },
    {
      id: 2,
      slug: 'typescript-introduction',
      title: 'Introduction à TypeScript pour débutants',
      excerpt: 'TypeScript améliore votre code JavaScript. Apprenez les bases dans ce guide complet.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
      category: 'TypeScript',
      readTime: '8 min',
      date: '2024-01-10'
    },
    {
      id: 3,
      slug: 'nodejs-performance',
      title: 'Optimiser les performances Node.js',
      excerpt: 'Techniques avancées pour améliorer les performances de vos applications Node.js.',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800',
      category: 'Node.js',
      readTime: '6 min',
      date: '2024-01-05'
    }
  ]

  return (
    <>
      <SEO
        title="Blog"
        description="Articles et tutoriels sur le développement web, React, Node.js, TypeScript et les dernières technologies."
        keywords="blog, développement web, tutoriels, react, node.js, typescript"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Blog & Articles
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Découvrez mes articles sur le développement web et les technologies modernes
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.id} animation="fade-up" delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <Card hover className="overflow-hidden h-full group">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-dark-600 dark:text-dark-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-dark-600 dark:text-dark-400 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                        {t('common.read_more')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
