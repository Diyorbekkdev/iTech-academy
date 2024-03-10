import { IParams } from '@/types';
import { UserLimitsPage } from '@/views';

export default function Orders({ params: { lang } }: IParams) {
  return <UserLimitsPage lang={lang} />;
}
