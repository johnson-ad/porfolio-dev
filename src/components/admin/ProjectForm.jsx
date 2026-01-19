import { useForm } from 'react-hook-form'
import { PROJECT_CATEGORIES, TECHNOLOGIES } from '@utils/constants'
import Input from '@components/common/Input'
import TextArea from '@components/common/TextArea'
import Button from '@components/common/Button'

const ProjectForm = ({ project, onSave, onCancel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: project || {
      title: '',
      slug: '',
      description: '',
      category: PROJECT_CATEGORIES[1],
      image: '',
      technologies: [],
      demoUrl: '',
      githubUrl: '',
      featured: false
    }
  })

  const onSubmit = (data) => {
    // Convert technologies string to array
    if (typeof data.technologies === 'string') {
      data.technologies = data.technologies.split(',').map(t => t.trim())
    }
    onSave(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Titre"
          {...register('title', { required: 'Le titre est requis' })}
          error={errors.title?.message}
        />

        <Input
          label="Slug"
          {...register('slug', { required: 'Le slug est requis' })}
          error={errors.slug?.message}
          placeholder="mon-projet"
        />
      </div>

      <TextArea
        label="Description"
        rows={3}
        {...register('description', { required: 'La description est requise' })}
        error={errors.description?.message}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
            Catégorie
          </label>
          <select
            {...register('category')}
            className="input-field"
          >
            {PROJECT_CATEGORIES.slice(1).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <Input
          label="Image URL"
          {...register('image', { required: "L'image est requise" })}
          error={errors.image?.message}
          placeholder="https://..."
        />
      </div>

      <Input
        label="Technologies (séparées par des virgules)"
        {...register('technologies')}
        placeholder="React, Node.js, MongoDB"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="URL de démonstration"
          {...register('demoUrl')}
          placeholder="https://demo.example.com"
        />

        <Input
          label="URL GitHub"
          {...register('githubUrl')}
          placeholder="https://github.com/username/repo"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          {...register('featured')}
          className="w-5 h-5 text-primary-600 border-dark-300 rounded focus:ring-primary-500"
        />
        <label htmlFor="featured" className="text-sm font-medium text-dark-700 dark:text-dark-300">
          Projet en vedette
        </label>
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" className="flex-1">
          Enregistrer
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
          Annuler
        </Button>
      </div>
    </form>
  )
}

export default ProjectForm
