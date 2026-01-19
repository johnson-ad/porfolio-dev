import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NAV_ITEMS } from '@utils/constants'
import ThemeToggle from '@components/common/ThemeToggle'
import LanguageSwitcher from '@components/common/LanguageSwitcher'
import Button from '@components/common/Button'
import useScrollDirection from '@hooks/useScrollDirection'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrollDirection = useScrollDirection()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' && scrolled ? -100 : 0 
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              FS
            </motion.div>
            <span className="text-xl font-display font-bold text-dark-900 dark:text-dark-50 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-dark-50 dark:hover:bg-dark-800'
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button 
              as={Link} 
              to="/contact"
              size="sm"
              variant="primary"
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-dark-900 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={closeMenu}
                    className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2 mb-8">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg font-medium transition-all ${
                            isActive
                              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-dark-700 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800'
                          }`
                        }
                      >
                        {t(item.label)}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Language Switcher */}
                <div className="mb-6">
                  <LanguageSwitcher />
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    as={Link}
                    to="/contact"
                    onClick={closeMenu}
                    className="w-full"
                  >
                    {t('nav.contact')}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
