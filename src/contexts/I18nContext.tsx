import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { Locale } from '@/types'
import { getLocalized } from '@/utils/i18n'
import type { LocalizedString } from '@/types'

const STORAGE_KEY = 'portfolio-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'tr'
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  return stored === 'en' ? 'en' : 'tr'
}

type I18nContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: (obj: LocalizedString) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'tr' ? 'tr' : 'en'
  }, [locale])

  const t = useCallback(
    (obj: LocalizedString) => getLocalized(obj, locale),
    [locale]
  )

  const setLocale = useCallback((next: Locale) => setLocaleState(next), [])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}
