import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';
import { defaultLocale } from '@/navigation';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function LocaleLayout({ 
  children, 
  params 
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await import(`../../messages/${defaultLocale}.json`)
    .then(module => module.default)
    .catch(() => notFound());

  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={defaultLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 