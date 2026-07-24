import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = 'https://drive.google.com/file/d/1avxW5_76R4LFn1LgA71BhoZZSwV_W-bk/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vivan_Rajath_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-content">
                <h2>Vivan Rajath Nagasandra H</h2>
                <p className="brand-tagline">Full-Stack AI Engineer · LLM &amp; Agentic Systems</p>
                <div className="brand-accent"></div>
              </div>
            </div>
            
            <div className="footer-nav">
              <div className="nav-section">
                <h4>Navigation</h4>
                <div className="nav-links">
                  <a href="#home" className="nav-link">Home</a>
                  <a href="#about" className="nav-link">About</a>
                  <a href="#projects" className="nav-link">Projects</a>
                  <a href="#contact" className="nav-link">Contact</a>
                </div>
              </div>
              
              <div className="nav-section">
                <h4>Connect</h4>
                <div className="nav-links">
                  <a href="https://github.com/VivanRajath" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
                  <a href="https://www.linkedin.com/in/vivan-rajath-178a6a348/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
                  <a href="mailto:vivanrajath999@gmail.com" className="nav-link">Email</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-social-section">
            <div className="social-links">
              <a href="https://github.com/VivanRajath" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/vivan-rajath-178a6a348/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:vivanrajath999@gmail.com" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <button onClick={handleResumeDownload} className="social-link resume-download" title="Download Resume">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <span>&copy; {currentYear} Vivan Rajath. All rights reserved.</span>
            <div className="footer-status">
              <div className="status-dot"></div>
              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;