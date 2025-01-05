import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';

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
  const messages = await import(`../../messages/${params.locale}.json`)
    .then(module => module.default)
    .catch(() => notFound());

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}