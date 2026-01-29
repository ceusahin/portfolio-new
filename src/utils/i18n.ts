import type { LocalizedString, Locale } from '@/types'

export function getLocalized(obj: LocalizedString, locale: Locale): string {
  return obj[locale] ?? obj.tr ?? obj.en ?? ''
}
