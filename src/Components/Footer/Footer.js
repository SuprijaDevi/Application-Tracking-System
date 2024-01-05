import React from "react";
import './Footer.css';
import { FaHome } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { PiAddressBookFill } from "react-icons/pi";
import { MdContactPage } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer id="contact" className="F-container">
      <div className="text">
        <h2>WorkLoom</h2>
        <p>Feel free to reach out!</p>
        <ul className="Contact-links">
        <FaLinkedin style={{ fontSize: '24px' }}/>
        <SiGmail style={{ fontSize: '24px' }}/>
        <FaGithub style={{ fontSize: '24px' }}/>
        <FaGooglePlus style={{ fontSize: '24px' }}/>
        </ul>
      </div>
      <ul className="links">
        <li className="link">
        <FaHome  className="Gmail-icon" style={{ fontSize: '24px' }}/>
          <a href="">Home</a>
        </li>
        <li className="link">
          <FaNewspaper className="Linkedin-icon" style={{ fontSize: '24px' }}/>
          <a href="">News</a>
        </li>
        <li className="link">
            <PiAddressBookFill className="Github-icon" style={{fontSize: '24px'}}/>
          <a href="">About</a>
        </li>
        <li className="link">
            <MdContactPage className="Github-icon" style={{fontSize: '24px'}}/>
          <a href="">Contact Us</a>
        </li>
        <div className="bottomBlur" />
      </ul>
    </footer>
  );
};
export default Footer;

