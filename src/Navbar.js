import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu toggle

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsHidden(currentScrollY > lastScrollY && currentScrollY > 80);
    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
      <div className="logo">Vivan's Portfolio</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
