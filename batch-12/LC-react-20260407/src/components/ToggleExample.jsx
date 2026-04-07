import React from 'react';
import useToggle from '../hooks/useToggle';

// UseToggle - invalid
// hookToggle - invalid 
// useState - invalid
// useToggle - valid


const ToggleExample = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="card">
      <h3>1. useToggle</h3>
      <p>Simple hook to switch boolean states.</p>
      <div className="status" style={{ backgroundColor: isOn ? '#4caf50' : '#f44336' }}>
        {isOn ? 'ON' : 'OFF'}
      </div>
      <button onClick={toggle}>Toggle State</button>
    </div>
  );
};

export default ToggleExample;
