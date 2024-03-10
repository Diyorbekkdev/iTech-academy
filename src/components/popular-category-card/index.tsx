import { ILocaleData, TLocale } from '@/types';

import { FC } from 'react';

import { Image, Skeleton } from '@nextui-org/react';

interface IPopularCategoryCard {
  name: ILocaleData;
  icon: string;
  lang: TLocale;
  image: string;
  isLoading?: boolean;
}

export const PopularCategoryCard: FC<IPopularCategoryCard> = ({ name, image, lang }) => {
  return (
    <div className="flex max-w-64 min-w-60 bg-light-gray gap-3 p-3 h-full items-start justify-between rounded-3xl overflow-hidden cursor-pointer">
      <p className="line-clamp-2 mt-2 leading-5 font-semibold text-black">
        {name?.[lang as keyof typeof name]}
      </p>
      <div className="flex items-center justify-center  rounded-xl">
        <Image
          className="rounded-none w-24 h-24 object-contain"
          src={image}
          alt="popular-category icon"
        />
      </div>
    </div>
  );
};
