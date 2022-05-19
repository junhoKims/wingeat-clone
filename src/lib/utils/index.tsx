import { CartListType } from '@types';

export const priceCommaRegex = (num: number): string => {
  if (num === 0) return '0';

  const parsedStr = String(num).replace(/[^\d]+/g, '');
  return parsedStr.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

export const calculateItemsPrice = (cartItems: CartListType) => {
  return cartItems.reduce(
    (acc, { item: { price }, quantity, isChecked }) => (isChecked ? acc + price * quantity : acc),
    0,
  );
};
