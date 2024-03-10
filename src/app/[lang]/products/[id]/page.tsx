import { IParams } from '@/types';
import { SingleProductPage } from '@/views';

export default function SingleProduct({ params: { lang } }: IParams) {
  return <SingleProductPage lang={lang} />;
}
