import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons from react-icons library
import '../Css/Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="right-div">
        <p><strong>Contact Mahaboob</strong></p>
        <a href="mailto:mahaboobpasha.mohammad@slu.edu"><FaEnvelope /> mahaboobpasha.mohammad@slu.edu</a>
        <a href="tel:+13143056056"><FaPhone /> +1(314)-305-6056</a>
        <a href="https://www.linkedin.com/in/mohammad-mahaboob-pasha/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/miabu-pashh" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
      </div>

      <div className='left-div'>
        <p><strong>Address</strong></p>
        <p>3165, Olive Street,Apt 1405,</p>
        <p> Saint Louis, MO, 63108</p>
      </div>
      <div className='bottom-div'>

      </div>
    </footer>
  );
}

export default Footer;
