import { whyItech } from '.';

interface OurCourses {
  id: number;
  title: string;
  icon: string;
}

export const courseCategories: OurCourses[] = [
  {
    id: 1,
    title: 'Bootcamp',
    icon: whyItech.src,
  },
  {
    id: 2,
    title: 'Standart',
    icon: whyItech.src,
  },
];
