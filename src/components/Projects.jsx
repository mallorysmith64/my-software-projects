import React, { useState } from "react";
import images from "../ImageHelper.jsx";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <article className="card-description">
            <strong>Overview</strong>
            <p>{project.overview}</p>

            {project.features && (
              <>
                <strong>Features</strong>
                <p>{project.features}</p>
              </>
            )}

            <strong>Technologies Used</strong>
            <p>{project.technologies}</p>
          </article>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card">
        {project.image && (
          <div className="card-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}
        <div className="card-content">
          <div
            className="card-title"
            onClick={() => setIsModalOpen(true)}
            title="Click to view details"
          >
            {project.title}
          </div>
          <p className="card-description-preview">{project.overview}</p>
        </div>
        <div className="card-action">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
          {!project.liveUrl && <button disabled>Live</button>}
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
            Source
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: "#8b5cf6" }}
          >
            Details
          </button>
        </div>
      </div>
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const Projects = () => {
  const getYear = new Date().getFullYear();

  const projectsData = [
    {
      title: "Primate Image Classifier",
      image: images.primate_image_classifier,
      overview:
        "Classify images of primates using machine learning powered by PyTorch.",
      technologies: "PyTorch, Python",
      liveUrl: "https://github.com/mallorysmith64/primate-species-classifier",
      sourceUrl: "https://github.com/mallorysmith64/primate-species-classifier",
    },
    {
      title: "Form Generator",
      image: images.form_generator,
      overview: "Generate dynamic forms with an intuitive interface.",
      technologies:
        "React.js, JavaScript, Flask, Python, MongoDB, CSS, HTML5",
      liveUrl: "https://formgenerator.pro/",
      sourceUrl: "https://github.com/mallorysmith64/form-generator",
    },
    {
      title: "Cat Search Engine",
      image: images.catsearch,
      overview: "Search for cat memes and cat information with ease.",
      technologies:
        "React.js, JavaScript, Flask, Python, ElasticSearch, CSS Flexbox, HTML5",
      liveUrl: "https://github.com/mallorysmith64/google-search",
      sourceUrl: "https://github.com/mallorysmith64/google-search",
    },
    {
      title: "Reddit Clone",
      image: images.reddit,
      overview: "Full-stack app that recreates the look and feel of Reddit.",
      features:
        "Users can login and logout using Auth0, see their profile, make new posts to the homepage and subreddits, and upvote/downvote posts.",
      technologies:
        "C#, .NET Core, Entity Framework, Auth0, Heroku, PostgreSQL, React.js, CSS Flexbox, HTML5",
      liveUrl: "https://github.com/mallorysmith64/Reddit-Capstone",
      sourceUrl: "https://github.com/mallorysmith64/Reddit-Capstone",
    },
    {
      title: "TV Guide",
      image: images.tv_guide,
      overview:
        "An attractive TV guide showing top-rated shows with descriptions and cast details.",
      technologies: "React.js, Netlify, CSS Flexbox, HTML5",
      liveUrl: "https://tvguide-project.netlify.app/",
      sourceUrl: "https://github.com/mallorysmith64/tv-guide",
    },
    {
      title: "Minesweeper",
      image: images.minesweeper,
      overview:
        "Classic Minesweeper game with RESTful API for game logic and multiple difficulty levels.",
      technologies: "React.js, Netlify, CSS Flexbox, HTML5",
      liveUrl: "https://minesweeper-2-frontend.up.railway.app/",
      sourceUrl: "https://github.com/mallorysmith64/minesweeper",
    },
    {
      title: "Octodex",
      image: images.octodex,
      overview:
        "A fun gallery of favorite octocats based on GitHub's Octodex.",
      technologies: "React.js, Netlify, CSS Flexbox, HTML5",
      liveUrl: "https://react-octodex.netlify.app/",
      sourceUrl: "https://github.com/marscannon42/react-octodex",
    },
    {
      title: "Tetris Deluxe",
      image: images.tetris_deluxe,
      overview:
        "A modern take on the classic Tetris game with background music.",
      technologies: "React.js, JavaScript, CSS, HTML",
      liveUrl: null,
      sourceUrl: "https://github.com/mallorysmith64/tetris-deluxe",
    },
    {
      title: "Snake Game",
      image: images.snake_game,
      overview: "A classic and fun Snake game built with Python.",
      technologies: "Python, pygame",
      liveUrl: "https://marssmith64.itch.io/snake-game-python",
      sourceUrl: "https://github.com/mallorysmith64/snake-game-python",
    },
  ];

  return (
    <>
      <header className="header" id="projects">
        <h2>Top Projects for {getYear}</h2>
      </header>

      <div className="project-container">
        <div className="project-row">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;