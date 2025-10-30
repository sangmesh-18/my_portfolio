import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
// import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";
import React from "react";

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
      id: 2,
      title: "Doctor appointment website",
      img: IMG4,
      description:
        "A doctor appointment website is a website where you can book an appointment with a doctor.",
      technologies: "HTML | CSS | JavaScript | Express Js | MongoDB | Node Js ",
      // link: "https://doctor-appointment-website.onrender.com/",
      github: "https://github.com/sangmesh-18/projects/tree/main/Doctor%20Appointment",
    },
    {
      id: 3,
      title: "Job Portal Webs",
      img: IMG2,
      description: "A Job Portal Website for job seekers and employers.",
      technologies: "HTML | CSS | JavaScript | React Js | Node Js | Express Js | MongoDB",
     // link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/FS-Code-Task",
    },
    // {
    //   id: 4,
    //   title: "Startup Landing Page",
    //   img: IMG3,
    //   description:
    //     "A dedicated, standalone web page built for specific campaigns and target audiences.",
    //   technologies: "Html | CSS | JavaScript | Next Js",
    //   link: "https://alpha-agency-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    // },
    // {
    //   id: 5,
    //   title: "Jokes Project with Typescript",
    //   img: IMG5,
    //   description:
    //     "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
    //   technologies: "Html | Styled-components | Typescript",
    //   link: "https://jokes-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Joke-App",
    // },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
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
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
