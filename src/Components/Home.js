import React, { useState } from "react";
import "../Css/Home.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";

function Home() {
  const [activeTab, setActiveTab] = useState("AboutMe");
const maibu = process.env.PUBLIC_URL + "/maibu.jpg";


  const renderTabContent = () => {
    switch (activeTab) {
      case "AboutMe":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Experience":
        return <WorkExperience />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <div className="home">
      <div className="intro">
        <img src={maibu} alt="maibu" />
        <div className="intro-text">
          <p>Mahaboob Pasha Mohammad</p>
          <p>Masters in Software Engineering</p>
        </div>
      </div>

      <div className="tab-content-container">
        <div className="tabs">
          <button
            onClick={() => setActiveTab("AboutMe")}
            className={activeTab === "AboutMe" ? "active" : ""}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab("Projects")}
            className={activeTab === "Projects" ? "active" : ""}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("Experience")}
            className={activeTab === "Experience" ? "active" : ""}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("Contact")}
            className={activeTab === "Contact" ? "active" : ""}
          >
            Contact Me
          </button>
        </div>

        <div className="tab-content">{renderTabContent()}</div>
      </div>
    </div>
  );
}

export default Home;
