import { Typography } from '@/components';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { studentsJob, studentsJobSecond } from '@/mock/students-jobs.data';

import Marquee from 'react-fast-marquee';

import { Image } from '@nextui-org/react';

export const StudentsWork = () => {
  return (
    <section className="mt-14">
      <MotionDiv direction="right">
        <Typography
          variant="h1"
          className="main__title mb-10"
        >
          Bitiruvchilarimiz ish joylari
        </Typography>
      </MotionDiv>

      <div className="mt-20 ">
        <MotionDiv direction="down">
          <Marquee className="w-72 h-24 gap-2">
            {studentsJob.map((el) => (
              <Image
                key={el.url}
                src={el.url}
                alt="students-job"
                className='m-3'
              />
            ))}
          </Marquee>
        </MotionDiv>

        {/* <MotionDiv direction="right">
          <Marquee
            className="w-72 h-24 mt-6 overflow-y-hidden"
            direction="right"
            delay={1}
          >
            {studentsJobSecond.map((el) => (
              <ImageCard
                key={el.url}
                imageUrl={el.url}
              />
            ))}
          </Marquee>
        </MotionDiv> */}
      </div>
    </section>
  );
};
