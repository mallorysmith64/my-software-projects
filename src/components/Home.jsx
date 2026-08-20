import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p className="hero-subtitle">
              Showcasing my software engineering projects and technical expertise
            </p>
            <Link to="/projects" className="btn btn-large waves-effect waves-light">
              View My Projects
            </Link>
          </div>
        </div>

        <section className="about-section">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I'm a software engineer passionate about building innovative solutions
              across various technologies and platforms. From machine learning to
              full-stack web development, I enjoy tackling challenging problems and
              creating impactful applications.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <div className="container">
            <h2>Technologies & Skills</h2>
            <div className="skills-grid">
              <div className="skill-tag">React.js</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">Python</div>
              <div className="skill-tag">C#</div>
              <div className="skill-tag">.NET Core</div>
              <div className="skill-tag">Flask</div>
              <div className="skill-tag">MongoDB</div>
              <div className="skill-tag">PostgreSQL</div>
              <div className="skill-tag">PyTorch</div>
              <div className="skill-tag">CSS/HTML5</div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container center">
            <h2>Ready to See My Work?</h2>
            <Link to="/projects" className="btn btn-large waves-effect waves-light">
              Explore Projects
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;