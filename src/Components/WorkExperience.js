import React from "react";
import "../Css/WorkExperience.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

function WorkExperience() {
  const experiences = [
    {
      id: 1,
      company: "Upcancer",
      position: "Backend Developer",
      duration: "Sep 2025 - Present",
      location: "Atlanta, GA · Remote",
      logo: "https://www.upcancer.org/x/cdn/?https://storage.googleapis.com/wzukusers/user-28366453/images/5cacd50adc3c37Zurfki/Up-Cancer-new-logo_d200.png",
      type: "current",
      achievements: [
        "Developed and deployed scalable backend services using Java, Spring Boot, and AWS to support the company’s new CRM platform",
        "improving data processing speed by 30% and reducing API response time by 25%.",
        "Collaborated with front-end teams to integrate React-based UI with backend microservices, enabling seamless customer data management",
        "increasing internal user efficiency by 20% through automation of manual workflows.",
        "Created responsive UIs with React.js, HTML/CSS, improving UX and compatibility.",
      ],
      techStack: [
        "Next.JS",
        "Java",
        "Spring Boot",
        "React.js",
        "Dynamo DB",
        "AWS",
        "Microservices",
      ],
    },
    {
      id: 2,
      company: "MetLife",
      position: "Software Engineer",
      duration: "Aug 2024 – March 2025",
      location: "St. Louis, Missouri · Remote",
      logo: "https://cdn.prod.website-files.com/645468eba93097253a052ac0/65370b2a3e0a4251b599ca48_Metlife.png",
      type: "Contract",
      achievements: [
        "Implemented Agile methodologies to streamline SDLC and accelerate project delivery",
        "Developed high-performance web apps using Java, Spring Boot, and Microservices",
        "Created responsive UIs with React.js, Angular, HTML/CSS, improving UX and compatibility",
        "Architected AWS cloud solutions reducing infrastructure cost by 20%",
      ],
      techStack: ["Java", "Spring Boot", "React.js", "Angular", "AWS"],
    },
    {
      id: 3,
      company: "Botanical Heights Neighborhood Association",
      position: "Software Developer",
      duration: "Feb 2024 – Apr 2024",
      location: "St. Louis, Missouri · Remote",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfkMUTCaQ28XhwO4UUi9yOhii4PbuogfDMg&s",
      type: "Internship",
      description:
        "Built the website using HCI principles to boost usability and increase visits by 80%.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
    },
    {
      id: 4,
      company: "SLU Open Source",
      position: "Software Developer",
      duration: "Aug 2024 – Dec 2024",
      location: "St. Louis, Missouri · Remote",
      logo: "https://oss-slu.github.io/img/oss-logo-2.png",
      type: "academic",
      description:
        "Developed Web application to track and improve the donor details and donation tracking. Enhanced the donation tracking by 100%",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Prisma ORM",
        "Express.js",
        "AWS",
        "GitHub Actions",
        "Vercel",
        "Postman",
        "Figma",
        "Jira",
      ],
    },
    {
      id: 5,
      company: "Excelerate",
      position: "Software Developer Intern",
      duration: "Aug 2023 – Sep 2023",
      location: "St. Louis, Missouri · Remote",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFsKCE82AoD_Q/company-logo_200_200/company-logo_200_200/0/1689287580187?e=2147483647&v=beta&t=W_EKhWW8gfHFEjEIWRFYG9DX28ca8kKEzSBitQcL7Qo",
      type: "internship",
      description:
        "Created visual data stories and developed visual thinking skills for effective sponsor communication.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
    },
    {
      id: 6,
      company: "It's Your Birthday Inc.",
      position: "Software Developer",
      duration: "Jul 2023 – Sep 2023",
      location: "St. Louis, Missouri · Remote",
      logo: "https://static.wixstatic.com/media/6ef38d_b0983c6a79cc48f790ae003c66add6eb~mv2.png/v1/fit/w_2500,h_1330,al_c/6ef38d_b0983c6a79cc48f790ae003c66add6eb~mv2.png",
      type: "Internship",
      description:
        "Developed a React app to manage shelter birthday celebrations, enabling admin functionality for organizers.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
    },
    {
      id: 7,
      company: "Nagarro",
      position: "Java Full Stack Developer",
      duration: "Nov 2021 – Dec 2022",
      location: "Gurgaon, India",
      logo: "https://yt3.googleusercontent.com/UcqU2VQcIy5UPcJ2c-Mu9b-0mScPXjBKVVLuCV2wU3PTowJf2UbY_8u_k6QJHo9edMSIcWlWrQ=s900-c-k-c0x00ffffff-no-rj",
      type: "professional",
      achievements: [
        `Banking, Financial Services, and Insurance (BFSI): lead for this team and implemented REST APIs for seamless
communication between front-end (React) and back-end (Java) for real-time chat communication for the banking domain
website to reduce the confusion among new customers visiting the website, improving app efficiency by 75%.`,
        `Mendix Development : Collaborated on Siemens web portal using Mendix and Java, achieving a 80% reduction in
development time and streamlined backend enhancements`,
      ],
      techStack: [
        "Java",
        "JavaScript",
        "React",
        "Angular",
        "MySQL",
        "Jenkins",
        "Postman",
        "Git",
        "AWS",
        "Mendix",
      ],
    },
    {
      id: 8,
      company: "Nagarro",
      position: "Software Engineer Intern",
      duration: "Aug 2021 – Nov 2021",
      location: "Gurgaon, India",
      logo: "https://yt3.googleusercontent.com/UcqU2VQcIy5UPcJ2c-Mu9b-0mScPXjBKVVLuCV2wU3PTowJf2UbY_8u_k6QJHo9edMSIcWlWrQ=s900-c-k-c0x00ffffff-no-rj",
      type: "internship",
      achievements: [
        "Trained in Java and Advanced Java, Spring Boot and front-end tools like React and Angular",
        "Built several CRUD apps and an exit flow for shopping cart websites",
      ],
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
      duration: "Apr 2021 – Dec 2022",
      location: "Hyderabad, India",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQG5Taar917i3w/company-logo_100_100/company-logo_100_100/0/1661858562785/nithya_industries_logo?e=1761782400&v=beta&t=69DfWnA-0rRlOzGIt_iWgHjE8Tk6cAs_JL_aEy9eqdM",
      type: "Co-Founder",
      achievements: [
        "Designed and marketed pipeline valves as design and marketing coordinator",
        "Developed catalogs and drove offline marketing strategies to grow client base",
      ],
    },
    {
      id: 10,
      company: "Adons Soft Tech",
      position: "Software Engineer",
      duration: "Jan 2020 – Aug 2021",
      location: "Hyderabad, India",
      logo: "https://adonssoftech.com/images/adons_logo.png",
      type: "professional",
      achievements: [
        "Led Waterfall model implementations with phase-wise delivery milestones",
        "Built Java backends with JSP/Servlets and optimized Spring performance",
        "Designed responsive UIs to increase user traffic by 20%",
        "Managed data in MongoDB for high-performance querying",
      ],
      techStack: ["Java", "JSP", "Servlets", "Spring", "MongoDB"],
    },
  ];

  const getTypeLabel = (type) => {
    const labels = {
      current: "Current",
      recent: "Recent",
      professional: "Full-time",
      contract: "Contract",
      internship: "Internship",
      academic: "Academic",
      entrepreneurship: "Entrepreneurship",
    };
    return labels[type] || type;
  };

  const getTypeColor = (type) => {
    const colors = {
      current: "#00ff88",
      recent: "#ffd700",
      professional: "#4a9eff",
      contract: "#ff6b6b",
      internship: "#a78bfa",
      academic: "#f59e0b",
      entrepreneurship: "#ec4899",
    };
    return colors[type] || "#ffd700";
  };

  return (
    <div className="experience-section">
      <p className="section-subtitle">My professional journey</p>
      <h2 className="section-title">Work Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`experience-item ${exp.type}`}>
            <div className="timeline-connector">
              <div
                className="timeline-dot"
                style={{ backgroundColor: getTypeColor(exp.type) }}
              ></div>
              {index < experiences.length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>

            <div className="experience-card">
              <div className="card-header">
                <div className="company-info">
                  <div className="company-logo-wrapper">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="company-logo"
                    />
                    <div
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(exp.type) }}
                    >
                      {getTypeLabel(exp.type)}
                    </div>
                  </div>
                  <div className="company-details">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position-title">{exp.position}</h4>
                    <div className="meta-info">
                      <span className="duration">
                        <FaCalendarAlt /> {exp.duration}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                {exp.description && (
                  <p className="description">{exp.description}</p>
                )}

                {exp.achievements && (
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.techStack && (
                  <div className="tech-stack">
                    <h5>Technologies:</h5>
                    <div className="tech-tags">
                      {exp.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
