// import arrowIcon from '@/icons/arrow-right.svg';
import { useLocaleLink } from '@/hooks/locale-link';
import { IMiniBanner } from '@/mock/slider.data';

import { FC } from 'react';

import { Image } from '@nextui-org/react';
import Link from 'next/link';

export const MiniBanner: FC<IMiniBanner> = (props) => {
  const { url, imageUrl } = props;
  const { LocaleLink } = useLocaleLink();
  return (
    <LocaleLink
      href={url}
      className="w-full"
    >
      <Image
        src={imageUrl}
        alt="mini-banner"
        classNames={{
          wrapper: 'h-full w-full',
        }}
        className="object-contain h-full w-full"
      />
    </LocaleLink>
  );
};
