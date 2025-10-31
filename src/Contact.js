import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                           19.79 19.79 0 0 1-8.63-3.07 
                           19.5 19.5 0 0 1-6-6 
                           19.79 19.79 0 0 1-3.07-8.67
                           A2 2 0 0 1 4.11 2h3
                           a2 2 0 0 1 2 1.72 
                           12.84 12.84 0 0 0 .7 2.81 
                           2 2 0 0 1-.45 2.11L8.09 9.91
                           a16 16 0 0 0 6 6l1.27-1.27
                           a2 2 0 0 1 2.11-.45 
                           12.84 12.84 0 0 0 2.81.7
                           A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3>Phone</h3>
                <p>+91 9482779290</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 
                           1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6
                           c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3>Email</h3>
                <p>vivanrajath999@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13
                           a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3>Location</h3>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
          
          {/* Chatbot Contact Section */}
          <div className="contact-chatbot">
            <div className="chatbot-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" 
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <path d="M8 9h8"></path>
                <path d="M8 13h6"></path>
              </svg>
            </div>
            <h3>Let's Chat!</h3>
            <p>
              Have questions or want to discuss a project? My AI chatbot is available 24/7 
              to help answer your queries and connect you with me directly.
            </p>
            
            <button 
              className="chatbot-link"
              onClick={() => {
                console.log('Dispatching openChatbot event...');
                // Dispatch custom event to open chatbot
                const event = new CustomEvent('openChatbot');
                window.dispatchEvent(event);
              }}
            >
              <span>Start Chatting</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3l4 8 5-5v11H5V8l3-5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;