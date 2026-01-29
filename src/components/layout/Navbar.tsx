import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Container, Toggle } from '@/components/ui'
import { useTheme } from '@/hooks/useTheme'
import { useI18n } from '@/hooks/useI18n'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { portfolioData } from '@/data/profile'
import { cn } from '@/utils/cn'

const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'] as const

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const activeId = useScrollSpy(80)
  const ui = portfolioData.ui.nav

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero')
          }}
          className="text-lg font-bold text-slate-900 dark:text-white"
        >
          {portfolioData.profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {sectionIds.map((id) => {
            const label = ui[id]
            const labelStr = t(label)
            const isActive = activeId === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(id)
                }}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                )}
              >
                {labelStr}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Dil: TR | EN segmentli butonlar */}
          <div
            className="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5"
            role="group"
            aria-label="Dil / Language"
          >
            <button
              type="button"
              onClick={() => setLocale('tr')}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                locale === 'tr'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              )}
              aria-pressed={locale === 'tr'}
              aria-label="Türkçe"
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                locale === 'en'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              )}
              aria-pressed={locale === 'en'}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Tema: tek toggle, ikon ile anlamlı */}
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden />
            <Toggle
              isOn={theme === 'dark'}
              label={theme === 'dark' ? 'Açık tema' : 'Koyu tema'}
              onToggle={toggleTheme}
            />
            <Moon className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" aria-hidden />
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <nav className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {sectionIds.map((id) => {
              const labelStr = t(ui[id])
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(id)
                    setMobileOpen(false)
                  }}
                  className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {labelStr}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
