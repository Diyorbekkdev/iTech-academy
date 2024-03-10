'use client';

import { useAppSelector } from '@/hooks';
import { IPageParams } from '@/types';
import ProfileContents from '@/views/profile/components/profile-contents';
import ProfileNav from '@/views/profile/components/profile-nav';
import { HomeIcon } from '@/views/single-product/components/home-icon';

import { ReactNode } from 'react';

import { BreadcrumbItem, Breadcrumbs, Divider } from '@nextui-org/react';

interface IProfilePage extends IPageParams {
  children: ReactNode;
}

export const ProfilePage = ({ lang, children }: IProfilePage) => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  if (!isAuthenticated) return <>Not found</>;

  return (
    <div>
      <Breadcrumbs variant="solid">
        <BreadcrumbItem
          href="/"
          startContent={<HomeIcon />}
        >
          {null}
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Shaxsiy kabinet</BreadcrumbItem>
      </Breadcrumbs>
      <div className="account">
        <div className="accoutn__left border-r-1 pr-5">
          <ProfileContents lang={lang} />
          <ProfileNav lang={lang} />
        </div>
        <div className="account__right">{children}</div>
      </div>
    </div>
  );
};
