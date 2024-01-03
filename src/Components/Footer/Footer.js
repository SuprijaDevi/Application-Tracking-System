import React from "react";
import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer id="contact" className="F-container">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        <li className="link">
        <SiGmail className="Gmail-icon" style={{ fontSize: '24px' }}/>
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className="link">
          <FaLinkedin className="Linkedin-icon" style={{ fontSize: '24px' }}/>
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className="link">
            <FaGithub className="Github-icon" style={{fontSize: '24px'}}/>
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
        <div className="bottomBlur" />
      </ul>
    </footer>
  );
};
export default Footer;