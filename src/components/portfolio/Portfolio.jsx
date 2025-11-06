import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
// import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";
import React from "react";
import ScrollAnimation from '../animations/ScrollAnimation';

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Hare Krishna Website",
      img: IMG1,
      description:
        "A Hare Krishna Website is a website that provides information about the Hare Krishna movement.",
      technologies: "Html | CSS | Javascript | Next Js | Node Js | Express Js | MongoDB| Tailwind CSS",
      link: "https://harekrishnavidya.org/",
     // github: "https://github.com/sangmesh-18/hare-krishna-website",
    },
    {
      id: 2,
      title: "Real time chat webSite",
      img: IMG1,
      description:
        "A real time chat website is a huge interactive chat website where you can chat with your friends and family.",
      technologies: "Html | CSS | Javascript | React Js | Node Js | Express Js | MongoDB | Socket.io",
     // link: "https://chat-app-ewtb.onrender.com/",
      github: "https://github.com/sangmesh-18/projects/tree/main/chat-app",
    },
    {
      id: 3,
      title: "Doctor appointment website",
      img: IMG4,
      description:
        "A doctor appointment website is a website where you can book an appointment with a doctor.",
      technologies: "HTML | CSS | JavaScript | Express Js | MongoDB | Node Js ",
      // link: "https://doctor-appointment-website.onrender.com/",
      github: "https://github.com/sangmesh-18/projects/tree/main/Doctor%20Appointment",
    },
    {
      id: 4,
      title: "Job Portal Webs",
      img: IMG2,
      description: "A Job Portal Website for job seekers and employers.",
      technologies: "HTML | CSS | JavaScript | React Js | Node Js | Express Js | MongoDB",
     // link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/FS-Code-Task",
    },
  ];

  return (
    <section id="portfolio">
      <ScrollAnimation animation="fadeInDown" delay={0.1}>
        <h5>My Recent Work</h5>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" delay={0.2}>
        <h2>Portfolio</h2>
      </ScrollAnimation>

      <div className="container portfolio__container">
        {soloProjects.map((pro, index) => (
          <ScrollAnimation 
            key={pro.id} 
            animation="scaleIn" 
            delay={0.3 + (index * 0.1)}
            duration={0.6}
          >
            <article className="portfolio__item">
              {/* <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div> */}
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
               {
                pro.link && (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )
               }
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
