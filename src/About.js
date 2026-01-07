import React from 'react';
import './About.css';
import profileImage from './images/passport-vivan.jpg';

function About() {
  const skills = [
    'Python', 'Django', 'Machine Learning', 'Computer Vision', 'RAGs', 'LLMs', 'SAR', 'Flask', 'HTML/CSS/Bootstrap 5',
    'Digital Image Processing', 'Arduino', 'Micropython'
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
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-subtitle">Who am I?</h3>
            <p>
              I’m <strong>Vivan Rajath Nagasandra H</strong>, a GenAI and Machine Learning-focused software developer based in Bangalore, with a background in Electronics and Communication Engineering.
              I work at the intersection of backend systems and applied AI, building production-ready automation platforms, RAG systems, and intelligent services.
            </p>

            <p>
              My technical journey began early with HTML and CSS, evolving into strong foundations in programming, algorithms, backend engineering, and machine learning.
              During my engineering years, I actively explored applied ML, participated in hackathons and exhibitions, and published research in ML-based systems as part of my final-year work.
            </p>

            <p>
              I am also a certified <strong>Full Stack Web Developer</strong>, experienced in designing scalable APIs, automation pipelines, and AI-integrated web applications using frameworks like Django, FastAPI, and modern ML stacks.
              I prioritize clean architecture, performance, and maintainability in every system I build.
            </p>

            <p>
              While my academic background is not traditional Computer Science, my hands-on experience, continuous self-learning, and problem-driven approach shape my path toward becoming a strong Machine Learning and GenAI Engineer.
              Outside of work, I enjoy exploring emerging technologies and playing guitar.
            </p>



            <h3 className="about-subtitle skills-subtitle">My Skills</h3>
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
                  <p>East West College of Engineering</p>
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
              <div className="timeline-item">
                <div className="timeline-date">Feb 2025 - Present</div>
                <div className="timeline-content">
                  <h4>Freelance Developer</h4>
                  <p>Freelance</p>
                  <ul>
                    <li>Created ERP billing softwares to various local stores</li>
                    <li>Creating Websites and automate workflow.</li>

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
