export const locales = ['en', 'ar', 'fr'] as const;
export const defaultLocale = 'fr' as const;

export function getLanguage(locale: string) {
  switch (locale) {
    case 'ar':
      return 'عربي';
    case 'fr':
      return 'Français';
    default:
      return 'English';
  }
} 