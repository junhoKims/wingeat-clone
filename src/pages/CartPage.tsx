import { useNavigate } from 'react-router';

import backArrowSrc from '@assets/icon/back-arrow.svg';
import styled from 'styled-components';
import useCartList from '@hooks/useCartList';
import CartList from '@components/CartPage/CartList';
import TotalPriceBox from '@components/CartPage/TotalPriceBox';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartList, handleCartDelete, handleCartDeleteAll, handleQuantityChange, handleCheckboxClick } = useCartList();

  return (
    <Wrapper>
      <Navbar>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowIcon src={backArrowSrc} alt='back-icon' />
        </BackButton>
        <Title>장바구니</Title>
      </Navbar>
      <Container>
        <CartContainer>
          <CartList
            cartList={cartList}
            handleCartDelete={handleCartDelete}
            handleCheckboxClick={handleCheckboxClick}
            handleQuantityChange={handleQuantityChange}
          />
        </CartContainer>
        <TotalPriceContainer>
          <TotalPriceBox cartList={cartList} handleCartDeleteAll={handleCartDeleteAll} />
        </TotalPriceContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  user-select: none;
`;

const BackButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto;
  margin-left: 1rem;
`;

const ArrowIcon = styled.img``;

const Title = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 3vh 10vw;
  gap: 3vw;

  @media ${({ theme }) => theme.size.mobile} {
    flex-direction: column;
    align-items: center;
    height: 50vh;
  }
`;

const CartContainer = styled.div`
  flex: 8;

  @media ${({ theme }) => theme.size.mobile} {
    flex: 1;
  }
`;

const TotalPriceContainer = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.size.mobile} {
    flex: none;
  }
`;

export default CartPage;
