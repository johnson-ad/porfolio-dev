# 🔄 Workflow Git - Portfolio Dev

## 📋 Structure des Branches

### Branches Principales

- **`main`** : Branche de production stable
  - Contient uniquement du code testé et validé
  - Protégée contre les push directs
  - Chaque commit est tagué avec une version (v1.0.0, v1.1.0, etc.)

- **`develop`** : Branche de développement
  - Branche de travail principale
  - Intègre toutes les nouvelles fonctionnalités
  - Base pour créer les branches feature

### Branches de Fonctionnalités

- **`feature/*`** : Nouvelles fonctionnalités
  - `feature/design-improvements` : Améliorations du design
  - `feature/new-component` : Nouveaux composants
  - `feature/performance` : Optimisations de performance

## 🏷️ Convention de Nommage des Commits

Nous utilisons le format **Conventional Commits** :

```
<type>(<scope>): <description>

[corps optionnel]

[footer optionnel]
```

### Types de Commits

- **feat**: Nouvelle fonctionnalité
  ```bash
  git commit -m "feat: ajout du composant Carousel"
  ```

- **fix**: Correction de bug
  ```bash
  git commit -m "fix: correction de l'affichage mobile du menu"
  ```

- **style**: Changements de style (CSS, design)
  ```bash
  git commit -m "style: amélioration du design de la page d'accueil"
  ```

- **refactor**: Refactorisation du code
  ```bash
  git commit -m "refactor: optimisation du composant ProjectCard"
  ```

- **perf**: Amélioration des performances
  ```bash
  git commit -m "perf: lazy loading des images"
  ```

- **docs**: Documentation
  ```bash
  git commit -m "docs: mise à jour du README"
  ```

- **chore**: Tâches de maintenance
  ```bash
  git commit -m "chore: mise à jour des dépendances"
  ```

- **test**: Ajout ou modification de tests
  ```bash
  git commit -m "test: ajout des tests pour le service API"
  ```

## 🔄 Workflow de Développement

### 1. Créer une Nouvelle Fonctionnalité

```bash
# Se positionner sur develop
git checkout develop

# Mettre à jour develop
git pull origin develop

# Créer une branche feature
git checkout -b feature/nom-fonctionnalite

# Travailler sur votre fonctionnalité
# ... faire des commits ...

# Pousser la branche
git push origin feature/nom-fonctionnalite
```

### 2. Fusionner une Fonctionnalité

```bash
# Se positionner sur develop
git checkout develop

# Mettre à jour develop
git pull origin develop

# Fusionner la branche feature
git merge feature/nom-fonctionnalite

# Pousser les changements
git push origin develop

# Supprimer la branche feature (optionnel)
git branch -d feature/nom-fonctionnalite
git push origin --delete feature/nom-fonctionnalite
```

### 3. Créer une Release

```bash
# Se positionner sur main
git checkout main

# Fusionner develop dans main
git merge develop

# Créer un tag de version
git tag -a v1.1.0 -m "Version 1.1.0 - Description des changements"

# Pousser vers GitHub
git push origin main
git push origin v1.1.0
```

## 📌 Tags et Versions

Nous utilisons le **Semantic Versioning** (SemVer) :

- **v1.0.0** : Version majeure (breaking changes)
- **v1.1.0** : Version mineure (nouvelles fonctionnalités)
- **v1.1.1** : Version patch (corrections de bugs)

### Créer un Tag

```bash
# Tag annoté avec message
git tag -a v1.1.0 -m "Version 1.1.0 - Améliorations du design"

# Pousser le tag
git push origin v1.1.0

# Pousser tous les tags
git push origin --tags
```

### Lister les Tags

```bash
# Voir tous les tags
git tag

# Voir les détails d'un tag
git show v1.0.0
```

## 🔙 Revenir en Arrière

### Revenir à une Version Précédente

```bash
# Voir l'historique
git log --oneline --graph --all

# Revenir à un commit spécifique (sans perdre l'historique)
git revert <commit-hash>

# Revenir à un tag
git checkout v1.0.0

# Créer une branche à partir d'un tag
git checkout -b hotfix/from-v1.0.0 v1.0.0
```

### Annuler des Changements

```bash
# Annuler les modifications non commitées
git checkout -- <fichier>

# Annuler le dernier commit (garde les modifications)
git reset --soft HEAD~1

# Annuler le dernier commit (supprime les modifications)
git reset --hard HEAD~1
```

## 📊 État Actuel du Projet

### Branches

```
main (production)
├── v1.0.0 (tag)
│
develop (développement)
│
feature/design-improvements (en cours)
```

### Historique des Versions

#### v1.0.0 (Release Initiale)
- ✅ Configuration du projet (Vite, React, TailwindCSS)
- ✅ Composants communs réutilisables
- ✅ Layout responsive (Header, Footer)
- ✅ Pages principales (Home, About, Services, Portfolio, Contact)
- ✅ Panel d'administration avec Supabase
- ✅ Authentification sécurisée
- ✅ Gestion des projets et témoignages
- ✅ Multilingue (FR/EN)
- ✅ Mode sombre/clair
- ✅ Animations Framer Motion
- ✅ SEO optimisé

## 🚀 Commandes Rapides

```bash
# Voir l'état actuel
git status

# Voir l'historique
git log --oneline --graph --all --decorate

# Voir les branches
git branch -a

# Voir les tags
git tag

# Changer de branche
git checkout <nom-branche>

# Mettre à jour depuis GitHub
git pull

# Pousser vers GitHub
git push
```

## 💡 Bonnes Pratiques

1. **Commits fréquents** : Faire des commits réguliers avec des messages clairs
2. **Une fonctionnalité = Une branche** : Isoler chaque développement
3. **Tester avant de merger** : Toujours vérifier que tout fonctionne
4. **Pull avant de Push** : Toujours mettre à jour avant de pousser
5. **Messages descriptifs** : Expliquer le "pourquoi" dans les commits
6. **Utiliser les tags** : Marquer les versions importantes

## 📞 Support

Pour toute question sur le workflow Git, consultez :
- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
