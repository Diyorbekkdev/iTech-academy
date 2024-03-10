import { useLocaleLink } from '@/hooks/locale-link';
import { basket_icon, logout, percent, userIcon } from '@/mock';
import { IPageParams } from '@/types';

import {Image } from '@nextui-org/react';
import { Divider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

interface IProfileNav extends IPageParams {}
const ProfileNav = ({ lang }: IProfileNav) => {
  const { LocaleLink } = useLocaleLink();
  const location = usePathname();
  const active = location?.split('/')[3];
  return (
    <div className="flex flex-col justify-center gap-2 mt-2">
      <LocaleLink href="profile/account">
        <div
          className={`${active === 'account' ? 'bg-secondary-gray' : 'bg-white'} rounded flex items-center py-4 px-4 gap-4`}
        >
          <Image
            src={userIcon.src}
            className={`${active !== 'account' ? 'invert-[50%]' : ''}`}
            alt="user icon"
          />
          <span className="text-[14px] font-semibold">Shaxsiy kabinet</span>
        </div>
      </LocaleLink>
      <LocaleLink href="profile/orders">
        <div
          className={`${active === 'orders' ? 'bg-secondary-gray' : 'bg-white'} rounded flex items-center py-4 px-4 gap-4`}
        >
          <Image
            src={basket_icon.src}
            className={`${active !== 'orders' ? 'invert-[50%]' : ''} rounded-none`}
            alt="user icon"
          />
          <span className="text-[14px] font-semibold">Buyurtmalarim</span>
        </div>
      </LocaleLink>
      <LocaleLink href="profile/term-payments">
        <div
          className={`${active === 'term-payments' ? 'bg-secondary-gray' : 'bg-white'} rounded flex items-center py-4 px-4 gap-4`}
        >
          <Image
            src={percent.src}
            className={`${active !== 'term-payments' ? 'invert-[50%]' : ''} rounded-none`}
            alt="basket icon"
          />
          <span className="text-[14px] font-semibold">Muddatli to‘lovlar</span>
        </div>
      </LocaleLink>
      <Divider />
      <div className="w-full flex items-center py-4 px-4 gap-4 cursor-pointer">
        <Image
          className="rounded-none"
          src={logout.src}
          alt="logout icon"
        />
        <span className="text-[14px] font-semibold">Chiqish</span>
      </div>
    </div>
  );
};
export default ProfileNav;
