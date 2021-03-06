import { IMAGE_ENDPOINT } from '@lib/config/endpoints';
import { priceCommaRegex } from '@lib/utils';
import { CartListType } from '@types';
import { memo } from 'react';

import styled from 'styled-components';

type Props = {
  cartList: CartListType;
  handleCartDelete: (id: string) => void;
  handleCheckboxClick: (id: string) => void;
  handleQuantityChange: (id: string, quantity: number) => void;
};

const CartList = ({ cartList, handleCartDelete, handleCheckboxClick, handleQuantityChange }: Props) => {
  return (
    <Wrapper>
      {!cartList.length ? (
        <CartEmptyBanner>π μ₯λ°κ΅¬λκ° λΉμ΄ μμ΅λλ€.</CartEmptyBanner>
      ) : (
        cartList.map(({ item: { id, image, itemName, price }, quantity, isChecked }, key) => (
          <CartItem key={key} data-id={id}>
            <CartRow1>
              <Checkbox isChecked={isChecked} onClick={() => handleCheckboxClick(id)}>
                {isChecked && 'βοΈ'}
              </Checkbox>
              <ItemName>{itemName}</ItemName>
              <DeleteButton onClick={() => handleCartDelete(id)}>β</DeleteButton>
            </CartRow1>
            <CartRow2>
              <ItemImage src={`${IMAGE_ENDPOINT}/${image}`} alt={`cart-image-${id}`} />
              <CartRow2Col2>
                <ItemPrice>{priceCommaRegex(price)}</ItemPrice>
                <QuantityInput
                  type='number'
                  defaultValue={quantity}
                  min='1'
                  onChange={(e) => handleQuantityChange(id, Number(e.target.value))}
                />
              </CartRow2Col2>
            </CartRow2>
            <CartRow3>
              <ItemSumPrice>{priceCommaRegex(price * quantity)}</ItemSumPrice>
            </CartRow3>
          </CartItem>
        ))
      )}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  height: 80vh;
  overflow-y: auto;
  padding: 0 5vw;

  @media ${({ theme }) => theme.size.mobile} {
    height: 70vh;
  }
`;

const CartEmptyBanner = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

const CartItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border: 0.5px solid black;
  border-radius: 1rem;
  padding: 1.2rem;
  margin-bottom: 0.4rem;
  user-select: none;
`;

const CartRow1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.4rem;
`;
const CartRow2 = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const CartRow2Col2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.4rem 0;
`;

const CartRow3 = styled.div`
  font-weight: bold;
  margin-left: auto;
`;

const Checkbox = styled.button<{ isChecked: boolean }>`
  width: 1rem;
  height: 1rem;
  border: 1.2px solid black;
  border-radius: 50%;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemName = styled.p`
  font-size: 1rem;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  &::after {
    content: 'μ';
  }
`;

const ItemImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

const DeleteButton = styled.button`
  margin-left: auto;
`;

const QuantityInput = styled.input`
  width: 5rem;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #aaa;
  border-radius: 0.2rem;

  input[type='number']:hover::-webkit-inner-spin-button,
  input[type='number']:hover::-webkit-outer-spin-button {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;
const ItemSumPrice = styled.p`
  &::before {
    content: 'ν©κ³: ';
  }

  &::after {
    content: 'μ';
  }
`;

export default memo(CartList);
