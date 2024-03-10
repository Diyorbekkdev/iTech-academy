'use client';

import { Banner, CustomSlider, Typography } from '@/components';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { bannerData, iTechMiniBanne2, iTechMiniBanner } from '@/mock';
import { aboutCardData } from '@/mock/about-card.data';
import { IPageParams } from '@/types';

import { Image } from '@nextui-org/react';

import { AboutCards } from './components/about-cards';

interface IHomePage extends IPageParams {}

export const HomePage = ({ lang }: IHomePage) => {
  return (
    <section className="container">
      <div className="flex w-full items-start gap-8 mb-20">
        <CustomSlider
          showDots
          lang={lang}
          arrows={false}
          autoPlay={false}
          component={Banner}
          sliderData={bannerData}
          sliderClass="banner_slider"
          wrapperClass="w-full  cursor-pointeryar lg:w-3/4"
          items={{ monitor: 1, desktop: 1, tablet: 1, mobile: 1 }}
        />
        <div className="w-1/5 hidden lg:grid grid-rows-2 gap-5">
          <MotionDiv
            direction="right"
            delay={1.5}
          >
            <Image
              className="w-full h-full cursor-pointer object-cover  rounded-md"
              classNames={{
                img: 'h-full w-full',
              }}
              alt="banner-img-1"
              src={iTechMiniBanner.src}
            />
          </MotionDiv>
          <MotionDiv
            direction="down"
            delay={2}
          >
            <Image
              className="w-full h-full cursor-pointer object-cover rounded-md"
              alt="banner-img-2"
              src={iTechMiniBanne2.src}
            />
          </MotionDiv>
        </div>
      </div>
      <Typography
        variant="h1"
        className="main__title"
      >
        “iTech Academy” bu -
      </Typography>
      <div className="flex items-center gap-2 justify-between mt-10">
        {aboutCardData.map((data, idex) => (
          <MotionDiv
            key={data?.description}
            delay={idex}
            direction='down'
          >
            <AboutCards {...data} />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};
