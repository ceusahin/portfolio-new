import { ScrollProgress, Navbar, Footer } from '@/components/layout'
import { Hero, About, Skills, Projects, Experience, Contact } from '@/sections'
import { portfolioData } from '@/data/profile'
import { useTheme } from '@/hooks/useTheme'
import { useEffect } from 'react'

export function App() {
  const { theme } = useTheme()
  const sections = portfolioData.sections

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {sections.hero && <Hero />}
        {sections.about && <About />}
        {sections.skills && <Skills />}
        {sections.projects && <Projects />}
        {sections.experience && <Experience />}
        {sections.contact && <Contact />}
      </main>
      <Footer />
    </>
  )
}
