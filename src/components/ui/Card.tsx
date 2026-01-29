import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glassy'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl transition-shadow duration-300',
        variant === 'glassy' &&
          'bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-slate-200/50 dark:border-slate-700/50',
        variant === 'default' &&
          'bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-hover-dark',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'
