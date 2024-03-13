import { whyItech } from '.';

interface OurCourses {
  id: number;
  title: string;
  duration: string;
  category: string;
  icon: string;
}

export const courses: OurCourses[] = [
  {
    id: 1,
    title: 'Dasturlash Foundation',
    duration: '2 oy',
    category: 'Dasturash',
    icon: whyItech.src,
  },
  {
    id: 2,
    title: 'React',
    duration: '8 oy',
    category: 'Dasturash',
    icon: whyItech.src,
  },
  {
    id: 3,
    title: 'NodeJS',
    duration: '8 oy',
    category: 'Dasturash',
    icon: whyItech.src,
  },

  {
    id: 4,
    title: 'SMM',
    duration: '4 oy',
    category: 'Marketing',
    icon: whyItech.src,
  },
  {
    id: 5,
    title: 'Python',
    duration: '8 oy',
    category: 'Dasturash',
    icon: whyItech.src,
  },
  {
    id: 6,
    title: '.NET (dotNET)',
    duration: '10 oy',
    category: 'Dasturlash',
    icon: whyItech.src,
  },
  {
    id: 7,
    title: 'Java',
    duration: '8 oy',
    category: 'Dasturash',
    icon: whyItech.src,
  },
];
