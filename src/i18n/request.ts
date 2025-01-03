import { getRequestConfig } from 'next-intl/server';
import { locales } from '../navigation';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    throw new Error('Invalid locale');
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    locale
  };
}); 