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
                <strong>Java Full Stack Developer</strong>
              </p>
              <p>CVS Health, USA</p>
              <p>Aug 2024 - Present</p>
              <ul>
                <li>
                  Implemented Agile methodologies to streamline the software
                  development lifecycle, fostering seamless collaboration and
                  accelerating project delivery.
                </li>
                <li>
                  Designed and developed high-performance web applications using
                  Core Java, Spring Boot, and Microservices, enhancing
                  scalability by 30% and minimizing downtime by 20%.
                </li>
                <li>
                  Created dynamic, responsive front-end interfaces with
                  React.js, Angular, HTML, CSS, and JavaScript, improving user
                  experience and achieving 98% cross-browser compatibility.
                </li>
                <li>
                  Architected and deployed cloud-based applications on AWS
                  utilizing EC2, S3, VPC, CloudFront, and ELB, cutting
                  infrastructure costs by 20%.
                </li>
              </ul>
              <hr></hr>

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

              <hr />
              <p>
                <strong>Software Developer</strong>{" "}
              </p>
              <p>Open Source-Saint Louis university</p>
              <p>Aug 2024 - Dec 2024</p>
              <p>St Louis, Missouri, United States</p>
              <p>
                Developed the website for B works, a non-profit organization.
                The project includes teh development of a web application for
                the ease of the donation and its tracking. The Tech Stack:
                <br />
                <br />
                <strong>Tech Stack:</strong> React-Frontend, Nodejs-Backend,
                MongoDB-Database. Wordpress.
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
                <strong>NAGARRO Software Limited</strong>{" "}
              </p>
              <p>
                <strong>Java Full Stack Developer</strong>
              </p>
              <p>Nov 2021 - Dec 2022</p>
              <p>Gurgaon, India</p>
              <p>
                <ul>
                  <li>
                    Led a team of 4 developers to design and develop{" "}
                    <strong>eCommerce</strong>
                    websites, chat applications, and product catalogues using
                    Spring Boot and Mendix, enhancing user engagement by 30%.
                  </li>
                  <li>
                    <strong>
                      Banking, Financial Services, and Insurance (BFSI)
                    </strong>
                    , lead for this team and Developed and integrated REST APIs
                    for seamless communication between front-end (React) and
                    back-end (Java) for Realtime chat communication for banking
                    domain website to reduce the confusion among new customers
                    visiting the website, improving app efficiency by 25%.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver an
                    eCommerce solution for <strong>SIEMENS</strong> , utilizing
                    Mendix for rapid prototyping and Java for backend feature
                    enhancements, resulting in a 20% reduction in development
                    time.
                  </li>
                </ul>
                <strong>Tech Stack:</strong> Java, Advance Java, Javascript,
                React, Angular, MySQL, Jenkins, Postman, Git, AWS, Mendix
              </p>
            </div>
          )}
        </div>

        <div className="experience-year">
          <h3 onClick={() => toggleCollapse("2021")}>2021</h3>
          {!isCollapsed("2021") && (
            <div className="experience-details">
              <hr />

              <p>
                <strong>Software Engineer Intern, Nagarro</strong>
              </p>
              <p>Aug 2021 - Nov 2021</p>
              <p>Haryana, India</p>
              <ul>
                <li>
                  Received comprehensive training in Java technologies, with a
                  focus on Spring Boot for backend APIs, and gained proficiency
                  in front-end tools such as React, Node.js, and Angular.
                </li>
                <li>
                  Executed multiple projects during training, including CRUD
                  applications and an exit application for a product catalogue
                  shopping website.
                </li>
              </ul>

              <hr />
              <p>
                <strong>Startup Company</strong>{" "}
              </p>
              <p> Nithya Industries</p>
              <p>Apr 2021 - Dec 2022</p>
              <p>Hyderabad, India</p>
              <ul>
                <li>
                  Collaborated on the design, manufacturing, and marketing of
                  pipeline valves in a startup setting.
                </li>
                <li>
                  Dual role as the company's design and marketing coordinator.
                  Introduced a comprehensive marketing program to enhance client
                  relationships
                </li>
                <li>
                  Produced industry catalogues to support the company's offline
                  marketing strategy and attract local and international
                  customers.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="experience-year">
          <h3 onClick={() => toggleCollapse("2020")}>2020</h3>
          {!isCollapsed("2020") && (
            <div className="experience-details">
              <p>
                <strong>Java Full Stack Developer</strong>
              </p>
              <p>Adons Soft Tech, India </p>
              <p>Jan 2020 - Aug 2021</p>
              <ul>
                <li>
                  Led the execution of the Waterfall in project workflows,
                  ensuring structured phases and on-time milestone delivery.
                </li>
                <li>
                  ndustrialized high-performance backend solutions using Core
                  Java, Servlets, JSP, and JDBC, improving application
                  processing speed by 25%.
                </li>
                <li>
                  Designed responsive front-end interfaces with HTML, CSS,
                  Bootstrap, and JavaScript, enhancing user experience and
                  increasing website traffic by 20%.
                </li>
                <li>
                  Enhanced backend efficiency by optimizing JSP, JSTL, and
                  Spring Frameworks, reducing deployment time by 35% and
                  increasing system stability by 40%.
                </li>
                <li>
                  Optimized MongoDB for high-performance data management,
                  ensuring scalability and low-latency access.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Add more years as needed */}
      </div>
    </div>
  );
}

export default WorkExperience;
