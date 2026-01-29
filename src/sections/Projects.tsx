import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ExternalLink, Github, X } from 'lucide-react'
import { Container, SectionTitle, Card, Button, Tag, Badge, Modal } from '@/components/ui'
import { useI18n } from '@/hooks/useI18n'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { portfolioData } from '@/data/profile'
import type { Project } from '@/types'
import { cn } from '@/utils/cn'

type FilterType = 'all' | 'Frontend' | 'Backend' | 'Full-stack'

const filterLabels = {
  all: 'all',
  Frontend: 'filterFrontend',
  Backend: 'filterBackend',
  'Full-stack': 'filterFullstack',
} as const

function getProjectTags(project: Project): string[] {
  return [...new Set([...project.techStack, ...project.tags])]
}

function matchesFilter(project: Project, filter: FilterType): boolean {
  if (filter === 'all') return true
  const tags = getProjectTags(project)
  return tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
}

function matchesSearch(project: Project, query: string, t: (x: { tr: string; en: string }) => string): boolean {
  if (!query.trim()) return true
  const q = query.toLowerCase()
  const title = t(project.titleLocalized).toLowerCase()
  const desc = t(project.descriptionLocalized).toLowerCase()
  const tech = project.techStack.join(' ').toLowerCase()
  return title.includes(q) || desc.includes(q) || tech.includes(q)
}

export function Projects() {
  const { t } = useI18n()
  const reduced = useReducedMotion()
  const [filter, setFilter] = useState<FilterType>('all')
  const [search, setSearch] = useState('')
  const [modalProject, setModalProject] = useState<Project | null>(null)
  const ui = portfolioData.ui.projects
  const projects = portfolioData.projects

  const filtered = useMemo(() => {
    const list = projects.filter(
      (p) => matchesFilter(p, filter) && matchesSearch(p, search, t)
    )
    if (filter === 'all' && !search.trim()) {
      return [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return list
  }, [projects, filter, search, t])

  const animate = reduced ? {} : { opacity: 1, y: 0 }
  const initial = reduced ? {} : { opacity: 0, y: 12 }

  if (projects.length === 0) return null

  return (
    <section id="projects" className="py-20 md:py-30 bg-white dark:bg-slate-900/30">
      <Container>
        <SectionTitle title={t(ui.title)} subtitle={t(ui.subtitle)} />

        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              aria-hidden
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t(ui.searchPlaceholder)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              aria-label={t(ui.searchPlaceholder)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['all', 'Frontend', 'Backend', 'Full-stack'] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  filter === f
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                {t(ui[filterLabels[f]])}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <p className="col-span-full text-center text-slate-500 dark:text-slate-400 py-12">
                {t(ui.noResults)}
              </p>
            ) : (
              filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  initial={initial}
                  animate={animate}
                  reduced={reduced}
                  onOpen={() => setModalProject(project)}
                  t={t}
                  ui={ui}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </Container>

      <Modal
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
        title={modalProject ? t(modalProject.titleLocalized) : undefined}
        aria-label={modalProject ? t(modalProject.titleLocalized) : undefined}
      >
        {modalProject && (
          <ProjectModalContent
            project={modalProject}
            onClose={() => setModalProject(null)}
            t={t}
            ui={ui}
          />
        )}
      </Modal>
    </section>
  )
}

function ProjectCard({
  project,
  initial,
  animate,
  reduced,
  onOpen,
  t,
  ui,
}: {
  project: Project
  initial: object
  animate: object
  reduced: boolean
  onOpen: () => void
  t: (x: { tr: string; en: string }) => string
  ui: typeof portfolioData.ui.projects
}) {
  const liveLink = project.links.find((l) => l.type === 'live')
  const repoLink = project.links.find((l) => l.type === 'repo')

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-20px' }}
      className="h-full"
    >
      <Card
        className="p-6 h-full flex flex-col cursor-pointer hover:-translate-y-1 transition-transform"
        onClick={onOpen}
      >
        {project.featured && (
          <Badge variant="accent" className="mb-3 w-fit">
            {t(ui.featured)}
          </Badge>
        )}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {t(project.titleLocalized)}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {t(project.descriptionLocalized)}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <div className="mt-auto pt-4 flex gap-2">
          {liveLink && (
            <a
              href={liveLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              onClick={(e) => e.stopPropagation()}
              aria-label={t(ui.liveSite)}
            >
              <ExternalLink size={16} />
              {t(ui.liveSite)}
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              onClick={(e) => e.stopPropagation()}
              aria-label={t(ui.viewRepo)}
            >
              <Github size={16} />
              {t(ui.viewRepo)}
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

function ProjectModalContent({
  project,
  onClose,
  t,
  ui,
}: {
  project: Project
  onClose: () => void
  t: (x: { tr: string; en: string }) => string
  ui: typeof portfolioData.ui.projects
}) {
  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
      </div>
      <h2 className="text-display-md font-bold text-slate-900 dark:text-white pr-10">
        {t(project.titleLocalized)}
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        {t(project.descriptionLocalized)}
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
        {t(ui.role)}: {t(project.roleLocalized)}
      </p>

      <div className="mt-6 space-y-4">
        <Block label={t(ui.problem)} content={t(project.problemLocalized)} />
        <Block label={t(ui.solution)} content={t(project.solutionLocalized)} />
        <Block label={t(ui.result)} content={t(project.resultLocalized)} />
        {project.techDecisionsLocalized && (
          <Block
            label={t(ui.techDecisions)}
            content={t(project.techDecisionsLocalized)}
          />
        )}
        {project.tradeoffsLocalized && (
          <Block
            label={t(ui.tradeoffs)}
            content={t(project.tradeoffsLocalized)}
          />
        )}
      </div>

      {project.highlightsLocalized.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            {t(ui.highlights)}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
            {project.highlightsLocalized.map((h, i) => (
              <li key={i}>{t(h)}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {project.metrics && Object.keys(project.metrics).length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
          {project.metrics.stars != null && (
            <span>⭐ {project.metrics.stars} stars</span>
          )}
          {project.metrics.users && (
            <span>👥 {project.metrics.users}</span>
          )}
          {project.metrics.performance && (
            <span>🚀 {project.metrics.performance}</span>
          )}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.type + link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Button variant="outline" size="sm">
              {link.type === 'live'
                ? t(ui.liveSite)
                : link.type === 'repo'
                  ? t(ui.viewRepo)
                  : t(ui.caseStudy)}
              <ExternalLink size={14} />
            </Button>
          </a>
        ))}
      </div>
    </div>
  )
}

function Block({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </h4>
      <p className="mt-1 text-slate-600 dark:text-slate-400">{content}</p>
    </div>
  )
}
