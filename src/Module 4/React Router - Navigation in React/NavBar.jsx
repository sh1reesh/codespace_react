// File: NavBar.jsx
// Description: Navigation bar component providing links to various pages using React Router.

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{ padding: '12px', background: '#f9f9f9', borderBottom: '1px solid #ccc' }}>
      <Link
        to="/"
        style={{
          marginRight: '15px',
          textDecoration: isActive('/') ? 'underline' : 'none',
          color: isActive('/') ? 'blue' : 'black'
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          marginRight: '15px',
          textDecoration: isActive('/about') ? 'underline' : 'none',
          color: isActive('/about') ? 'blue' : 'black'
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        style={{
          marginRight: '15px',
          textDecoration: isActive('/contact') ? 'underline' : 'none',
          color: isActive('/contact') ? 'blue' : 'black'
        }}
      >
        Contact
      </Link>
      <Link
        to="/subpage"
        style={{
          textDecoration: isActive('/subpage') ? 'underline' : 'none',
          color: isActive('/subpage') ? 'blue' : 'black'
        }}
      >
        Subpage
      </Link>
    </nav>
  );
};

export default NavBar;
