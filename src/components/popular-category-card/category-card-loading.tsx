import { Skeleton } from '@nextui-org/react';

export const PopularCategoryCardLoading = () => {
  return (
    <div className="flex max-w-64 min-w-60 bg-light-gray gap-3 p-3 h-full items-start justify-between rounded-3xl overflow-hidden cursor-pointer">
      <Skeleton className="w-full h-24 rounded" />
    </div>
  );
};
