import React from "react";
import Logo from "../Assets/Logo.svg";
import { SiLinkedin } from "react-icons/si";
import { BsHouseDoor } from "react-icons/bs";
import { FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/peterrenusc/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://github.com/Yuxinren" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          {/* Add personal website link */}
          <a href="https://yuxinren.github.io/yr_site/" target="_blank" rel="noopener noreferrer">
            <BsHouseDoor /> {/* Assuming BsHouseDoor is the icon for a home/personal website */}
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Email</span>
        </div>
        <div className="footer-section-columns">
          <span>yuxinren@usc.edu</span>
        </div>
        <div className="footer-section-columns">
          <span>Connect Me On Linkedin!</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;