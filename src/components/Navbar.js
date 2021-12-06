import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <nav className="centerer">
      <h2>
        Math Magicians
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
