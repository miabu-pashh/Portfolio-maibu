import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "/Users/maibupash/Desktop/Maibu-Portfolio/P-maibu/portfolio/src/Css/ProjectsCss/ML.css";
export default function Ml() {
  const projects = [
    {
      id: 1,
      title: " Resume rendering website ",
      description:
        " Tailoring the resume according to the job descrition. And also it can provide the ats score if the job decrition is provided. API keys of LLM are used in the background to render the file system.",
      techStack: "Machine learning AI  React, NodeJS, HTML & CSS",
      link: " ",
    },
    {
      id: 2,
      title: " Car Plate detection using OpenCV",
      description:
        "The machine learning model to detect the car plate number using OpenCV",
      techStack: "Machine learning, Open CV, AI, React, NodeJS, HTML & CSS",
      link: " ",
    },
    {
      id: 3,
      title: " IPG Carmaker Simlation using Matlab",
      description:
        "Simulation of the buggy by giving various input parameters such as transmissions, suspension, braking, etc",
      link: " ",
    },

    {
      id: 4,
      title: " Temperature sensing & Automatic hand sanitizing Robot ",
      description:
        "The robot can sense the temperature and can sanitize the hand automatically. Aurdion Uno microcontroller is used with MLX 90614 temp sensor. The one hand is mounted with a temp sensor and the other hand with automatic hand sanitizer spray. ",
      techStack:
        "Machine learning, Aurdino uno programming, hardware interfacing",
      link: " ",
    },

    {
      id: 5,
      title: " Alzheimer's disease detection",
      description: "Machine learning-Python, Image processing.",
      link: " https://drive.google.com/file/d/1XqDOtaAFbedVVbYWa2w0axAEGov07kHo/view",
    },

    // Add more project objects as needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    console.log("Selected Project: ", projectId);
    setSelectedProject(projectId);
    const selected = projects.find((project) => project.id === projectId);
    if (selected && selected.link) {
      window.open(selected.link, "_blank");
    }
  };
  return (
    <div>
      <h1>This is ML proejcts components</h1>
      <div className="mlprojects">
        <h2>Projects</h2>
        <div className="mlproject-container">
          {/* Map over the projects array and render individual project cards */}
          {projects.map((project) => (
            <div
              className="mlproject"
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* <Link onClick='/ProjectDetails'> */}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tech Stack</strong>: {project.techStack}
              </p>
            </div>
          ))}
        </div>
        {/* Render ProjectDetails component if a project is selected */}
        {/* {selectedProject && <ProjectDetails projectId={selectedProject} />} */}
      </div>
    </div>
  );
}
