import { useParams, useNavigate } from 'react-router';

const UserProfile = () => {
  // useParams() is a hook that gives us access to the dynamic 
  // parameters defined in our route path (e.g., :id).
  const { id } = useParams();

  // useNavigate() is a hook that allows us to navigate programmatically.
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>User Profile</h2>
      <div style={{ margin: '1.5rem 0', padding: '1.5rem', border: '1px solid rgba(100, 108, 255, 0.3)', borderRadius: '8px' }}>
        <p>Currently viewing profile for User ID: <strong>{id}</strong></p>
      </div>

      <p>
        This page demonstrates how to extract parameters from the URL.
        In a real app, you would use this ID to fetch data from an API.
      </p>

      <button onClick={() => navigate('/users')} style={{ marginTop: '1rem' }}>
        &larr; Back to Users
      </button>
    </div>
  );
};

export default UserProfile;
