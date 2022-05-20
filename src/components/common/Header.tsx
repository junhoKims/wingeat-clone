import styled from 'styled-components';
import { IMAGE_ENDPOINT, LOGO_IMAGE } from '@lib/config/endpoints';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';

type Props = {
  cartItemCount: number;
};

const Header = ({ cartItemCount }: Props) => {
  const navigate = useNavigate();

  const handleClickCartButton = useCallback(() => {
    navigate('/cart');
  }, [navigate]);

  return (
    <Wrapper>
      <CartButtonBox>
        <CartButtonWrapper onClick={handleClickCartButton}>
          {!!cartItemCount && <CartCountBadge>{cartItemCount}</CartCountBadge>}
          <CartButton>장바구니</CartButton>
        </CartButtonWrapper>
      </CartButtonBox>
      <Logo src={`${IMAGE_ENDPOINT}/${LOGO_IMAGE}`} alt='main-logo' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  user-select: none;

  /* mobile ver */
  @media ${({ theme }) => theme.size.mobile} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    transition: 0.5s;
    margin: ${({ theme }) => theme.container.marginMobile};
  }
`;

const Logo = styled.img`
  width: 7rem;
  margin: auto;
  cursor: pointer;

  /* mobile ver */
  @media ${({ theme }) => theme.size.mobile} {
    margin: 0;
  }
`;

const CartButtonBox = styled.div`
  background-color: #ccc;

  /* mobile ver */
  @media ${({ theme }) => theme.size.mobile} {
    background: none;
  }
`;

const CartButtonWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  float: right;
  margin: 0.5rem 3rem;
  cursor: pointer;

  /* mobile ver */
  @media ${({ theme }) => theme.size.mobile} {
    clear: right;
    margin: 0;
  }
`;

const CartButton = styled.button`
  font-size: 0.8rem;
  font-weight: 700;
  color: #555;
`;

const CartCountBadge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.mainColor};
  font-size: 0.6rem;
  color: white;
`;

export default memo(Header);
