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
- **Authentification** sécurisée
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
- **Zustand** - State management

### Backend & Services
- **Supabase** - Backend as a Service
  - Authentication
  - PostgreSQL Database
  - Storage pour images

### SEO & Optimisation
- **React Helmet Async** - Meta tags dynamiques
- **Sitemap.xml** - Index des pages
- **Robots.txt** - Instructions crawlers
- **Schema.org** - Structured data JSON-LD

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### 1. Cloner le projet
```bash
git clone https://github.com/johnson-ad/porfolio-dev.git
cd porfolio-dev
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration

#### Variables d'environnement
Créez un fichier `.env` à la racine du projet en vous basant sur `.env.example` :

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_APP_URL=http://localhost:5173
```

> ⚠️ **Important** : Ne committez JAMAIS votre fichier `.env` sur Git. Il est déjà inclus dans `.gitignore`.

#### Configuration du Backend
Pour la configuration complète de la base de données et de l'authentification, consultez le fichier `INSTALLATION_GUIDE.txt` inclus dans le projet.

### 4. Lancer l'application

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🎯 Utilisation

### Personnalisation

#### Informations personnelles
Modifiez `src/utils/constants.js` pour vos informations personnelles

#### Traductions
Modifiez les fichiers de traduction :
- `src/i18n/locales/fr.json` (Français)
- `src/i18n/locales/en.json` (Anglais)

#### Couleurs et thème
Modifiez `tailwind.config.js` pour personnaliser les couleurs
 
## 📊 Performance

- ⚡ **Lighthouse Score**: 95+
- 🎨 **First Contentful Paint**: < 1s
- 📦 **Bundle Size**: Optimisé avec code splitting
- 🖼️ **Images**: Lazy loading et optimisation

## 🔒 Sécurité

- Authentification sécurisée
- Validation des inputs côté client et serveur
- Variables d'environnement pour les données sensibles
- HTTPS recommandé en production

## 🤝 Contribution

Les contributions sont les bienvenues ! 

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT.

## 🙏 Remerciements

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)
- [Framer Motion](https://www.framer.com/motion)

---

⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !

Fait avec ❤️ par Johnson-AD
