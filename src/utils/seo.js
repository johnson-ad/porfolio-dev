// Generate JSON-LD structured data for SEO

export const generatePersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Votre Nom",
    "url": "https://votreportfolio.com",
    "jobTitle": "Développeur Full Stack",
    "description": "Développeur Full Stack spécialisé en React, Node.js et solutions cloud",
    "image": "https://votreportfolio.com/profile.jpg",
    "email": "contact@votremail.com",
    "telephone": "+33 6 00 00 00 00",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.linkedin.com/in/votre-profil",
      "https://github.com/votre-username",
      "https://www.upwork.com/freelancers/votre-profil",
      "https://www.fiverr.com/votre-username"
    ],
    "knowsAbout": [
      "Web Development",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Full Stack Development",
      "UI/UX Design"
    ]
  }
}

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Portfolio Full Stack Developer",
    "url": "https://votreportfolio.com",
    "description": "Portfolio professionnel présentant mes projets et services de développement web",
    "author": {
      "@type": "Person",
      "name": "Votre Nom"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://votreportfolio.com/portfolio?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

export const generatePortfolioItemSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "url": `https://votreportfolio.com/portfolio/${project.slug}`,
    "author": {
      "@type": "Person",
      "name": "Votre Nom"
    },
    "keywords": project.technologies.join(', '),
    "genre": project.category
  }
}

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Person",
      "name": "Votre Nom",
      "url": "https://votreportfolio.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de développement web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Pages Premium",
            "description": "Design moderne, animations fluides et optimisation SEO"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Applications Web Full Stack",
            "description": "Solutions complètes avec React, Node.js et bases de données"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sites E-commerce",
            "description": "Boutiques en ligne avec intégration paiement et gestion complète"
          }
        }
      ]
    }
  }
}

export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://votreportfolio.com${item.path}`
    }))
  }
}

export const generateBlogPostSchema = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Votre Nom"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Portfolio Full Stack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://votreportfolio.com/logo.png"
      }
    }
  }
}
