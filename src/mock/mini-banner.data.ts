import miniBannerIphone from '@/images/iPhone-15.svg';
import miniBanner from '@/images/redmi-note-13.svg';
import { IMiniBanner } from '@/mock/slider.data';

export const mockMiniBannerData: IMiniBanner[] = [
  {
    url: 'https://example.com/page1',
    imageUrl: miniBannerIphone.src,
  },
  {
    url: 'https://example.com/page2',
    imageUrl: miniBanner.src,
  },
  {
    url: 'https://example.com/page2',
    imageUrl: miniBanner.src,
  },
];
