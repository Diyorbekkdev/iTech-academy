import { IParams } from '@/types';
import { FormalizationPage } from '@/views';

export default function OrderFormalization({ params: { lang } }: IParams) {
  return <FormalizationPage lang={lang} />;
}
