'use client';

import { HeaderTop } from '@/components/header/header-top';
import { TopCategories } from '@/components/top-categories';
import { authenticate, setIsFixed, setUser } from '@/features';
import { useAppDispatch, useAppSelector, useLocaleNavigate } from '@/hooks';
import { useLocaleLink } from '@/hooks/locale-link';
import { category_icon, enter_icon, search_icon } from '@/mock';
import { headerData } from '@/mock/header.data';
import { topCategories } from '@/mock/top-categories.data';
import { TLocale } from '@/types';
import { httpClient } from '@/utils';

import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';

import { Avatar, Button, Image, Input, useDisclosure } from '@nextui-org/react';
import jsCookie from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '../';
import { AuthModal } from '../auth';

interface IHeader {
  lang: TLocale;
}

export const Header = ({ lang }: IHeader) => {
  const { isFixed } = useAppSelector((state) => state.header);
  const { data, isAuthenticated } = useAppSelector((state) => state.user);
  const t = useTranslations('header');
  const { LocaleLink } = useLocaleLink();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const { navigate } = useLocaleNavigate();

  const getUser = async () => {
    try {
      const token = jsCookie.get('w_at');
      if (!token) return;
      const decodedToken = jwtDecode<any>(token);
      if (decodedToken?._id) {
        let {
          data: { data },
        } = await httpClient.get(`users/${decodedToken?._id}`);
        dispatch(setUser(data));
        dispatch(authenticate());
      }
    } catch (err: any) {
      toast.error(err);
    }
  };

  const onWindowScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 40) {
      dispatch(setIsFixed(true));
    } else {
      dispatch(setIsFixed(false));
    }
  };

  const navLinks = useMemo(() => {
    return headerData.headerLink.map(({ key, classes, icon, url }, idx) => (
      <li
        key={idx}
        className={`flex ${classes} w-10 h-10 rounded-full bg-light-gray text-sm font-semibold cursor-pointer flex-col gap-1 items-center justify-center`}
      >
        <LocaleLink href={url as string}>
          <Image
            src={icon.src}
            alt={key + ' icon'}
            className="w-5 h-5 rounded-none"
          />
        </LocaleLink>
      </li>
    ));
  }, []);

  useEffect(() => {
    getUser();
    window.addEventListener('scroll', onWindowScroll);
    const isFixed = localStorage.getItem('isFixed') || 'false';
    dispatch(setIsFixed(Boolean(JSON.parse(isFixed))));

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <header>
      <HeaderTop data={headerData.headerTop} />
      <nav className={isFixed ? 'fixed shadow-lg top-0 left-0 w-full z-[50] bg-white' : ''}>
        <div
          className={`container flex flex-col lg:flex-row justify-between gap-0 lg:gap-5 py-3 lg:items-center`}
        >
          <div className="flex justify-between items-center">
            <LocaleLink
              href="/"
              className="font-bold text-transparent lg:text-black text-2xl lg:text-3xl bg-gradient-to-r from-primary to-pink bg-clip-text"
            >
              MEGABOX
            </LocaleLink>
            <LocaleSwitcher className="block lg:hidden" />
          </div>

          <div className="flex-1 w-full lg:max-w-xl mx-auto">
            <Input
              size="sm"
              type="text"
              placeholder={t('search')}
              variant="bordered"
              radius="sm"
              classNames={{
                innerWrapper: 'bg-transparent overflow-hidden p-0 shadow-none border-none',
                inputWrapper: 'bg-transparent p-0 shadow-none border',
                input: 'bg-transparent ml-2 md:-ml-2 border-none shadow-none',
              }}
              startContent={
                <Button
                  isIconOnly
                  size="lg"
                  radius="sm"
                  className="bg-transparent hidden md:flex"
                >
                  <Image
                    src={search_icon.src}
                    alt="search"
                  />
                </Button>
              }
              endContent={
                <>
                  <Button
                    className="bg-light-gray hidden md:flex text-sm font-semibold"
                    size="lg"
                    radius="sm"
                  >
                    {t('searching')}
                  </Button>
                  <Button
                    isIconOnly
                    size="lg"
                    radius="sm"
                    className="bg-transparent md:hidden"
                  >
                    <Image
                      src={search_icon.src}
                      alt="search"
                    />
                  </Button>
                </>
              }
            />
          </div>
          <ul className="hidden lg:flex gap-4 items-center">
            <Button
              onPress={isAuthenticated ? () => navigate('profile/orders') : onOpen}
              size="lg"
              className="bg-white rounded-none"
            >
              <li className="flex items-center gap-3 cursor-pointer">
                <p className="font-semibold text-sm">
                  {isAuthenticated ? data?.phone : t('enter')}
                </p>
                {isAuthenticated ? (
                  <Avatar
                    isBordered={true}
                    color="success"
                    src={`${data?.imgUrl || 'https://i.pravatar.cc/150?u=a04258114e29026302d'}`}
                  />
                ) : (
                  <Image
                    src={enter_icon.src}
                    className="rounded-none w-5 h-5"
                    alt="enter"
                  />
                )}
              </li>
            </Button>
            <li className="w-px h-10 bg-[#E8ECEF]" />
            {navLinks}
          </ul>
        </div>
      </nav>
      <TopCategories
        isFixed={isFixed}
        data={topCategories}
      />
      <AuthModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </header>
  );
};
