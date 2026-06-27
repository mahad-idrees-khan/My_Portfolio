import React from 'react';
import './Home.css';
import mahadImg from '../assets/img/mahad.jpg';

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-image-container">
          <img src={mahadImg} alt="Mahad Idrees Khan" className="profile-image" />
          <div className="image-overlay"></div>
        </div>
      </div>
      
      <div className="content-main">
        <div className="header-section">
          <h1>Mahad Idrees Khan</h1>
          <p className="subtitle">Technology Enthusiast • Software Engineer • Full Stack Developer</p>
          
          <div className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
              <p className="intro">👋 Hi there! I'm <span className="highlight">Mahad Idrees Khan</span></p>
              <p className="main-desc">A creative full-stack developer and Computer Science student at UET Lahore (2023-2027). I blend innovative design with cutting-edge technology to craft exceptional digital experiences.</p>
              <p className="passion">My passion lies in transforming ideas into reality through clean code and intuitive interfaces. Whether it's building responsive web apps or exploring AI solutions, I'm always excited to embrace new challenges and push the boundaries of what's possible.</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/mahad-idrees-khan/" target="_blank" rel="noreferrer" className="social-btn"><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/mahad-idrees-khan/" target="_blank" rel="noreferrer" className="social-btn"><span>LinkedIn</span></a>
            <a href="mailto:mahadidrees2004@gmail.com" className="social-btn"><span>Email</span></a>
          </div>
        </div>

        <div className="info-section">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">✉️ Email</span>
              <span className="info-value">mahadidrees2004@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">💡 Interests</span>
              <span className="info-value">Coding, Communication, Football, Reading</span>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <a href="#/Projects" className="action-btn">View Projects</a>
          <a href="#/Skills" className="action-btn secondary">My Skills</a>
        </div>
      </div>
    </div>
  );
};

export default Home;