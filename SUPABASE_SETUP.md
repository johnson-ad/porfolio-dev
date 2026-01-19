# 🔧 Guide de Configuration Supabase

Guide détaillé pour configurer Supabase pour votre application portfolio.

## 1. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte ou connectez-vous
3. Cliquez sur "New Project"
4. Remplissez les informations :
   - **Name**: portfolio-fullstack
   - **Database Password**: Choisissez un mot de passe fort
   - **Region**: Choisissez la région la plus proche
   - **Pricing Plan**: Free (gratuit)

## 2. Récupérer les clés API

1. Dans votre projet, allez dans **Settings** > **API**
2. Copiez les informations suivantes :
   - **Project URL** 
   - **anon/public key**

3. Créez un fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key
VITE_APP_URL=http://localhost:3000
VITE_ADMIN_EMAIL=admin@example.com
```

## 3. Créer les tables

Allez dans **SQL Editor** et exécutez ces requêtes une par une :

### Table Projects
```sql
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
```

### Table Testimonials
```sql
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
```

### Table Contact Messages
```sql
CREATE TABLE contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 4. Configurer Row Level Security (RLS)

```sql
-- Activer RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Lecture publique pour projets
CREATE POLICY "Public read access" ON projects
  FOR SELECT USING (true);

-- Lecture publique pour témoignages
CREATE POLICY "Public read access" ON testimonials
  FOR SELECT USING (true);

-- Gestion complète pour admins authentifiés
CREATE POLICY "Admin full access projects" ON projects
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access testimonials" ON testimonials
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access messages" ON contact_messages
  FOR ALL USING (auth.role() = 'authenticated');

-- Insertion publique des messages
CREATE POLICY "Anyone can insert messages" ON contact_messages
  FOR INSERT WITH CHECK (true);
```

## 5. Créer un utilisateur admin

1. Allez dans **Authentication** > **Users**
2. Cliquez sur **Add User** > **Create new user**
3. Entrez :
   - Email: votre-email@example.com
   - Password: Choisissez un mot de passe sécurisé
4. Cliquez sur **Create user**

## 6. Configuration du Storage (Optionnel)

Pour uploader des images de projets :

1. Allez dans **Storage**
2. Créez un nouveau bucket nommé `images`
3. Configurez les politiques :

```sql
-- Lecture publique
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');

-- Upload pour utilisateurs authentifiés
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'images' AND 
    auth.role() = 'authenticated'
  );
```

## 7. Tester la connexion

Lancez votre application :
```bash
npm run dev
```

Essayez de :
1. Aller sur `/admin/login`
2. Vous connecter avec vos identifiants
3. Ajouter un projet test

## ✅ Checklist

- [ ] Projet Supabase créé
- [ ] Variables d'environnement configurées
- [ ] Tables créées (projects, testimonials, contact_messages)
- [ ] RLS activé et politiques configurées
- [ ] Utilisateur admin créé
- [ ] Storage configuré (optionnel)
- [ ] Application testée

## 🆘 Problèmes courants

### Erreur de connexion
- Vérifiez que les variables d'environnement sont correctes
- Redémarrez le serveur de développement après modification du `.env`

### Impossible d'insérer des données
- Vérifiez que les politiques RLS sont correctement configurées
- Assurez-vous d'être authentifié pour les opérations protégées

### Images non chargées
- Vérifiez que le bucket `images` existe
- Vérifiez les politiques de lecture publique

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Guide RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Guide Storage](https://supabase.com/docs/guides/storage)
