import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import ScrollAnimation from '../animations/ScrollAnimation';
import './experience.css';

const Experience = () => {
  const skills = [
    'HTML / CSS',
    'JavaScript',
    'REST API,GraphQL',
    'Bootstrap, Tailwind',
    'React ,  Next Js',
    'Typescript',
    'MongoDB,PostgreSQL',
    'Node.js, Express.js',
    'Responsive Design',
    'Redux, Redux-toolkit, Context API'
  ];

  return (
    <section id="experience">
      <ScrollAnimation animation="fadeInDown" delay={0.1}>
        <h5>The Skills I Have</h5>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.2}>
        <h2>Skills</h2>
      </ScrollAnimation>
      <div className="container experience__container">
        <ScrollAnimation animation="scaleIn" delay={0.3}>
          <div className="experience__frontend">
            <h3>Full-Stack Development</h3>
            <div className="experience__content">
              {skills.map((skill, index) => (
                <ScrollAnimation 
                  key={index} 
                  animation="fadeInLeft" 
                  delay={0.4 + (index * 0.05)}
                  duration={0.5}
                >
                  <article className="experience__details">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>{skill}</h4>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Experience