import { useState, useEffect } from 'react';

/**
 * useWindowWidth - A hook to track window's current width.
 * @returns {number} - The current window inner width.
 */
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
