import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteer from './components/Volunteer';
import Experience from './components/Experience';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
      setMobileMenuOpen(false); 
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentView = () => {
    const path = currentPath.slice(1) || '/';
    switch (path) {
      case '/': return <Home />;
      case '/Education': return <Education />;
      case '/Skills': return <Skills />;
      case '/Experience': return <Experience />;
      case '/Projects': return <Projects />;
      case '/Volunteer': return <Volunteer />;
      default: return <Home />;
    }
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
    
      <nav className="navbar">
        <div className="navbar-container">
          {/* Change the logo div to this */}
<div 
  className="logo" 
  tabIndex="0" 
  onClick={() => window.location.hash = '#/'}
  style={{ cursor: 'pointer' }}
>
  <span className="logo-short">MIK</span>
  <span className="logo-full">Mahad Idrees Khan</span>
</div>
<button className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span><span></span><span></span>
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#/" className={`nav-link ${currentPath === '#/' || currentPath === '' ? 'active-link' : ''}`}>Home</a>
            <a href="#/Education" className={`nav-link ${currentPath === '#/Education' ? 'active-link' : ''}`}>Education</a>
            <a href="#/Skills" className={`nav-link ${currentPath === '#/Skills' ? 'active-link' : ''}`}>Skills</a>
            <a href="#/Experience" className={`nav-link ${currentPath === '#/Experience' ? 'active-link' : ''}`}>Experience</a>
            <a href="#/Projects" className={`nav-link ${currentPath === '#/Projects' ? 'active-link' : ''}`}>Projects</a>
            <a href="#/Volunteer" className={`nav-link ${currentPath === '#/Volunteer' ? 'active-link' : ''}`}>Volunteer</a>
          </div>
        </div>
      </nav>
      <main className="main-content">
        {renderCurrentView()}
      </main>
    </>
  );
}

export default App;