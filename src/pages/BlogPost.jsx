import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import SEO from '@components/common/SEO'
import Button from '@components/common/Button'
import { formatDate } from '@utils/helpers'

const BlogPost = () => {
  const { slug } = useParams()

  // Placeholder post data
  const post = {
    title: 'React Best Practices en 2024',
    excerpt: 'Découvrez les meilleures pratiques pour développer des applications React modernes et performantes.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200',
    category: 'React',
    readTime: '5 min',
    date: '2024-01-15',
    author: 'Votre Nom',
    content: `
      <h2>Introduction</h2>
      <p>React continue d'évoluer et avec lui, les meilleures pratiques pour développer des applications performantes et maintenables. Dans cet article, nous allons explorer les techniques essentielles pour 2024.</p>
      
      <h2>1. Utiliser les Hooks modernes</h2>
      <p>Les Hooks ont révolutionné la façon dont nous écrivons des composants React. Assurez-vous de bien maîtriser useState, useEffect, useContext et les Hooks personnalisés.</p>
      
      <h2>2. Optimisation des performances</h2>
      <p>Utilisez React.memo, useMemo et useCallback judicieusement pour éviter les re-rendus inutiles. Ne sur-optimisez pas prématurément.</p>
      
      <h2>3. Structure du projet</h2>
      <p>Organisez votre code de manière logique avec une structure de dossiers claire. Séparez la logique métier des composants UI.</p>
      
      <h2>Conclusion</h2>
      <p>En suivant ces pratiques, vous créerez des applications React robustes et maintenables. Continuez à apprendre et à vous adapter aux évolutions de l'écosystème.</p>
    `
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />

      <article className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-dark-600 dark:text-dark-400 mb-8">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/150?img=1"
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lecture</span>
              </div>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl shadow-2xl mb-8"
            />

            <Button
              variant="outline"
              size="sm"
              icon={<Share2 className="w-4 h-4" />}
            >
              Partager
            </Button>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  )
}

export default BlogPost
