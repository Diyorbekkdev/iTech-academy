'use client';

import {
  Banner,
  CustomSlider,
  PopularCategoryCard,
  PopularCategoryCardLoading,
} from '@/components';
import { useAppSelector, useFetchApi } from '@/hooks';
import { useLocaleLink } from '@/hooks/locale-link';
import miniBannerIphone from '@/images/iPhone-15.svg';
import miniBanner from '@/images/redmi-note-13.svg';
import { bannerData, loadingData } from '@/mock';
import { IPageParams } from '@/types';

import { Image } from '@nextui-org/react';

import { DesktopView, MobileView } from './components';

interface IHomePage extends IPageParams {}

export const HomePage = ({ lang }: IHomePage) => {
  const { isFixed } = useAppSelector((state) => state.header);
  const { data, isLoading } = useFetchApi({ url: '/products/public' });
  const { LocaleLink } = useLocaleLink();
  const { data: categories, isLoading: categoryLoading } = useFetchApi({
    url: '/categories/public',
    params: {
      isParent: true,
    },
  });

  return (
    <section className={`${isFixed ? 'mt-32' : 'mt-0'} sm:mt-0 container`}>
      <div className="flex w-full items-stretch gap-4 min-h-36 md:min-h-96 lg:min-h-[420px]">
        <CustomSlider
          showDots
          lang={lang}
          arrows={false}
          autoPlay={false}
          component={Banner}
          sliderData={bannerData}
          sliderClass="banner_slider"
          wrapperClass="w-full cursor-pointeryar lg:w-3/4"
          items={{ monitor: 1, desktop: 1, tablet: 1, mobile: 1 }}
        />
        <div className="w-1/4 hidden lg:grid grid-rows-2 gap-5">
          <Image
            className="w-full h-full cursor-pointer object-cover rounded-md"
            classNames={{
              img: 'h-full w-full',
            }}
            alt="banner-img-1"
            src={miniBanner.src}
          />
          <Image
            className="w-full h-full cursor-pointer object-cover rounded-md"
            alt="banner-img-2"
            src={miniBannerIphone.src}
          />
        </div>
      </div>
      <p className="text-xl sm:text-2xl mt-4 mb-6 font-bold">Mahsulotlar kategoriyasi</p>
      <div className="flex gap-3 hide-scroll overflow-x-auto">
        {categoryLoading
          ? loadingData.map((el) => <PopularCategoryCardLoading key={el} />)
          : categories?.data?.map((item: any) => (
              <LocaleLink
                key={item?._id}
                href={`categories/${item?.slug?.[lang]}`}
              >
                <PopularCategoryCard
                  lang={lang}
                  {...item}
                />
              </LocaleLink>
            ))}
      </div>
      <>
        <DesktopView
          // data={isLoading ? loadingData : data?.data}
          lang={lang}
          // isLoading={isLoading}
        />
        <MobileView
          data={isLoading ? loadingData : data?.data}
          lang={lang}
          isLoading={isLoading}
        />
      </>
    </section>
  );
};
