'use client';

import { MainInput, PhoneInputMask } from '@/components';
import { CustomForm } from '@/components/form';
import { useAppSelector } from '@/hooks';
import { useLocaleLink } from '@/hooks/locale-link';
import { region, subRegion } from '@/mock/regions.data';
import { IPageParams } from '@/types';
import { priceFormat } from '@/utils';
import { HomeIcon } from '@/views/single-product/components/home-icon';

import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

import { BreadcrumbItem, Breadcrumbs, Button, Image, Select, SelectItem } from '@nextui-org/react';
import { FastField } from 'formik';
import { get } from 'lodash';
import { useRouter } from 'next/navigation';

interface IFavouritesPage extends IPageParams {}

export const FormalizationPage = ({ lang }: IFavouritesPage) => {
  const { data } = useAppSelector((state) => state.user);
  const { data: orderData } = useAppSelector((state) => state.order);
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { LocaleLink } = useLocaleLink();
  const router = useRouter();
  const [regions, setRegions] = useState({
    region: '',
    address: '',
  });

  if (!isAuthenticated) {
    return <p>Not found</p>;
  }

  const getRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    setRegions({ ...regions, region: e?.target.value });
  };
  const getSubregion = (e: ChangeEvent<HTMLSelectElement>) => {
    setRegions({ ...regions, address: e.target.value });
  };


  const filteredSubRegions = subRegion.find((r) => r.id === regions?.region)?.subregion ?? [];
  return (
    <section className="container">
      <Breadcrumbs variant="solid">
        <BreadcrumbItem
          href="/"
          startContent={<HomeIcon />}
        >
          {null}
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Rasmiylashtirish</BreadcrumbItem>
      </Breadcrumbs>

      <h4 className="text-md md:text-xl font-medium mt-6">Muddatli to‘lovni rasmiylashtirish</h4>
      <div className="flex flex-col md:flex-row gap-4 items-baseline">
        <div className="w-full flex-1 mt-6">
          <CustomForm
            method={'post'}
            url={`orders`}
            onSuccess={(value) => {
              router.push(`${value?.data?.paymentUrl}`);
              toast.success(value?.data?.message);
            }}
            onError={() => toast.error('User information updated failed')}
            customData={{
              products: [
                {
                  productId: orderData?._id,
                  count: 1,
                },
              ],
              plan: 12,
              paymentProvider: 'INTEND',
              region: regions?.region,
              address: regions?.address,
              color: orderData?.selectedColor ?? null,
              memory: orderData?.selectedMemroy?.memory ?? null,
            }}
            fields={[
              {
                name: 'fullName',
                value: get(data, 'fullName'),
                validations: [{ type: 'required' }],
                onSubmitValue: (value) => value,
              },
              {
                name: 'phone',
                value: get(data, 'phone'),
                validations: [{ type: 'required' }],
                onSubmitValue: (value) => value,
              },
            ]}
          >
            {({ isSubmitting }) => {
              return (
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                    <FastField
                      name="phone"
                      component={PhoneInputMask}
                      label="Telefon raqamingiz"
                      placeholder="+998(__) ___ - __ - __"
                    />
                    <FastField
                      name="fullName"
                      component={MainInput}
                      label="Ism va familiyangiz"
                      placeholder="Ism va familiyangiz"
                    />
                  </div>
                  <h4 className="text-md md:text-xl font-medium mt-6">To‘lov ma‘lumotlari</h4>
                  <div className="w-full bg-transparent-gray grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5 rounded-md mt-2">
                    <div>
                      <p className="text-dark-gray text-sm">To‘lov turi:</p>
                      <span>INTEND</span>
                    </div>
                    <div>
                      <p className="text-dark-gray text-sm">To‘lov muddati:</p>
                      <span>12 oy</span>
                    </div>
                    <div>
                      <p className="text-dark-gray text-sm">Oylik to’lov:</p>
                      <span>{priceFormat(orderData?.priceData)} $ dan oyiga</span>
                    </div>
                  </div>
                  <h4 className="text-md md:text-xl font-medium mt-6">Yetkazib berish</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-4 gap-4">
                    <div>
                      <p>Viloyat</p>
                      <Select
                        className="max-w-xs  w-full"
                        placeholder="Tanlang"
                        classNames={{ mainWrapper: 'bg-white' }}
                        onChange={getRegion}
                      >
                        {region.map((region) => (
                          <SelectItem
                            key={region.value}
                            value={region.value}
                          >
                            {region.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <p>Shahar / Tuman Yetkazib berish punkti</p>
                      <Select
                        className="max-w-xs"
                        placeholder="Tanlang"
                        onChange={getSubregion}
                      >
                        {filteredSubRegions?.map((region) => (
                          <SelectItem
                            key={region.value}
                            value={region.value}
                          >
                            {region.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                  {/*<h4 className="text-md md:text-xl font-medium mt-6">Yetkazib berish manzilini kiriting</h4>*/}
                  {/*<div className="mt-4">*/}
                  {/*  <FastField*/}
                  {/*    name="manzil"*/}
                  {/*    component={MainInput}*/}
                  {/*    label="Manzil*"*/}
                  {/*    placeholder="Masalan, Yunusobod 13-kvartal"*/}
                  {/*  />*/}
                  {/*</div>*/}
                  {/*<div className="mt-4">*/}
                  {/*  <FastField*/}
                  {/*    name="textArea"*/}
                  {/*    component={CustomTextArea}*/}
                  {/*    label="Buyurtmaga izoh"*/}
                  {/*    placeholder="Buyurtma haqida qo’shimcha izoh bo’lsa yozing"*/}
                  {/*  />*/}
                  {/*</div>*/}
                  {isSubmitting}
                  <div className="fixed right-0 left-0 bottom-[60px] border-t-1 sm:border-none bg-white sm:bg-transparent px-2 py-2 z-20 sm:pb-0 sm:py-0 sm:px-0  sm:static text-start mt-6">
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                      className="bg-primary  w-full sm:w-48  text-white"
                    >
                      Xaridni rasmiylashtirish
                    </Button>
                    <LocaleLink href={`/products/${orderData?.slug?.[lang]}`}>
                      <Button
                        type="button"
                        className="ml-3 hidden sm:block"
                      >
                        Orqaga
                      </Button>
                    </LocaleLink>
                  </div>
                </div>
              );
            }}
          </CustomForm>
        </div>
        <div className="basis-[100%] mb-20 sm:mb-0 md:basis-[30%] w-full border-l-1 pl-2 ">
          <div>
            <h5>Buyurtmadagi mahsulotlar</h5>
          </div>
          <div className="flex items-center mt-2 gap-2 border-t-1 pt-1">
            <Image
              className="w-20 h-20 rounded object-cover"
              src={orderData?.mainImage}
              alt="ordered product"
            />
            <div>
              <p className="text-md">{orderData?.name?.[lang]}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold break-words">
                  {priceFormat(orderData?.priceData)} $ dan / 12 oyga
                </span>
                <span className="text-lg font-bold ml-5">{orderData?.count}x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
