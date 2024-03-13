'use client';

import { useFetchApi, useLocaleNavigate } from '@/hooks';
import cartIcon from '@/icons/backet.svg';
import heartFull from '@/icons/heart-fill.svg';
import heartIcon from '@/icons/heart.svg';
import { fire_icon } from '@/mock';
import { TLocale } from '@/types';
import { IProduct } from '@/types/product.types';
import { calculateFinalPrice } from '@/utils';
import { priceFormat } from '@/utils/price-format';

import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Button, Chip } from '@nextui-org/react';
import axios from 'axios';
import { motion } from 'framer-motion';

import { MotionDiv } from '../motion-div/motion-div';

interface IProductCard extends IProduct {
  isHorizontal?: boolean;
  lang?: TLocale;
}

export const ProductCard: FC<IProductCard> = (props) => {
  const {
    _id,
    lang,
    name,
    isHorizontal,
    price,
    mainImage,
    isPopular,
    haveDiscount,
    discount,
    type,
    category,
    slug,
  } = props;

  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { navigate } = useLocaleNavigate();

  return (
    <MotionDiv direction='up'>
      <Card
        classNames={{
          base: `${isHorizontal && 'flex-row'} cursor-pointer border min-h-40 xsm:min-h-40 border-border-color rounded-xl hover:border-gray-200 relative overflow-hidden group shadow-sm`,
          header: `${isHorizontal && 'w-28 ml-2'}`,
        }}
      >
        <CardHeader className="rounded-none relative max-h-44 xsm:max-h-52 md:max-h-60 lg:max-h-80 overflow-hidden p-0">
          <Image
            isZoomed
            onClick={() => navigate(`/products/${slug?.[lang as keyof typeof slug]}`)}
            alt="Card background"
            className="object-cover w-full rounded-none p-0"
            classNames={{
              wrapper: `min-w-full ${isHorizontal ? 'h-full py-2' : ''}  rounded-none`,
              zoomedWrapper: isHorizontal ? 'h-full' : 'rounded-none',
              img: isHorizontal ? 'h-full' : '',
            }}
            src={mainImage}
          />
          {isPopular && (
            <Chip
              startContent={
                <Image
                  src={fire_icon.src}
                  alt="fire"
                  className="w-4 h-4"
                />
              }
              className="bg-blue text-white rounded-md text-sm absolute z-20 top-1 left-1"
            >
              TOP
            </Chip>
          )}
          {haveDiscount && (
            <Chip className="bg-pink-badge text-white rounded-md text-sm absolute z-20 top-9 left-1">
              {discount}%
            </Chip>
          )}
          {type === 'OLD' ? (
            <Chip className="bg-orange text-white rounded-md text-sm absolute z-20 bottom-1.5 left-1">
              B/U
            </Chip>
          ) : (
            <Chip className="bg-green text-white rounded-md text-sm absolute z-20 bottom-1.5 left-1">
              Yangi
            </Chip>
          )}
        </CardHeader>
        <CardBody
          className={`${isHorizontal ? 'pt-4' : 'py-2'}  flex flex-col gap-2 sm:gap-3 overflow-hidden flex-1 justify-between`}
        >
          <p className="text-muted text-xs hidden sm:block">
            {category?.name[lang as keyof typeof category.name]}
          </p>
          <p
            className="text-md font-sans text-black  xsm:text-sm font-semibold sm:text-lg break-all line-clamp-3 md:line-clamp-2 sm:line-clamp-2"
            onClick={() => navigate(`/products/${slug?.[lang as keyof typeof slug]}`)}
          >
            {name?.[lang as keyof typeof name]}
          </p>
          <p className="text-sm sm:text-md break-all line-clamp-1 sm:font-semibold px-2 py-1 bg-light-gray rounded-md text-center">
            {priceFormat(Math.round((price * 1.35) / 12))} $ dan / 12 oyga
          </p>
          {isHorizontal ? (
            ''
          ) : haveDiscount ? (
            <div className="flex gap-2 text-xs sm:text-sm">
              <p className="text-gray-400 break-all line-clamp-1 line-through">
                {priceFormat(calculateFinalPrice(price, discount).discountPrice)} $
              </p>
              <p className="text-black break-all line-clamp-1">{priceFormat(+price)} $</p>
            </div>
          ) : (
            ''
          )}
          <div className="flex justify-between relative">
            <Button
              onClick={() => setLiked((prevState) => !prevState)}
              color="primary"
              variant="faded"
              size={isHorizontal ? 'sm' : 'md'}
              className={`p-0 h-unit-xl sm:h-unit-10  ${liked ? 'border-1.5 border-solid border-primary' : 'border-none'} bg-light-gray w-[48%]`}
              style={{
                transform: hovered ? 'translateX(-120%)' : 'translateX(0)',
                transition: 'transform 0.4s ease',
              }}
              isIconOnly
            >
              <Image
                className="rounded-none"
                src={liked ? heartFull.src : heartIcon.src}
                alt="icon"
              />
            </Button>
            <Button
              color="primary"
              variant="bordered"
              size={isHorizontal ? 'sm' : 'md'}
              className={`p-0 h-unit-xl sm:h-unit-10  ${hovered ? 'w-full' : 'w-[48%]'} flex items-center absolute bottom-0 right-0 bg-primary`}
              style={{
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              isIconOnly
              onClick={() => navigate(`/products/${slug?.[lang as keyof typeof slug]}`)}
            >
              <Image
                className={`${!hovered && 'ml-1'} rounded-none`}
                src={cartIcon.src}
                alt="icon"
              />
              <p
                className={`${hovered ? 'w-1/2 opacity-100' : 'w-0 opacity-0'} hidden sm:block ml-1 whitespace-nowrap text-white text-xs`}
                style={{ transition: 'all 0.5s ease' }}
              >
                Rasmiyl{''}
                <span className={`${isHorizontal ? 'inline-block' : 'hidden'} sm:inline-block`}>
                  ashtirish
                </span>
              </p>
            </Button>
          </div>
        </CardBody>
      </Card>
    </MotionDiv>
  );
};
