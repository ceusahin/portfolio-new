import { motion } from 'framer-motion'
import { useI18n } from '@/hooks/useI18n'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Container, SectionTitle, Tooltip } from '@/components/ui'
import { portfolioData } from '@/data/profile'
import type { SkillCategory } from '@/types'

function LevelBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-2 w-4 rounded-sm ${
            i <= level
              ? 'bg-slate-900 dark:bg-slate-100'
              : 'bg-slate-200 dark:bg-slate-700'
          }`}
        />
      ))}
    </div>
  )
}

export function Skills() {
  const { t } = useI18n()
  const reduced = useReducedMotion()
  const categories = portfolioData.skills
  const ui = portfolioData.ui.skills

  const animate = reduced ? {} : { opacity: 1, y: 0 }
  const initial = reduced ? {} : { opacity: 0, y: 12 }

  if (categories.length === 0) return null

  return (
    <section id="skills" className="py-20 md:py-30 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        <SectionTitle title={t(ui.title)} subtitle={t(ui.levelLabel)} />
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat: SkillCategory, i) => (
            <motion.div
              key={cat.id}
              initial={initial}
              whileInView={animate}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-6 shadow-card dark:shadow-card-dark"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {t(cat.name)}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <Tooltip
                        content={t(item.descriptionLocalized)}
                        side="top"
                      >
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          {item.name}
                        </span>
                      </Tooltip>
                      <LevelBar level={item.level} />
                    </div>
                    {item.keywords && item.keywords.length > 0 && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {item.keywords.join(' · ')}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
