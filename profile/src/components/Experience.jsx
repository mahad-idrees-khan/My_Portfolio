import React from 'react';
import './Experience.css';
import cnImg from '../assets/img/cn.jpg'; 
import llmImg from '../assets/img/LLM.jpg'; 

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <h1 className="experience-title">Professional Experience</h1>
      <div className="timeline-wrapper">
        
        {/* Item 1 */}
        <div className="timeline-row">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={cnImg} alt="logo" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">Sep 2025 - Present</span>
                <h2>Junior Developer</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>USBro Developers</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">Developed and maintained web applications using React.js, Vue.js, and Electron.js.</p>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="timeline-row">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={llmImg} alt="logo" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">Jun 2025 - Aug 2025</span>
                <h2>Internship Trainee</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>InfiniteGoose</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">Incoming internship position working on real-world software projects.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Experience;