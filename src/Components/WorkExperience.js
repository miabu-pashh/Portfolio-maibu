import React, { useState } from "react";
import "../Css/WorkExperience.css";
function WorkExperience() {
  const [collapsedYears, setCollapsedYears] = useState({});

  const toggleCollapse = (year) => {
    setCollapsedYears((prevCollapsedYears) => ({
      ...prevCollapsedYears,
      [year]: !prevCollapsedYears[year],
    }));
  };

  const isCollapsed = (year) => {
    return collapsedYears[year];
  };

  return (
    <div className="work-experience">
      <h2>Experience</h2>
      <div className="work-experience-content">
        
        <div className="experience-year">
          <h3 onClick={() => toggleCollapse("2024")}>2024</h3>
          {!isCollapsed("2024") && (
            <div className="experience-details">
              <p>
                <strong>Software Developer</strong>{" "}
              </p>
              <p>Botanical Heights Neighbourhood Association, USA</p>
              <p>Feb 2024 - Apr 2024</p>
              <p>St Louis, Missouri, United States · Remote</p>
              <p>
                Developed the Website using the HCI principles and worked on the
                user engagement. This improved the overall usability of the
                website and also count of the visit improved by 80%
                <br />
                <br />
                <strong>Tech Stack:</strong> Html, Css, Javascript, React,
                Wordpress.
              </p>
            </div>
          )}
        </div>
        

        <div className="experience-year">
          <h3 onClick={() => toggleCollapse("2023")}>2023</h3>
          {!isCollapsed("2023") && (
            <div className="experience-details">
              <p>
                <strong>Software Developer Intern</strong>{" "}
              </p>
              <p>Excelerate · Internship</p>
              <p>Aug 2023 - Sep 2023</p>
              <p>St Louis, Missouri, United States · Remote</p>
              <p>
                In this internship, I have learned how to leverage human visual
                perception to communicate with data using different
                visualizations. I have created visuals that will answer key
                questions about sponsor? business. The internship have equipped
                me with tools to develop visual thinking and the power it can
                add to your skillset. I have developed skills in information
                literacy, communication, critical thinking, inquiry, and
                analysis. I have designed audience-appropriate data
                presentations that align with best practices for data
                visualization.In this internship, I have learned how to leverage
                human visual perception to communicate with data using different
                visualizations. I have created visuals that will answer key
                questions about sponsor? business. The internship have equipped
                me with tools to develop visual thinking and the power it can
                add to your skillset. I have developed skills in information
                literacy, communication, critical thinking, inquiry, and
                analysis. I have designed audience-appropriate data
                presentations that align with best practices for data
                visualization.
              </p>
              <br />
              <p>
                {" "}
                <strong>Tech Stack:</strong> Html, Css, Javascript, React,
                Wordpress.
              </p>

              <hr />
              <p>
                <strong>Software Developer</strong>{" "}
              </p>
              <p>It's Your Birthday, Inc. </p>
              <p>Jul 2023 - Sep 2023</p>
              <p>St Louis, Missouri, United States · Remote</p>
              <p>
                Developed a React application for shelter details retrieval and
                admin functionality. In this Application, The team lets the user
                to add birthday details and type of Celebration for the under
                prevelegied kids.
              </p>
              <br />
              <p>
                <strong>Tech Stack:</strong> Html, Css, Javascript, React,
                Wordpress.
              </p>
            </div>
          )}
        </div>

        <div className="experience-year">
          <h3 onClick={() => toggleCollapse("2022")}>2022</h3>
          {!isCollapsed("2022") && (
            <div className="experience-details">
              <p>
                <strong>NAGARRO</strong>{" "}
              </p>
              <br />
              <p>
                <strong>Associate Software Engineer</strong>
              </p>
              <p>Nov 2021 - Dec 2022</p>
              <p>Gurgaon, India</p>
              <p>
                <strong>JAVA Developer</strong>, Full Stack Development
                <ul>
                  - Specialized in Java development, with expertise in Mendix
                  and Spring Boot.
                </ul>
                <ul>
                  - Designed and developed eCommerce websites, chat
                  applications, and product catalogues.
                </ul>
                <ul>
                  - Proficient in low-code platforms and Java technologies.
                </ul>
                <ul>
                  - Developed REST APIs and handled full-stack development.{" "}
                </ul>
                BFSI Application Development
                <ul>
                  - Created a chatbot and chat application using React and
                  Spring Boot.
                </ul>
                <ul>
                  - Responsible for full-stack development and REST API
                  integration in Java.{" "}
                </ul>
                Mendix Application Development
                <ul>
                  - Developed an eCommerce website for SIEMENS using Mendix.
                </ul>
                <ul>
                  - Conducted backend development using Java to add new
                  features.
                </ul>
                <br />
                <strong>Tech Stack:</strong> Java, Advance Java, Javascript,
                React, Angular, MySQL, Jenkins, Postman, Git, AWS, Mendix
              </p>

              <hr/>

              <p><strong>Software Engineer Intern, Nagarro</strong></p>
              <p>Aug 2021 - Nov 2021</p>
              <p>Haryana, India</p>
              <ul>Received comprehensive training in Java technologies, with a focus on Spring Boot for backend APIs, and gained proficiency in front-end tools such as React, Node.js, and Angular.</ul>
            <ul>Executed multiple projects during training, including CRUD applications and an exit application for a product catalogue shopping website.</ul>
            </div>
          )}
        </div>

        <div className="experience-year">
          <h3 onClick={() => toggleCollapse("2021")}>2021</h3>
          {!isCollapsed("2021") && (
            <div className="experience-details">
              <p>
                <strong>Startup Company</strong>{" "}
              </p>
              <p> Nithya Industries</p>
              <p>Apr 2021 - Dec 2022</p>
              <p>Hyderabad, India</p>
              <ul>- Collaborated on the design, manufacturing, and marketing of pipeline valves in a startup setting.</ul>
              <ul>- Dual role as the company's design and marketing coordinator. Introduced a comprehensive marketing program to enhance client relationships</ul>
                <ul>- Produced industry catalogues to support the company's offline marketing strategy and attract local and international customers.</ul>
            </div>
          )}
        </div>


        {/* Add more years as needed */}
      </div>
    </div>
  );
}

export default WorkExperience;
