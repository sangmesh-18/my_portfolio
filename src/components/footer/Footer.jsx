import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import ScrollAnimation from '../animations/ScrollAnimation';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <ScrollAnimation animation="fadeInUp" delay={0.1}>
        <a href="#home" className="footer__logo">Sangmeshwar Garibe</a>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.2}>
        <ul className="permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#testimonials">Testimonials</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.3}>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/sangmeshwarg/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
          <a href="https://github.com/sangmesh-18" target="_blank" rel="noreferrer" ><FaGithub /></a>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeIn" delay={0.4}>
        <div className="footer__copyright">
          <small>&copy; Sangmeshwar 2025. All rights reserved.</small>
        </div>
      </ScrollAnimation>
    </footer>
  )
}

export default Footer