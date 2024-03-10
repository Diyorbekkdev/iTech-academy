'use client';

import { ProductCard, ProductCardLoading } from '@/components';
import { gallery_filled, gallery_outlined, list_filled, list_outlined } from '@/mock';
import { TLocale } from '@/types';
import { IProduct } from '@/types/product.types';

import { FC, useEffect, useState } from 'react';

import { Button, Image } from '@nextui-org/react';
import { useFetchApi } from '@/hooks';

interface IMobileView {
  lang: TLocale;
  data?: Array<IProduct>;
  isLoading?: boolean;
}

export const MobileView: FC<IMobileView> = ({ lang, isLoading, data }) => {
  const [isListView, setIsListView] = useState(false);
  

  const changeLayout = (value: boolean) => {
    setIsListView(value);
    localStorage.setItem('isListView', `${value}`);
  };

  useEffect(() => {
    const listView = localStorage.getItem('isListView') || 'false';
    const isListView = Boolean(JSON.parse(listView));
    setIsListView(isListView);
  }, []);

  return (
    <div className="sm:hidden pb-10">
      <div className="flex items-center my-3 justify-between">
        <p className="font-bold text-xl sm:text-2xl">Mahsulotlar</p>
        <div className="flex gap-2">
          <Button
            size="sm"
            radius="sm"
            isIconOnly
            className="bg-transparent"
            onClick={() => changeLayout(false)}
          >
            <Image
              alt="gallery icon"
              className="rounded-none w-6 h-6"
              src={isListView ? gallery_outlined.src : gallery_filled.src}
            />
          </Button>
          <Button
            size="sm"
            radius="sm"
            isIconOnly
            className="bg-transparent"
            onClick={() => changeLayout(true)}
          >
            <Image
              alt="gallery icon"
              className="rounded-none w-6 h-6"
              src={isListView ? list_filled.src : list_outlined.src}
            />
          </Button>
        </div>
      </div>
      <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-2'} gap-2 xsm:gap-4`}>
        {isLoading
          ? data?.map((el) => (
              <ProductCardLoading
                key={`${el}`}
                isHorizontal={isListView}
              />
            ))
          : data?.map((item) => (
              <ProductCard
                lang={lang}
                key={item?._id}
                isHorizontal={isListView}
                {...item}
              />
            ))}
      </div>
    </div>
  );
};
