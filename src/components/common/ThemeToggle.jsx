import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useThemeStore } from '@store/themeStore'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-yellow-400" />
        ) : (
          <Sun className="w-5 h-5 text-orange-500" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
