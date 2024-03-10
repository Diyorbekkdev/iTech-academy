'use client';

import { ProductCard, ProductCardLoading } from '@/components';
import { NoDataForProducts } from '@/components/no-data-products';
import { useFetchApi } from '@/hooks';
import { categorPorudctsFilter, filter_icon, loadingData, search_icon } from '@/mock';
import {
  ICategoryFilter,
  brandCheckboxes,
  checkboxes,
  memoryCheckboxes,
  ramCheckboxes,
} from '@/mock/categories.data';
import { IPageParams } from '@/types';
import { IProduct } from '@/types/product.types';
import { HomeIcon } from '@/views/single-product/components/home-icon';

import { useState } from 'react';

import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Checkbox,
  Divider,
  Image,
  Input,
  Pagination,
  Select,
  SelectItem,
  Skeleton,
} from '@nextui-org/react';

interface IProductsPage extends IPageParams {}

export const ProductsPage = ({ lang }: IProductsPage) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isTop, setIsTop] = useState(false);
  const { data, isLoading } = useFetchApi({
    url: `products/public`,
    params: {
      search: search ?? undefined,
      isPopular: isTop,
      page,
      limit: 8,
    },
  });

  const handleCheckboxChange = (value: string | boolean) => {
    console.log(value);
    
  };

  return (
    <section className="container">
      <Breadcrumbs variant="solid">
        <BreadcrumbItem
          href="/"
          startContent={<HomeIcon />}
        >
          {null}
        </BreadcrumbItem>
        <BreadcrumbItem
          href="#"
          className="font-semibold"
        >
          Barcha mahsulotlar
        </BreadcrumbItem>
      </Breadcrumbs>

      <div className="mt-6 text-xl">
        {isLoading ? (
          <Skeleton className="h-6 w-40 rounded-md mb-6" />
        ) : (
          <h1 className="font-bold mb-6">Barcha mahsulotlar</h1>
        )}
        <Divider />
      </div>

      <div className="flex mt-6">
        <div className="basis-[20%] hidden sm:block">
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="font-bold text-black mb-2">Mahsulot holati</h4>
              {checkboxes.map((checkbox) => (
                <div
                  key={checkbox.value}
                  className="mt-1"
                >
                  <Checkbox
                    color="primary"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.value)}
                  >
                    {checkbox.label}
                  </Checkbox>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-black mb-2">Mahsulotlar brendi</h4>
              {brandCheckboxes.map((checkbox) => (
                <div
                  key={checkbox.value}
                  className="mt-1"
                >
                  <Checkbox
                    color="primary"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.value)}
                  >
                    {checkbox.label}
                  </Checkbox>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-black mb-2">Xotira</h4>
              {memoryCheckboxes.map((checkbox) => (
                <div
                  key={checkbox.value}
                  className="mt-1"
                >
                  <Checkbox
                    color="primary"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.value)}
                  >
                    {checkbox.label}
                  </Checkbox>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-black mb-2">Tezkor xotira </h4>
              {ramCheckboxes.map((checkbox) => (
                <div
                  key={checkbox.value}
                  className="mt-1"
                >
                  <Checkbox
                    color="primary"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.value)}
                  >
                    {checkbox.label}
                  </Checkbox>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <Image
                width={45}
                src={filter_icon.src}
                alt="filter icon"
              />
              <p className="text-sm text-muted">Saralash:</p>
            </div>
            <div className="flex items-center justify-between">
              <Select
                labelPlacement={'outside-left'}
                placeholder="Mahsulotni filterlash"
                className="max-w-md"
                onChange={(e) => setIsTop(e.target.value === 'top' && true )}
                classNames={{
                  base: 'w-44',
                }}
              >
                {categorPorudctsFilter.map((el: ICategoryFilter) => (
                  <SelectItem
                    key={el.value.toString()}
                    value={el.value.toString()}
                    className="w-42"
                  >
                    {el.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Button className="block sm:hidden ml-auto mt-1">Filter</Button>
            <div className="hidden sm:block ml-auto">
              <Input
                size="sm"
                type="text"
                placeholder="Mahsulotlarni qidirish ..."
                variant="bordered"
                radius="sm"
                onChange={(e) => setSearch(e.target.value)}
                classNames={{
                  innerWrapper: 'bg-transparent overflow-hidden p-0 shadow-none border-none',
                  inputWrapper: 'bg-transparent p-0 shadow-none border  text-end',
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
                      {'Izlash'}
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
          </div>

          <div className="mt-6 sm:border-l-1 sm:pl-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {isLoading
              ? loadingData?.map((el: number) => (
                  <ProductCardLoading
                    isHorizontal={false}
                    key={el}
                  />
                ))
              : data?.data?.map((el: IProduct) => (
                  <ProductCard
                    key={el?._id}
                    {...el}
                    lang={lang}
                  />
                ))}
          </div>
          {data?.data?.length === 0 && (
            <div>
              <NoDataForProducts
                title={'Mahsulot topilmadi'}
                description={`Afsuski, qidiruvingiz bo’yicha hech narsa topilmadi. Kiritilgan malumotni tekshiring yoki so'rovni o'zgartirib ko'ring.`}
                buttonContent={'Bosh sahifaga qaytish'}
                href={'/'}
              />
            </div>
          )}
          {data?.data?.length > 0 && (
            <div className="mt-4">
              <center>
                <Pagination
                  showControls
                  color="primary"
                  onChange={(page) => setPage(page)}
                  total={3}
                  initialPage={1}
                />
              </center>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
