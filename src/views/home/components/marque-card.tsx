import React from 'react';

import { Image } from '@nextui-org/react';

interface ImageCardProps {
  imageUrl: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl }) => {
  return (
    <div className="max-w-[266px] h-[237px] md:max-w-[366px] md:h-[337px] mx-3">
      <Image
        src={imageUrl}
        alt="images"
        className="w-full object-contain h-full  rounded-md cursor-pointer"
        classNames={{
          wrapper: 'w-full h-full object-cover rounded-md cursor-pointer',
        }}
      />
    </div>
  );
};
