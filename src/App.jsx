import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Module 4/React Router - Navigation in React/NavBar';
import Home from './Module 4/React Router - Navigation in React/Home';
import About from './Module 4/React Router - Navigation in React/About';
import Contact from './Module 4/React Router - Navigation in React/Contact';
import Subpage from './Module 4/React Router - Navigation in React/Subpage';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subpage" element={<Subpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
