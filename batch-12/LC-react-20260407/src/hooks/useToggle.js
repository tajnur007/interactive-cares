import { useState } from 'react';

/**
 * useToggle - A custom hook for simple boolean state transitions.
 * @param {boolean} initialState - The starting value.
 * @returns {[boolean, function]} - Current value and a function to toggle it.
 */
function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
}

export default useToggle;
