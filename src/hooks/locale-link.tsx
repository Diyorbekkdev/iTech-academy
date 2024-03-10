import { ReactNode } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ILocaleLink {
  href: string;
  children: ReactNode;

  [key: string]: any;
}

export const useLocaleLink = () => {
  const pathname = usePathname();

  const getRedirectedPath = (url?: string, locale?: string) => {
    if (!pathname) return '/';
    if (locale) {
      return `/${locale}/${url}`;
    } else {
      const locale = pathname.split('/')[1];
      return `/${locale}/${url}`;
    }
  };

  const LocaleLink = ({ href, locale, ...props }: ILocaleLink) => {
    const redirectedPath = getRedirectedPath(href, locale);
    return (
      <Link
        href={redirectedPath}
        {...props}
      />
    );
  };

  return { LocaleLink };
};
