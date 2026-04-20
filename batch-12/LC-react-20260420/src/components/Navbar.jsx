import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 
        NavLink is a special version of the Link that will add an "active" class 
        to the element when the current URL matches the 'to' prop.
      */}
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Posts
      </NavLink>
      <NavLink
        to="/photos"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Photos
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
