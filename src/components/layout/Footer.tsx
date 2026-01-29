import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Container } from '@/components/ui'
import { useI18n } from '@/hooks/useI18n'
import { portfolioData } from '@/data/profile'

const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'] as const

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
} as const

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Footer() {
  const { t } = useI18n()
  const profile = portfolioData.profile
  const ui = portfolioData.ui

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
              {t(ui.footer.sitemap)}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(id)
                    }}
                    className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    {t(ui.nav[id])}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Mail
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label={t(s.label)}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
        <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {profile.name}. {t(ui.footer.copyright)}
        </p>
      </Container>
    </footer>
  )
}
