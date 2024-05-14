import React from "react";
import "../Css/Contact.css";

function Contact() {
  return (
    <div className="contact-me">
      {/* <h2>Contact Me</h2> */}
      {/* <div className="resume"> */}

      {/* </div> */}
     
        {/* <p>Phone: +1(314)-305-6056</p> */}
        {/* <p>Email: mahaboobpasha.mohammad@slu.edu</p> */}
         {/* <p>LinkedIn: [Your LinkedIn profile link]</p> */}
         {/* <p>Github: [Your GitHub profile link]</p> */}

        <div className="contact">
        <a href="mailto:mahaboobpasha.mohammad@slu.edu" class="fa fa-google"></a>

       
        <a href="https://www.linkedin.com/in/mohammad-mahaboob-pasha/" class="fa fa-linkedin"></a>

        <a href="https://github.com/miabu-pashh" class="fa fa-github"></a>
      </div>

    </div>
  );
}

export default Contact;
