import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Css/Projects.css";
import studentcrm from "../../Photos/StudentCRMDashboard.png";

function StudentCRMDashboard() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  return (
    <div className="projects-container">
      <h2 className="projects-title">
        {project?.title || "Student CRM Dashboard"}
      </h2>
      <p className="projects-subtitle">
        Undergraduation.com - Complete Student Management System
      </p>

      <img
        src={studentcrm}
        alt="Student CRM Dashboard UI"
        className="projects-image"
      />

      <div className="projects-section">
        <p>
          A comprehensive Student CRM Dashboard built for Undergraduation.com
          that streamlines student management with features like searchable
          directories, detailed profiles, communication tracking, task
          management, and AI-powered insights. Built with Next.js 14 and
          Firebase for real-time data management.
        </p>
      </div>

      <blockquote className="projects-quote">
        "Transforming student relationship management through intelligent
        dashboard design and real-time data insights."
      </blockquote>

      <div className="projects-section">
        <h3>Key Features Implemented</h3>
        <ul>
          <li>
            <strong>Student Directory:</strong> Searchable & filterable table
            with direct profile navigation
          </li>
          <li>
            <strong>Student Profiles:</strong> Complete information display with
            intent scores and progress tracking
          </li>
          <li>
            <strong>Communication Hub:</strong> Email/call/note logging with
            edit/delete capabilities and audit trails
          </li>
          <li>
            <strong>Task Management:</strong> Per-student task assignment with
            global notification system
          </li>
          <li>
            <strong>AI Summary:</strong> Generated insights with smooth typing
            animations
          </li>
          <li>
            <strong>Authentication:</strong> Secure Firebase Auth with Firestore
            access rules
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>How It Works</h3>
        <ol>
          <li>Users authenticate through Firebase Auth system</li>
          <li>Dashboard loads with searchable student directory</li>
          <li>Click any row to navigate to detailed student profile</li>
          <li>
            Track communications, manage tasks, and view AI-generated insights
          </li>
          <li>Real-time updates through Firestore backend integration</li>
        </ol>
      </div>

      <div className="projects-section">
        <h3>Technical Architecture</h3>
        <ul>
          <li>
            <strong>Frontend Framework:</strong> Next.js 14 with App Router and
            TypeScript
          </li>
          <li>
            <strong>Styling:</strong> CSS Modules aligned with
            Undergraduation.com theme
          </li>
          <li>
            <strong>Backend Services:</strong> Firebase Auth + Firestore for
            real-time data
          </li>
          <li>
            <strong>Security:</strong> Firestore rules ensuring signed-in user
            access only
          </li>
          <li>
            <strong>State Management:</strong> React hooks with TypeScript for
            type safety
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>Implementation Highlights</h3>
        <ul>
          <li>
            <strong>Real-time Data:</strong> Firestore integration for live
            student data updates
          </li>
          <li>
            <strong>Search & Filter:</strong> Advanced table functionality for
            quick student lookup
          </li>
          <li>
            <strong>Progress Tracking:</strong> Visual progress bars showing
            student stage progression
          </li>
          <li>
            <strong>Audit Trail:</strong> Complete communication history with
            timestamps
          </li>
          <li>
            <strong>Task Notifications:</strong> Global bell icon showing
            pending tasks count
          </li>
          <li>
            <strong>Responsive Design:</strong> Mobile-friendly interface
            following modern UI patterns
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>Development Process</h3>
        <ul>
          <li>Set up Next.js 14 project with TypeScript configuration</li>
          <li>Integrated Firebase Auth and Firestore with security rules</li>
          <li>Built reusable components following atomic design principles</li>
          <li>Implemented CSS Modules for scoped styling consistency</li>
          <li>Created mock AI summary feature with typing animation effects</li>
          <li>Deployed with comprehensive testing and documentation</li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>Running the Application</h3>
        <ol>
          <li>
            Clone the repository and install dependencies with{" "}
            <code>npm install</code>
          </li>
          <li>
            Copy environment configuration:{" "}
            <code>cp .env.example .env.local</code>
          </li>
          <li>Configure Firebase values in environment file</li>
          <li>
            Start development server: <code>npm run dev</code>
          </li>
          <li>Login using provided test credentials (see README)</li>
        </ol>
      </div>

      <div className="projects-section">
        <h3>Challenges & Solutions</h3>
        <ul>
          <li>
            <strong>Real-time Data Sync:</strong> Implemented efficient
            Firestore listeners to ensure data consistency across multiple user
            sessions
          </li>
          <li>
            <strong>Complex State Management:</strong> Used React hooks with
            TypeScript for type-safe state management and data flow
          </li>
          <li>
            <strong>UI Consistency:</strong> Developed component library
            following Undergraduation.com design system guidelines
          </li>
          <li>
            <strong>Performance Optimization:</strong> Implemented lazy loading
            and memoization for large student datasets
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>Future Enhancements</h3>
        <ul>
          <li>Full AI integration replacing mock summary feature</li>
          <li>Advanced analytics dashboard with detailed insights</li>
          <li>Email integration for direct communication from dashboard</li>
          <li>Bulk operations for managing multiple students</li>
          <li>Export functionality for reports and data analysis</li>
        </ul>
      </div>

      <div className="projects-demo">
        <h3>Demo & Code Access</h3>
        <ul>
          <li>
            <strong>GitHub Repository:</strong>{" "}
            <a
              href="https://github.com/miabu-pashh/student-crm-dashboard"
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
                src="https://www.loom.com/embed/4ebcb1b8a05243e0961878ee9d762baf?sid=66e030ea-c53b-4368-bf7a-8544590c8f3d"
                title="Student CRM Dashboard Demo"
                frameBorder="0"
                className="youtube-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h3>Project Notes</h3>
        <ul>
          <li>
            Insights dashboard and interaction timeline features are mocked per
            project requirements
          </li>
          <li>
            Code architecture designed for easy extension and feature additions
          </li>
          <li>Comprehensive documentation provided for setup and usage</li>
          <li>
            Ready for production deployment with minor configuration changes
          </li>
        </ul>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Projects
      </button>
    </div>
  );
}

export default StudentCRMDashboard;
