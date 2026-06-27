import React, { useState } from 'react';
import './Projects.css';

import pyImg from '../assets/img/py.jpg';
import flutterImg from '../assets/img/flutter.jpg';
import vueImg from '../assets/img/vu.jpg';
import llmImg from '../assets/img/LLM.jpg';
import cppImg from '../assets/img/cpp.jpg';
import dsaImg from '../assets/img/dsa.jpg';
import sqImg from '../assets/img/sq.jpg';
import elecImg from '../assets/img/elec.jpg';
import csharpImg from '../assets/img/cn.jpg'; 

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDescription = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title">Project Journey</h1>
      <div className="timeline-container-proj">
        
        <div className="project-item left">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'voice' ? 'active' : ''}`} onClick={() => toggleDescription('voice')}>
            <div className="card-header-proj">
              <img src={pyImg} alt="Python AI" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Jan 2026 - Present</span>
                <h2>Urdu-Focused AI Voice Calling API</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'voice' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Building an AI-powered voice calling system focused on Urdu speech recognition, accent variability, and Urdu-English mixed conversations.</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">AI / ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item right">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'voice' ? 'active' : ''}`} onClick={() => toggleDescription('voice')}>
            <div className="card-header-proj">
              <img src={flutterImg} alt="Python AI" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">March 2026 - May 2026</span>
                <h2>Mobile Application</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'voice' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Building an Flutter App for managing the basic functionality of Course Academy</p>
                <div className="tech-stack">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">FireBase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item left">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'voice' ? 'active' : ''}`} onClick={() => toggleDescription('voice')}>
            <div className="card-header-proj">
              <img src={elecImg} alt="Python AI" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Dec 2025 - Feb 2026</span>
                <h2>Desktop Application for Marquee</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'voice' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Booking Reservation System and full finance management for Areena Marquee using Electron.js</p>
                <div className="tech-stack">
                  <span className="tech-tag">Electron.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="project-item right">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'lms' ? 'active' : ''}`} onClick={() => toggleDescription('lms')}>
            <div className="card-header-proj">
              <img src={csharpImg} alt="C#" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Sep - Dec 2025</span>
                <h2>MMA Learning Management System</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'lms' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Built a full-featured LMS for a course academy to streamline educational operations and student management. Deployed live at mmalms.runasp.net.</p>
                <div className="tech-stack">
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">.NET Core MVC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item left">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'restaurant' ? 'active' : ''}`} onClick={() => toggleDescription('restaurant')}>
            <div className="card-header-proj">
              <img src={llmImg} alt="LLM" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">June 2025</span>
                <h2>Restaurant Name Generator</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'restaurant' ? 'show-description' : ''}`}>
              <div className="description">
                <p>🚀 A unique web app using a custom-configured LLM and Streamlit for dynamic cuisine-based name generation and authentic menu suggestions.</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Streamlit</span>
                  <span className="tech-tag">LLM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item right">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'portfolio' ? 'active' : ''}`} onClick={() => toggleDescription('portfolio')}>
            <div className="card-header-proj">
              <img src={vueImg} alt="Vue.js" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Jun - Jul 2025</span>
                <h2>Personal Portfolio Website</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'portfolio' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Responsive portfolio showcasing my projects and skills, featuring a glassmorphism design aesthetic.</p>
                <div className="tech-stack">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Glass UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item left">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'loadbalancer' ? 'active' : ''}`} onClick={() => toggleDescription('loadbalancer')}>
            <div className="card-header-proj">
              <img src={pyImg} alt="Flask" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Jan - Apr 2025</span>
                <h2>Query Load Balancer</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'loadbalancer' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Designed a dynamic multi-database order platform with auto-balancing logic across multiple database instances.</p>
                <div className="tech-stack">
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">SQLite</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item right">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'bank' ? 'active' : ''}`} onClick={() => toggleDescription('bank')}>
            <div className="card-header-proj">
              <img src={dsaImg} alt="Bank" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Sep - Dec 2024</span>
                <h2>Bank Management System</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'bank' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Console-based application providing a user-friendly interface for administrators and customers to manage accounts and transactions.</p>
                <div className="tech-stack">
                  <span className="tech-tag">C#</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-item left">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'event' ? 'active' : ''}`} onClick={() => toggleDescription('event')}>
            <div className="card-header-proj">
              <img src={cppImg} alt="C++" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Mar - May 2024</span>
                <h2>Event Management System</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'event' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Streamlined event booking system with role-based access for administrators, workers, and customers.</p>
                <div className="tech-stack">
                  <span className="tech-tag">C++</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item right">
          <div className="timeline-dot-proj"></div>
          <div className={`project-card ${activeProject === 'library' ? 'active' : ''}`} onClick={() => toggleDescription('library')}>
            <div className="card-header-proj">
              <img src={sqImg} alt="Database" className="project-logo" />
              <div className="header-content-proj">
                <span className="year-badge-proj">Jan - Apr 2024</span>
                <h2>Library Management System</h2>
              </div>
            </div>
            <div className={`card-body-proj ${activeProject === 'library' ? 'show-description' : ''}`}>
              <div className="description">
                <p>Database system with optimized schema design for managing books, members, and lending operations.</p>
                <div className="tech-stack">
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Schema Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;