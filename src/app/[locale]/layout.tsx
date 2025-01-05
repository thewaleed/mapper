import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import '../globals.css';

type LayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  const locale = params.locale as string;
  const messages = await import(`../../messages/${locale}.json`)
    .then(module => module.default)
    .catch(() => notFound());

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}