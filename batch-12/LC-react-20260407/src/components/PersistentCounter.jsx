import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const PersistentCounter = () => {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className="card">
      <h3>3. useLocalStorage</h3>
      <p>Synchronizing state with browser storage.</p>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <p style={{ fontSize: '0.8rem' }}>Refresh page to see persistence.</p>
    </div>
  );
};

export default PersistentCounter;
