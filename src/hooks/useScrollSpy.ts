import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export function useScrollSpy(offset = 100) {
  const [activeId, setActiveId] = useState<string>('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = 'hero'
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i])
        if (el && el.offsetTop - offset <= scrollY) {
          current = SECTION_IDS[i]
          break
        }
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return activeId
}
