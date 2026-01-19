import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  FolderKanban, 
  MessageSquare, 
  Star, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '@store/authStore'
import { authService } from '@services/supabase'
import ProjectsManager from '@components/admin/ProjectsManager'
import TestimonialsManager from '@components/admin/TestimonialsManager'
import MessagesManager from '@components/admin/MessagesManager'
import DashboardOverview from '@components/admin/DashboardOverview'
import toast from 'react-hot-toast'

const AdminDashboard = () => {
  const location = useLocation()
  const { logout } = useAuthStore()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = async () => {
    await authService.signOut()
    logout()
    toast.success('Déconnexion réussie')
  }

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/admin/projects', icon: FolderKanban, label: 'Projets' },
    { path: '/admin/testimonials', icon: Star, label: 'Témoignages' },
    { path: '/admin/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/admin/settings', icon: Settings, label: 'Paramètres' }
  ]

  const isActive = (path, exact) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-900">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-dark-800 rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-dark-800 border-r border-dark-200 dark:border-dark-700 z-40 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white font-bold">
              FS
            </div>
            <span className="text-xl font-bold text-dark-900 dark:text-white">
              Admin Panel
            </span>
          </Link>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path, item.exact)
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-400 hover:bg-dark-50 dark:hover:bg-dark-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-dark-200 dark:border-dark-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen p-4 md:p-8">
        <Routes>
          <Route index element={<DashboardOverview />} />
          <Route path="projects" element={<ProjectsManager />} />
          <Route path="testimonials" element={<TestimonialsManager />} />
          <Route path="messages" element={<MessagesManager />} />
          <Route path="settings" element={<div>Settings (Coming soon)</div>} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </div>
  )
}

export default AdminDashboard
