import React from 'react';
import './About.css';
import profileImage from './images/passport-vivan.jpg';

function About() {
  const skills = [
    'Python', 'Django', 'Flask', 'HTML/CSS/Bootstrap 5', 'JavaScript', 'ASP.net',
    'Java Core', 'Java Advanced', 'Digital Image Processing', 'Arduino', 'Micropython',
    'MySQL', 'PostgreSQL'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image">
              <img
                src={profileImage}
                alt="Vivan Rajath Nagasandra H"
                className="profile-image"
              />
            </div>

          </div>

          <div className="about-text">
            <h3 className="about-subtitle">Who am I?</h3>
            <p>
              I'm <strong> Vivan Rajath Nagasandra H </strong>, a passionate Full Stack Developer based in Bangalore.
              As an Electronics and Communication Engineering graduate, I bring a strong foundation
              in both hardware and software, with hands-on experience in building innovative tech solutions.
            </p>
            <p>
              My journey in tech began during my pre-university days when I first explored HTML and CSS.
              That curiosity grew into a deep interest in coding, leading me to develop machine learning
              applications and algorithms during my engineering years. I actively participated in hackathons,
              tech exhibitions, and have published research papers based on my final year project.
            </p>
            <p>
              I'm a certified <strong>Full Stack Web Developer </strong>with a passion for solving real-world problems
              through clean, efficient, and scalable web applications. When I'm not coding, you can find
              me exploring new tech trends, writing blogs, or engaging in digital creativity.
            </p>

            <h3 className="about-subtitle">My Skills</h3>
            <div className="about-skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about-extra">
          <div className="about-education">
            <h3 className="about-subtitle">Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2020 - 2024</div>
                <div className="timeline-content">
                  <h4>Bachelors of Electronics and Communication Engineering</h4>
                  <p>University/College Name</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2018 - 2020</div>
                <div className="timeline-content">
                  <h4>Pre-University College (PCMC)</h4>
                  <p>MES Kishora Kendra PU College</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2018</div>
                <div className="timeline-content">
                  <h4>SSLC</h4>
                  <p>Schoenstatt St Marys High School</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-experience">
            <h3 className="about-subtitle">Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">Sep 2024 - Feb 2025</div>
                <div className="timeline-content">
                  <h4>Trainee Developer</h4>
                  <p>Siva Complete Solutions Pvt Ltd</p>
                  <ul>
                    <li>Progress Innovation Award</li>
                    <li>Built and Deployed Bootstrap 5 Websites for Clients</li>
                    <li>Built Agentic AI for Blog Posting using Automation Tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
