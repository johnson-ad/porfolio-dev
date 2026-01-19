import { useTranslation } from 'react-i18next'
import { useLanguageStore } from '@store/languageStore'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const { language, setLanguage } = useLanguageStore()

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <div className="flex items-center gap-2 p-1 bg-dark-100 dark:bg-dark-800 rounded-lg">
      {['fr', 'en'].map((lang) => (
        <motion.button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
            language === lang
              ? 'bg-primary-600 text-white'
              : 'text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
