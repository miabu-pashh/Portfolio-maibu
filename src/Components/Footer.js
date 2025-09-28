import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons from react-icons library
import "../Css/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="right-div">
        <div className="right-div-content">
          <p>
            <strong>Contact Mahaboob Pasha Mohammad</strong>
          </p>

          <a href="mailto:mahaboobpashamohammad1@gmail.com">
            <FaEnvelope /> mahaboobpashamohammad1@gmail.com
          </a>
          <a href="tel:+13143056056">
            <FaPhone /> +1(314)-305-6056
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-mahaboob-pasha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/miabu-pashh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="left-div">
        <div className="left-div-content">
          <p>
            <strong>Address</strong>
          </p>
          <p>117 Holleman Dr W Apt 2201 C</p>
          <p> College Station, TX 77840</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
