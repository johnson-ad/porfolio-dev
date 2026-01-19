import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@store/authStore'
import Loading from '@components/common/Loading'
import { useEffect, useState } from 'react'
import { authService } from '@services/supabase'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, setUser } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { user } = await authService.getUser()
        if (user) {
          setUser(user)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [setUser])

  if (loading) {
    return <Loading fullScreen />
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default ProtectedRoute
