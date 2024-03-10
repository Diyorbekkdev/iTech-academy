import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/react';

interface ICardLoading {
  isHorizontal: boolean;
}
export const ProductCardLoading = ({ isHorizontal }: ICardLoading) => {
  return (
    <Card
      classNames={{
        base: `${isHorizontal && 'flex-row'} cursor-pointer border min-h-36 xsm:min-h-40 border-border-color rounded-xl hover:border-gray-200 relative overflow-hidden group shadow-md`,
        header: `${isHorizontal && 'w-28 ml-2'}`,
      }}
    >
      <CardHeader className="p-0">
        <Skeleton className="rounded-lg  flex-1">
          <div className="h-32  md:h-56 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardHeader>
      <CardBody>
        <div className="space-y-3 h-32 md:h-44 px-2">
          <Skeleton className={`w-1/3   mt-2 rounded`}>
            <div className="h-3 w-3/5 md:rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded mt-2 md:p-2">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/3 rounded mt-2 md:p-2">
            <div className="h-3 w-full rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="flex gap-2">
            <Skeleton className="w-2/3 rounded mt-2 md:p-2">
              <div className="h-6 w-full rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="w-2/3 rounded mt-2 p-2">
              <div className="h-3 w-full rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
