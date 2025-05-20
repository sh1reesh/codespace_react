import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    margin: '0 10px',
    textDecoration: 'none',
    color: isActive ? 'blue' : 'black',
  });

  return (
    <nav>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/todos" style={linkStyle}>Todos</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
};

export default Navbar;