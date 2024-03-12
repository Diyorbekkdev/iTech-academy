import { Typography } from '@/components';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { studentsJob } from '@/mock/students-jobs.data';

import Marquee from 'react-fast-marquee';

import { ImageCard } from '.';

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
          <Marquee className="w-72 h-24 overflow-y-hidden">
            {studentsJob.map((el) => (
              <ImageCard
                key={el.url}
                imageUrl={el.url}
              />
            ))}
          </Marquee>
        </MotionDiv>
      </div>
    </section>
  );
};
