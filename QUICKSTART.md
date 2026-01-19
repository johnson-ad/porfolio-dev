# ⚡ Guide de Démarrage Rapide

Lancez votre portfolio en 5 minutes !

## 🚀 Installation Express

```bash
# 1. Cloner le projet
git clone https://github.com/votre-username/portfolio-fullstack.git
cd portfolio-fullstack

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env (voir ci-dessous)
cp .env.example .env
# Éditez .env avec vos credentials Supabase

# 4. Lancer l'application
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) 🎉

## ⚙️ Configuration Minimale

### Option A : Sans Supabase (Mode Démo)
L'application fonctionne avec des données placeholder sans configuration !

Laissez le fichier `.env` avec les valeurs par défaut.

**Limitations :**
- Pas de sauvegarde des données
- Authentification admin non fonctionnelle
- Formulaire de contact n'envoie pas

### Option B : Avec Supabase (Complet)

1. **Créer un compte Supabase** (gratuit) : [supabase.com](https://supabase.com)

2. **Créer un projet** et récupérer :
   - URL du projet
   - Clé anon/public

3. **Modifier `.env`** :
```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-ici
```

4. **Créer les tables** (copier-coller dans SQL Editor de Supabase) :
```sql
-- Voir SUPABASE_SETUP.md pour les requêtes SQL complètes
```

5. **Créer un utilisateur admin** dans Authentication > Users

6. **Relancer l'app** :
```bash
npm run dev
```

## 🎨 Personnalisation Express

### 1. Informations Personnelles
Éditez `src/utils/constants.js` :
```javascript
export const SOCIAL_LINKS = {
  linkedin: 'votre-lien-linkedin',
  github: 'votre-lien-github',
  email: 'votre@email.com',
  phone: '+33 6 XX XX XX XX'
}
```

### 2. Couleurs & Thème
Éditez `tailwind.config.js` :
```javascript
colors: {
  primary: { /* vos couleurs */ },
  secondary: { /* vos couleurs */ }
}
```

### 3. Textes & Traductions
Éditez `src/i18n/locales/fr.json` et `en.json`

### 4. Services & Tarifs
Éditez `src/utils/constants.js` section `SERVICES`

### 5. Compétences
Éditez `src/utils/constants.js` section `SKILLS`

## 📱 Tester l'Application

### Page d'accueil
✅ Animations fluides
✅ Toggle dark/light mode
✅ Changer la langue FR/EN
✅ Cliquer sur les CTAs

### Portfolio
✅ Filtrer par catégorie
✅ Rechercher un projet
✅ Cliquer sur un projet pour voir les détails

### Contact
✅ Remplir et soumettre le formulaire
✅ Vérifier les validations

### Admin
✅ Aller sur `/admin/login`
✅ Se connecter (si Supabase configuré)
✅ Ajouter un projet
✅ Modifier un projet
✅ Voir les messages

## 🐛 Résolution de Problèmes

### L'application ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur Supabase
- Vérifiez vos credentials dans `.env`
- Assurez-vous que les tables sont créées
- Vérifiez que RLS est configuré

### Erreur de build
```bash
# Vider le cache Vite
rm -rf node_modules/.vite
npm run dev
```

## 📝 Prochaines Étapes

1. ✅ L'app fonctionne en local
2. 📝 Personnalisez vos informations
3. 🎨 Ajoutez vos projets
4. 📸 Ajoutez vos images
5. 🚀 Déployez sur Vercel/Netlify (voir DEPLOYMENT.md)
6. 🌐 Configurez votre domaine
7. 📊 Ajoutez Google Analytics
8. ✉️ Testez le formulaire de contact
9. 🔍 Soumettez à Google Search Console
10. 🎉 Partagez votre portfolio !

## 📚 Documentation

- [README.md](README.md) - Documentation complète
- [FEATURES.md](FEATURES.md) - Liste des fonctionnalités
- [SUPABASE_SETUP.md](SUPABASE_SETUP.md) - Configuration Supabase détaillée
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guide de déploiement

## 🆘 Support

Besoin d'aide ?
- 📖 Lisez la documentation
- 🐛 Ouvrez une issue sur GitHub
- 💬 Contactez-moi

## 🎯 Checklist de Lancement

- [ ] Application fonctionne en local
- [ ] Informations personnelles mises à jour
- [ ] Couleurs et thème personnalisés
- [ ] Au moins 3 projets ajoutés
- [ ] Images optimisées
- [ ] Supabase configuré
- [ ] Tests effectués (toutes les pages)
- [ ] SEO vérifié (meta tags, sitemap)
- [ ] Déployé en production
- [ ] Domaine configuré
- [ ] SSL/HTTPS activé
- [ ] Analytics configuré
- [ ] Soumis à Google Search Console

Bon courage ! 🚀
