import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { STATS } from '@utils/constants'
import AnimatedSection from '@components/common/AnimatedSection'

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const isNumeric = !isNaN(parseInt(end))
    if (!isNumeric) {
      setCount(end)
      return
    }

    const target = parseInt(end)
    const increment = target / (duration * 60)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current) + end.replace(/[0-9]/g, ''))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count}</span>
}

const StatsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2"
                >
                  <CountUp end={stat.value} />
                </motion.div>
                <p className="text-dark-600 dark:text-dark-400 font-medium">
                  {t(stat.label)}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
