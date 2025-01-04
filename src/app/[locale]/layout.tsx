import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'ar' },
    { locale: 'en' }
  ];
}

export default async function LocaleLayout({ 
  children, 
  params: { locale } 
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const translations = await initTranslations(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
} 