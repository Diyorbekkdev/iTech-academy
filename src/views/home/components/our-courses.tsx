import { Typography } from '@/components';
import { Card } from '@/components/card/card';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { nextArrow } from '@/mock';
import { ourCoursesData } from '@/mock/our-courses.data';


export const OurCourses = () => {
  return (
    <section className="mt-14">
      <MotionDiv direction="right">
        <Typography
          variant="h1"
          className="main__title mb-10"
        >
          Bizning yo‘nalishlar
        </Typography>
      </MotionDiv>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-7">
        {ourCoursesData.map((item) => (
          <MotionDiv
            direction={item.id % 2 == 0 ? 'right' : 'left'}
            key={item.title}
          >
            <Card
              item={item}
              nextArrow={nextArrow}
            />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};
