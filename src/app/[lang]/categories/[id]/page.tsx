import { IParams } from '@/types';
import { CategoriesProductsPage } from '@/views';

export default function CategoriesProducts({ params: { lang } }: IParams) {
    return <CategoriesProductsPage lang={lang} />;
}
