import React, { useState, useEffect } from 'react';
import Greeting from './Greeting'; 
import Navbar from './Navbar';  // Import the Navbar component
import Hero from './Hero';
import About from './About';
import Project from './Project';

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
      <Navbar isScrolled={isScrolled} /> {/* Ensure the Navbar uses this */}
      <Hero />
      <About />
      <Project/>
      <h1>My First React App</h1>
      <Greeting />
    </div>
  );
}

export default App;
