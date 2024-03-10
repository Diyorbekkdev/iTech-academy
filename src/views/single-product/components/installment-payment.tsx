import { bottom_arrow, info_icon, installmentPayments, tick } from '@/mock';
import { IProduct } from '@/types/product.types';

import { FC, useState } from 'react';

import { Card } from '@nextui-org/card';
import { Badge, Button, Image } from '@nextui-org/react';

interface IState {
  paymentType: number;
}

const InstallmentPayment: FC<IProduct> = (props) => {
  const [state, setState] = useState<IState>({ paymentType: 0 });
  return (
    <div className="flex lg:border-l lg:border-solid lg:border-gray-300 lg:pl-3 w-full flex-col gap-3">
      <p className="font-semibold text-xl">Muddatli to‘lovga rasmiylashtirish</p>
      <div className="flex flex-wrap gap-2">
        {installmentPayments.map(({ label, value }, idx) => (
          <Badge
            key={idx}
            isInvisible={value !== 12}
            content={
              <Image
                src={tick.src}
                alt="tick icon"
              />
            }
            className="bg-white p-0"
            placement="top-right"
          >
            <Button
              radius="sm"
              size="lg"
              disabled={value === 3 || value === 6 || value === 9}
              className={`${12 === value ? 'border-primary' : 'border-gray-300'} border-2 w-full border-solid bg-light-green`}
              onClick={() => setState((prev) => ({ ...prev, paymentType: 12 }))}
            >
              <p
                className={`${state.paymentType === value ? 'text-primary' : 'text-muted'} font-semibold`}
              >
                {label}
              </p>
            </Button>
          </Badge>
        ))}
      </div>
      <Badge
        // isInvisible={value !== state?.paymentType}
        content={
          <Image
            src={tick.src}
            alt="tick icon"
          />
        }
        className="bg-white p-0 -mr-4"
        placement="top-right"
      >
        <div className="flex flex-col gap-2 py-2 px-4 rounded-md border-2 border-solid border-primary w-full justify-between">
          <div className="flex items-center justify-between">
            <p className="text-muted text-xs">inTend hamkorining muddatli to'lovi</p>
            <Button
              isIconOnly
              className="bg-transparent"
            >
              <Image
                src={info_icon.src}
                alt="info"
              />
            </Button>
          </div>
          <p className="font-semibold text-base text-end">
            6 000 000 so’mdan x {state?.paymentType || 12} oy
          </p>
          <div className="flex gap-3 items-center mt-2 justify-between">
            <Button
              variant="faded"
              className="bg-primary flex-1 text-white"
              radius="sm"
            >
              Bo‘lib to‘lashga olish
            </Button>
            <Button
              variant="faded"
              className="text-white"
              radius="sm"
            >
              <Image
                src={bottom_arrow.src}
                alt="arrow"
                className="brightness-200 w-5 h-5 invert"
              />
            </Button>
          </div>
        </div>
      </Badge>
    </div>
  );
};

export default InstallmentPayment;
