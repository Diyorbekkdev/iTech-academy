import { Typography } from '@/components';
import { Card } from '@/components/card/card';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { nextArrow } from '@/mock';
import { courseCategories } from '@/mock/course-categories.data';

export const CourseCategories = () => {
  return (
    <section className="mt-14">
      <MotionDiv direction="right">
        <Typography
          variant="h1"
          className="main__title mb-10"
        >
          Ta'lim turlari
        </Typography>
      </MotionDiv>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-20">
        {courseCategories.map((item) => (
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
