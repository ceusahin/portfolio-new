import { useState, useRef, useEffect, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface TooltipProps {
  children: ReactNode
  content: string
  className?: string
  side?: 'top' | 'bottom'
}

export function Tooltip({ children, content, className, side = 'top' }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!visible) return
    const el = ref.current
    if (!el) return
    const focusHandler = () => setVisible(true)
    const blurHandler = () => setVisible(false)
    el.addEventListener('focus', focusHandler)
    el.addEventListener('blur', blurHandler)
    return () => {
      el.removeEventListener('focus', focusHandler)
      el.removeEventListener('blur', blurHandler)
    }
  }, [visible])

  return (
    <div
      ref={ref}
      className={cn('relative inline-flex', className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && content && (
        <span
          role="tooltip"
          className={cn(
            'absolute z-50 px-3 py-1.5 text-sm font-medium text-white bg-slate-900 dark:bg-slate-700 rounded-lg shadow-lg whitespace-nowrap',
            side === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
            side === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2'
          )}
        >
          {content}
        </span>
      )}
    </div>
  )
}
