'use client';

import { BrandCard, MiniBanner, ProductCard, CustomSlider, ProductCardLoading } from '@/components';
import { useFetchApi, useLocaleNavigate } from '@/hooks';
import arrow_right from '@/icons/arrow-right.svg';
import { loadingData } from '@/mock';
import { mockMiniBannerData } from '@/mock/mini-banner.data';
import { brandData, IMiniBanner } from '@/mock/slider.data';
import { TLocale } from '@/types';
import { IProduct } from '@/types/product.types';

import { FC } from 'react';

import { Button, Chip, Image } from '@nextui-org/react';

interface IDesktopView {
  lang: TLocale;
  data?: Array<IProduct>;
  isLoading?: boolean;
}

export const DesktopView: FC<IDesktopView> = ({ lang }) => {
  const { navigate } = useLocaleNavigate();
  const { data: topProducts, isLoading: topProductsLoading } = useFetchApi({
    url: '/products/public',
    params: {
      isPopular: true,
    },
  });
  const { data, isLoading } = useFetchApi({
    url: '/products/public',
  });

  const iPhoneProducts = data?.data?.filter((el: IProduct) => el?.brand?.name?.uz === 'iPhone');
  const samsungProducts = data?.data?.filter((el: IProduct) => el?.brand?.name?.uz === 'Samsung');
  const noutebookProducts = data?.data?.filter((el: IProduct) => el?.category?.name?.uz === 'Noutbuk');

  return (
    <div className="w-full hidden sm:block">
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-xl sm:text-2xl">Top mahsulotlar</p>
        <Button
          className="bg-light-gray"
          onClick={() => navigate('products')}
        >
          Barchasini Ko'rish
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip
          className="bg-light-green cursor-pointer"
          onClick={() => navigate('products')}
        >
          Barchasi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <CustomSlider
        lang={lang}
        component={topProductsLoading ? ProductCardLoading : ProductCard}
        sliderData={topProductsLoading ? loadingData : topProducts?.data}
        showDots={false}
        autoPlay={false}
        items={{ desktop: 6, tablet: 3, mobile: 2 }}
      />
      <div className="flex items-center justify-between mt-5 sm:mt-8 lg:mt-10">
        <p className="font-bold text-xl sm:text-2xl">iPhone mahsulotlari</p>
        <Button
          className="bg-light-gray"
          onClick={() => navigate('products')}
        >
          Barchasini Ko'rish{' '}
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip
          className="bg-light-green cursor-pointer"
          onClick={() => navigate('products')}
        >
          Barchasi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <CustomSlider
        lang={lang}
        component={isLoading ? ProductCardLoading : ProductCard}
        sliderData={isLoading ? loadingData : iPhoneProducts}
        showDots={false}
        items={{ desktop: 4, tablet: 3, mobile: 2 }}
      />
      <div className="flex items-center justify-between mt-5 sm:mt-8 lg:mt-10">
        <p className="font-bold text-xl sm:text-2xl">Samsung mahsulotlari</p>
        <Button
          className="bg-light-gray"
          onClick={() => navigate('products')}
        >
          Barchasini Ko'rish{' '}
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip
          className="bg-light-green cursor-pointer"
          onClick={() => navigate('products')}
        >
          Barchasi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <CustomSlider
        lang={lang}
        component={isLoading ? ProductCardLoading : ProductCard}
        sliderData={isLoading ? loadingData : samsungProducts}
        showDots={false}
        items={{ desktop: 4, tablet: 3, mobile: 2 }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 min-h-40 md:min-h-52 lg:min-h-64  gap-4 mt-5 sm:mt-8 lg:mt-10 flex-col md:flex-row">
        {mockMiniBannerData?.map((el: IMiniBanner) => (
          <MiniBanner
            key={el?.url}
            {...el}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-5 sm:mt-8 lg:mt-10">
        <p className="font-bold text-xl sm:text-2xl">Noutbuk mahsulotlari</p>
        <Button
          className="bg-light-gray"
          onClick={() => navigate('products')}
        >
          Barchasini Ko'rish{' '}
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip
          className="bg-light-green cursor-pointer"
          onClick={() => navigate('products')}
        >
          Barchasi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <CustomSlider
        lang={lang}
        component={isLoading ? ProductCardLoading : ProductCard}
        sliderData={isLoading ? loadingData : noutebookProducts}
        items={{ desktop: 4, tablet: 3, mobile: 2 }}
      />
      <CustomSlider
        lang={lang}
        title="Bizning afzalliklarimiz"
        arrows={false}
        titleClass="text-xl sm:text-2xl font-bold mt-5 sm:mt-8 lg:mt-10"
        component={BrandCard}
        sliderData={brandData}
        items={{ desktop: 4, tablet: 3, mobile: 2 }}
      />
    </div>
  );
};
