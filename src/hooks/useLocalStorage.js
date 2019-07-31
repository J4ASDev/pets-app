import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storeValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item !== null ? JSON.parse(item) : initialValue;
    } catch(err) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch(err) {
      console.log(err);
    }
  };

  return [storeValue, setLocalStorage];
};

export default useLocalStorage;
