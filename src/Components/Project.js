import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Css/Projects.css";

function Projects() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const project = state?.project;

  if (!project) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>❌ Project not found.</p>
        <button onClick={() => navigate("/")}>← Back to Projects</button>
      </div>
    );
  }

  return (
    <div className="projects" style={{ padding: "2rem" }}>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>
        <strong>GitHub:</strong>{" "}
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          {project.github}
        </a>
      </p>
      <p>
        <strong>Live Demo:</strong>{" "}
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          {project.demo}
        </a>
      </p>
      <button onClick={() => navigate("/")}>← Back</button>
    </div>
  );
}

export default Projects;
