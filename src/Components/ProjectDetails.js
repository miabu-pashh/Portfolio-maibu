import React from "react";
import "../Css/ProjectDetails.css";
import { useNavigate } from "react-router-dom";
import ResumeBuilder from "../Photos/ResumeBuilderThumbnail.png";
import eLearning2 from "../Photos/eLearning2.png";
import digiresume from "../Photos/digiresume.jpeg";
import studentcrm from "../Photos/StudentCRMDashboard.png";

const projects = [
  {
    title: "Student Dashboard CRM System",
    image: studentcrm,
    // "https://storage.googleapis.com/joblist-content/hero-images/22-Pro-Resume-Writer.png",
    github: "https://github.com/miabu-pashh/student-crm-dashboard",
    demo: "https://digiresume.netlify.app/",
  },
  {
    title: "Digital Resume",
    image: digiresume,
    // "https://storage.googleapis.com/joblist-content/hero-images/22-Pro-Resume-Writer.png",
    github: "https://github.com/miabu-pashh/DigiResume.git",
    demo: "https://digiresume.netlify.app/",
  },
  {
    title: "AI Resume Builder",
    image: ResumeBuilder,
    // "https://storage.googleapis.com/joblist-content/hero-images/22-Pro-Resume-Writer.png",
    github: "https://github.com/miabu-pashh/ResuMe.git",
    demo: "https://www.loom.com/share/756c0bc410254ab0921f8487e8aed5f8?sid=b0ce060d-e15c-4d94-87ad-fe750851aace",
  },
  {
    title: "E-Learning Platform",
    image: eLearning2,
    // "https://axiomq.com/wp-content/uploads/2020/09/eLearning-featured.jpg",
    github: "https://github.com/miabu-pashh/eLearning",
    demo: "https://drive.google.com/file/d/1WbnBzFdK2bKUAkCB8so-9115fH1qJQsC/view?usp=drive_link",
  },
  {
    title: "Health Web Application",
    image:
      "https://i.pinimg.com/736x/ca/bb/d9/cabbd9fe17d964f5c0d52c54f75ec2f5.jpg",
    github: "https://github.com/miabu-pashh/Atom.git",
    demo: "https://health-app-demo.com",
  },
  {
    title: "Budjet Application",
    image: "https://cdn.mos.cms.futurecdn.net/ci5RJjw4G4ahZo4zDyUdc7.jpg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
  },
  {
    title: "PACMAN Project",
    image: "https://freepacman.org/images/pacman-game-card.png",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
  },
  {
    title: "CLIPBOARD SYNC APPLICATION",
    image:
      "https://www.miit.co.nz/wp-content/uploads/2021/08/copy-paste-merger-integration-800x300-1-1200x565.jpg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
  },
  {
    title: "EMAIL SORTER APPLICATION",
    image:
      "https://imagenes.eltiempo.com/files/image_1200_535/uploads/2017/12/11/5a2ec3749e645.jpeg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
  },
  {
    title: "RESEARCH PAPER OVERVIEW",
    image:
      "https://www.quillmuse.com/wp-content/uploads/2024/04/How-to-Write-an-Abstract-for-a-Research-Paper.webp",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
  },
  {
    title: "MATERIAL DONOR MUTUAL ASSIST",
    image:
      "https://donatestuff.com/wp-content/uploads/2023/01/donate-clothes-compressor.jpeg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
  },

  // Add more project objects here later
];

function ProjectDetails() {
  const titleToRouteMap = {
    "Student Dashboard CRM System": "student-crm-dashboard",
    "Digital Resume": "digital-resume",
    "AI Resume Builder": "resume-builder",
    "E-Learning Platform": "e-learning-platform",
    "Health Web Application": "health-app",
    "Budjet Application": "budget-app",
    "PACMAN Project": "pacman",
    "CLIPBOARD SYNC APPLICATION": "clipboard-sync",
    "EMAIL SORTER APPLICATION": "email-sorter",
    "RESEARCH PAPER OVERVIEW": "research-paper",
    "MATERIAL DONOR MUTUAL ASSIST": "material-donor",
  };
  const navigate = useNavigate();

  const handleCardClick = (project) => {
    const path = titleToRouteMap[project.title];
    if (path) {
      navigate(`/${path}`, {
        state: { project },
      });
    }

    // navigate(`/${encodeURIComponent(project.title)}`, {
    //   state: { project },
    // });
  };
  return (
    <div className="project-details-section">
      <h2 className="section-title">My Recent Projects</h2>
      {/* <p className="section-subtitle">Portfolio</p> */}
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => handleCardClick(project)}
            style={{ cursor: "pointer" }}
          >
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-buttons">
              {/* <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo"
              >
                Live Demo
              </a> */}
              <a>PROJECT DETAILS</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
