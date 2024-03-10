export { queryBuilder } from './api-helper';
export { queryFn } from './api-helper';
export { httpClient } from './request';
export { priceFormat } from './price-format';

export function calculateFinalPrice(
  price: number,
  discount: number
): { discountPrice: number; price: number } {
  if (discount < 0 || discount > 100) {
    throw new Error('Discount must be between 0 and 100 (inclusive)');
  }

  const discountAmount = (price * discount) / 100;
  const discountPrice = price - discountAmount;
  return {
    discountPrice,
    price,
  };
}
