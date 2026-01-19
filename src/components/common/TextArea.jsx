import { forwardRef } from 'react'
import { cn } from '@utils/helpers'

const TextArea = forwardRef(({ 
  label,
  error,
  rows = 4,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'input-field resize-none',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
