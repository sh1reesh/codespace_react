// File: App.jsx
// Description: Root component that sets up routing for the React Router demo application.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Module 4/React Router - Navigation in React/NavBar';
import Home from './Module 4/React Router - Navigation in React/Home';
import About from './Module 4/React Router - Navigation in React/About';
import Contact from './Module 4/React Router - Navigation in React/Contact';
import Subpage from './Module 4/React Router - Navigation in React/Subpage';
import './App.css';

// Optional: Simple NotFound component for unmatched routes
const NotFound = () => (
  <div style={{ padding: '20px' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content" style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subpage" element={<Subpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
