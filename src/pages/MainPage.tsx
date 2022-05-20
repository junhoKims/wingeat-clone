import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

import { PAGE_ID_LIMIT } from '@lib/config/constants';
import { getFeatureImages, getItemList } from '@lib/api/api';
import { FeatureImageType, ItemType } from '@types';

import useCartList from '@hooks/useCartList';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

import Header from '@components/common/Header';
import Feature from '@components/MainPage/Feature';
import ItemList from '@components/MainPage/ItemList';

const MainPage = () => {
  const [featureImages, setFeatureImages] = useState<FeatureImageType[]>([]);
  const [itemList, setItemList] = useState<ItemType[]>([]);
  const [page, setPage] = useState<number>(1);
  const { cartList, handleItemClick } = useCartList();

  const handlePageUp = useCallback(() => {
    setPage((page) => (page >= 6 ? page : page + 1));
  }, []);

  const lastElemRef = useIntersectionObserver({
    index: page,
    limit: PAGE_ID_LIMIT,
    callback: handlePageUp,
    option: { threshold: 0.5 },
  });

  useEffect(() => {
    const fetchFeatureImages = async () => {
      const data = await getFeatureImages();
      data && setFeatureImages(data);
    };

    fetchFeatureImages();
  }, []);

  useEffect(() => {
    const fetchItems = async (page: number) => {
      const items = await getItemList(page);
      items && setItemList((prevItems) => [...prevItems, ...items]);
    };

    fetchItems(page);
  }, [page]);

  return (
    <Wrapper>
      <Header cartItemCount={cartList.length} />
      <Inner>
        <Feature images={featureImages} />
        <Label>윙잇 MADE</Label>
        <ItemList itemList={itemList} lastElemRef={lastElemRef} handleItemClick={handleItemClick} />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;

  margin: ${({ theme }) => theme.container.marginPC};

  @media ${({ theme }) => theme.size.mobile} {
    margin: ${({ theme }) => theme.container.marginMobile};
  }
`;

const Label = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`;

export default MainPage;
