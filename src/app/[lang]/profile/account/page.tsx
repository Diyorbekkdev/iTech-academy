import { IParams } from '@/types';
import { UserAccountPage } from '@/views';

export default function UserAccount({ params: { lang } }: IParams) {
  return <UserAccountPage lang={lang} />;
}
