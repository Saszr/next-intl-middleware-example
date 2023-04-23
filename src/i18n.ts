const supportedLanguages = [
  { id: 'zh_CN', locale: 'zh-CN', title: '简体中文' },
  { id: 'en', locale: 'en', title: 'English', isDefault: true },
]

const baseLanguage = supportedLanguages.find((l) => l.isDefault)!

export const i18n = {
  ids: supportedLanguages.map((l) => l.id),
  locales: supportedLanguages.map((l) => l.locale),
  defaultId: baseLanguage.id,
  defaultLocale: baseLanguage.locale,
  languages: supportedLanguages,
}

export async function getMessages({ locale }: RootParams) {
  const { default: messages } = await import(`@/messages/${locale}.json`)

  return messages
}
