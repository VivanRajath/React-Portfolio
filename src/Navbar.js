import React from 'react';
import './Navbar.css';

function Navbar({ isScrolled }) {
    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }



export default Navbar;
