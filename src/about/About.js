import React from "react";
import "./About.css";
import Footer from "../footer/Footer";


const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src='/professional-pic.jpeg' alt="Eshu tomar" />
        </div>
        <div className="about-text">
          <h1>Hello, I'm Eshu Tomar</h1>
          <p>
            I'm a passionate <strong>Full-Stack Developer</strong>  from India with a keen interest
            in creating innovative and efficient applications. My journey in
            the tech world has equipped me with a strong foundation in{" "}
            <strong>Data Structures and Algorithms (DSA)</strong> and extensive
            experience in <strong>web development.</strong>
          </p>
          <div className="about-details">
            <div className="about-section">
              <h2>Skills & Expertise</h2>
              <ul>
                <li>Full-Stack Development</li>
                <li>React, Node.js, MongoDB</li>
                <li>Data Structures and Algorithms (DSA)</li>
                <li>System Design</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div className="about-section">
              <h2>Current Endeavors</h2>
              <p>
                I'm currently undergoing a comprehensive <strong>Full-Stack
                Training</strong> to gain hands-on experience and further
                enhance my skills. I've already developed several projects that
                showcase my abilities in both front-end and back-end
                development.
              </p>
            </div>
            <div className="about-section">
              <h2>Personal Interests</h2>
              <p>
                Beyond coding, I have a deep love for <strong>gaming</strong> and
                enjoy exploring the latest in tech. I'm also an avid reader and
                find joy in <strong>photography</strong>, capturing moments that
                inspire creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
};

export default About;


