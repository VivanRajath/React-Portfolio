import React from 'react';
import './Publication.css';

function Publication() {
  const publications = [
    {
      id: 1,
      title: 'Multiple Electronic Components Sorting and Deployment on Edge Device using SSD Mobile Net V2 FPN 320 Lite in Machine Learning',
      venue: 'GRENZE International Journal of Engineering and Technology (GIJET) - SCOPUS Indexed',
      year: 2024,
      link: 'https://thegrenze.com/pages/servej.php?fn=712.pdf&name=Multiple%20Electronic%20Components%20Sorting%20andDeployment%20on%20Edge%20Device%20using%20SSD%20Mobile%20Net%20V2FPN%20320%20Lite%20in%20Machine%20Learning&id=3445&association=GRENZE&journal=GIJET&year=2024&volume=10&issue=2'
    },
    {
      id: 2,
      title: 'Hybrid Quantum-Classical Error Correction: Optimizing Quantum Error Correction Codes using Machine Learning',
      venue: 'Preprint / Blog',
      year: 2025,
      link: 'https://drive.google.com/file/d/1a4z9cfoB4tG7lpGmyJExNpJQ-iDfymsn/view?usp=drive_link'
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="publications-container">
        <header className="publications-header">
          <h2 className="publications-title">Publications</h2>
          <p className="publications-subtitle">Papers, preprints and write-ups</p>
        </header>

        <ul className="publications-list">
          {publications.map(pub => (
            <li key={pub.id} className="publication-card">
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                <div className="publication-meta">
                  <span className="publication-venue">{pub.venue}</span>
                  <span className="publication-separator">•</span>
                  <span className="publication-year">{pub.year}</span>
                </div>
              </div>
              <div className="publication-action">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Publication;