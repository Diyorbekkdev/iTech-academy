import { leaf, programming, users } from '.';

interface IAboutCards {
  imageURL: string;
  description: string;
}
export const aboutCardData: IAboutCards[] = [
  {
    imageURL: programming.src,
    description:
      'Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.',
  },
  {
    imageURL: users.src,
    description:
      'Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.',
  },
  {
    imageURL: leaf.src,
    description:
      'Bir vaqtning o‘zida 2500 dan ortiq o‘quvchilar va 350 dan ortiq katta jamoani bir maskanga yig‘a olgan ta‘lim va innovatsiya markazi.',
  },
];
