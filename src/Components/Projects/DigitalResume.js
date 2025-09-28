import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Css/Projects.css";
import digiresume from "../../Photos/digiresume.jpeg";

function DigitalResume() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  return (
    <div className="projects-container">
      <h2 className="projects-title">{project?.title || "Digital Resume"}</h2>
      <p className="projects-subtitle">
        Interactive Swipe-Based Resume Presentation
      </p>

      <img
        src={digiresume}
        alt="Digital Resume UI"
        className="projects-image"
      />

      <div className="projects-section">
        <p>
          Digital Resume is a mobile-first React app that allows users to
          showcase their resume content as a swipeable interactive book. Built
          with a modular component design, this app gives life to your resume by
          animating sections like Welcome, About Me, Experience, Skills,
          Projects, and Education.
        </p>
        <p>
          The app eliminates the need for traditional PDF resumes and creates a
          more engaging way to view professional profiles.
        </p>
      </div>

      <blockquote className="projects-quote">
        "Resumes shouldn't be static. They should tell your story."
      </blockquote>

      <div className="projects-section">
        <h3>🚀 How It Works</h3>
        <ol>
          <li>Each section of the resume is a separate React component</li>
          <li>Sections are wrapped inside a swipeable container</li>
          <li>Navigation via swipes or buttons</li>
          <li>Responsive design for mobile & tablet</li>
        </ol>
      </div>

      <div className="projects-section">
        <h3>🧠 Key Features</h3>
        <ul>
          <li>📱 Mobile-first responsive design</li>
          <li>🧭 Swipe navigation with smooth transitions</li>
          <li>💼 Modular sectioning (About, Skills, Projects, etc.)</li>
          <li>🎨 TailwindCSS styled components</li>
          <li>🧠 Clean UI for recruiters or peers to engage with</li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>⚙️ System Architecture</h3>
        <ul>
          <li>
            <strong>React Frontend:</strong> Swipe container, route manager,
            Tailwind styling
          </li>
          <li>
            <strong>No backend needed:</strong> Fully client-side hosted on
            Netlify
          </li>
          <li>
            <strong>Modular components:</strong> Each section of the resume is
            isolated
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>⚠️ Challenges Faced</h3>
        <ul>
          <li>Swipe logic and mobile gesture handling</li>
          <li>Layout consistency across screen sizes</li>
          <li>Performance optimization for transitions</li>
        </ul>
      </div>

      <div className="projects-demo">
        <h3>🔗 Demo & Code</h3>
        <ul>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href={project?.github} target="_blank" rel="noopener noreferrer">
              {project?.github}
            </a>
          </li>
          <li>
            <strong>Live Demo:</strong>{" "}
            <a href={project?.demo} target="_blank" rel="noopener noreferrer">
              {project?.demo}
            </a>
          </li>
        </ul>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Projects
      </button>
    </div>
  );
}

export default DigitalResume;
