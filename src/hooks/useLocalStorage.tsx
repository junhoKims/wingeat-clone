import { useState, useEffect } from 'react';

function useLocalStorage(key: string) {
  const [storedValue, setStoredValue] = useState(loadValue(key));

  useEffect(() => {
    setStoredValue(loadValue(key));
  }, [key]);

  const setValue = (value: string) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

function loadValue(key: string) {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : [];
}

export default useLocalStorage;
