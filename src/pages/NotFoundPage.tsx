import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mainLogoSrc from '@assets/logo/main_logo.png';
import { useCallback } from 'react';

interface Props {}

const NotFoundPage = (props: Props) => {
  const navigate = useNavigate();

  const onClickButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Wrapper>
      <ImageWrapper>
        <Logo src={mainLogoSrc} />
      </ImageWrapper>
      <Title>요청하신 페이지를 찾을 수 없습니다.</Title>
      <BackButton onClick={onClickButton}>뒤로 가기</BackButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

const ImageWrapper = styled.div`
  width: clamp(150px, 50vw, 180px);
`;

const Logo = styled.img``;

const BackButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default NotFoundPage;
