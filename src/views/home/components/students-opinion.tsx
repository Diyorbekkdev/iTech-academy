import { Typography } from '@/components';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { nextArrow, prevArrow } from '@/mock';
import { studentOpinionsData } from '@/mock/students-opinion.data';

import { useRef } from 'react';
import Slider from 'react-slick';

import Image from 'next/image';

export const StudentsOpinion = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="mt-10 mb-10">
      <MotionDiv
        direction="down"
        delay={2}
      >
        <Typography
          variant="h1"
          className="main__title flex justify-between gap-3"
        >
          O‘quvchilarning fikrlari
          <div>
            <button
              onClick={handlePrevious}
              type="button"
              className="mr-4 p-2 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            >
              <Image
                src={prevArrow.src}
                alt="Arrow"
                width={32}
                height={32}
              />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="ml-4 p-2 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            >
              <Image
                src={nextArrow.src}
                alt="Arrow"
                width={32}
                height={32}
              />
            </button>
          </div>
        </Typography>
      </MotionDiv>

      <div className="mt-10 w-full">
        <Slider
          ref={sliderRef}
          {...settings}
          className=" grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-1 gap-1"
        >
          {studentOpinionsData.map((opinion) => (
            <div
              key={opinion.id}
              className="relative flex flex-col items-center bg-light-gray shadow-md rounded-lg overflow-hidden"
            >
              <h3 className="text-xl font-semibold absolute bottom-9 left-3 bg-white py-4 px-[18px] rounded-full">
                {opinion.name}
              </h3>
              <video
                width="100%"
                height="300px"
                src={opinion.videoUrl}
                controls
                className="object-cover"
                title={`${opinion.name}'s Opinion Video`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
