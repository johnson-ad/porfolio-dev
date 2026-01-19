import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords,
  image,
  url,
  type = 'website',
  author = 'Votre Nom'
}) => {
  const siteTitle = 'Portfolio Full Stack Developer'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://votreportfolio.com'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const defaultImage = `${siteUrl}/og-image.jpg`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": author,
          "url": siteUrl,
          "jobTitle": "Développeur Full Stack",
          "description": description,
          "image": image || defaultImage,
          "sameAs": [
            "https://www.linkedin.com/in/votre-profil",
            "https://github.com/votre-username"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO
