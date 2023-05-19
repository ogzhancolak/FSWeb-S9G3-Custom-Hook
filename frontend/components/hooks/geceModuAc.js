import { useState } from 'react';
import useLocalStorageKullan from './localStorageKullan';

const useGeceModuAc = () => {
  const [geceModuAcik, setGeceModuAcik] = useLocalStorageKullan('geceModu', false);

  const toggleGeceModu = () => {
    setGeceModuAcik(prevValue => !prevValue);
  };

  return [geceModuAcik, toggleGeceModu];
};

export default useGeceModuAc;
