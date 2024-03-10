'use client';

import { MainInput, PhoneInputMask } from '@/components';
import { CustomForm } from '@/components/form';
import { useAppSelector } from '@/hooks';
import { IPageParams } from '@/types';

import { useState } from 'react';
import toast from 'react-hot-toast';

import { Button } from '@nextui-org/react';
import { FastField } from 'formik';
import { get } from 'lodash';

interface IUserAccountPage extends IPageParams {}
export const UserAccountPage = ({ lang }: IUserAccountPage) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <div className="rounded border">
        <div className="bg-light-gray rounded border-b-1 flex items-center justify-between px-6 py-4">
          <p className="font-bold">Shaxsiy ma‘lumotlar</p>
          {!isEditing && <Button onClick={() => setIsEditing(true)}>O‘zgartirish</Button>}
        </div>
        <CustomForm
          method={'put'}
          url={`users/1`}
          onSuccess={() => {
            toast.success('User information updated successfully');
          }}
          onError={() => toast.error('User information updated failed')}
          fields={[
            {
              name: 'fullName',
              // value: get(data, 'fullName'),
              value: 'Saidalixon Sobirov',
              onSubmitValue: (value) => value.trimStart(),
            },
            {
              name: 'phone',
              // value: get(data, 'fullName'),
              value: '+998907661770',
              onSubmitValue: (value) => value,
            },
            {
              name: 'address',
              value: 'Kiritilmagan',
              // value: get(data, 'address'),
              onSubmitValue: (value) => value.trimStart(),
            },
          ]}
        >
          {({ isSubmitting }) => {
            return (
              <div>
                <div className="flex flex-col gap-3 px-6 py-5">
                  <div className="flex items-center gap-14">
                    <p className="text-md text-dark-gray">Ism va familiyangiz:</p>
                    {isEditing ? (
                      <div className="w-1/3">
                        <FastField
                          name="fullName"
                          component={MainInput}
                          // label="To'liq ism sharifingiz"
                          placeholder="To'liq ism sharifingizni kiriting"
                        />
                      </div>
                    ) : (
                      <p className="font-semibold">Saidalixon Sobirov</p>
                    )}
                  </div>
                  <div className="flex items-center  gap-14">
                    <p className="text-md text-dark-gray">Telefon raqamingiz:</p>
                    {isEditing ? (
                      <div className="w-1/3">
                        <FastField
                          name="phone"
                          component={PhoneInputMask}
                          // label="Yashash manzilingiz"
                          placeholder="Yashash manzilingiz"
                        />
                      </div>
                    ) : (
                      <p className="font-semibold">+998 (90) 766-1770</p>
                    )}
                  </div>
                  <div className="flex items-center  gap-7">
                    <p className="text-md text-dark-gray">Yetkazib berish manzili:</p>
                    {isEditing ? (
                      <div className="w-1/3">
                        <FastField
                          name="address"
                          component={MainInput}
                          // label="Yashash manzilingiz"
                          placeholder="Yashash manzilingiz"
                        />
                      </div>
                    ) : (
                      <p className="font-semibold">Kiritilmagan</p>
                    )}
                  </div>
                </div>
                {isSubmitting}
                <div className="text-end ">
                  {isEditing && (
                    <div className="flex justify-end items-center gap-2 p-4">
                      <Button
                        type="submit"
                        color="default"
                        onClick={() => setIsEditing(false)}
                        className='cursor-pointer'
                      >
                        Bekor qilish
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        isLoading={isSubmitting}
                        disabled={true}
                        className='cursor-pointer'
                        
                      >
                        O'zgarishni saqlash
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          }}
        </CustomForm>
      </div>
    </div>
  );
};
