import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/Users/maibupash/Desktop/Maibu-Portfolio/P-maibu/portfolio/src/Css/ProjectsCss/webDev.css";
import img1 from "/Users/maibupash/Desktop/Maibu-Portfolio/P-maibu/portfolio/src/Photos/ML.png";

export default function Webdev() {
  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      description:
        "The E-learing platform is built with the Coursework Human Computer Interface. The project deals with the improvement of user Engagement by improving the UI/UX. The use of Multimedia Content for this Project is something which is very unique feature and could potentially increase the user engagement to complete the course.",
      techStack: "React, NodeJS, HTML & CSS",
      link: "https://github.com/miabu-pashh/HCI_E-Learning.git",
      image: img1,
    },
    {
      id: 2,
      title: "Health web application",
      description:
        "A website is created to enhance the user to get doctors feedback and also the doctors recommendations of the diseases. This application uses the principles of the Software Development, Designed and tested to perfection. Team lead and responsible for the app development.",
      techStack: "Java, React, NodeJS, Postgres SQL",
      link: "https://github.com/miabu-pashh/Atom.git",
      image: img1,
    },
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
      <div className="webprojects">
        <div className="webproject-container">
          {/* Map over the projects array and render individual project cards */}
          {projects.map((project) => (
            <div
              className="webproject"
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* <Link onClick='/ProjectDetails'> */}
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />

              <p>{project.description}</p>
              <p>
                <strong>Tech Stack</strong>: {project.techStack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
