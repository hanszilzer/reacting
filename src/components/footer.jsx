import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 


const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <ul className="social-links">
        <li><a href="mailto:example@example.com"><i className="far fa-envelope"></i> hanszilzer@gmail.com</a></li>
        <li><a href="tel:+1234567890"><i className="fas fa-phone"></i> +1 (954) 655-9223</a></li>
        <li><a href="https://github.com/hanszilzer" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/hans-zilzer-408307a8/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
