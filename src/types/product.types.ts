import { IImage, ILocaleData, INameSlugId, ISizes, TType } from '@/types';

export interface IProduct {
  _id: string;
  mainImage: string;

  __v: number;
  count: number;
  price: number;
  discount: number;

  isSale: boolean;
  isPopular: boolean;
  isHaveColor: boolean;
  haveDiscount: boolean;

  type: TType;
  slug: ILocaleData;
  name: ILocaleData;
  brand: INameSlugId;
  category: INameSlugId;
  subCategory: INameSlugId;
  shortDescription: ILocaleData;

  images: Array<IImage>;

  units: {
    sizes: ISizes;
  };
}
