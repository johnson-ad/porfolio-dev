import { motion } from 'framer-motion'
import { FolderKanban, Star, MessageSquare, Eye } from 'lucide-react'
import Card from '@components/common/Card'
import AnimatedSection from '@components/common/AnimatedSection'

const DashboardOverview = () => {
  const stats = [
    { label: 'Total Projets', value: '12', icon: FolderKanban, color: 'from-blue-500 to-cyan-500' },
    { label: 'Témoignages', value: '24', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { label: 'Messages', value: '8', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
    { label: 'Vues totales', value: '1.2K', icon: Eye, color: 'from-purple-500 to-pink-500' }
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
          Tableau de bord
        </h1>
        <p className="text-dark-600 dark:text-dark-400">
          Bienvenue dans votre espace d'administration
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <AnimatedSection key={index} animation="scale" delay={index * 0.1}>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-dark-900 dark:text-white">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm text-dark-600 dark:text-dark-400">
                {stat.label}
              </p>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* Recent Activity */}
      <AnimatedSection animation="fade-up">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
            Activité récente
          </h2>
          <div className="space-y-4">
            {[
              { action: 'Nouveau message reçu', time: 'Il y a 2 heures', type: 'message' },
              { action: 'Projet "E-commerce Fashion" publié', time: 'Il y a 5 heures', type: 'project' },
              { action: 'Nouveau témoignage ajouté', time: 'Hier', type: 'testimonial' }
            ].map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center justify-between p-4 bg-dark-50 dark:bg-dark-800 rounded-lg"
              >
                <div>
                  <p className="font-medium text-dark-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </AnimatedSection>
    </div>
  )
}

export default DashboardOverview
