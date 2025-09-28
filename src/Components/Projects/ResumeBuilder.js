import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Css/Projects.css"; // Use the global CSS
import ResumeSystem from "../../Photos/ResumeSystemArchitecture.png";

function ResumeBuilder() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  const [showPreview, setShowPreview] = React.useState(false);

  return (
    <div className="projects-container">
      <h2 className="projects-title">{project?.title || "Resume Tailor"}</h2>
      <p className="projects-subtitle">AI-Powered Resume Customization Tool</p>

      <img
        src={project?.image}
        alt={project?.title}
        className="projects-image responsive-img"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <div className="projects-section">
        <p>
          Resume Tailor is a smart tool that customizes LaTeX resumes based on
          job descriptions using Gemini AI. It preserves original structure,
          updates key resume sections, and generates tailored cover letters and
          cold outreach emails — all within minutes.
        </p>
      </div>
      <blockquote className="projects-quote">
        “The Resume Tailor app employs AI to ensure that resume modifications
        are relevant and well-structured.”
      </blockquote>

      <div className="projects-section">
        <h3>How It Works</h3>
        <ol>
          <li>Input the job description</li>
          <li>Select the feature buttons</li>
          <li>
            Gemini API Reads the given JD and existing resume LaTeX code in
            backend
          </li>
          <li>Resume sections updated with highlighted changes</li>
          <li>Generates tailored cover letter and cold email</li>
        </ol>
      </div>

      <div className="projects-section">
        <h3>System Architecture</h3>
        <img
          src={ResumeSystem}
          alt="System Architecture"
          className="projects-diagram responsive-img"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <ul>
          <li>
            <strong>Client (Frontend):</strong>
            <ul>
              <li>Technology: React.js, Tailwind CSS</li>
              <li>Responsibilities:</li>
              <ul>
                <li>Input Job Description</li>
                <li>Upload LaTeX resume template</li>
                <li>View updated resume & documents</li>
                <li>Trigger AI analysis requests</li>
                <li>Display comparison (Original vs. AI-updated)</li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>Backend Server (Node.js + Express):</strong>
            <ul>
              <li>Responsibilities:</li>
              <ul>
                <li>Receive JD and resume data</li>
                <li>Build prompts for AI</li>
                <li>Handle Gemini API requests</li>
                <li>Inject AI output into LaTeX</li>
                <li>Compile LaTeX → PDF</li>
                <li>Return updated LaTeX/PDF to client</li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>Gemini AI (via API)</strong>
            <ul>
              <li>Responsibilities:</li>
              <ul>
                <li>Analyze job description</li>
                <li>Update placeholder fields (Summary, Skills, Experience)</li>
                <li>Generate tailored Cover Letter and Cold Email</li>
                <li>Return structured content back to backend</li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>LaTeX Processor</strong>
            <ul>
              <strong>Tool:</strong> pdflatex or similar
              <li>Responsibilities:</li>
              <ul>
                <li>Convert updated LaTeX template to PDF</li>
                <li>Ensure formatting integrity</li>
                <li>Return final files (PDFs) to frontend</li>
              </ul>
            </ul>
          </li>
          <li>
            <strong>Optional: File Storage</strong>
            <ul>
              <li>
                <strong>Tools:</strong> Local File System / S3 (for production)
              </li>
              <li>
                <strong>Responsibility:</strong> Store uploaded templates or
                generated PDFs (optional)
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>Challenges</h3>
        <ul>
          <li>
            Ensuring the AI updates only specific fields while preserving LaTeX
            formatting was a key challenge.
          </li>
          <li>Dynamic rendering content of fields is challenging</li>
          <li>
            Extracting the JD from the whole textual data is challenging as it
            requires an NLP approach to extract, transform, and load the ETL
            method of data.
          </li>
          <li>
            All modifications use placeholder-based updates, highlighting
            changes with markdown-style <code>**bold**</code>.
          </li>
        </ul>
      </div>

      {/* <div className="projects-demo">
        <h3>Demo & Code</h3>
        <ul>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href={project?.github} target="_blank" rel="noopener noreferrer">
              {project?.github}
            </a>
          </li>
          <li>
            <strong>Live Demo:</strong>{" "}
            <div className="youtube-preview">
              <iframe
                src="https://www.loom.com/share/756c0bc410254ab0921f8487e8aed5f8?sid=b0ce060d-e15c-4d94-87ad-fe750851aace"
                title="YouTube video player"
                frameBorder="0"
                className="youtube-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        </ul>
        
      </div> */}
      <div className="projects-demo">
        <h3>Demo & Code Access</h3>
        <ul>
          <li>
            <strong>GitHub Repository:</strong>{" "}
            <a
              href="https://github.com/miabu-pashh/ResuMe.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </li>
          <li>
            <strong>Live Demo Video:</strong>{" "}
            <div className="youtube-preview">
              <iframe
                src="https://www.loom.com/embed/756c0bc410254ab0921f8487e8aed5f8?sid=03a01432-b27c-479c-83a4-a8f8f8b94834"
                title="AI-Powered Job Application Assistant Demo"
                frameBorder="0"
                className="youtube-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        </ul>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Projects
      </button>
    </div>
  );
}

export default ResumeBuilder;
