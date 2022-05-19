import { IMAGE_ENDPOINT } from '@lib/config/endpoints';
import { priceCommaRegex } from '@lib/utils';
import { ItemType } from '@types';
import styled from 'styled-components';

type Props = {
  itemList: ItemType[] | [];
  handleItemClick: (item: ItemType) => void;
  lastElemRef: (node: HTMLImageElement) => void;
};

const ItemList = ({ itemList, handleItemClick, lastElemRef }: Props) => {
  return (
    <List>
      {itemList?.map(({ id, image, itemName, price }, key) => (
        <ItemCard onClick={() => handleItemClick({ id, image, itemName, price })} key={key}>
          <Image
            src={`${IMAGE_ENDPOINT}/${image}`}
            data-id={id}
            alt={`item-image-${id}`}
            isLast={key === itemList.length - 1}
            {...(key === itemList.length - 1 && { ref: lastElemRef })}
          />
          <ItemName>{itemName}</ItemName>
          <Price>{priceCommaRegex(price)}</Price>
        </ItemCard>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: grid;
  transition: 0.3s;
  user-select: none;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  margin-bottom: 5rem;
  gap: 2rem;

  @media ${({ theme }) => theme.size.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ItemCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-items: center;
  cursor: pointer;
`;

export const Image = styled.img<{ isLast: boolean }>`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 0.8rem;
`;

export const ItemName = styled.p`
  margin-bottom: 0.8rem;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;

  &:after {
    content: '원';
  }
`;

export default ItemList;
