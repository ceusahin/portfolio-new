import { motion } from 'framer-motion'
import { useI18n } from '@/hooks/useI18n'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Container, Button } from '@/components/ui'
import { portfolioData } from '@/data/profile'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  const { t } = useI18n()
  const reduced = useReducedMotion()
  const profile = portfolioData.profile
  const ui = portfolioData.ui.hero
  const projectCount = portfolioData.projects.length
  const techCount = portfolioData.skills.reduce((acc, cat) => acc + cat.items.length, 0)

  const animate = reduced
    ? {}
    : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }
  const initial = reduced ? {} : { opacity: 0, y: 20 }

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center py-20 md:py-30 bg-slate-50 dark:bg-slate-900/50"
    >
      <Container className="text-center">
        {profile.avatarUrl && (
          <motion.div
            initial={initial}
            animate={animate}
            className="flex justify-center mb-8"
          >
            <img
              src={profile.avatarUrl}
              alt=""
              aria-hidden="true"
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-slate-200 dark:ring-slate-700 shadow-lg"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        )}
        <motion.h1
          initial={initial}
          animate={animate}
          className="text-display-xl font-bold text-slate-900 dark:text-white tracking-tight"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ delay: 0.1 }}
          className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-400"
        >
          {t(profile.title)}
        </motion.p>
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          {t(profile.shortBio)}
        </motion.p>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            aria-label={t(ui.ctaProjects)}
          >
            {t(ui.ctaProjects)}
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('contact')}
            aria-label={t(ui.ctaContact)}
          >
            {t(ui.ctaContact)}
          </Button>
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400"
        >
          <span>
            <strong className="text-slate-900 dark:text-white">{projectCount}</strong>{' '}
            {t(ui.statsProjects)}
          </span>
          <span>
            <strong className="text-slate-900 dark:text-white">{techCount}</strong>{' '}
            {t(ui.statsTech)}
          </span>
        </motion.div>
      </Container>
    </section>
  )
}
