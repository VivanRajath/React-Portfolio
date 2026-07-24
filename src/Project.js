import React, { useState } from 'react';
import './Project.css';

// Real domain imagery (screenshots / result plots) kept for the projects that have them.
import piezoImage from './images/piezo.jpg';
import ASLimage from './images/ASL.jpeg';
import Chayachitra from './images/Chayachitra.jpg';
import RAGBOT from './images/RAGBOT.jpg';
import SAR1 from './images/SAR1.jpg';
import Agri from './images/Agri.jpg';
import speckle from './images/speckle.jpg';
import ML from './images/ML.jpg';
import jrArchitect from './images/jr-architect.jpg';
import reposand from './images/repo-sand.jpg';
import gitbot from './images/Gitbot.jpg';
import afterburn from './images/afterburn.jpg';
import sar2eo from './images/sar2eo.jpg';

// Only render link buttons that point somewhere real.
// Leave a url as "#" (or empty) in the data below and it simply won't render
// until you drop the real URL in, so there are no dead links on the page.
const realLinks = (links = []) => links.filter((l) => l.url && l.url !== '#');

// Gradient palette per category, used to generate the SVG cover art.
const categoryAccent = {
  'AI Agents': ['#4f46e5', '#0ea5e9'],
  'RAG & LLM': ['#7c3aed', '#db2777'],
  'ML & CV': ['#0d9488', '#22c55e'],
  'SAR Research': ['#0891b2', '#1e293b'],
  'Dev Tools': ['#16a34a', '#0891b2'],
  Embedded: ['#d97706', '#dc2626'],
};

// Generated cover art for projects without a real screenshot.
// Unique gradient + soft dot mesh + orbit rings + the project glyph.
function ProjectCover({ id, category, glyph }) {
  const [c1, c2] = categoryAccent[category] || ['#3b82f6', '#1e293b'];
  const gid = `grad-${id}`;
  const pid = `dots-${id}`;
  return (
    <svg
      className="project-cover"
      viewBox="0 0 400 180"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${category} project artwork`}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <pattern id={pid} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.14)" />
        </pattern>
      </defs>
      <rect width="400" height="180" fill={`url(#${gid})`} />
      <rect width="400" height="180" fill={`url(#${pid})`} />
      <g fill="none" stroke="rgba(255,255,255,0.18)">
        <circle cx="330" cy="40" r="70" />
        <circle cx="330" cy="40" r="45" />
        <circle cx="60" cy="150" r="55" strokeDasharray="4 6" />
      </g>
      <text
        x="200"
        y="98"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="66"
      >
        {glyph}
      </text>
    </svg>
  );
}

function Projects() {
  // Flagship agentic and full-stack systems lead the section.
  const projectsData = [
    {
      id: 'jr-architect',
      title: 'Jr Architect: Cloud IDE with Live Agent Feed',
      description:
        'Cloud IDE agent that clones any repository into a preheated sandbox (12+ runtimes) and launches an in-browser IDE (Monaco, xterm.js) with live terminal streaming over WebSockets, while parallel agents analyze and resolve codebase issues in real time.',
      technologies: ['Go', 'React', 'Next.js', 'WebSockets', 'Monaco', 'xterm.js'],
      category: 'AI Agents',
      featured: true,
      imageUrl: jrArchitect,
      links: [{ label: 'Repo', url: 'https://github.com/VivanRajath/Jr-Architect' }],
    },
    {
      id: 'reposandbox',
      title: 'RepoSandbox Agent: Multi-Agent Site Generator',
      description:
        'Real-time network of 21 specialized agents that modify codebases and generate fully themed Next.js sites, with voice-driven agents that re-theme the site live as the user interacts. Built on the Gitagent Protocol.',
      technologies: ['Next.js', 'Multi-Agent Orchestration', 'Gitagent Protocol', 'Voice'],
      category: 'AI Agents',
      featured: true,
      imageUrl: reposand,
      links: [{ label: 'Repo', url: 'https://github.com/VivanRajath/gitagent-hackathon' }],
    },
    {
      id: 'gitbot',
      title: 'GitBot: Agentic PR Reviewer',
      description:
        'End-to-end LangGraph pipeline orchestrating code analysis, review, auto-fixing and commits as a multi-agent state machine with tool use and structured LLM outputs. A Cursor-style experience for GitHub PRs.',
      technologies: ['LangGraph', 'Python', 'LLM Tool Use', 'Django'],
      category: 'AI Agents',
      featured: true,
      imageUrl: gitbot,
      links: [
        { label: 'Live', url: 'https://codereviewer-0nfb.onrender.com/' },
        { label: 'Repo', url: 'https://github.com/VivanRajath/codereviewer' },
      ],
    },
    {
      id: 'afterburn',
      title: 'Afterburn: AI PR Risk Analysis',
      description:
        'Converts post-mortems into a causal knowledge graph and surfaces incident-driven warnings during code review, so past outages become guardrails on new pull requests.',
      technologies: ['GitAgent Protocol', 'Cognis (Lyzr adapter)', 'Knowledge Graphs'],
      category: 'AI Agents',
      featured: true,
      imageUrl: afterburn,
      links: [{ label: 'Repo', url: 'https://github.com/VivanRajath/afterburn' }],
    },
    {
      id: 'sartoeo',
      title: 'SAR-to-EO Image Translation (Pix2Pix cGAN)',
      description:
        'Conditional GAN that translates single-channel Sentinel-1 SAR imagery into Sentinel-2 RGB optical images. A ~54M-parameter U-Net generator supervised by a 70x70 PatchGAN discriminator, with an L1 + adversarial objective and full SSIM/PSNR/LPIPS/FID evaluation. Built as the GalaxEye Space AI Research assignment.',
      technologies: ['PyTorch', 'Pix2Pix cGAN', 'U-Net', 'PatchGAN', 'Sentinel-1/2'],
      category: 'ML & CV',
      imageUrl: sar2eo,
      links: [
        { label: 'Repo', url: 'https://github.com/VivanRajath/SARtoEO' },
        { label: 'Model Weights', url: 'https://huggingface.co/VivanRajath/SAR2EO' },
      ],
    },
    {
      id: 'ragbot',
      title: 'RAGBOT: Full-Stack RAG Application',
      description:
        'Production Django app where users upload documents and query them through contextual LLM responses over a vector-search retrieval layer built on Hugging Face Transformers and Chroma DB.',
      technologies: ['Django', 'Hugging Face', 'Chroma DB', 'LangChain'],
      category: 'RAG & LLM',
      imageUrl: RAGBOT,
      links: [
        { label: 'Live', url: 'https://rag-bot-wslw.onrender.com/' },
        {
          label: 'Write-up',
          url: 'https://www.notion.so/Building-RAGBOT-My-Journey-with-Retrieval-Augmented-Generation-26a952ee80e880778e7bc174a7c99b59',
        },
      ],
    },
    {
      id: 'ontology-kg',
      title: 'Ontology-Based Knowledge Graph System',
      description:
        'Processes PDF, DOCX and TXT documents, uses a Hugging Face NLP model to generate an ontology, and visualizes the resulting entity relationships through an interactive React interface.',
      technologies: ['React', 'Hugging Face', 'Knowledge Graphs', 'NLP'],
      category: 'RAG & LLM',
      glyph: '🕸️',
      links: [{ label: 'Repo', url: 'https://github.com/VivanRajath/Knowledge-Graph-Builder' }],
    },
    {
      id: 'crawl2md',
      title: 'crawl2md',
      description:
        'Published npm package that crawls any HTML site into clean Markdown plus a knowledge graph, producing ready-to-use LLM/RAG context from live web pages.',
      technologies: ['Node.js', 'CLI', 'Web Crawling', 'Knowledge Graphs'],
      category: 'Dev Tools',
      glyph: '🕷️',
      links: [
        { label: 'npm', url: 'https://www.npmjs.com/package/crawl2md' },
        { label: 'Repo', url: 'https://github.com/VivanRajath/crawl2md' },
      ],
    },
    {
      id: 'sandbox-engine-cli',
      title: 'sandbox-engine-cli',
      description:
        'Published Go CLI (PyPI) that runs any Python project in an isolated sandbox by auto-detecting dependencies and provisioning virtual environments, removing per-project manual setup.',
      technologies: ['Go', 'CLI', 'Sandboxing', 'Python'],
      category: 'Dev Tools',
      glyph: '📦',
      links: [
        { label: 'PyPI', url: 'https://pypi.org/project/sandbox-engine-cli/' },
        { label: 'Repo', url: 'https://github.com/VivanRajath/sandbox-engine' },
      ],
    },
    {
      id: 'blog-automation',
      title: 'Blog Automation Tool',
      description:
        'Playwright-based agentic automation with social media API integration for multi-step content posting; event-driven task orchestration with real-time interaction. Recognized with the Progress Innovation Award.',
      technologies: ['Playwright', 'Python', 'Social Media APIs', 'Automation'],
      category: 'AI Agents',
      glyph: '🤖',
      links: [],
    },
    {
      id: 'object-sorting',
      title: 'Object Sorting System (ML + Edge)',
      description:
        'Real-time automated component sorting using SSD MobileNet V2 FPN 320 deployed on an ESP32 microcontroller. Published in a SCOPUS-indexed journal (GRENZE International, Vol-10).',
      technologies: ['TensorFlow', 'SSD MobileNet V2', 'ESP32', 'Edge ML'],
      category: 'ML & CV',
      glyph: '⚙️',
      links: [
        {
          label: 'Paper',
          url: 'https://thegrenze.com/pages/servej.php?fn=712.pdf&name=Multiple%20Electronic%20Components%20Sorting%20andDeployment%20on%20Edge%20Device%20using%20SSD%20Mobile%20Net%20V2FPN%20320%20Lite%20in%20Machine%20Learning&id=3445&association=GRENZE&journal=GIJET&year=2024&volume=10&issue=2',
        },
      ],
    },
    {
      id: 'chayachitra',
      title: 'ChayaChitra: Image Generation Bot',
      description:
        'A Telegram bot that uses the Hugging Face Diffusers library to generate images from a text prompt, served through a lightweight Colab-hosted inference pipeline.',
      technologies: ['Hugging Face', 'Diffusers', 'Python', 'Telegram API'],
      category: 'ML & CV',
      imageUrl: Chayachitra,
      links: [
        { label: 'Try Bot', url: 'https://t.me/ChayaChitra_bot' },
        {
          label: 'Write-up',
          url: 'https://www.notion.so/Chayachitra-Bot-AI-Powered-Image-Generation-26a952ee80e8803db05bd61a5694ee96',
        },
      ],
    },
    {
      id: 'asl',
      title: 'ASL Detection with MediaPipe',
      description:
        'American Sign Language detection combining MediaPipe hand landmarks with a Random Forest classifier for real-time gesture recognition.',
      technologies: ['Machine Learning', 'MediaPipe', 'NumPy', 'Random Forest'],
      category: 'ML & CV',
      imageUrl: ASLimage,
      links: [
        { label: 'Repo', url: 'https://github.com/VivanRajath/ASL' },
        {
          label: 'Write-up',
          url: 'https://www.notion.so/ASL-Detection-System-269952ee80e880568b47cc3d91ef490e',
        },
      ],
    },
    {
      id: 'sar-denoise',
      title: 'SAR Image Denoising',
      description:
        'Processed raw grayscale Synthetic Aperture Radar imagery, applying three classical noise-reduction techniques and comparing their effect on speckle.',
      technologies: ['SAR', 'Python', 'Image Processing'],
      category: 'SAR Research',
      imageUrl: SAR1,
      links: [
        {
          label: 'Write-up',
          url: 'https://www.linkedin.com/posts/vivan-rajath-178a6a348_sar-imageprocessing-remotesensing-activity-7342825529084985345-Excr',
        },
        {
          label: 'Notebook',
          url: 'https://colab.research.google.com/drive/12gtgqFcVh8IcfO5lppPxSLDYlcgDoAEt?usp=sharing',
        },
      ],
    },
    {
      id: 'sar-agri',
      title: 'Speckle Filtering on Agricultural Terrain',
      description:
        'Evaluated speckle-noise reduction filters on Sentinel-1 SAR data over agricultural grasslands, terrain that is highly sensitive to speckle distortion.',
      technologies: ['SAR', 'Sentinel-1', 'Lee Filter'],
      category: 'SAR Research',
      imageUrl: Agri,
      links: [
        {
          label: 'Write-up',
          url: 'https://www.linkedin.com/posts/vivan-rajath-178a6a348_sar-sentinel1-imageprocessing-activity-7343305209835630596-h0ud',
        },
        {
          label: 'Notebook',
          url: 'https://colab.research.google.com/drive/1H_8QzKKylfzevOfjtkSMmvVCk5JIrI_H?usp=sharing',
        },
      ],
    },
    {
      id: 'sar-speckle',
      title: 'Speckle Noise Simulation',
      description:
        'Simulated speckle noise on a grayscale SAR image to visualize its impact and demonstrate how filtering recovers structure.',
      technologies: ['SAR', 'Python', 'Image Processing'],
      category: 'SAR Research',
      imageUrl: speckle,
      links: [
        {
          label: 'Write-up',
          url: 'https://www.linkedin.com/posts/vivan-rajath-178a6a348_specklenoise-sar-remotesensing-activity-7344451771831906306-l2R1',
        },
        {
          label: 'Notebook',
          url: 'https://colab.research.google.com/drive/1S6L4nV9hH36FKAWAnX2iM-iMwFIgNt8l?usp=sharing',
        },
      ],
    },
    {
      id: 'sar-autoencoder',
      title: 'CNN Autoencoder vs. Classical SAR Filters',
      description:
        'Compared a CNN-based autoencoder against an SRAD-style filter for SAR image denoising to measure where learned models outperform traditional approaches.',
      technologies: ['SAR', 'CNN Autoencoder', 'Deep Learning'],
      category: 'SAR Research',
      imageUrl: ML,
      links: [
        {
          label: 'Write-up',
          url: 'https://www.linkedin.com/posts/vivan-rajath-178a6a348_sar-specklenoise-remotesensing-activity-7345443500412289025-1cSP',
        },
        {
          label: 'Notebook',
          url: 'https://colab.research.google.com/drive/1f1KHuTVKRxN6',
        },
      ],
    },
    {
      id: 'piezo',
      title: 'Piezo Power Generation System',
      description:
        'Hardware prototype harvesting energy from footstep pressure using an array of piezoelectric sensors, with a full circuit and storage stage.',
      technologies: ['Arduino', 'Embedded C', 'Hardware'],
      category: 'Embedded',
      imageUrl: piezoImage,
      links: [
        {
          label: 'Overview',
          url: 'https://www.notion.so/Foot-Step-Power-Generation-System-Project-Overview-1ea952ee80e8800fafdfcb78d5416e74',
        },
        {
          label: 'Report',
          url: 'https://drive.google.com/file/d/1awDH5yHnw7pSIvrU_fU7alMNhgMaZD6Q/view?usp=drive_link',
        },
      ],
    },
  ];

  const categories = [
    'All',
    'AI Agents',
    'RAG & LLM',
    'ML & CV',
    'SAR Research',
    'Dev Tools',
    'Embedded',
  ];
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const initialVisibleCount = 6;
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialVisibleCount);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Selected Work</h2>
        <p className="projects-subtitle">
          Agentic systems, RAG applications, ML research and shipped developer tools.
        </p>

        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => {
            const links = realLinks(project.links);
            return (
              <article
                className={`project-card ${project.featured ? 'is-featured' : ''}`}
                key={project.id}
              >
                <div className="project-banner">
                  {project.featured && <span className="featured-badge">Featured</span>}
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  ) : (
                    <ProjectCover
                      id={project.id}
                      category={project.category}
                      glyph={project.glyph || '💡'}
                    />
                  )}
                </div>

                <div className="project-info">
                  <span className="project-category-tag">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {links.length > 0 && (
                    <div className="project-actions">
                      {links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="project-action"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filteredProjects.length > initialVisibleCount && (
          <div className="view-more-container">
            <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : `View ${filteredProjects.length - initialVisibleCount} More`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
