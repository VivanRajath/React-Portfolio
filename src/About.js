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
              I'm <strong>Vivan Rajath Nagasandra H</strong>, an aspiring Machine Learning Engineer based in Bangalore with a background in Electronics and Communication Engineering.
              My interest in Machine Learning and Deep Learning has led me to self-learn, experiment, and build practical AI solutions.
            </p>
            <p>
              My journey began in pre-university with HTML and CSS, which gradually expanded into programming, algorithms, and Machine Learning.
              During my engineering, I explored ML applications, took part in hackathons and tech exhibitions, and published research through my final year project.
            </p>
            <p>
              I'm also a certified <strong>Full Stack Web Developer</strong>, combining web development with AI to build scalable and intelligent applications.
              Whether it's designing a model or developing a web app, I focus on writing clean, purposeful code.
            </p>
            <p>
              While I don’t come from a traditional Computer Science background, my curiosity, persistence, and hands-on work guide my path toward becoming a Machine Learning Engineer.
              Beyond coding, I enjoy exploring new technologies and playing guitar.
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
