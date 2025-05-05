import React, { useState } from 'react';
import './Project.css';

function Projects() {
  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "Project-1",
      description: "A fully responsive e-commerce platform with user authentication, product catalog, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      imageUrl: "https://via.placeholder.com/600x400",
      liveLink: "#",
      codeLink: "#",
      category: "web"
    },
    {
      id: 2,
      title: "Project-2",
      description: "Real-time weather application that provides current conditions and forecasts based on user location.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      imageUrl: "https://via.placeholder.com/600x400",
      liveLink: "#",
      codeLink: "#",
      category: "web"
    },
    {
      id: 3,
      title: "Project-3",
      description: "A productivity application that helps users organize tasks, set priorities, and track progress.",
      technologies: ["React", "Firebase", "Material UI"],
      imageUrl: "https://via.placeholder.com/600x400",
      liveLink: "#",
      codeLink: "#",
      category: "web"
    },
    {
      id: 4,
      title: "Project-4",
      description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness goals.",
      technologies: ["React Native", "Firebase", "Expo"],
      imageUrl: "https://via.placeholder.com/600x400",
      liveLink: "#",
      codeLink: "#",
      category: "mobile"
    },
    {
      id: 5,
      title: "Project-6",
      description: "Interactive dashboard displaying complex data sets in an accessible and insightful way.",
      technologies: ["D3.js", "React", "Node.js", "CSV Parsing"],
      imageUrl: "https://via.placeholder.com/600x400",
      liveLink: "#",
      codeLink: "#",
      category: "data"
    },
    {
      id: 6,
      title: "Project-7",
      description: "This very website! A showcase of my projects and skills, built with React.",
      technologies: ["React", "CSS3", "JavaScript"],
      imageUrl: "https://via.placeholder.com/600x400",
      liveLink: "#",
      codeLink: "#",
      category: "web"
    }
  ];

  // Filter categories
  const categories = ["all", "Websites", "Webapps", "Machine Learning","Arduino"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Here are some of my recent works</p>
        
        <div className="projects-filter">
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;