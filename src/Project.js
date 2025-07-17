
import React, { useState } from 'react';
import './Project.css';
import piezoImage from './images/piezo.jpg';
import ASLimage from './images/ASL.jpeg';
import Chayachitra from './images/Chayachitra.jpg'

function Projects() {
 
  const projectsData = [
    {
      id: 1,
      title: "Piezo Power Generation System",
      description: "Our Mini Project where we utilized Piezo Sensors to Generate Power and built a prototype",
      technologies: ["Arduino","Embedded C"],
      imageUrl: piezoImage,
      liveLink: "https://www.notion.so/Foot-Step-Power-Generation-System-Project-Overview-1ea952ee80e8800fafdfcb78d5416e74?pvs=4",
      codeLink: "https://drive.google.com/file/d/1awDH5yHnw7pSIvrU_fU7alMNhgMaZD6Q/view?usp=drive_link",
      category: "Arduino"
    },
    
    {
      id: 2,
      title: "American Sign Language Detection System using Mediapipe",
      description: "American Sign Language Detection System using Mediapipe and neural networks",
      technologies: ["Machine Learning" , "Neural Netwrok", "Numpy" , "Mediapipe", "Random-Forest Classifier" ] ,
      imageUrl: ASLimage,
      liveLink: "https://github.com/VivanRajath/ASL",
      codeLink: "https://github.com/VivanRajath/ASL",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "ChayaChitra - Image Generation Telegram Bot",
      description: "A Telegram Bot which uses Hugginface Diffusers Library to generate images based on Prompt.",
      technologies: ["HuggingFace", "Google-Colab", "Python"],
      imageUrl: Chayachitra,
      liveLink: "#",
      codeLink: "#",
      category: "Machine Learning"
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
  const categories = ["all",  "Webapps", "Machine Learning", "Website-Templates", "SAR " ,"Arduino"];
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
