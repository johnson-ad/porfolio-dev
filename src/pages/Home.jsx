import HeroSection from '@components/home/HeroSection'
import StatsSection from '@components/home/StatsSection'
import ServicesSection from '@components/home/ServicesSection'
import PortfolioSection from '@components/home/PortfolioSection'
import TestimonialsSection from '@components/home/TestimonialsSection'
import CTASection from '@components/home/CTASection'
import SEO from '@components/common/SEO'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO 
        title={t('hero.title')}
        description={t('hero.description')}
        keywords="développeur full stack, react developer, node.js, web development, freelance developer"
      />
      
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default Home
