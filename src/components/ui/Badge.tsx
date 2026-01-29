import { cn } from '@/utils/cn'

export interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'muted' | 'accent'
}

const variantClasses = {
  default:
    'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200',
  muted:
    'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
  accent:
    'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900',
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
