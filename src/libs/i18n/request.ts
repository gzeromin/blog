import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  // 지원하지 않는 로케일이면 기본 로케일로 fallback
  const targetLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale

  // 동적 import로 메시지 파일 불러오기 (SSR/CSR 모두 안전)
  const messages = (await import(`../../messages/${targetLocale}.json`)).default

  return {
    locale: targetLocale,
    messages,
  }
})
