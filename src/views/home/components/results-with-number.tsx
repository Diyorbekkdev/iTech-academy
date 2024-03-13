import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

export const ResultsWithNumbersCard = () => {
  return (
    <Card
      className="overflow-hidden min-h-[380px] p-0"
      classNames={{
        base: 'relative overflow-hidden min-h-[380px] p-0 border border-border-color rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden min-h-[380px] p-0',
        header:
          'rounded-none relative max-h-44 xsm:max-h-52 md:max-h-60 lg:max-h-80 overflow-hidden p-4',
        body: 'overscroll-y-none',
      }}
    >
      <CardHeader className="flex flex-col items-start">
        <h4 className="results__amount">6000+</h4>
        <p className="results__info">Shu kungacha bitirgan o‘quvchilar</p>
      </CardHeader>
      <CardBody className="overscroll-y-none overflow-hidden">
        <Image
          width={200}
          height={200}
          className="absolute forscroll -left-5 top-12 overscroll-y-none"
          src="https://najottalim.uz/assets/studentCap.png"
          alt=""
        />
      </CardBody>
    </Card>
  );
};
