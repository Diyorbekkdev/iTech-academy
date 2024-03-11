'use client';

import { Banner, CustomSlider, Typography } from '@/components';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { bannerData, iTechMiniBanne2, iTechMiniBanner, marqueeData } from '@/mock';
import { aboutCardData } from '@/mock/about-card.data';
import { IPageParams } from '@/types';

import Marquee from 'react-fast-marquee';

import { Image } from '@nextui-org/react';

import { ImageCard } from './components';
import { AboutCards } from './components/about-cards';
import { OurCourses } from './components/our-courses';
import { StudentsOpinion } from './components/students-opinion';
import { WhyItech } from './components/why-iTech';

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
      <MotionDiv direction="left">
        <Typography
          variant="h1"
          className="main__title"
        >
          “iTech Academy” bu -
        </Typography>
      </MotionDiv>
      <div className="flex items-center gap-2 justify-between mt-10 flex-wrap lg:flex-nowrap">
        {aboutCardData.map((data, idex) => (
          <MotionDiv
            key={data?.description}
            delay={idex}
            direction="down"
          >
            <AboutCards {...data} />
          </MotionDiv>
        ))}
      </div>
      <div className="mt-20">
        <MotionDiv direction="down">
          <Marquee className="">
            {marqueeData.map((el) => (
              <ImageCard
                key={el.url}
                imageUrl={el.url}
              />
            ))}
          </Marquee>
        </MotionDiv>
      </div>
      <div className="mt-10">
        <MotionDiv direction="left">
          <Typography
            variant="h1"
            className="main__title "
          >
            “iTech Academy” natijasi raqamlarda-
          </Typography>
        </MotionDiv>
        <MotionDiv>
          <p className="text-xs md:text-lg font-semibold text-muted mt-2">
            2018-yil oktyabr oyidan 2023-yil aprel oyigacha bo‘lgan statistika
          </p>
        </MotionDiv>
      </div>
      <WhyItech />
      <StudentsOpinion />
      <OurCourses />
    </section>
  );
};
