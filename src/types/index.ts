import { i18n } from '@/i18n.config';

export type TLocale = (typeof i18n)['locales'][number];

export interface IParams {
  params: { lang: TLocale };
}

export interface IOption {
  value: string;
  label: string;
}

export interface IColorInfo {
  additionalPrice: number;
  color: string;
  title: string;
  _id: string;
}

export type TType = 'NEW' | 'OLD';

export interface ISizes {
  map(arg0: (el: any) => import("react").JSX.Element): import("react").ReactNode;
  value: number;
  additionalPrice: number;
  length: number;
  [0]: any
}

export interface IImage {
  colorInfo?: IColorInfo;
  image: string;
  name?: string;
}

export interface ILocaleData {
  uz: string;
  ru: string;
  cyr: string;
}

export interface INameSlugId {
  _id: string;
  name: ILocaleData;
  slug: ILocaleData;
}

export interface IHeaderTop {
  key: string;
  url: string;
}

export interface IHeaderJoin {
  id?: string;
  icon: { src: string };
  url: string;
}

export interface ITopCategories {
  key: string;
  url: string;
}

export interface IPageParams {
  lang: TLocale;
}
