import React from 'react';
import './About.css';
import profileImage from './images/passport-vivan.jpg';

function About() {
  const skillGroups = [
    {
      label: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'WebSockets', 'Monaco', 'xterm.js', 'Bootstrap 5'],
    },
    {
      label: 'Backend & Languages',
      items: ['Python', 'Go', 'Node.js', 'FastAPI', 'Django', 'SQL'],
    },
    {
      label: 'AI & LLMs',
      items: ['LangGraph', 'LangChain', 'RAG', 'Multi-Agent Orchestration', 'Hugging Face', 'PyTorch', 'TensorFlow', 'Computer Vision'],
    },
    {
      label: 'Data & Infra',
      items: ['PostgreSQL', 'Redis', 'MongoDB', 'Chroma DB', 'Pinecone', 'Docker', 'CI/CD', 'AWS', 'GCP'],
    },
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
              I&apos;m <strong>Vivan Rajath Nagasandra H</strong>, a full-stack AI engineer based in Bangalore who owns products end to end, from React/Next.js interfaces down to Go and Python services and the infrastructure they run on. I specialize in LLM-powered agentic systems, RAG pipelines and sandboxed code-execution infrastructure.
            </p>

            <p>
              I&apos;ve built real-time, browser-heavy systems: a cloud IDE with live WebSocket terminal streaming, multi-agent pipelines that autonomously edit codebases, and production RAG applications. I care about clean architecture, performance and maintainability, and I ship fast, usually solo, from first prototype to a deployed product.
            </p>

            <p>
              I&apos;m an open-source contributor and published researcher: I&apos;ve shipped developer tooling to PyPI and npm, merged contributions into agent frameworks, and published ML research in a SCOPUS-indexed journal. Outside of work I explore emerging AI tooling and play guitar.
            </p>

            <h3 className="about-subtitle skills-subtitle">Technical Skills</h3>
            <div className="about-skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <span className="skill-group-label">{group.label}</span>
                  <div className="about-skills">
                    {group.items.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
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
                <div className="timeline-date">Feb 2025 - Present</div>
                <div className="timeline-content">
                  <h4>Freelance Full-Stack AI Engineer</h4>
                  <p>LCC, Bangalore</p>
                  <ul>
                    <li>Designed, built and deployed a Django/PostgreSQL ERP &amp; inventory system with E-Way Bill compliance for production use.</li>
                    <li>Shipped SankhyaArtha, a React + FastAPI billing platform, Docker-deployed with CI/CD on Linux servers.</li>
                    <li>Published developer tooling to PyPI (sandbox-engine-cli) and npm (claw2md, 450+ downloads).</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Sep 2024 - Feb 2025</div>
                <div className="timeline-content">
                  <h4>Trainee Developer</h4>
                  <p>Siva Complete Solutions Pvt Ltd</p>
                  <ul>
                    <li>Built a Python automation system that cut a recurring workflow from ~half a day to 41 minutes (~8x faster).</li>
                    <li>Received the Progress Innovation Award for a production-ready automation solution.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Aug 2023 - Sep 2023</div>
                <div className="timeline-content">
                  <h4>Engineering Intern</h4>
                  <p>Bharat Electronics Limited (Milcom SBU)</p>
                  <ul>
                    <li>Exposure to defense-grade electronic systems and engineering workflows in the Military Communications unit.</li>
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
