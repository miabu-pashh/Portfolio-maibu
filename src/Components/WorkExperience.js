import React from "react";
import "../Css/WorkExperience.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import caLogo from "../logos/Calogo.png";
import bhnaLogo from "../logos/BHNA Logo.jpeg";
import sluLogo from "../logos/SluOpenSource.png";
import excelerateLogo from "../logos/ExcelerateLogo.jpeg";
import birthdayLogo from "../logos/Its your Birthday Logo.png";
import nagarroLogo from "../logos/Nagarro_Logo.jpg";
import nithyaLogo from "../logos/nithya_industries_logo.jpeg";

const experiences = [
  {
    id: 101,
    company: "Mango Social Marketing",
    companyDetail: "DBA Bucket List Creative",
    position: "Lead Web Developer",
    duration: "Nov 2025 - Present",
    location: "St. Louis, MO",
    logo: null,
    type: "current",
    summary:
      "Leading full-stack delivery for client platforms, infrastructure, and reporting automation.",
    achievements: [
      "Architect scalable CMS and custom web systems with modular UI and backend integrations.",
      "Manage Cloudflare, SSL/TLS, hosting, and deployment performance for stable production delivery.",
      "Build automation utilities that generate documents and recurring stakeholder reports.",
    ],
    techStack: [
      "React.js",
      "WordPress",
      "Cloudflare",
      "Cloudways",
      "DNS",
      "SSL/TLS",
      "Automation Tools",
    ],
  },
  {
    id: 1,
    company: "Centennial Arts",
    position: "Software Engineer",
    duration: "Oct 2025 - Nov 2025",
    location: "Bryan, TX",
    logo: caLogo,
    type: "recent",
    summary:
      "Delivered internal and client-facing web solutions while supporting Atlassian-based delivery workflows.",
    achievements: [
      "Built and maintained web applications with HTML, CSS, JavaScript, PHP, and MySQL.",
      "Configured Jira and Confluence workflows, permissions, and project structures.",
      "Documented standards and deployment procedures to improve onboarding and knowledge transfer.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Jira",
      "Confluence",
    ],
  },
  {
    id: 102,
    company: "Velor Pathways LLC",
    position: "Junior Java Developer Intern",
    duration: "Feb 2025 - Oct 2025",
    location: "Houston, TX",
    logo: null,
    type: "professional",
    summary:
      "Contributed to backend feature delivery, REST APIs, persistence layers, and testing in Agile sprints.",
    achievements: [
      "Developed Java and Spring Boot services across feature implementation and support work.",
      "Built CRUD flows and REST APIs with MySQL and PostgreSQL integration.",
      "Improved quality with JUnit, Mockito, and Git-based team collaboration.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Maven",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "JUnit",
      "Mockito",
    ],
  },
  {
    id: 3,
    company: "Botanical Heights Neighborhood Association",
    position: "Software Developer",
    duration: "Feb 2024 - Apr 2024",
    location: "St. Louis, MO · Remote",
    logo: bhnaLogo,
    type: "internship",
    summary:
      "Built a usability-focused website using HCI principles and improved engagement significantly.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
  },
  {
    id: 4,
    company: "SLU Open Source",
    position: "Software Developer",
    duration: "Aug 2024 - Dec 2024",
    location: "St. Louis, MO · Remote",
    logo: sluLogo,
    type: "academic",
    summary:
      "Developed a donor management application and improved donation tracking workflows.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Prisma ORM",
      "Express.js",
      "AWS",
      "Vercel",
      "Jira",
    ],
  },
  {
    id: 5,
    company: "Excelerate",
    position: "Software Developer Intern",
    duration: "Aug 2023 - Sep 2023",
    location: "St. Louis, MO · Remote",
    logo: excelerateLogo,
    type: "internship",
    summary:
      "Created visual data stories and sponsor-ready artifacts with a strong communication focus.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
  },
  {
    id: 6,
    company: "It's Your Birthday Inc.",
    position: "Software Developer",
    duration: "Jul 2023 - Sep 2023",
    location: "St. Louis, MO · Remote",
    logo: birthdayLogo,
    type: "internship",
    summary:
      "Built a React-based admin interface to support shelter birthday celebration workflows.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
  },
  {
    id: 7,
    company: "Nagarro",
    position: "Java Full Stack Developer",
    duration: "Nov 2021 - Dec 2022",
    location: "Gurgaon, India",
    logo: nagarroLogo,
    type: "professional",
    summary:
      "Delivered enterprise web features across BFSI and Siemens projects using Java, React, and Mendix.",
    achievements: [
      "Built REST APIs and real-time chat capabilities for banking workflows.",
      "Contributed to Siemens web portal delivery with Mendix and Java-based backend enhancements.",
    ],
    techStack: [
      "Java",
      "JavaScript",
      "React",
      "Angular",
      "MySQL",
      "Jenkins",
      "AWS",
      "Mendix",
    ],
  },
  {
    id: 8,
    company: "Nagarro",
    position: "Software Engineer Intern",
    duration: "Aug 2021 - Nov 2021",
    location: "Gurgaon, India",
    logo: nagarroLogo,
    type: "internship",
    summary:
      "Completed full-stack engineering training and built multiple CRUD and commerce-related applications.",
    techStack: [
      "Java",
      "Advanced Java",
      "SQL",
      "Spring Boot",
      "React",
      "Angular",
    ],
  },
  {
    id: 9,
    company: "Nithya Industries",
    position: "Co-Founder",
    duration: "Apr 2021 - Dec 2022",
    location: "Hyderabad, India",
    logo: nithyaLogo,
    type: "entrepreneurship",
    summary:
      "Handled product design coordination, marketing assets, and offline business growth efforts.",
    achievements: [
      "Designed and marketed pipeline valves with a product and operations mindset.",
      "Built catalogs and coordinated offline marketing strategies to grow the client base.",
    ],
    techStack: ["Product Design", "Marketing", "Operations", "Catalog Design"],
  },
];

const typeLabels = {
  current: "Current",
  recent: "Recent",
  professional: "Full-time",
  internship: "Internship",
  academic: "Academic",
  entrepreneurship: "Entrepreneurship",
};

const typeColors = {
  current: "#00d084",
  recent: "#ffd700",
  professional: "#52a8ff",
  internship: "#b28dff",
  academic: "#f5a623",
  entrepreneurship: "#ff5ea8",
};

function ExperienceLogo({ src, company }) {
  const [errored, setErrored] = React.useState(false);
  const initials = company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  if (!src || errored) {
    return <div className="experience-logo-fallback">{initials}</div>;
  }

  return (
    <img
      src={src}
      alt={`${company} logo`}
      className="company-logo"
      onError={() => setErrored(true)}
    />
  );
}

function WorkExperience() {
  const summaryCards = [
    { label: "Experience Entries", value: `${experiences.length}+` },
    { label: "Current Focus", value: "Full-stack systems" },
    { label: "Core Strength", value: "Web, backend, AI" },
  ];

  return (
    <section className="experience-section">
      <p className="section-subtitle">My professional journey</p>
      <h2 className="section-title">Work Experience</h2>
      <p className="experience-intro">
        A progression across software engineering, client delivery, product
        thinking, and hands-on implementation, with recent work centered on
        production-grade web systems and modern full-stack delivery.
      </p>

      <div className="experience-summary-grid">
        {summaryCards.map((card) => (
          <div key={card.label} className="experience-summary-card">
            <span>{card.label}</span>
            <strong>{card.value}</strong>
          </div>
        ))}
      </div>

      <div className="experience-stack">
        {experiences.map((exp) => {
          const badgeLabel = exp.typeLabel || typeLabels[exp.type] || exp.type;
          const accentColor = typeColors[exp.type] || "#ffd700";

          return (
            <article
              key={exp.id}
              className="experience-entry"
              style={{ "--accent-color": accentColor }}
            >
              <div className="experience-entry-rail">
                <span className="experience-entry-dot"></span>
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <div className="company-logo-wrapper">
                    <ExperienceLogo src={exp.logo} company={exp.company} />
                  </div>

                  <div className="experience-main">
                    <div className="experience-heading-row">
                      <div>
                        <p className="experience-role">{exp.position}</p>
                        <h3 className="company-name">{exp.company}</h3>
                        {exp.companyDetail ? (
                          <p className="company-detail">{exp.companyDetail}</p>
                        ) : null}
                      </div>
                      <span className="type-badge">{badgeLabel}</span>
                    </div>

                    <div className="meta-info">
                      <span className="duration">
                        <FaCalendarAlt /> {exp.duration}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>

                    <p className="experience-summary">{exp.summary}</p>

                    {exp.achievements ? (
                      <div className="achievements">
                        <h5>Highlights</h5>
                        <ul>
                          {exp.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {exp.techStack ? (
                      <div className="tech-stack">
                        <h5>Technologies</h5>
                        <div className="tech-tags">
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default WorkExperience;
