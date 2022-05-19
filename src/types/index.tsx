export type FeatureImageType = {
  image: string;
  mobileImage: string;
};

export type ItemType = {
  id: string;
  image: string;
  itemName: string;
  price: number;
};

export type CartItemType = {
  item: ItemType;
  quantity: number;
  isChecked: boolean;
};

export type CartListType = CartItemType[];
