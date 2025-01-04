import { getRequestConfig } from 'next-intl/server';
import { locales } from '../navigation';

export async function request(locale: string, namespace: string | string[]) {
  if (!locales.includes(locale)) {
    throw new Error('Invalid locale');
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    locale
  };
} 