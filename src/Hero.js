import React from "react";
import { useState, useEffect } from 'react';
import './Hero.css';


function Hero() {
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState('Full Stack Developer');
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-highlight">Vivan Rajath Nagasandra H</span>
        </h1>

        <div className="hero-typed-container">
          <h2 className="hero-subtitle">
            {text}<span className="hero-cursor">|</span>
          </h2>
        </div>

        <p className="hero-description">
          I build Websites and Apps.
          Passionate about creating solutions that are both functional and beautiful.
        </p>

        <div className="hero-buttons">
  <a href="#projects" className="hero-button primary">
    View My Work
  </a>
  <a href="#contact" className="hero-button secondary">
    Contact Me
  </a>
</div>

        <div className="hero-social">
          {/* GitHub */}
          <a href="https://github.com/VivanRajath" className="hero-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/vivan-rajath-178a6a348/" className="hero-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* Email */}
          <a href="mailto:vivanrajath999@gmail.com" className="hero-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#about">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </div>
  );

}
export default Hero;
