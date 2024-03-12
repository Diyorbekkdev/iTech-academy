import { whyItech } from '.';

interface OurCourses {
  id: number;
  title: string;
  icon: string;
}

export const ourCoursesData: OurCourses[] = [
  {
    id: 1,
    title: 'Dasturlash',
    icon: whyItech.src,
  },
  {
    id: 2,
    title: 'Dizayn',
    icon: whyItech.src,
  },
  {
    id: 3,
    title: 'Marketing',
    icon: whyItech.src,
  },
];
