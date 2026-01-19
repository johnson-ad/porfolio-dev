import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { authService } from '@services/supabase'
import { useAuthStore } from '@store/authStore'
import Button from '@components/common/Button'
import Input from '@components/common/Input'
import toast from 'react-hot-toast'

const AdminLogin = () => {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const { data: authData, error } = await authService.signIn(data.email, data.password)

      if (error) {
        toast.error('Email ou mot de passe incorrect')
        return
      }

      if (authData?.user && authData?.session) {
        login(authData.user, authData.session)
        toast.success('Connexion réussie !')
        navigate('/admin')
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Une erreur est survenue')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
            Admin Login
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            Accédez au tableau de bord
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Email"
            type="email"
            {...register('email', { 
              required: 'Email requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email invalide'
              }
            })}
            error={errors.email?.message}
            placeholder="admin@example.com"
          />

          <Input
            label="Mot de passe"
            type="password"
            {...register('password', { 
              required: 'Mot de passe requis',
              minLength: {
                value: 6,
                message: 'Minimum 6 caractères'
              }
            })}
            error={errors.password?.message}
            placeholder="••••••••"
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
            loading={isSubmitting}
          >
            Se connecter
          </Button>
        </form>

        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Note:</strong> Configurez d'abord Supabase avec vos credentials dans le fichier .env
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminLogin
