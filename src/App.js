import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';  // Import the Navbar component
import Hero from './Hero';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
