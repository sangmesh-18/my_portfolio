import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/my_Pic.jpg'
import ScrollAnimation from '../animations/ScrollAnimation';

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <ScrollAnimation animation="fadeInDown" delay={0.1}>
        <h5>Get to know</h5>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.2}>
        <h2>About Me</h2>
      </ScrollAnimation>
      <div className="container about__container">
        <ScrollAnimation animation="fadeInLeft" delay={0.3}>
          <div className="about__me">
            <div className="about__me-image">
              <img src={img} alt="Rasif Taghizade" />
            </div>
          </div>
        </ScrollAnimation>
        <div className="about__content">
          <ScrollAnimation animation="fadeInRight" delay={0.4}>
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>5+ Months</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={0.5}>
            <p>
            Full-Stack MERN Developer with 5+ months of experience building dynamic web apps using MongoDB, Express.js, React.js, and Node.js. Skilled in developing responsive UIs with React/Next.js, creating RESTful APIs, implementing secure authentication (JWT/OAuth), and deploying scalable applications on Render and Vercel.          </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={0.6}>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Intro;
