import React from 'react';
import './Experience.css'; // Utilizing shared timeline CSS

import uetLogo from '../assets/img/uet.jpg';
import clgLogo from '../assets/img/clg.jpg';
import schLogo from '../assets/img/sch.jpg';

const Education = () => {
  return (
    <div className="experience-container" id="education">
      <h1 className="experience-title">Educational Journey</h1>
      <div className="timeline-container">
        
        <div className="experience-item right">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={uetLogo} alt="UET" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">2023 - Present</span>
                <h2>BS in Computer Science</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>University of Engineering & Technology</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">Currently pursuing a Bachelor's degree in Computer Science; expected graduation May 2027.</p>
            </div>
          </div>
        </div>

        <div className="experience-item left">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={clgLogo} alt="College" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">2020 - 2022</span>
                <h2>Intermediate in Computer Science</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>Government College of Science</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">Completed FSc pre-engineering with a focus on computer science fundamentals.</p>
            </div>
          </div>
        </div>

        <div className="experience-item right">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={schLogo} alt="School" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">2018 - 2020</span>
                <h2>Matriculation in Computer Science</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>Government Pilot Higher Secondary School</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">Wahdat Colony, Lahore</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;