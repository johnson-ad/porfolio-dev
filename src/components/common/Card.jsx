import { motion } from 'framer-motion'
import { cn } from '@utils/helpers'

const Card = ({ 
  children, 
  className = '',
  hover = false,
  clickable = false,
  ...props 
}) => {
  const Component = clickable ? motion.button : motion.div

  return (
    <Component
      className={cn(
        'card p-6',
        hover && 'card-hover cursor-pointer',
        clickable && 'w-full text-left',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card
