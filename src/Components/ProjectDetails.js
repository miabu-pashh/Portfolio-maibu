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
    category: "Full-stack dashboard",
    accent: "Data systems",
    image: studentcrm,
    github: "https://github.com/miabu-pashh/student-crm-dashboard",
    demo: "https://digiresume.netlify.app/",
    summary:
      "A modern student operations dashboard built around profiles, communications, and workflow visibility.",
  },
  {
    title: "Digital Resume",
    category: "Interactive portfolio",
    accent: "Personal branding",
    image: digiresume,
    github: "https://github.com/miabu-pashh/DigiResume.git",
    demo: "https://digiresume.netlify.app/",
    summary:
      "A swipe-first resume experience that presents profile content in a more engaging, app-like format.",
  },
  {
    title: "AI Resume Builder",
    category: "AI workflow tool",
    accent: "Automation",
    image: ResumeBuilder,
    github: "https://github.com/miabu-pashh/ResuMe.git",
    demo: "https://www.loom.com/share/756c0bc410254ab0921f8487e8aed5f8?sid=b0ce060d-e15c-4d94-87ad-fe750851aace",
    summary:
      "An assistant that tailors resumes, cover letters, and outreach content from job descriptions.",
  },
  {
    title: "E-Learning Platform",
    category: "EdTech product",
    accent: "Multi-modal learning",
    image: eLearning2,
    github: "https://github.com/miabu-pashh/eLearning",
    demo: "https://drive.google.com/file/d/1WbnBzFdK2bKUAkCB8so-9115fH1qJQsC/view?usp=drive_link",
    summary:
      "A content-switching platform for video, PDF, audio, and quiz-based learning flows.",
  },
  {
    title: "Health Web Application",
    category: "Web application",
    accent: "Health",
    image:
      "https://i.pinimg.com/736x/ca/bb/d9/cabbd9fe17d964f5c0d52c54f75ec2f5.jpg",
    github: "https://github.com/miabu-pashh/Atom.git",
    demo: "https://health-app-demo.com",
    summary:
      "A concept health application focused on web usability and accessible digital workflows.",
  },
  {
    title: "Budjet Application",
    category: "Utility app",
    accent: "Finance",
    image: "https://cdn.mos.cms.futurecdn.net/ci5RJjw4G4ahZo4zDyUdc7.jpg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
    summary:
      "A budgeting concept focused on practical financial tracking and simplified user flows.",
  },
  {
    title: "PACMAN Project",
    category: "Game build",
    accent: "Interactive logic",
    image: "https://freepacman.org/images/pacman-game-card.png",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
    summary:
      "A game-focused build centered on interaction logic, movement handling, and playable UI behavior.",
  },
  {
    title: "CLIPBOARD SYNC APPLICATION",
    category: "Productivity tool",
    accent: "Cross-device sync",
    image:
      "https://www.miit.co.nz/wp-content/uploads/2021/08/copy-paste-merger-integration-800x300-1-1200x565.jpg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
    summary:
      "A concept utility for syncing copied content across environments with minimal workflow friction.",
  },
  {
    title: "EMAIL SORTER APPLICATION",
    category: "Automation tool",
    accent: "Inbox workflows",
    image:
      "https://imagenes.eltiempo.com/files/image_1200_535/uploads/2017/12/11/5a2ec3749e645.jpeg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
    summary:
      "An email organization concept aimed at sorting and prioritizing communication more efficiently.",
  },
  {
    title: "RESEARCH PAPER OVERVIEW",
    category: "Research utility",
    accent: "Knowledge extraction",
    image:
      "https://www.quillmuse.com/wp-content/uploads/2024/04/How-to-Write-an-Abstract-for-a-Research-Paper.webp",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
    summary:
      "A concept for simplifying research paper digestion through structured overview and summary patterns.",
  },
  {
    title: "MATERIAL DONOR MUTUAL ASSIST",
    category: "Community platform",
    accent: "Donation workflows",
    image:
      "https://donatestuff.com/wp-content/uploads/2023/01/donate-clothes-compressor.jpeg",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
    summary:
      "A platform concept focused on coordinating material donation support and mutual-assistance logistics.",
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
      <p className="section-subtitle">Featured Work</p>
      <h2 className="section-title">My Recent Projects</h2>
      <p className="projects-lead">
        A more interactive view of product builds, experiments, and case-study
        work across AI, dashboards, utilities, and user-facing web apps.
      </p>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => handleCardClick(project)}
            style={{ cursor: "pointer" }}
          >
            <div className="project-card-top">
              <span className="project-category">{project.category}</span>
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-card-body">
              <span className="project-accent">{project.accent}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>

            <div className="project-buttons">
              <button type="button" className="project-link-button">
                Open Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
