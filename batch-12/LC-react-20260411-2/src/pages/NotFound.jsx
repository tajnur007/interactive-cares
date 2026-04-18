import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="nav-link" style={{ background: '#646cff', color: 'white', opacity: 1 }}>
        Go back Home
      </Link>
    </div>
  );
};

export default NotFound;
