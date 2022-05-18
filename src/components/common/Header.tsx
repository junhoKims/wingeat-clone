import styled from 'styled-components';
import { IMAGE_ENDPOINT, LOGO_IMAGE } from '@lib/config/endpoints';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();

  const handleClickCartButton = useCallback(() => {
    navigate('/cart');
  }, []);

  return (
    <Wrapper>
      <CartButtonBox>
        <CartButton onClick={handleClickCartButton}>장바구니</CartButton>
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

const CartButton = styled.button`
  float: right;
  margin: 0.3rem 3rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;

  /* mobile ver */
  @media ${({ theme }) => theme.size.mobile} {
    clear: right;
    margin: 0;
  }
`;

export default Header;
