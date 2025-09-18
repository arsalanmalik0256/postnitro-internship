import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
	locales: ['en', 'es', 'fr', 'zh'],
	defaultLocale: 'en', // ← default locale will be hidden
  });
  
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);