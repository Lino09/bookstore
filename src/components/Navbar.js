import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <nav className="centerer navbar">
      <h2>
        Bookshop
      </h2>
      <ul className="nav-ul">
        <li className="nav-li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
