import React, {useState} from 'react'
import '../Css/Projects.css'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ProjectDetails from './ProjectDetails';

function Projects() {

  const projects = [
    {
      id: 1,
      title: 'E-Learning Platform',
      description: 'The E-learing platform is built with the Coursework Human Computer Interface. The project deals with the improvement of user Engagement by improving the UI/UX. The use of Multimedia Content for this Project is something which is very unique feature and could potentially increase the user engagement to complete the course.',
      techStack: 'React, NodeJS, HTML & CSS'
    },
    {
      id: 2,
      title: 'Health web application',
      description: "A website is created to enhance the user to get doctors feedback and also the doctors recommendations of the diseases. This application uses the principles of the Software Development, Designed and tested to perfection. Team lead and responsible for the app development.",
      techStack: 'Java, React, NodeJS, Postgres SQL'
    },
    {
      id: 3,
      title: 'Chatbot & Dynamic Assistance',
      description: 'Created a chatbot and chat application For the Amount bank using React and Spring Boot. The chatBot enables the user to get the information regarding the information about the Company.Improves the user engagement of the application more. Responsible for full stack development and API calls.',
      techStack: 'Advance Java, Angular, NodeJS, MySQL'
    },
    {
      id: 4,
      title: 'Mendix Application',
      description: 'Developed an eCommerce website for SEIMENS using Mendix.The platform use lowcode guidelines although adding the custamizable feature development using JAVA as tge backend Backend development with Java to add new features.',
      techStack: 'Mendix Low-code , Advance Java, Angular, NodeJS, MySQL'
    },
    {
      id: 5,
      title: 'eCommerce Website',
      description: 'Developed the e-commerce application using Advance Java. This application have been developed in Java, React, Angular, in many versions. The exit project as an intern wab able to develop this application.',
      techStack: 'Advance Java, MySQL, React, Angular, Jenkins, Postman, Git, JIRA, '
    },
    // Add more project objects as needed
  ];

  const [selectedProject,setSelectedProject]=useState(null);

  const handleProjectClick=(projectId)=>{
    console.log("Selected Project: ",projectId);
    setSelectedProject(projectId);
  }
  return (
    <div className='projects'>
    <h2>Projects</h2>
    <div className='project-container'>
      {/* Map over the projects array and render individual project cards */}
      {projects.map((project) => (
        <div className='project' key={project.id} onClick={() => handleProjectClick(project.id)}>
          {/* <Link onClick='/ProjectDetails'> */}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Stack</strong>: {project.techStack}</p>
        </div>
      ))}
    </div>
    {/* Render ProjectDetails component if a project is selected */}
    {/* {selectedProject && <ProjectDetails projectId={selectedProject} />} */}
  </div>
  )
}

export default Projects
