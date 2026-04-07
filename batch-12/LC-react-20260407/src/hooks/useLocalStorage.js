import { useState, useEffect } from 'react';

/**
 * useLocalStorage - A custom hook to sync state with localStorage.
 * @param {string} key - The localStorage key.
 * @param {*} initialValue - The fallback initial value.
 * @returns {[*, function]} - The current value and a setter function.
 */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch (e) {
      console.error('Local storage read error:', e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Local storage write error:', e);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
