import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Css/Projects.css";
import eLearning1 from "../../Photos/eLearning1.png";
import eLearning2 from "../../Photos/eLearning2.png";
import ArchELearning from "../../Photos/ArchELearning.png";

function ElearningPlatform() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  return (
    <div className="projects-container">
      <h2 className="projects-title">
        {project?.title || "E-Learning Platform"}
      </h2>
      <p className="projects-subtitle">
        Empowering Learners with Multi-Modal Content Delivery
      </p>

      <img
        src={eLearning2}
        alt="E-Learning Platform UI"
        className="projects-image responsive-img"
        style={{ width: "100%", height: "auto", borderRadius: "12px" }}
      />

      <div className="projects-section">
        <p>
          The E-Learning Platform is a modern, immersive web application that
          redefines how students engage with course content. By integrating a
          <strong> multimedia switching system</strong>, it enables learners to
          transition between <strong>video lectures</strong>,
          <strong> PDF notes</strong>, <strong>audio explanations</strong>, and
          <strong> interactive quizzes</strong>—all within a single, intuitive
          interface.
        </p>
        <p>
          Built for adaptability and engagement, this platform caters to
          different learning preferences, ensuring no student is left behind.
        </p>
      </div>

      <blockquote className="projects-quote">
        “Education becomes powerful when learners are in control of their
        experience.”
      </blockquote>

      <div className="projects-section">
        <h3>🚀 How It Works</h3>
        <ol>
          <li>Users create an account and log in.</li>
          <li>
            The platform provides both Kids version and Regular version so users
            can toggle between the two.
          </li>
          <li>
            Each course module includes 3 types of content: video, PDF, audio.
          </li>
          <li>
            Users can switch between these modes while retaining their last
            watched or read position.
          </li>
          <li>
            Content switching is seamless and dynamically rendered using React.
          </li>
          <li>User progress is saved for personalized experiences.</li>
        </ol>
      </div>

      <div className="projects-section">
        <h3>🧠 Key Features</h3>
        <ul>
          <li>🎥 Embedded Video Player with progress retention</li>
          <li>📄 In-app PDF viewer for course material</li>
          <li>🎧 Custom Audio player with speed control</li>
          <li>📝 Quiz engine with scoring and instant feedback</li>
          <li>📊 Progress tracking and UX state preservation</li>
          <li>🔄 Seamless content switching across all formats</li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>⚙️ System Architecture</h3>
        <img
          src={ArchELearning}
          alt="System Architecture"
          className="projects-diagram responsive-img"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        {/* <ul>
          <li>
            <strong>Frontend (React):</strong> Dynamic tabbed interface, media
            players, and conditional rendering
          </li>
          <li>
            <strong>Backend (Node.js + Express):</strong> Course data API,
            authentication, and user progress endpoints
          </li>
          <li>
            <strong>Database (MongoDB):</strong> Schema for users, courses,
            media links, and quiz results
          </li>
          <li>
            <strong>Media Delivery:</strong> Embedded YouTube, PDF.js, HTML5
            audio
          </li>
        </ul> */}

        <div className="projects-subsection">
          <h4>🔧 Professional Client-Server Architecture</h4>
          <p>
            This real-world, production-ready architecture follows scalable
            engineering practices:
          </p>

          <h5>1. Frontend (React SPA)</h5>
          <ul>
            <li>Hosted on CDN (Vercel/Netlify/CloudFront)</li>
            <li>Manages routing, token-based auth, API calls</li>
            <li>State-based rendering and lazy loading</li>
          </ul>

          <h5>2. API Gateway (Node.js / Express / NestJS)</h5>
          <ul>
            <li>Handles Auth (JWT/OAuth), Rate Limiting, REST routing</li>
            <li>Acts as a Backend-for-Frontend (BFF)</li>
          </ul>

          <h5>3. Core Services (Modular Microservices)</h5>
          <ul>
            <li>User Service: Auth, profile, preferences</li>
            <li>Course Service: Course/module content</li>
            <li>Progress Service: Tracks completion, quiz scores</li>
            <li>Each service is independently deployable (Docker/K8s)</li>
          </ul>

          <h5>4. Database & Caching</h5>
          <ul>
            <li>MongoDB (via Atlas): Stores users, quizzes, content</li>
            <li>Redis: Caches course metadata & session tokens</li>
            <li>Cloud Storage: AWS S3 or Firebase for media files</li>
          </ul>

          <h5>5. Deployment & Observability</h5>
          <ul>
            <li>CI/CD via GitHub Actions or GitLab CI</li>
            <li>Docker + Kubernetes for container orchestration</li>
            <li>Logging: Winston/Morgan + Grafana + Prometheus</li>
            <li>Security: HTTPS, Helmet.js, CORS, JWT expiry</li>
          </ul>
        </div>
        <img
          src={eLearning1}
          alt="Advanced Architecture"
          className="projects-diagram responsive-img"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>

      <div className="projects-section">
        <h3>⚠️ Challenges Faced</h3>
        <ul>
          <li>
            Seamless state handling during rapid switching between content tabs
          </li>
          <li>Mobile-first design for heavy media usage</li>
          <li>Consistent styling across all media types</li>
        </ul>
      </div>

      <div className="projects-demo">
        <h3>🔗 Demo & Code</h3>
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
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="E-Learning Platform Demo"
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

export default ElearningPlatform;
