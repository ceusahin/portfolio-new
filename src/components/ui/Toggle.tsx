import { type ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOn: boolean
  label: string
  onToggle: () => void
}

export function Toggle({ isOn, label, onToggle, className, ...props }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={label}
      onClick={onToggle}
      className={cn(
        'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400',
        isOn ? 'bg-slate-900 dark:bg-slate-100' : 'bg-slate-200 dark:bg-slate-700',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition',
          isOn ? 'translate-x-5 bg-slate-800 dark:bg-slate-600' : 'translate-x-0.5 bg-white'
        )}
      />
    </button>
  )
}
