import React from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

const ResponsiveInfo = () => {
  const width = useWindowWidth();

  return (
    <div className="card">
      <h3>4. useWindowWidth</h3>
      <p>Tracking browser window dimensions.</p>
      <div className="width-display">
        Current inner width: <span>{width}px</span>
      </div>
      <div  style={{ marginTop: '5px'}}>
        Device: <strong>{width < 768 ? '📱 Mobile' : width < 1024 ? '💻 Tablet' : '🖥️ Desktop'}</strong>
      </div>
      <p style={{ fontSize: '0.8rem' }}>Resize the window to watch it update.</p>
    </div>
  );
};

export default ResponsiveInfo;
