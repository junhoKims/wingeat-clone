import { useCallback } from 'react';
import { CartListType, ItemType } from '@types';
import useLocalStorageState from 'use-local-storage-state';

const useCartList = () => {
  const [cartList, setCartList] = useLocalStorageState<CartListType>('user_cart_list', { defaultValue: [] });

  const handleItemClick = useCallback(
    (clickedItem: ItemType) => {
      const index = cartList.findIndex(({ item }) => item.id === clickedItem.id);
      if (index !== -1) {
        const newCartList = [...cartList];
        newCartList.splice(index, 1, { ...cartList[index], quantity: cartList[index].quantity + 1 });
        setCartList(newCartList);
        alert('장바구니에 이미 같은 상품이 존재합니다.');
        return;
      }

      setCartList((prev) => [...prev, { item: { ...clickedItem }, quantity: 1, isChecked: true }]);
      alert('장바구니에 상품을 담았습니다!');
    },
    [cartList, setCartList],
  );

  const handleCartDelete = useCallback(
    (id: string) => {
      setCartList([...cartList.filter(({ item }) => item.id !== id)]);
    },
    [cartList, setCartList],
  );

  const handleCheckboxClick = useCallback(
    (id: string) => {
      const index = cartList.findIndex(({ item }) => item.id === id);
      const checkState = cartList[index].isChecked;
      const newCartList = [...cartList];
      newCartList.splice(index, 1, { ...cartList[index], isChecked: !checkState });

      setCartList(newCartList);
    },
    [cartList, setCartList],
  );

  const handleQuantityChange = useCallback(
    (id: string, quantity: number) => {
      const index = cartList.findIndex(({ item }) => item.id === id);
      const newCartList = [...cartList];
      newCartList.splice(index, 1, { ...cartList[index], quantity });

      setCartList(newCartList);
    },
    [cartList, setCartList],
  );

  const handleCartDeleteAll = useCallback(() => {
    setCartList([]);
    alert('✅ 주문이 완료되었습니다!');
  }, [setCartList]);

  return {
    cartList,
    setCartList,
    handleItemClick,
    handleCartDelete,
    handleCartDeleteAll,
    handleCheckboxClick,
    handleQuantityChange,
  };
};

export default useCartList;
