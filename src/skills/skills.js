
import React from "react";
import "./Skills.css";
import Footer from "../footer/Footer";

const skillsData = [
  { name: "Data Structures & Algorithms", level: "Proficient" },
  { name: "HTML & CSS", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "Express.js", level: "Advanced" },
  { name: "System Design", level: "Proficient" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "Bootstrap & Tailwind", level: "Advanced" },
  { name: "Redux", level: "Intermediate" },
  { name: "Firebase", level: "Intermediate" },
];

const Skills = () => {
  return (
    <>
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-description">
        I have honed a diverse set of technical skills that allow me to build
        robust, scalable, and efficient applications. From mastering front-end
        technologies to deep diving into backend systems, each skill card below
        represents a piece of the puzzle that makes me a well-rounded software
        engineer. I’m passionate about continuously improving and staying up to
        date with the latest industry trends.
      </p>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-content">
              <h2>{skill.name}</h2>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Skills;
