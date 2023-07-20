// import node module libraries
import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) => {
	// getting stored localStorage value
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem(key);
		const initial = saved !== null ? saved : defaultValue;
		return initial;
	}
};

const useLocalStorage = (key, defaultValue) => {
	const [storageValue, setStorageValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing values to localStorage
		localStorage.setItem(key, storageValue);
	}, [key, storageValue]);

	return {
		storageValue,
		setStorageValue,
		getStorageValue
	};
};

export default useLocalStorage;
