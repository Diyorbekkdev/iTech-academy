import { ReactNode } from 'react';

import Image from 'next/image';

interface CardProps {
  item: {
    id: number;
    title: string;
    icon: string;
  };
  nextArrow: {
    src: string;
  };
}

export const Card: React.FC<CardProps> = ({ item, nextArrow }) => {
  return (
    <div
      key={item.id}
      className="p-10 cursor-pointer relative my-3 bg-light-pink rounded-[20px] sm:w-full group items-center hover:rotate-0"
    >
      <Image
        className="mb-4 ml-16 mt-5"
        src={item.icon}
        alt={item.title}
        width={220}
        height={200}
      />
      <h1 className="text-2xl font-semibold leading-6 mb-4 absolute top-6 left-4">{item.title}</h1>

      <Image
        src={nextArrow.src}
        alt="Arrow"
        width={40}
        height={40}
        className="absolute bg-white p-1 rounded-full right-10 bottom-8 -rotate-45 group-hover:rotate-0 transition ease-in-out duration-300"
      />
    </div>
  );
};

