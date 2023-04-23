import createIntlMiddleware from 'next-intl/middleware'

import { i18n } from './i18n'

export default createIntlMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,

  routing: {
    type: 'domain',
    domains: [
      {
        domain: 'localhost',
        locale: 'en',
      },
      {
        domain: 'zh.localhost',
        locale: 'zh-CN',
      },
    ],
  },
})

export const config = {
  // Skip all paths that aren't pages that you'd like to internationalize
  matcher: ['/((?!api|_next|_vercel|favicon.ico|assets|studio|fonts).*)'],
}
