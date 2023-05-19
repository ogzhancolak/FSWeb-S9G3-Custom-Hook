import { useState, useEffect } from 'react';

const useLocalStorageKullan = (key, baslangicDegeri) => {
    const [value, setValue] = useState(() => {
        const localStorageDegeri = localStorage.getItem(key);
        return localStorageDegeri ? JSON.parse(localStorageDegeri) : baslangicDegeri;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorageKullan;
