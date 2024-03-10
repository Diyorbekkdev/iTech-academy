'use client';

import { useFetchApi } from '@/hooks';
import { IPageParams } from '@/types';
import { HomeIcon } from '@/views/single-product/components/home-icon';
import InstallmentPayment from '@/views/single-product/components/installment-payment';
import ProductDetails from '@/views/single-product/components/product-details';
import ProductImages from '@/views/single-product/components/product-images';

import { Tabs, Tab } from '@nextui-org/react';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import parse from 'html-react-parser';
import { get } from 'lodash';
import { useParams } from 'next/navigation';

interface IProductsPage extends IPageParams {}

export const SingleProductPage = ({ lang }: IProductsPage) => {
  const { id } = useParams();

  const { data, isLoading } = useFetchApi({
    url: `products/${id}/info`,
  });

  let tabs = [
    {
      id: 'photos',
      label: 'Mahsulot xususiyatlari',
      key: 'propertyInfo',
    },
    {
      id: 'music',
      label: 'Tavsif',
      key: 'shortDescription',
    },
  ];

  const singleProductLinks = [
    {
      link: `/categories/${get(data, 'data.category.slug')?.[lang]}`,
      label: `${get(data, 'data.category.name')?.[lang] || 'loading...'}`,
    },
    { link: '/products', label: `${get(data, 'data.name')?.[lang] || 'loading...'} ` },
  ];

  return (
    <section className="container mb-40">
      <div className=''>
        <Breadcrumbs variant="solid" className='flex-nowrap'
         classNames={{
          base: 'overflow-hidden whitespace-nowrap overflow-ellipsis',
          list: 'flex-nowrap'
        }}>
          <BreadcrumbItem
            href="/"
            startContent={<HomeIcon />}
          >
            {null}
          </BreadcrumbItem>
          {singleProductLinks?.map((el) => (
            <BreadcrumbItem
              key={el?.link}
              href={el?.link}
            
            >
              {el?.label}
            </BreadcrumbItem>
          ))}
        </Breadcrumbs>
      </div>
      <div className="mt-6 grid gap-7 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProductImages
          mainImage={data?.data?.mainImage}
          images={data?.data?.images}
        />
        <ProductDetails
          lang={lang}
          {...data?.data}
        />
        {/*<InstallmentPayment {...data?.data} />*/}
      </div>

      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        variant="underlined"
        className="max-w-4xl mt-5 "
        classNames={{
          panel: 'w-full max-w-4xl border-t -mt-1',
          tab: 'font-semibold',
        }}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
          >
            {parse(data?.data?.[item.key]?.[lang] || '<p></p>')}
          </Tab>
        )}
      </Tabs>
    </section>
  );
};
