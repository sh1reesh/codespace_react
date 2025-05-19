import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
      <Link to="/subpage">Subpage</Link>
    </nav>
  );
};

export default NavBar;
