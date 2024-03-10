import { AuthModal } from '@/components/auth';
import { setOrder } from '@/features';
import { useAppDispatch, useAppSelector, useFetchApi } from '@/hooks';
import heartFull from '@/icons/heart-fill.svg';
import heartIcon from '@/icons/heart.svg';
import { badgeIcon, tick } from '@/mock';
import { TLocale } from '@/types';
import { IProduct } from '@/types/product.types';
import { priceFormat } from '@/utils';

import { useEffect, useMemo, useState } from 'react';

import { Badge, Button, Chip, Image, Skeleton, useDisclosure } from '@nextui-org/react';
import { get } from 'lodash';
import { useRouter } from 'next/navigation';

interface IProductDetails extends IProduct {
  lang: TLocale;
}

const ProductDetails = (props: IProductDetails) => {
  const { _id, name, isHaveColor, lang, type, images, price, units } = props;
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [selectedColor, setSelectedColor] = useState<string>();
  const [liked, setLiked] = useState(false);
  const [selectedMemroy, setSelectedMemory] = useState({memory: 0, additionalPrice: 0});

  const { data, isLoading } = useFetchApi({
    url: '/orders/calculate',
    params: {
      price: price ?? undefined,
      productId: _id ?? undefined,
      paymentProvider: _id ? 'INTEND' : undefined,
    },
  });

  const colorTitles = useMemo(
    () => Array.from(new Set(images?.map((image) => image?.colorInfo?.title))),
    [images]
  );
  
  useEffect(() =>{
    if (colorTitles.length > 0) {
      setSelectedColor(colorTitles[0]);
    }
    if (units?.sizes?.length > 0) {
      setSelectedMemory({...selectedMemroy, memory: units?.sizes?.[0]?.value ?? 0, additionalPrice: units?.sizes?.[0]?.additionalPrice ?? 0});
    }
  }, [colorTitles, units?.sizes]);

  const handleMovedToOrder = () => {
    dispatch(setOrder({...props, selectedColor, selectedMemroy, priceData: Math.round(((price + selectedMemroy?.additionalPrice ?? 0) * 1.35) / 12) }));
    router.push('/formalization');
  };
  return (
    <div className="flex gap-4 flex-col w-full">
      {isLoading ? (
        <Skeleton className="rounded-lg">
          <div className="h-4 w-5  md:h-8 rounded-lg bg-default-300"></div>
        </Skeleton>
      ) : (
        <p className="text-xl sm:text-2xl font-semibold">{name?.[lang as keyof typeof name]}</p>
      )}
      {isLoading ? (
        <Skeleton className="rounded-lg">
          <div className="h-4 w-5  md:h-8 rounded-lg bg-default-300"></div>
        </Skeleton>
      ) : (
        <div className="flex items-center gap-2">
          <Chip
            color="warning"
            className="bg-light-badge-green text-green rounded text-medium "
          >
            {type === 'NEW' && 'Yangi mahsulot'}
          </Chip>
          <Image
            src={badgeIcon.src}
            alt="product info icon"
          />
        </div>
      )}
      {isHaveColor && images && images.length > 0 && (
        <div className="text-md">
          Rangi: <span className="font-bold">{String(selectedColor)?.toUpperCase()}</span>
        </div>
      )}
      {isHaveColor && images && images.length > 0 && (
        <div className="flex gap-2">
          {colorTitles.map((colorTitle) => {
            const imageWithColor = images.find((image) => image.colorInfo?.title === colorTitle);
            if (colorTitle && imageWithColor) {
              return (
                <Badge
                  key={colorTitle}
                  className={`bg-${selectedColor === colorTitle ? 'light-badge-green' : 'white'} p-0`}
                  isInvisible={selectedColor !== colorTitle}
                  content={
                    <Image
                      src={tick.src}
                      alt="tick icon"
                    />
                  }
                  placement="top-right"
                >
                  <Button
                    style={{ background: imageWithColor.colorInfo?.color }}
                    className={`border border-orange bg-light-green`}
                    onClick={() => setSelectedColor(colorTitle)}
                  >
                    <p
                      className="drop-shadow-lg"
                      style={{
                        color: imageWithColor.colorInfo?.color === 'white' ? '#000' : '#fff',
                      }}
                    >
                      {colorTitle}
                    </p>
                  </Button>
                </Badge>
              );
            }
            return null;
          })}
        </div>
      )}
      {units?.sizes?.length > 0 && (
        <p className="text-md ">
          Xotira: <span className="font-bold">{selectedMemroy?.memory} GB</span>
        </p>
      )}
      <div className="flex gap-2">
        {units?.sizes?.length > 0 &&
          units?.sizes?.map((el) => (
            <div key={el?.value}>
              <Badge
                className="p-0"
                placement="top-right"
                isInvisible={selectedMemroy?.memory !== el?.value}
                content={
                  <Image
                    src={tick.src}
                    alt="tick icon"
                  />
                }
              >
                <Button
                  onClick={() => setSelectedMemory({...selectedMemroy, memory: el?.value === selectedMemroy ? null : el?.value, additionalPrice: el?.additionalPrice})}
                  className={`${selectedMemroy?.memory === el?.value ? 'selected' : ''} font-bold`}
                >
                  {el?.value} GB
                </Button>
              </Badge>
            </div>
          ))}
      </div>
      {/*<div>*/}
      {/*  <p className="sm:text-xl mb-1 font-semibold">Mahsulot soni:</p>*/}
      {/*  <ButtonGroup*/}
      {/*    size="sm"*/}
      {/*    variant="faded"*/}
      {/*  >*/}
      {/*    <Button isIconOnly>*/}
      {/*      <Image*/}
      {/*        src={minus_icon.src}*/}
      {/*        alt="minus"*/}
      {/*      />*/}
      {/*    </Button>*/}
      {/*    <Button*/}
      {/*      className="font-semibold text-base"*/}
      {/*      disabled*/}
      {/*    >*/}
      {/*      1*/}
      {/*    </Button>*/}
      {/*    <Button isIconOnly>*/}
      {/*      <Image*/}
      {/*        src={plus_icon.src}*/}
      {/*        alt="minus"*/}
      {/*      />*/}
      {/*    </Button>*/}
      {/*  </ButtonGroup>*/}
      {/*</div>*/}
      {/*<p className="text-xl sm:text-2xl font-bold">{priceFormat(price)} $</p>*/}

      <div>
        <p className="text-xs sm:text-sm text-gray-400">Muddatli to’lovga sotib olish</p>
        {!isLoading ? (
          <p className="text-xl sm:text-2xl font-bold">
            {priceFormat(Math.round(((price + selectedMemroy?.additionalPrice ?? 0) * 1.35) / 12))} $ dan {get(data, 'data.duration')} oy
          </p>
        ) : (
          <Skeleton className="rounded-lg flex-1">
            <div className="h-4 w-5  md:h-8 rounded-lg bg-default-300"></div>
          </Skeleton>
        )}
      </div>

      <div className="fixed right-0 left-0 bg-white border-t-1 sm:border-none sm:bg-transparent px-2 py-3 sm:py-0 sm:px-0 z-10 sm:z-0 w-full sm:static bottom-16 sm:flex sm:items-center sm:gap-4 mt-8">
        <Button
          variant="faded"
          className="blob green w-full bg-[#1BB63B] text-white text-sm font-semibold"
          onClick={() => (!isAuthenticated ? onOpen() : handleMovedToOrder())}
        >
          Muddatli to'lovga rasmiylashtirish
        </Button>
        <Button
          variant="faded"
          className="hidden md:flex items-center justify-center "
          onClick={() => setLiked((prevState) => !prevState)}
        >
          <Image
            className="rounded-none"
            src={liked ? heartFull.src : heartIcon.src}
            alt="heart icon"
          />
        </Button>
      </div>
      <AuthModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
};

export default ProductDetails;
