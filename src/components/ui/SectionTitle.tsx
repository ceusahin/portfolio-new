import { cn } from '@/utils/cn'

export interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <header className={cn('mb-12 md:mb-16', className)}>
      <h2 className="text-display-lg font-bold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </header>
  )
}
