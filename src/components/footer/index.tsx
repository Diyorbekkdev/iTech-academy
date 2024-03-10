'use client';

import { TLocale } from "@/types";

interface IFooter {
  lang: TLocale;
}


export const Footer = ({ lang }: IFooter) => {
  return (
    <footer>
      Footer
    </footer>
  );
};
