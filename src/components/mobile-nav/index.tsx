'use client';

import { useLocaleLink } from '@/hooks/locale-link';
import { headerData } from '@/mock/header.data';
import { TLocale } from '@/types';

import { FC } from 'react';

import { Button } from '@nextui-org/button';
import { Image, useDisclosure } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

interface IMobileNav {
  lang: TLocale;
}

export const MobileNav: FC<IMobileNav> = ({ lang }) => {
  const { LocaleLink } = useLocaleLink();
  const t = useTranslations('header');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <ul className="fixed place-items-center top-shadow bottom-0 px-1 py-1 sm:px-5 grid sm:py-3 bg-white grid-cols-5 left-0 w-full z-[50] lg:hidden">
      {headerData.headerLink.map(({ key, url, icon }, idx) =>
        url ? (
          <li key={url}>
            <LocaleLink href={url}>
              <Button
                size="sm"
                radius="lg"
                className="bg-transparent flex px-0 py-7 items-center justify-center flex-col gap-1"
              >
                <Image
                  src={icon.src}
                  className="w-5 h-5 sm:w-6 sm:h-6 mt-1.5 rounded-none"
                  alt={idx + ' icon'}
                />
                <p className="mb-1 text-xxs xsm:text-xs sm:text-sm font-semibold">{t(key)}</p>
              </Button>
            </LocaleLink>
          </li>
        ) : (
          <li key={url}>
            <Button
              size="sm"
              radius="lg"
              className="bg-transparent flex px-0 py-7 items-center justify-center flex-col gap-1"
            >
              <Image
                src={icon.src}
                className="w-5 h-5 sm:w-6 sm:h-6 mt-1.5 rounded-none"
                alt={idx + ' icon'}
              />
              <p className="mb-1 text-xxs xsm:text-xs sm:text-sm font-semibold">{t(key)}</p>
            </Button>
          </li>
        )
      )}
    </ul>
  );
};
