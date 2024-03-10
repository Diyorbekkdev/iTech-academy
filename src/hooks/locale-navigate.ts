import { i18n } from '@/i18n.config';
import { TLocale } from '@/types';

import { usePathname, useRouter } from 'next/navigation';

export const useLocaleNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (url?: string, locale?: TLocale) => {
    const redirectedPath = getRedirectedPath(url, locale);
    router.push(redirectedPath);
  };

  const getRedirectedPath = (url?: string, locale?: string) => {
    if (!pathname) return '/';
    if (locale) {
      return `/${locale}/${url}`;
    } else {
      const locale = pathname.split('/')[1];
      return `/${locale}/${url}`;
    }
  };

  return { navigate };
};
