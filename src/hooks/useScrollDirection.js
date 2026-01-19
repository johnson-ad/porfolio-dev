import { useState, useEffect } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [prevOffset, setPrevOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset
      
      if (currentOffset > prevOffset) {
        setScrollDirection('down')
      } else if (currentOffset < prevOffset) {
        setScrollDirection('up')
      }
      
      setPrevOffset(currentOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevOffset])

  return scrollDirection
}

export default useScrollDirection
