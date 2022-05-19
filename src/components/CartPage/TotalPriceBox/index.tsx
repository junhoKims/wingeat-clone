import { calculateItemsPrice, priceCommaRegex } from '@lib/utils';
import { CartListType } from '@types';
import styled from 'styled-components';

type Props = {
  cartList: CartListType;
  handleCartDeleteAll: () => void;
};

const TotalPriceBox = ({ cartList, handleCartDeleteAll }: Props) => {
  return (
    <Wrapper>
      <PriceBox>
        <TotalCartPriceLabel>결제 예정 금액</TotalCartPriceLabel>
        <TotalCartPrice>{priceCommaRegex(calculateItemsPrice(cartList))}</TotalCartPrice>
      </PriceBox>
      <OrderButton onClick={handleCartDeleteAll}>주문하기</OrderButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
    flex-direction: row;
    gap: 1rem;
  }
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 1rem;
`;

const TotalCartPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainColor};

  &::after {
    content: '원';
  }
`;
const TotalCartPriceLabel = styled.span`
  font-size: 1rem;
`;

const OrderButton = styled.button`
  background-color: ${({ theme }) => theme.color.mainColor};
  font-size: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;
`;

export default TotalPriceBox;
