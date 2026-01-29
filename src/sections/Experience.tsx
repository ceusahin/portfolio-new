import { motion } from 'framer-motion'
import { useI18n } from '@/hooks/useI18n'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Container, SectionTitle } from '@/components/ui'
import { portfolioData } from '@/data/profile'

export function Experience() {
  const { t } = useI18n()
  const reduced = useReducedMotion()
  const experience = portfolioData.experience
  const ui = portfolioData.ui.experience

  const animate = reduced ? {} : { opacity: 1, y: 0 }
  const initial = reduced ? {} : { opacity: 0, y: 12 }

  if (experience.length === 0) return null

  return (
    <section id="experience" className="py-20 md:py-30 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <SectionTitle title={t(ui.title)} />
        <ul className="space-y-8">
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              initial={initial}
              whileInView={animate}
              viewport={{ once: true, margin: '-30px' }}
              className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t(item.titleLocalized)}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t(item.orgLocalized)} · {t(item.periodLocalized)}
              </p>
              {item.descriptionLocalized && (
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  {t(item.descriptionLocalized)}
                </p>
              )}
              {item.highlightsLocalized && item.highlightsLocalized.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-400 text-sm">
                  {item.highlightsLocalized.map((h, j) => (
                    <li key={j}>{t(h)}</li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
