import { useLocaleLink } from '@/hooks/locale-link';

import React from 'react';

import { Button } from '@nextui-org/react';

interface NoDataForProductsProps {
  title: string;
  description: string;
  buttonContent: string;
  href: string;
}

export const NoDataForProducts = ({
  title,
  description,
  buttonContent,
  href,
}: NoDataForProductsProps) => {
  const { LocaleLink } = useLocaleLink();
  return (
    <div className="flex flex-col bg-light-green py-20 px-3 rounded-md items-center justify-center gap-3 w-full">
      <h1 className="sm:text-md md:text-lg font-bold">{title}</h1>
      <p className="md:max-w-[50%] text-center">{description}</p>
      <LocaleLink href={href}>
        <Button color="primary">{buttonContent}</Button>
      </LocaleLink>
    </div>
  );
};
