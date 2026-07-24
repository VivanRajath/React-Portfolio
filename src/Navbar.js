import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
      <div className="logo">Vivan's Portfolio</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#publications" onClick={() => setIsMenuOpen(false)}>Publications</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Work</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
