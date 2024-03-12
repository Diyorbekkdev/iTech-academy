import { whyItech } from '.';

interface WhyItechItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export const whyItechData: WhyItechItem[] = [
  {
    id: 1,
    title: 'Bepul kovorking',
    desc: '24/7 formatida tun-u kun ishlaydigan bepul kovorking va wifi.',
    icon: whyItech.src,
  },
  {
    id: 2,
    title: 'Sifatli talim',
    desc: 'Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.',
    icon: whyItech.src,
  },
  {
    id: 3,
    title: 'Doimiy musobaqalar',
    desc: 'Dasturlash, dizayn va marketing sohalari bo‘yicha haftalik sovrinli musobaqalar.',
    icon: whyItech.src,
  },
  {
    id: 4,
    title: 'Bepul mahorat darslari',
    desc: 'Soha mutaxassislari bilan doimiy o‘tkaziladigan bepul master-klasslar.',
    icon: whyItech.src,
  },
  {
    id: 5,
    title: 'Ish taklif qilish kafolati * ',
    desc: "“Najot Ta'lim” intensiv kurslarni muvaffaqiyatli bitirgan o‘quvchilarga ish taklif qilish kafolatini beradi. * ",
    icon: whyItech.src,
  },
  {
    id: 6,
    title: 'Sertifikat',
    desc: "Kursni muvaffaqiyatli tamomlagan o‘quvchilar “Najot Ta'lim”ning diplomi va sertifikatiga ega bo‘ladi.",
    icon: whyItech.src,
  },
];
