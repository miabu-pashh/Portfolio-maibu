import React from "react";
import "../Css/AboutMe.css";
import { X, Download } from "lucide-react";
import { useState } from "react";

function AboutMe() {
  const [showResume, setShowResume] = useState(false);

  return (
    // <div>
    <div className="about-section">
      <h2>About</h2>
      <p>
        I am an enthusiastic and driven graduate student of{" "}
        <strong>Software Engineering</strong> at Saint Louis University, deeply
        committed to advancing my knowledge and skills in computer science. With
        a rigorous academic background, I am currently pursuing a Master of
        Science in Computer Software Engineering, immersing myself in diverse
        fields such as Principles of Software Development, Data Structures
        Algorithms, Machine Learning, Artificial Intelligence, and
        Human-Computer Interaction, all of which fuel my passion for
        cutting-edge technologies and innovation.
      </p>
      <p></p>
      <br></br>
      <button className="resume-button" onClick={() => setShowResume(true)}>
        Show Resume
      </button>
      {showResume && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-buttons">
                <a
                  href="/MahaboobJavaResume.pdf"
                  download
                  className="download-button"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
              <button
                className="close-button"
                onClick={() => setShowResume(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={process.env.PUBLIC_URL + "/MahaboobJavaResume.pdf"}
                className="resume-iframe"
                title="Resume"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
