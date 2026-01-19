// Social media links
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/votre-profil',
  github: 'https://github.com/votre-username',
  upwork: 'https://www.upwork.com/freelancers/votre-profil',
  fiverr: 'https://www.fiverr.com/votre-username',
  twitter: 'https://twitter.com/votre-username',
  email: 'contact@votremail.com',
  phone: '+33 6 00 00 00 00'
}

// Navigation menu items
export const NAV_ITEMS = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.about', path: '/about' },
  { label: 'nav.services', path: '/services' },
  { label: 'nav.portfolio', path: '/portfolio' },
  { label: 'nav.blog', path: '/blog' },
  { label: 'nav.contact', path: '/contact' }
]

// Skills categories
export const SKILLS = {
  frontend: [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'JavaScript/ES6+', level: 95, icon: '💛' },
    { name: 'TypeScript', level: 85, icon: '💙' },
    { name: 'Tailwind CSS', level: 90, icon: '🎨' },
    { name: 'HTML5/CSS3', level: 95, icon: '🌐' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'Vue.js', level: 75, icon: '💚' }
  ],
  backend: [
    { name: 'Node.js', level: 90, icon: '💚' },
    { name: 'Express', level: 90, icon: '🚂' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'REST APIs', level: 95, icon: '🔌' },
    { name: 'GraphQL', level: 75, icon: '◼️' },
    { name: 'PostgreSQL', level: 85, icon: '🐘' },
    { name: 'MongoDB', level: 85, icon: '🍃' }
  ],
  tools: [
    { name: 'Git/GitHub', level: 95, icon: '🔧' },
    { name: 'Docker', level: 80, icon: '🐳' },
    { name: 'AWS', level: 75, icon: '☁️' },
    { name: 'Supabase', level: 90, icon: '⚡' },
    { name: 'Vercel', level: 90, icon: '△' },
    { name: 'Figma', level: 85, icon: '🎨' },
    { name: 'VS Code', level: 95, icon: '📝' }
  ]
}

// Services offered
export const SERVICES = [
  {
    id: 1,
    icon: '🚀',
    title: 'services.landing_pages.title',
    description: 'services.landing_pages.description',
    features: 'services.landing_pages.features',
    price: 'À partir de 1500€'
  },
  {
    id: 2,
    icon: '💻',
    title: 'services.web_apps.title',
    description: 'services.web_apps.description',
    features: 'services.web_apps.features',
    price: 'À partir de 3500€'
  },
  {
    id: 3,
    icon: '🛒',
    title: 'services.ecommerce.title',
    description: 'services.ecommerce.description',
    features: 'services.ecommerce.features',
    price: 'À partir de 4500€'
  },
  {
    id: 4,
    icon: '🔧',
    title: 'services.maintenance.title',
    description: 'services.maintenance.description',
    features: 'services.maintenance.features',
    price: 'À partir de 500€/mois'
  }
]

// Project categories
export const PROJECT_CATEGORIES = [
  'Tous',
  'Landing Page',
  'Web App',
  'E-commerce',
  'Dashboard',
  'Mobile'
]

// Technologies
export const TECHNOLOGIES = [
  'React',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'Next.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'AWS',
  'Docker',
  'GraphQL'
]

// Stats
export const STATS = [
  { label: 'hero.stats.projects', value: '50+' },
  { label: 'hero.stats.clients', value: '30+' },
  { label: 'hero.stats.experience', value: '5+' },
  { label: 'hero.stats.technologies', value: '20+' }
]

// Experience timeline
export const EXPERIENCE = [
  {
    id: 1,
    period: '2021 - Présent',
    title: 'Développeur Full Stack Freelance',
    company: 'Freelance',
    description: 'Création d\'applications web sur mesure pour des clients internationaux. Spécialisé en React, Node.js et solutions cloud.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Supabase']
  },
  {
    id: 2,
    period: '2019 - 2021',
    title: 'Développeur Frontend Senior',
    company: 'Tech Company',
    description: 'Développement d\'interfaces utilisateur modernes et responsive. Lead technique sur plusieurs projets d\'envergure.',
    technologies: ['React', 'Redux', 'Styled Components', 'Jest']
  },
  {
    id: 3,
    period: '2017 - 2019',
    title: 'Développeur Web Full Stack',
    company: 'Digital Agency',
    description: 'Développement d\'applications web complètes pour des PME et startups. Formation d\'équipes juniors.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Vue.js']
  }
]

// Placeholder projects (to be replaced with actual data)
export const PLACEHOLDER_PROJECTS = [
  {
    id: 1,
    slug: 'ecommerce-fashion',
    title: 'E-commerce Fashion',
    description: 'Plateforme e-commerce complète avec paiement intégré et dashboard admin',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    featured: true
  },
  {
    id: 2,
    slug: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'Dashboard analytique moderne avec graphiques temps réel',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Supabase'],
    demoUrl: 'https://demo.example.com',
    featured: true
  },
  {
    id: 3,
    slug: 'landing-startup',
    title: 'Landing Page Startup',
    description: 'Landing page moderne avec animations fluides et formulaires',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example',
    featured: false
  }
]

// Placeholder testimonials
export const PLACEHOLDER_TESTIMONIALS = [
  {
    id: 1,
    name: 'Marie Dupont',
    position: 'CEO, StartupXYZ',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment: 'Excellent travail ! Application livrée en avance avec une qualité exceptionnelle. Je recommande vivement.',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Jean Martin',
    position: 'Fondateur, E-Shop',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    comment: 'Professionnel, réactif et très compétent. Notre boutique en ligne fonctionne parfaitement.',
    date: '2024-01-10'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    position: 'Marketing Manager',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    comment: 'Design moderne et performances excellentes. Notre taux de conversion a augmenté de 40%.',
    date: '2024-01-05'
  }
]
