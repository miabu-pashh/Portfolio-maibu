// import React, { useState } from "react";
// import "../Css/WorkExperience.css";
// function WorkExperience() {
//   const [collapsedYears, setCollapsedYears] = useState({});

//   const toggleCollapse = (year) => {
//     setCollapsedYears((prevCollapsedYears) => ({
//       ...prevCollapsedYears,
//       [year]: !prevCollapsedYears[year],
//     }));
//   };

//   const isCollapsed = (year) => {
//     return collapsedYears[year];
//   };

//   return (
//     <div className="work-experience">
//       <h2>Experience</h2>
//       <div className="work-experience-content">
//         <div className="experience-year">
//           <h3 onClick={() => toggleCollapse("2024")}>2024</h3>

//           {!isCollapsed("2024") && (
//             <div className="experience-details">
//               <p>
//                 <strong>Java Full Stack Developer</strong>
//               </p>
//               <p>Metlife, USA</p>
//               <p>Aug 2024 - Present</p>
//               <ul>
//                 <li>
//                   Implemented Agile methodologies to streamline the software
//                   development lifecycle, fostering seamless collaboration and
//                   accelerating project delivery.
//                 </li>
//                 <li>
//                   Designed and developed high-performance web applications using
//                   Core Java, Spring Boot, and Microservices, enhancing
//                   scalability by 30% and minimizing downtime by 20%.
//                 </li>
//                 <li>
//                   Created dynamic, responsive front-end interfaces with
//                   React.js, Angular, HTML, CSS, and JavaScript, improving user
//                   experience and achieving 98% cross-browser compatibility.
//                 </li>
//                 <li>
//                   Architected and deployed cloud-based applications on AWS
//                   utilizing EC2, S3, VPC, CloudFront, and ELB, cutting
//                   infrastructure costs by 20%.
//                 </li>
//               </ul>
//               <hr></hr>

//               <p>
//                 <strong>Software Developer</strong>{" "}
//               </p>
//               <p>Botanical Heights Neighbourhood Association, USA</p>
//               <p>Feb 2024 - Apr 2024</p>
//               <p>St Louis, Missouri, United States · Remote</p>
//               <p>
//                 Developed the Website using the HCI principles and worked on the
//                 user engagement. This improved the overall usability of the
//                 website and also count of the visit improved by 80%
//                 <br />
//                 <br />
//                 <strong>Tech Stack:</strong> Html, Css, Javascript, React,
//                 Wordpress.
//               </p>

//               <hr />
//               <p>
//                 <strong>Software Developer</strong>{" "}
//               </p>
//               <p>Open Source-Saint Louis university</p>
//               <p>Aug 2024 - Dec 2024</p>
//               <p>St Louis, Missouri, United States</p>
//               <p>
//                 Developed the website for B works, a non-profit organization.
//                 The project includes teh development of a web application for
//                 the ease of the donation and its tracking. The Tech Stack:
//                 <br />
//                 <br />
//                 <strong>Tech Stack:</strong> React-Frontend, Nodejs-Backend,
//                 MongoDB-Database. Wordpress.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="experience-year">
//           <h3 onClick={() => toggleCollapse("2023")}>2023</h3>
//           {!isCollapsed("2023") && (
//             <div className="experience-details">
//               <p>
//                 <strong>Software Developer Intern</strong>{" "}
//               </p>
//               <p>Excelerate · Internship</p>
//               <p>Aug 2023 - Sep 2023</p>
//               <p>St Louis, Missouri, United States · Remote</p>
//               <p>
//                 In this internship, I have learned how to leverage human visual
//                 perception to communicate with data using different
//                 visualizations. I have created visuals that will answer key
//                 questions about sponsor? business. The internship have equipped
//                 me with tools to develop visual thinking and the power it can
//                 add to your skillset. I have developed skills in information
//                 literacy, communication, critical thinking, inquiry, and
//                 analysis. I have designed audience-appropriate data
//                 presentations that align with best practices for data
//                 visualization.In this internship, I have learned how to leverage
//                 human visual perception to communicate with data using different
//                 visualizations. I have created visuals that will answer key
//                 questions about sponsor? business. The internship have equipped
//                 me with tools to develop visual thinking and the power it can
//                 add to your skillset. I have developed skills in information
//                 literacy, communication, critical thinking, inquiry, and
//                 analysis. I have designed audience-appropriate data
//                 presentations that align with best practices for data
//                 visualization.
//               </p>
//               <br />
//               <p>
//                 {" "}
//                 <strong>Tech Stack:</strong> Html, Css, Javascript, React,
//                 Wordpress.
//               </p>

//               <hr />
//               <p>
//                 <strong>Software Developer</strong>{" "}
//               </p>
//               <p>It's Your Birthday, Inc. </p>
//               <p>Jul 2023 - Sep 2023</p>
//               <p>St Louis, Missouri, United States · Remote</p>
//               <p>
//                 Developed a React application for shelter details retrieval and
//                 admin functionality. In this Application, The team lets the user
//                 to add birthday details and type of Celebration for the under
//                 prevelegied kids.
//               </p>
//               <br />
//               <p>
//                 <strong>Tech Stack:</strong> Html, Css, Javascript, React,
//                 Wordpress.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="experience-year">
//           <h3 onClick={() => toggleCollapse("2022")}>2022</h3>
//           {!isCollapsed("2022") && (
//             <div className="experience-details">
//               <p>
//                 <strong>NAGARRO Software Limited</strong>{" "}
//               </p>
//               <p>
//                 <strong>Java Full Stack Developer</strong>
//               </p>
//               <p>Nov 2021 - Dec 2022</p>
//               <p>Gurgaon, India</p>
//               <p>
//                 <ul>
//                   <li>
//                     Led a team of 4 developers to design and develop{" "}
//                     <strong>eCommerce</strong>
//                     websites, chat applications, and product catalogues using
//                     Spring Boot and Mendix, enhancing user engagement by 30%.
//                   </li>
//                   <li>
//                     <strong>
//                       Banking, Financial Services, and Insurance (BFSI)
//                     </strong>
//                     , lead for this team and Developed and integrated REST APIs
//                     for seamless communication between front-end (React) and
//                     back-end (Java) for Realtime chat communication for banking
//                     domain website to reduce the confusion among new customers
//                     visiting the website, improving app efficiency by 25%.
//                   </li>
//                   <li>
//                     Collaborated with cross-functional teams to deliver an
//                     eCommerce solution for <strong>SIEMENS</strong> , utilizing
//                     Mendix for rapid prototyping and Java for backend feature
//                     enhancements, resulting in a 20% reduction in development
//                     time.
//                   </li>
//                 </ul>
//                 <strong>Tech Stack:</strong> Java, Advance Java, Javascript,
//                 React, Angular, MySQL, Jenkins, Postman, Git, AWS, Mendix
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="experience-year">
//           <h3 onClick={() => toggleCollapse("2021")}>2021</h3>
//           {!isCollapsed("2021") && (
//             <div className="experience-details">
//               <hr />

//               <p>
//                 <strong>Software Engineer Intern, Nagarro</strong>
//               </p>
//               <p>Aug 2021 - Nov 2021</p>
//               <p>Haryana, India</p>
//               <ul>
//                 <li>
//                   Received comprehensive training in Java technologies, with a
//                   focus on Spring Boot for backend APIs, and gained proficiency
//                   in front-end tools such as React, Node.js, and Angular.
//                 </li>
//                 <li>
//                   Executed multiple projects during training, including CRUD
//                   applications and an exit application for a product catalogue
//                   shopping website.
//                 </li>
//               </ul>

//               <hr />
//               <p>
//                 <strong>Startup Company</strong>{" "}
//               </p>
//               <p> Nithya Industries</p>
//               <p>Apr 2021 - Dec 2022</p>
//               <p>Hyderabad, India</p>
//               <ul>
//                 <li>
//                   Collaborated on the design, manufacturing, and marketing of
//                   pipeline valves in a startup setting.
//                 </li>
//                 <li>
//                   Dual role as the company's design and marketing coordinator.
//                   Introduced a comprehensive marketing program to enhance client
//                   relationships
//                 </li>
//                 <li>
//                   Produced industry catalogues to support the company's offline
//                   marketing strategy and attract local and international
//                   customers.
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//         <div className="experience-year">
//           <h3 onClick={() => toggleCollapse("2020")}>2020</h3>
//           {!isCollapsed("2020") && (
//             <div className="experience-details">
//               <p>
//                 <strong>Java Full Stack Developer</strong>
//               </p>
//               <p>Adons Soft Tech, India </p>
//               <p>Jan 2020 - Aug 2021</p>
//               <ul>
//                 <li>
//                   Led the execution of the Waterfall in project workflows,
//                   ensuring structured phases and on-time milestone delivery.
//                 </li>
//                 <li>
//                   ndustrialized high-performance backend solutions using Core
//                   Java, Servlets, JSP, and JDBC, improving application
//                   processing speed by 25%.
//                 </li>
//                 <li>
//                   Designed responsive front-end interfaces with HTML, CSS,
//                   Bootstrap, and JavaScript, enhancing user experience and
//                   increasing website traffic by 20%.
//                 </li>
//                 <li>
//                   Enhanced backend efficiency by optimizing JSP, JSTL, and
//                   Spring Frameworks, reducing deployment time by 35% and
//                   increasing system stability by 40%.
//                 </li>
//                 <li>
//                   Optimized MongoDB for high-performance data management,
//                   ensuring scalability and low-latency access.
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Add more years as needed */}
//       </div>
//     </div>
//   );
// }

// export default WorkExperience;
import React from "react";
import "../Css/WorkExperience.css";
import { FaApple, FaUniversity, FaBuilding } from "react-icons/fa";

function WorkExperience() {
  return (
    <div className="experience-section">
      <p className="section-subtitle">My personal & professional development</p>
      <h2 className="section-title">Work</h2>

      <div className="experience-cards">
        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://cdn.prod.website-files.com/645468eba93097253a052ac0/65370b2a3e0a4251b599ca48_Metlife.png"
              alt="Placeholder"
              className="company-logo"
            />
          </div>
          <h3>MetLife</h3>
          <h3>Java Full Stack Developer | Aug 2024 – Present</h3>
          {/* <p className="duration">Aug 2024 – Present</p> */}
          <p className="location">St. Louis, Missouri · Remote</p>

          <ul>
            <li>
              Implemented Agile methodologies to streamline SDLC and accelerate
              project delivery.
            </li>
            <li>
              Developed high-performance web apps using Java, Spring Boot, and
              Microservices.
            </li>
            <li>
              Created responsive UIs with React.js, Angular, HTML/CSS, improving
              UX and compatibility.
            </li>
            <li>
              Architected AWS cloud solutions reducing infrastructure cost by
              20%.
            </li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfkMUTCaQ28XhwO4UUi9yOhii4PbuogfDMg&s"
              alt="Placeholder"
              className="company-logo"
            />
          </div>
          <h3>Botanical Heights Neighborhood Association</h3>
          <h3>Software Developer | Feb 2024 – Apr 2024</h3>
          <p className="location">St. Louis, Missouri · Remote</p>
          <p>
            Built the website using HCI principles to boost usability and
            increase visits by 80%.
          </p>
          <p>
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, WordPress
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQGnYHXJLjHPug/company-logo_100_100/company-logo_100_100/0/1729179370494/open_source_with_slu_logo?e=1750896000&v=beta&t=sS0x_PjOoM00QIlPvHrYailAaGPqwGMglAqvRDIWEp0"
              alt="Metlife"
              className="company-logo"
            />
            {/* <FaUniversity size={48} /> */}
          </div>
          <h3>SLU Open Source</h3>
          <h3> Software Developer | Aug 2024 – Dec 2024 </h3>
          <p className="location">St. Louis, Missouri · Remote</p>

          <p>
            Developed a donation tracking app for B Works non-profit using full
            MERN stack & WordPress.
          </p>
          <p>
            <strong>Tech Stack:</strong> React, Node.js, MongoDB, WordPress
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQFsKCE82AoD_Q/company-logo_100_100/company-logo_100_100/0/1689287580187?e=1750896000&v=beta&t=svXqzjdklL-YOrn0t1wui0gTONllkiCkcx52oRvI12E"
              alt="Metlife"
              className="company-logo"
            />
            {/* <FaUniversity size={48} /> */}
          </div>
          <h3>Excelerate</h3>
          <h3>Software Developer Intern | Aug 2023 – Sep 2023</h3>
          <p className="location">St. Louis, Missouri · Remote</p>
          <p>
            Created visual data stories and developed visual thinking skills for
            effective sponsor communication.
          </p>
          <p>
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, WordPress
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQED3JcUbwoevg/company-logo_100_100/company-logo_100_100/0/1641352875013/it_s_your_birthday_inc_logo?e=1750896000&v=beta&t=3H45PXMahujzxKLGp1cDBHY14znDcp9R5kJ6kbDbfj4"
              alt="Metlife"
              className="company-logo"
            />
            {/* <FaUniversity size={48} /> */}
          </div>
          <h3>It's Your Birthday Inc.</h3>
          <h3>Software Developer | Jul 2023 – Sep 2023</h3>
          <p className="location">St. Louis, Missouri · Remote</p>
          <p>
            Developed a React app to manage shelter birthday celebrations,
            enabling admin functionality for organizers.
          </p>
          <p>
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, WordPress
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQHu-RIXbSi0fw/company-logo_100_100/company-logo_100_100/0/1688362226392/nagarro_logo?e=1750896000&v=beta&t=TdxoWrHv8SGZd_Pdp5qiJI1Hqgtyx5ETIQzXdMeMt5s"
              alt="Nagarro Logo"
              className="company-logo"
            />
          </div>
          <h3>Nagarro </h3>
          <h3>Java Full Stack Developer | Nov 2021 – Dec 2022</h3>

          <p className="location">Gurgaon, India</p>
          <ul>
            <li>
              Led a team to develop eCommerce solutions using Spring Boot and
              Mendix, improving user engagement by 30%.
            </li>
            <li>
              Built BFSI real-time chat apps for banking clients, integrating
              Java REST APIs and React front-end.
            </li>
            <li>
              Developed rapid prototypes for Siemens' eCommerce tools, cutting
              development time by 20%.
            </li>
          </ul>
          <p>
            <strong>Tech Stack:</strong> Java, JavaScript, React, Angular,
            MySQL, Jenkins, Postman, Git, AWS, Mendix
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQHu-RIXbSi0fw/company-logo_100_100/company-logo_100_100/0/1688362226392/nagarro_logo?e=1750896000&v=beta&t=TdxoWrHv8SGZd_Pdp5qiJI1Hqgtyx5ETIQzXdMeMt5s"
              alt="Nagarro Logo"
              className="company-logo"
            />
          </div>
          <h3>Nagarro</h3>
          <h3>Software Engineer Intern | Aug 2021 – Nov 2021</h3>

          <p className="location">Haryana, India</p>
          <ul>
            <li>
              Trained in Spring Boot and front-end tools like React and Angular.
            </li>
            <li>
              Built CRUD apps and an exit flow for shopping cart websites.
            </li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQG5Taar917i3w/company-logo_100_100/company-logo_100_100/0/1661858562785/nithya_industries_logo?e=1750896000&v=beta&t=eF6mEl3wuPX4XPDMfOln-ysUahueDvhAZ4yqjrw0DZM"
              alt="Nagarro Logo"
              className="company-logo"
            />
          </div>
          <h3>Nithya Industries</h3>
          <h3> Co-Founder | Apr 2021 – Dec 2022</h3>

          <p className="location">Hyderabad, India</p>
          <ul>
            <li>
              Designed and marketed pipeline valves as design and marketing
              coordinator.
            </li>
            <li>
              Developed catalogs and drove offline marketing strategies to grow
              client base.
            </li>
          </ul>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQGsHV9Tl6V6CA/company-logo_100_100/company-logo_100_100/0/1682873524312?e=1750896000&v=beta&t=pkP99-IwvE85hebQGO43msofJ5sMyvunzo4JJc-0G9Y"
              alt="Nagarro Logo"
              className="company-logo"
            />
          </div>
          <h3>Adons Soft Tech</h3>
          <h3>Java Full Stac Developer |Jan 2020 – Aug 2021</h3>
          <p className="location">Hyderabad, India</p>

          <ul>
            <li>
              Led Waterfall model implementations with phase-wise delivery
              milestones.
            </li>
            <li>
              Built Java backends with JSP/Servlets and optimized Spring
              performance.
            </li>
            <li>Designed responsive UIs to increase user traffic by 20%.</li>
            <li>Managed data in MongoDB for high-performance querying.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
