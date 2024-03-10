import { ISlide } from '@/mock/slider.data';
import { IImage } from '@/types';

import { FC } from 'react';

import { Image } from '@nextui-org/react';

interface IBanner extends IImage, ISlide {}

export const Banner: FC<IBanner> = (props) => {
  const { url, image } = props;
  return (
    <Image
      className="w-full h-full object-cover rounded-none"
      classNames={{
        wrapper: 'w-full h-full',
      }}
      src={url || image}
      alt="banner-img"
    />
  );
};
