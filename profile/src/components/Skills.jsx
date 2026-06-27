import React from 'react';
import './Skills.css';

import pyImg from '../assets/img/py.jpg';
import cppImg from '../assets/img/cpp.jpg';
import vueImg from '../assets/img/vu.jpg';
import htmlImg from '../assets/img/html.jpg';
import cssImg from '../assets/img/css.jpg';
import nodeImg from '../assets/img/node.jpg';
import asmImg from '../assets/img/ass.jpg'; 
import bootstrapImg from '../assets/img/bootstrap.logo.jpeg';
import flaskImg from '../assets/img/flask.jpg';
import streamlitImg from '../assets/img/streamlit.jpg';
import githubImg from '../assets/img/github.jpg';
import npmImg from '../assets/img/npm.jpg';
import mongoImg from '../assets/img/mongodb.jpg';
import sqlImg from '../assets/img/sql.jpg';
import llmImg from '../assets/img/LLM.jpg';
import langchainImg from '../assets/img/langchain.jpg';
import umlImg from '../assets/img/uml.jpg';
import flutterImg from '../assets/img/flutter.jpg';
import starUmlImg from '../assets/img/star.jpg';
import elecImg from '../assets/img/elec.jpg';
import fireImg from '../assets/img/firebase.jpg';
import mendeleyImg from '../assets/img/mend.jpg';

const Skills = () => {
  const skillList = [
    { name: "Flutter", img: flutterImg },
    { name: "Electron.js", img: elecImg },
    { name: "Python", img: pyImg },
    { name: "FireBase", img: fireImg },
    { name: "Vue.js", img: vueImg },
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "Node.js", img: nodeImg },
    { name: "Bootstrap", img: bootstrapImg },
    { name: "Flask", img: flaskImg },
    { name: "Streamlit", img: streamlitImg },
    { name: "MongoDB", img: mongoImg },
    { name: "SQL", img: sqlImg },
    { name: "GitHub", img: githubImg },
    { name: "NPM", img: npmImg },
    { name: "Large Language Models", img: llmImg },
    { name: "LangChain", img: langchainImg },
    { name: "UML Diagrams", img: umlImg },
    { name: "Star UML", img: starUmlImg },
    { name: "Mendeley Reference", img: mendeleyImg },
    { name: "C++", img: cppImg },
    { name: "Assembly Language", img: asmImg }
  ];

  return (
    <div className="skills-container" id="skills">
      <h1 className="skills-title">My Skills & Expertise</h1>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-image-container">
              <img src={skill.img} alt={skill.name} className="skill-image" />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;