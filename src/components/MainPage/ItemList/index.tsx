import { ItemType } from '@types';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';

type Props = {
  itemList: ItemType[] | [];
  lastElemRef?: (node: any) => void;
};

const ItemList = forwardRef(({ itemList }: Props, ref) => {
  return (
    <List>
      {itemList.map((item, key) => (
        <ItemCard ref={ref} item={item} key={key} {...(key === itemList.length - 1 && { isLastItem: true })} />
      ))}
    </List>
  );
});

const List = styled.ul`
  display: grid;
  transition: 0.3s;
  user-select: none;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  gap: 2rem;
  min-height: 100vh;

  @media ${({ theme }) => theme.size.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* padding: 0 20px 30px; */
  }
`;

export default ItemList;
