import { Link } from 'react-router';

const Users = () => {
  const users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
  ];

  return (
    <div className="card">
      <h2>Users List</h2>
      <p>Click on a user to see their dynamic profile page.</p>

      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <span>{user.name}</span>
            {/* 
              This Link points to a dynamic route. 
              The ':userId' part of the route will be replaced by the user.id.
            */}
            <Link to={`/users/${user.id}`} className="nav-link">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
