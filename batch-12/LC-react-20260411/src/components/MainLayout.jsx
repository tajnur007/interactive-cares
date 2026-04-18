import { Outlet } from 'react-router';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className="container">
      <header>
        <h1>React Router Class</h1>
        <Navbar />
      </header>

      <main>
        {/* 
          The Outlet component is a placeholder where the child route 
          components will be rendered. This is essential for nested routing.
        */}
        <Outlet />
      </main>

      <footer style={{ marginTop: '3rem', opacity: 0.5, textAlign: 'center' }}>
        <p>&copy; 2026 Interactive Cares - Web Development with Python, Django & React - Batch 12</p>
      </footer>
    </div>
  );
};

export default MainLayout;
