// import React, { useState } from "react";
// import "../Css/ProjectDetails.css";
// import Java from "./Projects/Java";
// import Ml from "./Projects/Ml";
// import Webdev from "./Projects/Webdev";

// function ProjectDetails() {
//   const [activeTab, setActiveTab] = useState("AI/Machine Learning");

//   const categories = {
//     "AI/Machine Learning": [
//       "Pacman Project",
//       "Hugging Face Model",
//       "Resume Builder",
//     ],
//     "MERN Stack": [
//       "Material Donor Mutual Assist",
//       "Budget Application",
//       "E-Learning Platform",
//       "Bus-route Planner",
//       "Health Web Application",
//       "JavaScript Animations Projects",
//     ],
//     "Angular-Java Stack": [
//       "Dynamic Assisting Chatbot",
//       "eCommerce Applications",
//       "Mendix Applications",
//       "CRUD Applications",
//     ],
//   };

//   return (
//     <div className="project-details">
//       <div className="ptabs">
//         {Object.keys(categories).map((category) => (
//           <div
//             key={category}
//             className={`ptab ${activeTab === category ? "active" : ""}`}
//             onClick={() => setActiveTab(category)}
//           >
//             {category}
//           </div>
//         ))}
//       </div>
//       {/* <div className="content">
//         <h2>{activeTab} Projects</h2>
//         <ul>
//           {categories[activeTab].map((project, index) => (
//             <li key={index}>{project}</li>
//           ))}
//         </ul>
//       </div> */}

//       {activeTab === "Angular-Java Stack" && <Java />}
//       {activeTab === "AI/Machine Learning" && <Ml />}
//       {activeTab === "MERN Stack" && <Webdev />}
//     </div>
//   );
// }

// export default ProjectDetails;

import React from "react";
import "../Css/ProjectDetails.css";

const projects = [
  {
    title: "E-Learning Platform",
    image:
      "https://axiomq.com/wp-content/uploads/2020/09/eLearning-featured.jpg",
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
  {
    title: "Resume Builder",
    image:
      "https://storage.googleapis.com/joblist-content/hero-images/22-Pro-Resume-Writer.png",
    github: "https://github.com/miabu-pashh/resume-builder",
    demo: "https://resume-builder-demo.com",
  },

  // Add more project objects here later
];

function ProjectDetails() {
  return (
    <div className="project-details-section">
      <h2 className="section-title">My Recent Projects</h2>
      <p className="section-subtitle">Portfolio</p>
      <div className="project-cards-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <div className="project-buttons">
              <a
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
