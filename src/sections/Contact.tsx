import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, Linkedin, Github } from 'lucide-react'
import { Container, SectionTitle, Button } from '@/components/ui'
import { useI18n } from '@/hooks/useI18n'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { portfolioData } from '@/data/profile'
import { cn } from '@/utils/cn'

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Mail,
} as const

export function Contact() {
  const { t } = useI18n()
  const reduced = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const profile = portfolioData.profile
  const ui = portfolioData.ui.contact

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [profile.email])

  const animate = reduced ? {} : { opacity: 1, y: 0 }
  const initial = reduced ? {} : { opacity: 0, y: 12 }

  return (
    <section id="contact" className="py-20 md:py-30 bg-white dark:bg-slate-900/30">
      <Container>
        <SectionTitle title={t(ui.title)} subtitle={t(ui.subtitle)} />
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center"
        >
          {profile.cvUrl && (
            <a
              href={t(profile.cvUrl)}
              download
              className="inline-flex items-center gap-2"
              aria-label={t(ui.downloadCv)}
            >
              <Button variant="primary" size="lg">
                <Download size={20} />
                {t(ui.downloadCv)}
              </Button>
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2"
            aria-label={`Email: ${profile.email}`}
          >
            <Button variant="outline" size="lg">
              <Mail size={20} />
              {profile.email}
            </Button>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-300 dark:border-slate-600 font-medium transition-colors',
              copied
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-400'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
            )}
            aria-label={t(ui.copyEmail)}
          >
            {copied ? t(ui.emailCopied) : t(ui.copyEmail)}
          </button>
          <div className="flex gap-2">
            {profile.socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap] ?? Mail
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label={t(s.label)}
                >
                  <Icon size={22} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
