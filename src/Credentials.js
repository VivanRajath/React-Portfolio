import React, { useState } from 'react';
import './Credentials.css';

function Credentials() {

    const achievements = [
        {
            title: "Progress Innovation Award",
            organization: "Siva Complete Solutions Pvt Ltd",
            description: "Received Progress Innovation Award for creating tool for automatic blog writing and posting to more than 40+ sites.",
            date: "March 2024",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 21h8M12 17v4M7 4h10a3 3 0 0 1 3 3v2a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5V7a3 3 0 0 1 3-3z"></path>
                    <path d="M4 7h1v2a4 4 0 0 0 4 4"></path>
                    <path d="M20 7h-1v2a4 4 0 0 1-4 4"></path>
                </svg>

            )
        },
        {
            title: "4th place in AI x Spacetech Hackathon",
            organization: "Galaxeye",
            description: "Created a novel algorithm for actively translating SAR to EO images with pix2pix GAN",
            date: "2024",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
                        font-size="16" font-family="Arial, sans-serif">4</text>
                </svg>
            )
        },
        {
            title: "SCOPUS Publication",
            organization: "Akshaya Institue of Technology",
            description: "Indexed our Major Project Object Sorting using Machine Learning under Scopus Journal",
            date: "July 2024",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
                </svg>
            )
        },
        {
            title: "Poster Presentation",
            organization: "DON BOSCO ",
            description: "Crafted a visually compelling research poster of our project “PIEZO POWER GENERATION SYSTEM” for ARAMBH-2k24, ",
            date: "December 2022",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M16 18h.01"></path>
                </svg>
            )
        },
       
    ];

    const [activeTab, setActiveTab] = useState('certifications');

    const certifications = [
        {
            title: "Full-Stack Web Developer Certificate",
            issuer: "Tap Academy",
            date: "2024",
            credentialId: "05348",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
                    <path d="M2 17L12 22L22 17"></path>
                    <path d="M2 12L12 17L22 12"></path>
                </svg>
            )
        },
       
    ];


    return (
        <section id="credentials" className="credentials-section">
            <div className="credentials-container">
                <h2 className="credentials-title">Credentials & Achievements</h2>

                <div className="credentials-tabs">

                    <button
                        className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
                        onClick={() => setActiveTab('achievements')}
                    >
                        Achievements
                    </button>

                    <button
                        className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('certifications')}
                    >
                        Certifications
                    </button>
                </div>

                <div className="credentials-content">
                    {activeTab === 'certifications' && (
                        <div className="certifications-grid">
                            {certifications.map((cert, index) => (
                                <div key={index} className="credential-card certification-card">
                                    <div className="credential-icon">
                                        {cert.icon}
                                    </div>
                                    <div className="credential-content">
                                        <h3 className="credential-title">{cert.title}</h3>
                                        <p className="credential-issuer">{cert.issuer}</p>
                                        <p className="credential-date">{cert.date}</p>
                                        <p className="credential-id">ID: {cert.credentialId}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'achievements' && (
                        <div className="achievements-grid">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="credential-card achievement-card">
                                    <div className="credential-icon">
                                        {achievement.icon}
                                    </div>
                                    <div className="credential-content">
                                        <h3 className="credential-title">{achievement.title}</h3>
                                        <p className="credential-organization">{achievement.organization}</p>
                                        <p className="credential-description">{achievement.description}</p>
                                        <p className="credential-date">{achievement.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Credentials;