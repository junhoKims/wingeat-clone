import { IMAGE_ENDPOINT } from '@lib/config/endpoints';
import { priceCommaRegex } from '@lib/utils/priceComma';
import { CartListType, ItemType } from '@types';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import useLocalStorageState from 'use-local-storage-state';

type Props = {
  item: ItemType;
  isLastItem?: boolean;
};

const ItemCard = forwardRef(({ item, item: { id, image, itemName, price }, isLastItem }: Props, ref) => {
  const [, setCartList] = useLocalStorageState<CartListType>('user_cart_list', { defaultValue: [] });

  const handleItemClick = () => {
    setCartList((prev) => [...prev, { item, quantity: 1 }]);
  };

  return (
    <Wrapper onClick={handleItemClick}>
      <Image src={`${IMAGE_ENDPOINT}/${image}`} data-id={id} alt={`item-image-${id}`} {...(isLastItem && { ...ref })} />
      <ItemName>{itemName}</ItemName>
      <Price>{priceCommaRegex(price)}</Price>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  min-height: 100vh;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 0.8rem;
`;

const ItemName = styled.p`
  margin-bottom: 0.8rem;
`;
const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;

  &:after {
    content: '원';
  }
`;

export default ItemCard;
