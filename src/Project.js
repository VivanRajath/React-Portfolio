import React from 'react';
import './Project.css'

// Sample data for your projects
const projects = [
  {
    title: 'Object Sorting using Machine Learning',
    description: 'This is my Final Year project',
    technologies: ['Python', 'Arduino', 'Thonny'],
    link: 'https://github.com/yourusername/project1', // Replace with your project link
  },
  {
    title: 'Portfolio',
    description: 'This is a Portfolio website using React , Tailwind css .',
    technologies: ['React', 'Express', 'Tailwind'],
    link: 'https://github.com/yourusername/project2', // Replace with your project link
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
