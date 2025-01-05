import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '../navigation';

export default getRequestConfig(async () => {
  return {
    messages: (await import(`../messages/${defaultLocale}.json`)).default,
    defaultLocale,
    locales,
    locale: defaultLocale
  };
}); 