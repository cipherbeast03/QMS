// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="navbar-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/audit" className="navbar-link">
            Audit
          </NavLink>
        </li>
        <li>
          <NavLink to="/audit-review" className="navbar-link">
            Audit Review
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
