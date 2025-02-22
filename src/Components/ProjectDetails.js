import React, { useState } from "react";
import "../Css/ProjectDetails.css";
import Java from "./Projects/Java";
import Ml from "./Projects/Ml";
import Webdev from "./Projects/Webdev";

function ProjectDetails() {
  const [activeTab, setActiveTab] = useState("AI/Machine Learning");

  const categories = {
    "AI/Machine Learning": [
      "Pacman Project",
      "Hugging Face Model",
      "Resume Builder",
    ],
    "MERN Stack": [
      "Material Donor Mutual Assist",
      "Budget Application",
      "E-Learning Platform",
      "Bus-route Planner",
      "Health Web Application",
      "JavaScript Animations Projects",
    ],
    "Angular-Java Stack": [
      "Dynamic Assisting Chatbot",
      "eCommerce Applications",
      "Mendix Applications",
      "CRUD Applications",
    ],
  };

  return (
    <div className="project-details">
      <div className="ptabs">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            className={`ptab ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </div>
        ))}
      </div>
      {/* <div className="content">
        <h2>{activeTab} Projects</h2>
        <ul>
          {categories[activeTab].map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div> */}

      {activeTab === "Angular-Java Stack" && <Java />}
      {activeTab === "AI/Machine Learning" && <Ml />}
      {activeTab === "MERN Stack" && <Webdev />}
    </div>
  );
}

export default ProjectDetails;
