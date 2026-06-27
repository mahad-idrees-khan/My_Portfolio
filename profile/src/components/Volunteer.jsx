import React from 'react';
import './Experience.css'; // Utilizing shared timeline CSS

import ldsImg from '../assets/img/lds.jpg';
import gdcsImg from '../assets/img/gdcs.jpg';

const Volunteer = () => {
  return (
    <div className="experience-container" id="volunteer">
      <h1 className="experience-title">Volunteer & Leadership</h1>
      <div className="timeline-container">
        
        <div className="experience-item right">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={ldsImg} alt="LDS" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">2025 - Present</span>
                <h2>Secretary Public Relations</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>Literary and Debate Society UET</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">New Campus, Lahore</p>
            </div>
          </div>
        </div>

        <div className="experience-item left">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={gdcsImg} alt="GDG" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">2024 - 2025</span>
                <h2>Lead of Management</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>Google Developer Groups on Campus UET</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">New Campus, Lahore</p>
            </div>
          </div>
        </div>

        <div className="experience-item right">
          <div className="timeline-dot"></div>
          <div className="experience-card">
            <div className="card-header">
              <img src={ldsImg} alt="LDS" className="institution-logo" />
              <div className="header-content">
                <span className="year-badge">2023 - 2024</span>
                <h2>Secretary Communication</h2>
              </div>
            </div>
            <div className="card-body">
              <h3>Literary and Debate Society UET</h3>
              <div className="highlight-bar"></div>
              <p className="institution-location">New Campus, Lahore</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Volunteer;