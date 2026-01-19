import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Heart
} from 'lucide-react'
import { NAV_ITEMS, SOCIAL_LINKS } from '@utils/constants'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: SOCIAL_LINKS.linkedin, 
      icon: Linkedin,
      color: 'hover:text-blue-600' 
    },
    { 
      name: 'GitHub', 
      url: SOCIAL_LINKS.github, 
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white' 
    },
    { 
      name: 'Upwork', 
      url: SOCIAL_LINKS.upwork, 
      icon: ExternalLink,
      color: 'hover:text-green-600' 
    },
    { 
      name: 'Fiverr', 
      url: SOCIAL_LINKS.fiverr, 
      icon: ExternalLink,
      color: 'hover:text-green-500' 
    },
  ]

  const contactInfo = [
    { icon: Mail, text: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}` },
    { icon: Phone, text: SOCIAL_LINKS.phone, href: `tel:${SOCIAL_LINKS.phone.replace(/\s/g, '')}` },
    { icon: MapPin, text: 'Paris, France', href: null },
  ]

  return (
    <footer className="bg-dark-900 dark:bg-black text-dark-100 pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
              >
                FS
              </motion.div>
              <span className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                Portfolio
              </span>
            </Link>
            <p className="text-dark-300 mb-6 max-w-md leading-relaxed">
              {t('footer.tagline')}. Spécialisé en React, Node.js et solutions cloud pour transformer vos idées en applications web performantes.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('footer.links.title')}
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-dark-300 hover:text-primary-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {t(item.label)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('contact.info.title')}
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <info.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {info.text}
                      </span>
                    </a>
                  ) : (
                    <span className="text-dark-300 inline-flex items-center gap-2">
                      <info.icon className="w-4 h-4 flex-shrink-0" />
                      {info.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="border-t border-dark-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              Restons en contact
            </h3>
            <p className="text-dark-300 text-sm mb-4">
              Inscrivez-vous pour recevoir mes derniers projets et articles
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
              >
                S'inscrire
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm text-center md:text-left">
              © {currentYear} Portfolio Full Stack. {t('footer.rights')}.
            </p>
            <p className="text-dark-400 text-sm flex items-center gap-1">
              Fait avec React
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-colors z-30"
          aria-label="Retour en haut"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
