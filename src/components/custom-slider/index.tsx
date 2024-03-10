'use client';

import { IPopularCategory, ISlide, ISliderBrands } from '@/mock/slider.data';
import { TLocale } from '@/types';
import { IProduct } from '@/types/product.types';

import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ISlider {
  items?: {
    monitor?: number;
    desktop?: number;
    tablet?: number;
    mobile?: number;
  };
  lang: TLocale;
  wrapperClass?: string;
  sliderClass?: string;
  loop?: boolean;
  component: FC<IProduct> | FC<ISlide> | FC<IPopularCategory> | FC<ISliderBrands> | any;
  sliderData: any[];
  title?: string;
  titleClass?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  arrows?: boolean;
}

export const CustomSlider: FC<ISlider> = (props) => {
  const {
    items,
    title,
    titleClass,
    sliderData,
    component: Component,
    loop = true,
    lang,
    autoPlay = true,
    showDots = false,
    sliderClass = '',
    wrapperClass = 'flex flex-col gap-3 mt-3',
  } = props;

  const settings = {
    dots: showDots,
    infinite: loop,
    initialSlide: 0,
    swipeToSlide: true,
    slidesToShow: items?.monitor || 5,
    autoplay: autoPlay,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: items?.desktop || 4,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: items?.tablet || 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: items?.mobile || 2,
          infinite: true,
          dots: !showDots,
        },
      },
    ],
  };

  return (
    <div className={wrapperClass}>
      {title && <p className={titleClass}>{title}</p>}
      <Slider
        {...settings}
        className={sliderClass}
      >
        {sliderData?.map((item, idx) => (
          <Component
            lang={lang}
            key={idx}
            {...item}
          />
        ))}
      </Slider>
    </div>
  );
};
