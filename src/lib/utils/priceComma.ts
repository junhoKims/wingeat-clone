export const priceCommaRegex = (num: number): string => {
  if (num === 0) return '';

  const parsedStr = String(num).replace(/[^\d]+/g, '');
  return parsedStr.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};
