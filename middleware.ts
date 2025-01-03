import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/navigation';

export default createMiddleware({
  defaultLocale,
  locales
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 