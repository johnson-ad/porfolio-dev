import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import Layout from '@components/layout/Layout'
import Home from '@pages/Home'
import About from '@pages/About'
import Services from '@pages/Services'
import Portfolio from '@pages/Portfolio'
import ProjectDetail from '@pages/ProjectDetail'
import Contact from '@pages/Contact'
import Blog from '@pages/Blog'
import BlogPost from '@pages/BlogPost'
import AdminLogin from '@pages/admin/AdminLogin'
import AdminDashboard from '@pages/admin/AdminDashboard'
import ProtectedRoute from '@components/auth/ProtectedRoute'
import ScrollToTop from '@components/common/ScrollToTop'
import { useThemeStore } from '@store/themeStore'

function App() {
  const { theme } = useThemeStore()

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <ScrollToTop />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: theme === 'dark' ? '#1e293b' : '#fff',
            color: theme === 'dark' ? '#f8fafc' : '#0f172a',
          },
          success: {
            iconTheme: {
              primary: '#0ea5e9',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  )
}

export default App
