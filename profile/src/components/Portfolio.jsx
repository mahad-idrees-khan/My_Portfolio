import React, { useState } from 'react';
import { portfolioData } from '../data';

const Portfolio = () => {
  const { hero, skills, education, experience, projects } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="portfolio-container">
      
      {/* Hero Section */}
      <header className="glass-panel hero-section">
        <h1>{hero.name}</h1>
        <h2>{hero.title}</h2>
        <p className="summary">{hero.summary}</p>
        <div className="contact-links">
          <a href={`mailto:${hero.contact.email}`}>Email</a>
          <a href={`https://${hero.contact.github}`} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`https://${hero.contact.linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="glass-panel skills-section">
        <h3>Technical Arsenal</h3>
        <div className="skills-grid">
          <div>
            <h4>Languages</h4>
            <p>{skills.languages.join(', ')}</p>
          </div>
          <div>
            <h4>Frameworks</h4>
            <p>{skills.frameworks.join(', ')}</p>
          </div>
          <div>
            <h4>Databases & Tools</h4>
            <p>{skills.databases.join(', ')} | {skills.tools.join(', ')}</p>
          </div>
          <div>
            <h4>Core Concepts</h4>
            <p>{skills.concepts.join(', ')}</p>
          </div>
        </div>
      </section>

      {/* Experience Section (Tab Layout) */}
      <section className="glass-panel experience-section">
        <h3>Experience</h3>
        <div className="tabs-container">
          <div className="tabs-header">
            {experience.map((job, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <h4>{experience[activeTab].role} <span className="highlight">@ {experience[activeTab].company}</span></h4>
            <span className="date">{experience[activeTab].date}</span>
            <p>{experience[activeTab].description}</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="glass-panel education-section">
        <h3>Education</h3>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="edu-card">
              <h4>{edu.degree}</h4>
              <p className="institution">{edu.institution}</p>
              <span className="date">{edu.date}</span>
              <p>{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="glass-panel projects-section">
        <h3>Featured Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h4>{project.title}</h4>
              <span className="tech-stack">{project.tech}</span>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Portfolio;