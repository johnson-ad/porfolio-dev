import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Star } from 'lucide-react'
import { testimonialsService } from '@services/supabase'
import { PLACEHOLDER_TESTIMONIALS } from '@utils/constants'
import Button from '@components/common/Button'
import Card from '@components/common/Card'
import Modal from '@components/common/Modal'
import { useForm } from 'react-hook-form'
import Input from '@components/common/Input'
import TextArea from '@components/common/TextArea'
import toast from 'react-hot-toast'

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState(PLACEHOLDER_TESTIMONIALS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState(null)

  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      const { data, error } = await testimonialsService.getAll()
      if (error) throw error
      if (data && data.length > 0) {
        setTestimonials(data)
      }
    } catch (error) {
      console.error('Error loading testimonials:', error)
      setTestimonials(PLACEHOLDER_TESTIMONIALS)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce témoignage ?')) return

    try {
      const { error } = await testimonialsService.delete(id)
      if (error) throw error
      
      setTestimonials(testimonials.filter(t => t.id !== id))
      toast.success('Témoignage supprimé')
    } catch (error) {
      toast.error('Erreur lors de la suppression')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
            Gestion des témoignages
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            {testimonials.length} témoignage(s) au total
          </p>
        </div>
        <Button
          onClick={() => {
            setEditingTestimonial(null)
            setIsModalOpen(true)
          }}
          icon={<Plus className="w-5 h-5" />}
        >
          Nouveau témoignage
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} whileHover={{ y: -5 }}>
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-dark-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    {testimonial.position}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-dark-700 dark:text-dark-300 mb-4">
                "{testimonial.comment}"
              </p>

              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setEditingTestimonial(testimonial)
                    setIsModalOpen(true)
                  }}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  icon={<Edit className="w-4 h-4" />}
                >
                  Modifier
                </Button>
                <Button
                  onClick={() => handleDelete(testimonial.id)}
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-600"
                  icon={<Trash2 className="w-4 h-4" />}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTestimonial ? 'Modifier le témoignage' : 'Nouveau témoignage'}
      >
        <TestimonialForm
          testimonial={editingTestimonial}
          onClose={() => setIsModalOpen(false)}
          onSuccess={loadTestimonials}
        />
      </Modal>
    </div>
  )
}

const TestimonialForm = ({ testimonial, onClose, onSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: testimonial || {}
  })

  const onSubmit = async (data) => {
    try {
      if (testimonial) {
        await testimonialsService.update(testimonial.id, data)
        toast.success('Témoignage mis à jour')
      } else {
        await testimonialsService.create(data)
        toast.success('Témoignage créé')
      }
      onSuccess()
      onClose()
    } catch (error) {
      toast.error('Erreur lors de la sauvegarde')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Nom"
        {...register('name', { required: 'Le nom est requis' })}
        error={errors.name?.message}
      />

      <Input
        label="Poste"
        {...register('position', { required: 'Le poste est requis' })}
        error={errors.position?.message}
      />

      <Input
        label="Avatar URL"
        {...register('avatar')}
        placeholder="https://..."
      />

      <div>
        <label className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
          Note (1-5)
        </label>
        <select {...register('rating')} className="input-field">
          {[5, 4, 3, 2, 1].map(n => (
            <option key={n} value={n}>{n} étoile{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      <TextArea
        label="Commentaire"
        rows={4}
        {...register('comment', { required: 'Le commentaire est requis' })}
        error={errors.comment?.message}
      />

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">Enregistrer</Button>
        <Button type="button" variant="outline" onClick={onClose} className="flex-1">
          Annuler
        </Button>
      </div>
    </form>
  )
}

export default TestimonialsManager
