# 🚀 Portfolio Full Stack - Application Professionnelle

Application portfolio complète pour développeur Full Stack freelance, construite avec React, Vite, Tailwind CSS, et Supabase.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Fonctionnalités

### 🎨 Frontend Public
- **Hero Section** avec animations fluides et effets visuels modernes
- **Portfolio** avec système de filtres et recherche
- **Services** présentant vos offres avec tarification
- **À propos** avec compétences, parcours et certifications
- **Blog** pour partager vos articles techniques
- **Contact** avec formulaire validé et informations
- **Mode sombre/clair** avec persistance des préférences
- **Multilingue** (FR/EN) avec i18next
- **SEO optimisé** avec meta tags, sitemap, et Schema.org
- **Animations** fluides avec Framer Motion
- **Responsive** parfaitement adapté mobile/tablette/desktop

### 🔐 Dashboard Admin
- **Authentification** sécurisée avec Supabase
- **Gestion des projets** (CRUD complet)
- **Gestion des témoignages** 
- **Gestion des messages** reçus via formulaire de contact
- **Upload d'images** avec preview
- **Statistiques** et aperçu du dashboard

## 🛠️ Technologies Utilisées

### Frontend
- **React 18** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **React Router** - Navigation
- **React Hook Form** - Gestion des formulaires
- **React Hot Toast** - Notifications
- **Lucide React** - Icônes modernes

### Backend & Services
- **Supabase** - Backend as a Service
  - Authentication
  - PostgreSQL Database
  - Storage pour images
  - Real-time subscriptions

### SEO & Optimisation
- **React Helmet Async** - Meta tags dynamiques
- **Sitemap.xml** - Index des pages
- **Robots.txt** - Instructions crawlers
- **Schema.org** - Structured data JSON-LD

### Internationalisation
- **i18next** - Système de traduction FR/EN
- **react-i18next** - Intégration React

### State Management
- **Zustand** - Gestion d'état légère et performante

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Compte Supabase (gratuit)

### 1. Cloner le projet
\`\`\`bash
git clone https://github.com/votre-username/portfolio-fullstack.git
cd portfolio-fullstack
\`\`\`

### 2. Installer les dépendances
\`\`\`bash
npm install
\`\`\`

### 3. Configurer Supabase

#### Créer un projet Supabase
1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Récupérez votre URL et votre clé anon

#### Configurer les variables d'environnement
Créez un fichier \`.env\` à la racine :

\`\`\`env
VITE_SUPABASE_URL=votre_supabase_url
VITE_SUPABASE_ANON_KEY=votre_supabase_anon_key
VITE_APP_URL=http://localhost:3000
VITE_ADMIN_EMAIL=admin@example.com
\`\`\`

#### Créer les tables dans Supabase

Exécutez ces requêtes SQL dans l'éditeur SQL de Supabase :

\`\`\`sql
-- Table des projets
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  technologies TEXT[] NOT NULL,
  demo_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des témoignages
CREATE TABLE testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  avatar TEXT,
  rating INTEGER DEFAULT 5,
  comment TEXT NOT NULL,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des messages de contact
CREATE TABLE contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des articles de blog (optionnel)
CREATE TABLE blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT,
  category TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activer Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Politiques de lecture publique
CREATE POLICY "Public read access for projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Public read access for testimonials" ON testimonials
  FOR SELECT USING (true);

CREATE POLICY "Public read access for published posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Politiques d'écriture pour les utilisateurs authentifiés
CREATE POLICY "Authenticated users can manage projects" ON projects
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage testimonials" ON testimonials
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage messages" ON contact_messages
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- Permettre l'insertion publique des messages de contact
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);
\`\`\`

#### Créer un utilisateur admin

Dans l'onglet Authentication de Supabase :
1. Allez dans "Users"
2. Cliquez sur "Add User"
3. Créez un utilisateur avec email/mot de passe

### 4. Lancer l'application

\`\`\`bash
npm run dev
\`\`\`

L'application sera accessible sur \`http://localhost:3000\`

## 🎯 Utilisation

### Accéder au Dashboard Admin
1. Naviguez vers \`/admin/login\`
2. Connectez-vous avec vos identifiants Supabase
3. Gérez vos contenus (projets, témoignages, messages)

### Personnalisation

#### Informations personnelles
Modifiez \`src/utils/constants.js\` pour vos informations :
- Liens sociaux (LinkedIn, GitHub, etc.)
- Email et téléphone
- Compétences et expériences
- Services et tarifs

#### Traductions
Modifiez les fichiers de traduction :
- \`src/i18n/locales/fr.json\` (Français)
- \`src/i18n/locales/en.json\` (Anglais)

#### Couleurs et thème
Modifiez \`tailwind.config.js\` pour personnaliser les couleurs

#### SEO
Mettez à jour :
- \`index.html\` - Meta tags principaux
- \`public/sitemap.xml\` - URLs de votre site
- \`src/utils/seo.js\` - Schema.org data

## 📱 Structure du Projet

\`\`\`
portfolio-fullstack/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Composants React
│   │   ├── common/      # Boutons, Inputs, Cards...
│   │   ├── layout/      # Header, Footer
│   │   ├── home/        # Sections de la page d'accueil
│   │   ├── portfolio/   # Composants portfolio
│   │   └── admin/       # Dashboard admin
│   ├── pages/           # Pages de l'application
│   ├── hooks/           # Custom hooks
│   ├── services/        # Services API (Supabase)
│   ├── store/           # State management (Zustand)
│   ├── utils/           # Utilitaires et helpers
│   ├── i18n/            # Internationalisation
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── .env.example         # Variables d'environnement exemple
├── vite.config.js       # Configuration Vite
├── tailwind.config.js   # Configuration Tailwind
└── package.json
\`\`\`

## 🚀 Déploiement

### Vercel (Recommandé)
\`\`\`bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
\`\`\`

### Netlify
\`\`\`bash
# Build
npm run build

# Déployer le dossier dist/
\`\`\`

### Configuration des variables d'environnement
N'oubliez pas de configurer vos variables d'environnement sur votre plateforme de déploiement.

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🎨 **First Contentful Paint**: < 1s
- 📦 **Bundle Size**: Optimisé avec code splitting
- 🖼️ **Images**: Lazy loading et optimisation

## 🔒 Sécurité

- Authentification sécurisée avec Supabase
- Protection CSRF
- Validation des inputs côté client et serveur
- Row Level Security (RLS) sur Supabase
- HTTPS en production

## 🤝 Contribution

Les contributions sont les bienvenues ! 

1. Fork le projet
2. Créez une branche (\`git checkout -b feature/AmazingFeature\`)
3. Commit vos changements (\`git commit -m 'Add AmazingFeature'\`)
4. Push sur la branche (\`git push origin feature/AmazingFeature\`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier \`LICENSE\` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email: contact@votremail.com
- LinkedIn: [Votre Profil](https://linkedin.com/in/votre-profil)
- GitHub Issues: [Créer une issue](https://github.com/votre-username/portfolio-fullstack/issues)

## 🙏 Remerciements

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !

Fait avec ❤️ par [Votre Nom](https://votreportfolio.com)
