import React, { useState } from 'react';
import './Project.css';
import piezoImage from './images/piezo.jpg';
import ASLimage from './images/ASL.jpeg';
import Chayachitra from './images/Chayachitra.jpg';
import RAGBOT from './images/RAGBOT.jpg';
import SAR1 from './images/SAR1.jpg';
import Agri from './images/Agri.jpg';
import speckle from './images/speckle.jpg';
import ML from './images/ML.jpg';
import GitBot from './images/Gitbot.jpg'; 

function Projects() {
  const projectsData = [
    {
      id: 9,
      title: "GitBot - Code Review Agent",
      description: "A Full-stack application integrated with Agentic AI to perform code reviews , Auto code push , PR Analysis and more.",
      technologies: ["Python", "Agentic AI", "Django"],
      imageUrl: GitBot,
      liveLink: "https://github.com/VivanRajath/codereviewer",
      codeLink: "https://codereviewer-0nfb.onrender.com/",
      category: "AI Apps"
    },




    {
      id: 1,
      title: "Piezo Power Generation System",
      description: "Our Mini Project where we utilized Piezo Sensors to Generate Power and built a prototype",
      technologies: ["Arduino", "Embedded C"],
      imageUrl: piezoImage,
      liveLink: "https://www.notion.so/Foot-Step-Power-Generation-System-Project-Overview-1ea952ee80e8800fafdfcb78d5416e74?pvs=4",
      codeLink: "https://drive.google.com/file/d/1awDH5yHnw7pSIvrU_fU7alMNhgMaZD6Q/view?usp=drive_link",
      category: "Arduino"
    },

    {
      id: 2,
      title: "American Sign Language Detection System using Mediapipe",
      description: "American Sign Language Detection System using Mediapipe and neural networks",
      technologies: ["Machine Learning", "Neural Netwrok", "Numpy", "Mediapipe", "Random-Forest Classifier"],
      imageUrl: ASLimage,
      liveLink: "https://www.notion.so/ASL-Detection-System-269952ee80e880568b47cc3d91ef490e",
      codeLink: "https://github.com/VivanRajath/ASL",
      category: "ML"
    },
    {
      id: 3,
      title: "ChayaChitra - Image Generation Telegram Bot",
      description: "A Telegram Bot which uses Hugginface Diffusers Library to generate images based on Prompt.",
      technologies: ["HuggingFace", "Google-Colab", "Python"],
      imageUrl: Chayachitra,
      liveLink: "https://www.notion.so/Chayachitra-Bot-AI-Powered-Image-Generation-26a952ee80e8803db05bd61a5694ee96",
      codeLink: "https://t.me/ChayaChitra_bot",
      category: "ML"
    },
    {
      id: 4,
      title: "RAG-BOT",
      description: "A RAG powered application which uses langchain, sentence-transformers , LLM's to ingest documents and answer based on queries",
      technologies: ["Django", "Hugging-Face", "Render"],
      imageUrl: RAGBOT,
      liveLink: "https://www.notion.so/Building-RAGBOT-My-Journey-with-Retrieval-Augmented-Generation-26a952ee80e880778e7bc174a7c99b59",
      codeLink: "https://rag-bot-wslw.onrender.com/",
      category: "ML"
    },
    {
      id: 5,
      title: "SAR Image Denoising Using Python",
      description: "I recently worked on processing Synthetic Aperture Radar (SAR) imagery by using a raw grayscale SAR image and applying 3 classical noise reduction techniques.",
      technologies: ["SAR", "Google colab", "Filtering techniques"],
      imageUrl: SAR1,
      liveLink: "https://www.linkedin.com/posts/vivan-rajath-178a6a348_sar-imageprocessing-remotesensing-activity-7342825529084985345-Excr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFcComwBoMczZvjuC3GD2YbAI-xQeoxIeSw",
      codeLink: "https://colab.research.google.com/drive/12gtgqFcVh8IcfO5lppPxSLDYlcgDoAEt?usp=sharing",
      category: "SAR"
    },
    {
      id: 6,
      title: "SAR images filtering Techniques on Agricultural Grasslands",
      description: "As part of my ongoing interest in satellite imagery and image processing, I recently worked on evaluating different speckle noise reduction filters on SAR (Synthetic Aperture Radar) data focusing on agricultural terrain, which is highly sensitive to speckle distortions.",
      technologies: ["SAR", "Colab", "Lee Filter"],
      imageUrl: Agri,
      liveLink: "https://www.linkedin.com/posts/vivan-rajath-178a6a348_sar-sentinel1-imageprocessing-activity-7343305209835630596-h0ud?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFcComwBoMczZvjuC3GD2YbAI-xQeoxIeSw",
      codeLink: "https://colab.research.google.com/drive/1H_8QzKKylfzevOfjtkSMmvVCk5JIrI_H?usp=sharing",
      category: "web"
    },
    {
      id: 7,
      title: "Speckle Noise Simulation",
      description: "Ever wondered how speckle noise really impacts radar images? I recently simulated it using a SAR (Synthetic Aperture Radar) grayscale image and visualized what happens when speckle hits, and how filtering can clean it up",
      technologies: ["SAR", "Colab", "Filtering techniques"],
      imageUrl: speckle,
      liveLink: "https://www.linkedin.com/posts/vivan-rajath-178a6a348_specklenoise-sar-remotesensing-activity-7344451771831906306-l2R1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFcComwBoMczZvjuC3GD2YbAI-xQeoxIeSw",
      codeLink: "https://colab.research.google.com/drive/1S6L4nV9hH36FKAWAnX2iM-iMwFIgNt8l?usp=sharing",
      category: "SAR"
    },
    {
      id: 8,
      title: "ML autoencoder vs Traditional Filters in Speckle Noise Removal , What Worked Better?",
      description: "To incorporate my recent interest in SAR (Synthetic Aperture Radar), I explored how Machine Learning can enhance SAR image denoising comparing a traditional SRAD-style filter with a CNN-based Autoencoder.",
      technologies: ["SAR", "Colab", "Filtering techniques"],
      imageUrl: ML,
      liveLink: "https://www.linkedin.com/posts/vivan-rajath-178a6a348_sar-specklenoise-remotesensing-activity-7345443500412289025-1cSP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFcComwBoMczZvjuC3GD2YbAI-xQeoxIeSw",
      codeLink: "https://colab.research.google.com/drive/1f1KHuTVKRxN6",
      category: "SAR"
    },

    


  ];
  const categories = ["all", "ML-CV", "SAR","AI Apps", "Blogs", "Arduino" , "Templates"];
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false); 

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  // Number of projects to show initially (1 row)
  const initialVisibleCount = 3; // adjust depending on your grid
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialVisibleCount);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Works</h2>
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
          {visibleProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">Blog</a>
                  <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">Go to</a>
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

        {/* View More / Show Less Button */}
        {filteredProjects.length > initialVisibleCount && (
          <div className="view-more-container">
            <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
