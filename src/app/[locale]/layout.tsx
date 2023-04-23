import '@/app/globals.css'

import { notFound } from 'next/navigation'

import { IntlProvider } from '@/contexts'
import { getMessages, i18n } from '@/i18n'

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: RootParams
}) {
  let messages
  try {
    messages = await getMessages(params)
  } catch (error) {
    notFound()
  }

  return (
    <html lang={params.locale} suppressHydrationWarning className={`font-sans`}>
      <body className="bg-stone-50 text-stone-800">
        <IntlProvider locale={params.locale} messages={messages}>
          <main className="relative flex min-h-screen">{children}</main>
        </IntlProvider>
      </body>
    </html>
  )
}
