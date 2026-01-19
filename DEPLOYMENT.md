# 🚀 Guide de Déploiement

Guide complet pour déployer votre portfolio en production.

## Option 1 : Vercel (Recommandé)

### Avantages
- Déploiement gratuit
- HTTPS automatique
- CI/CD intégré
- Optimisé pour React/Vite

### Étapes

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub

2. **Importer le projet**
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Vercel détecte automatiquement Vite

3. **Configurer les variables d'environnement**
   - Dans Settings > Environment Variables, ajoutez :
   ```
   VITE_SUPABASE_URL=votre_url_supabase
   VITE_SUPABASE_ANON_KEY=votre_cle_anon
   VITE_APP_URL=https://votre-domaine.vercel.app
   ```

4. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez la fin du build (~2 minutes)
   - Votre site est en ligne ! 🎉

### Vercel CLI (Optionnel)
```bash
npm i -g vercel
vercel login
vercel
```

## Option 2 : Netlify

### Étapes

1. **Créer un compte Netlify**
   - Allez sur [netlify.com](https://netlify.com)

2. **Connecter votre repo**
   - Cliquez sur "Add new site" > "Import an existing project"
   - Connectez GitHub et sélectionnez votre repo

3. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Variables d'environnement**
   - Dans Site settings > Environment variables
   - Ajoutez toutes vos variables VITE_*

5. **Déployer**
   - Cliquez sur "Deploy site"

## Option 3 : GitHub Pages

### Configuration

1. **Modifier vite.config.js**
```javascript
export default defineConfig({
  base: '/nom-du-repo/',
  // ... reste de la config
})
```

2. **Build et déploiement**
```bash
npm run build
npx gh-pages -d dist
```

## Post-Déploiement

### 1. Mettre à jour Supabase
Dans votre projet Supabase > Authentication > URL Configuration :
- **Site URL**: https://votre-domaine.com
- **Redirect URLs**: https://votre-domaine.com/**

### 2. Mettre à jour les URLs
- `src/utils/constants.js` - Liens sociaux
- `src/utils/seo.js` - URLs Schema.org
- `public/sitemap.xml` - URLs du site

### 3. Tester le site
- [ ] Navigation fonctionne
- [ ] Formulaire de contact fonctionne
- [ ] Login admin fonctionne
- [ ] Images chargent correctement
- [ ] Mode sombre/clair fonctionne
- [ ] Changement de langue fonctionne

### 4. SEO & Performance
- [ ] Soumettre sitemap à Google Search Console
- [ ] Tester avec Lighthouse (score 90+)
- [ ] Vérifier les meta tags avec Meta Tag Checker
- [ ] Tester les performances avec PageSpeed Insights

## Domaine personnalisé

### Vercel
1. Allez dans Settings > Domains
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

### Netlify
1. Allez dans Domain settings
2. Cliquez sur "Add custom domain"
3. Suivez les instructions DNS

## CI/CD Automatique

Les deux plateformes déploient automatiquement à chaque push sur la branche principale.

Pour désactiver :
- Vercel : Settings > Git > Auto-deploy
- Netlify : Site settings > Build & deploy > Deploy contexts

## SSL/HTTPS

HTTPS est automatiquement configuré sur Vercel et Netlify.

## Monitoring

### Vercel Analytics
Activez dans Settings > Analytics (gratuit)

### Google Analytics
Ajoutez dans `index.html` :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

## Maintenance

### Mises à jour
```bash
git pull
npm install
git push
```

Le site se met à jour automatiquement !

## Rollback

### Vercel
- Allez dans Deployments
- Cliquez sur un déploiement précédent
- Cliquez sur "Promote to Production"

### Netlify
- Allez dans Deploys
- Cliquez sur "Publish deploy" sur une version précédente
