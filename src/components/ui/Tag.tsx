import { cn } from '@/utils/cn'

export interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
        className
      )}
    >
      {children}
    </span>
  )
}
