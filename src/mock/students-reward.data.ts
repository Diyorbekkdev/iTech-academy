import { whyItech } from '.';

interface RewardsItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export const studentsRewards: RewardsItem[] = [
  {
    id: 1,
    title: '5 000 000 so‘mgacha pul mukofoti',
    desc: 'IT park rezidenti bo‘lgan ekspartyor kompaniyalarda 6 oydan ko‘proq muddat ishlagan bitiruvchilarga 5 000 000 so‘mgacha pul mukofoti beriladi. * ',
    icon: whyItech.src,
  },
  {
    id: 2,
    title: 'Ingliz tili kursi uchun 5 000 000 so‘mgacha vaucher',
    desc: "Ingliz tilini “Najot Ta'lim”da o'rganishingiz uchun 4 000 000 so'mli yoki «Cambridge» o'quv markazida o'qishingiz uchun 1 000 000 so'mli vaucherlar taqdim etamiz.",
    icon: whyItech.src,
  },
  {
    id: 3,
    title: 'Onlayn kursni bepul qo‘lga kiriting',
    desc: 'Kasbiy ta‘lim dasturida o‘qish niyatida bo‘lgan va kurs uchun to‘lovni oldindan to‘liq amalga oshirganlar uchun najottalim.uz onlayn platformasidan 2,500,000 so‘m qiymatdagi Dasturlash foundation kursi bepul taqdim etiladi.',
    icon: whyItech.src,
  },
  {
    id: 4,
    title: 'Chet elga sayohat qilish imkoniyati',
    desc: 'Musobaqalarda kamida yilda bir marotaba chet elga bepul sayohat qilish imkoniyatini beramiz.',
    icon: whyItech.src,
  },
];
