import { IParams } from '@/types';
import { OrdersPage } from '@/views';

export default function Orders({ params: { lang } }: IParams) {
  return <OrdersPage lang={lang} />;
}
