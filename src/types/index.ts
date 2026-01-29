/** i18n: her metin alanı TR ve EN */
export type LocalizedString = { tr: string; en: string }

export type Locale = 'tr' | 'en'

export type SocialLink = {
  id: string
  label: LocalizedString
  url: string
  icon: string
}

export type Profile = {
  name: string
  title: LocalizedString
  location: LocalizedString
  email: string
  shortBio: LocalizedString
  longBio: LocalizedString
  currently: LocalizedString
  openToWork: boolean
  socials: SocialLink[]
  cvUrl?: LocalizedString
  /** Profil fotoğrafı (public klasörüne göre path, örn. /cv-pp.jpg) */
  avatarUrl?: string
}

export type SkillItem = {
  name: string
  level: 1 | 2 | 3 | 4 | 5
  keywords?: string[]
  descriptionLocalized: LocalizedString
}

export type SkillCategory = {
  id: string
  name: LocalizedString
  items: SkillItem[]
}

export type ProjectLink = {
  type: 'live' | 'repo' | 'caseStudy'
  url: string
  label?: LocalizedString
}

export type ProjectMetrics = {
  stars?: number
  users?: string
  performance?: string
  [key: string]: string | number | undefined
}

export type Project = {
  id: string
  featured: boolean
  titleLocalized: LocalizedString
  descriptionLocalized: LocalizedString
  problemLocalized: LocalizedString
  solutionLocalized: LocalizedString
  resultLocalized: LocalizedString
  techDecisionsLocalized?: LocalizedString
  tradeoffsLocalized?: LocalizedString
  techStack: string[]
  tags: string[]
  roleLocalized: LocalizedString
  highlightsLocalized: LocalizedString[]
  links: ProjectLink[]
  metrics?: ProjectMetrics
  imagePath?: string
}

export type ExperienceItem = {
  id: string
  type: 'job' | 'education' | 'volunteering'
  titleLocalized: LocalizedString
  orgLocalized: LocalizedString
  periodLocalized: LocalizedString
  descriptionLocalized?: LocalizedString
  highlightsLocalized?: LocalizedString[]
}

export type SectionConfig = {
  hero: boolean
  about: boolean
  skills: boolean
  projects: boolean
  experience: boolean
  contact: boolean
}

export type PortfolioData = {
  profile: Profile
  skills: SkillCategory[]
  projects: Project[]
  experience: ExperienceItem[]
  sections: SectionConfig
  ui: UIStrings
}

export type UIStrings = {
  nav: {
    about: LocalizedString
    skills: LocalizedString
    projects: LocalizedString
    experience: LocalizedString
    contact: LocalizedString
  }
  hero: {
    ctaProjects: LocalizedString
    ctaContact: LocalizedString
    statsProjects: LocalizedString
    statsTech: LocalizedString
  }
  about: {
    title: LocalizedString
    currentlyLabel: LocalizedString
  }
  skills: {
    title: LocalizedString
    levelLabel: LocalizedString
  }
  projects: {
    title: LocalizedString
    subtitle: LocalizedString
    featured: LocalizedString
    all: LocalizedString
    filterFrontend: LocalizedString
    filterBackend: LocalizedString
    filterFullstack: LocalizedString
    searchPlaceholder: LocalizedString
    problem: LocalizedString
    solution: LocalizedString
    result: LocalizedString
    techDecisions: LocalizedString
    tradeoffs: LocalizedString
    role: LocalizedString
    highlights: LocalizedString
    liveSite: LocalizedString
    viewRepo: LocalizedString
    caseStudy: LocalizedString
    noResults: LocalizedString
  }
  experience: {
    title: LocalizedString
  }
  contact: {
    title: LocalizedString
    subtitle: LocalizedString
    downloadCv: LocalizedString
    copyEmail: LocalizedString
    emailCopied: LocalizedString
  }
  footer: {
    sitemap: LocalizedString
    copyright: LocalizedString
  }
}
