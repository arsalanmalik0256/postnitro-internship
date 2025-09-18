// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // adjust path if needed

// Just pass the routing object
export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  ]
};
