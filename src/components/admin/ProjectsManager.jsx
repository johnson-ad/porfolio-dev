import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react'
import { projectsService } from '@services/supabase'
import { PLACEHOLDER_PROJECTS } from '@utils/constants'
import Button from '@components/common/Button'
import Card from '@components/common/Card'
import Modal from '@components/common/Modal'
import ProjectForm from './ProjectForm'
import toast from 'react-hot-toast'

const ProjectsManager = () => {
  const [projects, setProjects] = useState(PLACEHOLDER_PROJECTS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    setLoading(true)
    try {
      const { data, error } = await projectsService.getAll()
      if (error) throw error
      if (data && data.length > 0) {
        setProjects(data)
      }
    } catch (error) {
      console.error('Error loading projects:', error)
      // Use placeholder data if Supabase is not configured
      setProjects(PLACEHOLDER_PROJECTS)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = () => {
    setEditingProject(null)
    setIsModalOpen(true)
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) return

    try {
      const { error } = await projectsService.delete(id)
      if (error) throw error
      
      setProjects(projects.filter(p => p.id !== id))
      toast.success('Projet supprimé avec succès')
    } catch (error) {
      console.error('Error deleting project:', error)
      toast.error('Erreur lors de la suppression')
    }
  }

  const handleSave = async (projectData) => {
    try {
      if (editingProject) {
        const { data, error } = await projectsService.update(editingProject.id, projectData)
        if (error) throw error
        
        setProjects(projects.map(p => p.id === editingProject.id ? data : p))
        toast.success('Projet mis à jour avec succès')
      } else {
        const { data, error } = await projectsService.create(projectData)
        if (error) throw error
        
        setProjects([...projects, data])
        toast.success('Projet créé avec succès')
      }
      
      setIsModalOpen(false)
      setEditingProject(null)
    } catch (error) {
      console.error('Error saving project:', error)
      toast.error('Erreur lors de la sauvegarde')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
            Gestion des projets
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            {projects.length} projet(s) au total
          </p>
        </div>
        <Button
          onClick={handleCreate}
          icon={<Plus className="w-5 h-5" />}
        >
          Nouveau projet
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                      {project.category}
                    </p>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs font-semibold rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-sm text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(project)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    icon={<Edit className="w-4 h-4" />}
                  >
                    Modifier
                  </Button>
                  <Button
                    onClick={() => handleDelete(project.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    icon={<Trash2 className="w-4 h-4" />}
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProject ? 'Modifier le projet' : 'Nouveau projet'}
        size="lg"
      >
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  )
}

export default ProjectsManager
