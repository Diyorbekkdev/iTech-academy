import { Typography } from '@/components';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { whyItechData } from '@/mock/why-itech.data';

import Image from 'next/image';

export const WhyItech = () => {
  return (
    <section className="mt-10">
      <MotionDiv direction="left">
        <Typography
          variant="h1"
          className="main__title mb-10"
        >
          Nima uchun “Najot Ta'lim”da o‘qish kerak?
        </Typography>
      </MotionDiv>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-7">
        {whyItechData.map((item) => (
          <MotionDiv
            direction={item.id % 2 == 0 ? 'right' : 'left'}
            key={item.title}
          >
            <div
              key={item.id}
              className="p-10 bg-light-pink rounded-[20px] sm:w-full"
            >
              <Image
                className="mb-4"
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
              />
              <h1 className="text-2xl font-semibold leading-6 mb-4">{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};
