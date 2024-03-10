import { IParams } from '@/types';
import { ProfilePage } from '@/views';

import { FC, ReactNode } from 'react';

interface IProfilePageLayout extends IParams {
  children: ReactNode;
}

const ProfileLayout: FC<IProfilePageLayout> = ({ children, params: { lang } }) => {
  return (
    <section className="container">
      <ProfilePage lang={lang}>{children}</ProfilePage>
    </section>
  );
};

export default ProfileLayout;
