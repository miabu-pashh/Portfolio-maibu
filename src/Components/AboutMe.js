import React from "react";
import "../Css/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <p className="section-subtitle">Get To Know</p>
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        Hello! I'm Mahaboob Pasha Mohammad, a passionate graduate student of{" "}
        <strong>Software Engineering</strong> at Saint Louis University. I
        graduated with a Master's degree and have immersed myself in areas like
        <strong>
          {" "}
          Principles of Software Development, Data Structures, Machine Learning,
          AI, and HCI {""}
        </strong>
        — all fueling my passion for cutting-edge tech and innovation. When I'm
        not coding, you'll find me pioneering tech workshops and leading
        innovative projects with the help of <strong>AI</strong>.
      </p>

      <div className="info-cards">
        <div className="info-card">
          <h3>🎓 Education</h3>
          <p>
            <strong>Software Engineering</strong>
          </p>
          <p>Saint Louis University</p>
          <p>Dec 2024</p>
          <p>GPA: 3.92/4.0</p>
        </div>

        <div className="info-card">
          <h3>🛠️ Skills</h3>
          <p>Full-Stack Development</p>
          <p>Machine Learning & AI</p>
          <p>Software Engineering Principles</p>
          <p>Cloud & DevOps</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
