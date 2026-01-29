import { motion } from 'framer-motion'
import { useI18n } from '@/hooks/useI18n'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Container, SectionTitle } from '@/components/ui'
import { portfolioData } from '@/data/profile'

export function About() {
  const { t } = useI18n()
  const reduced = useReducedMotion()
  const profile = portfolioData.profile
  const ui = portfolioData.ui.about

  const animate = reduced ? {} : { opacity: 1, y: 0 }
  const initial = reduced ? {} : { opacity: 0, y: 16 }

  return (
    <section id="about" className="py-20 md:py-30 bg-white dark:bg-slate-900/30">
      <Container>
        <SectionTitle title={t(ui.title)} />
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-3xl space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          <p className="text-lg">{t(profile.longBio)}</p>
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800/80 p-6 border border-slate-200 dark:border-slate-700">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              {t(ui.currentlyLabel)}
            </p>
            <p>{t(profile.currently)}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
