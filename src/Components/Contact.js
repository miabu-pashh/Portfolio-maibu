import React from "react";
import "../Css/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-section">
      <p className="section-subtitle">Get In Touch</p>
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-boxes">
          <div className="contact-box">
            <FaEnvelope size={28} className="contact-icon" />
            <p>
              <strong>Email</strong>
            </p>
            <p>mahaboobpashamohammad1@gmail.com</p>
            <a href="mailto:mahaboobpashamohammad1@gmail.com">Send a message</a>
          </div>

          <div className="contact-box">
            <FaPhoneAlt size={28} className="contact-icon" />
            <p>
              <strong>Phone</strong>
            </p>
            <p>(+1) 314-305-6056</p>
            <a href="tel:+13143056056">Text</a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send message!</button>
        </form>
      </div>

      <div className="contact-social">
        <a
          href="https://www.linkedin.com/in/mohammad-mahaboob-pasha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/miabu-pashh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
