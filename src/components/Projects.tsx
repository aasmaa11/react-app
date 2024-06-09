import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./Project.css";
import { useParallax } from "react-scroll-parallax";
import { motion, Variants } from "framer-motion";

import { FaCode } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

import { Link, NavLink } from "react-router-dom";
import { SiGradle } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoVue } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiJsonwebtokens } from "react-icons/si";

import BugTrackerImg from "../assets/project/bugtracker.png";
import CapstoneImg from "../assets/project/capstone.png";
import PortfolioImg from "../assets/project/portfolio.png";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

// Html and css for text on hover: https://stackoverflow.com/questions/65796587/display-text-on-hover
// text reveal code from: https://www.youtube.com/watch?v=vAp3xL1AY4I&ab_channel=VladyslavDihtiarenko

function Projects() {
  const title = "Projects";

  const titleChars = title.split("");
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  let projects = [
    {
      divName: "projectImg",
      title: "Bug Tracker",
      subtitle: "Personal Project - December 2023 & May 2024",
      description: [
        <p>
          <b>• FUNCTIONALITIES:</b> Built an online bug tracker where admin and
          project managers can publish issues of a given project and assign them
          to developers. Developers can view and modify tickets assigned to them
          and create new issues. Other functionalities: viewing a ticket’s
          history, commenting and modification of personal information.
        </p>,
        <p>
          <b>• BACKEND:</b> Use of Gradle as the build tool and use of Spring
          Boot’s CrudRepository to perform operations in the PostgreSQL
          database. Included a model layer with Lombok annotations, a service
          layer and a controller layer.
        </p>,
        <p>
          <b>• SECURITY:</b> Configured authentication with Spring Security and
          authorization with JWT, which gets refreshed with a refresh token once
          expired. Moreover, the controller layer converts the returned object
          to a DTO object to prevent the user from having access to database
          objects
        </p>,
        <p>
          <b>• FRONTEND:</b> Use of the framework Vue.js for the web interface.
          The frontend performs API requests with Axios and uses Axios’
          interceptors to add authorization headers and to handle the expiration
          of security tokens
        </p>,
        <p>
          <b>• TESTING:</b> JUnit tests for the persistence layer and service
          endpoints (Mockito used as the mocking framework
        </p>,
        <p>
          <b>• DEPLOYMENT:</b> Deployed the backend on Heroku after validating
          the build with GitHub Actions and deployed the frontend on GitHub
          Pages.
        </p>,
      ],

      tech: [
        { icon: <FaJava />, name: "Java" },
        { icon: <BiLogoSpringBoot />, name: "Spring Boot" },
        { icon: <SiJsonwebtokens />, name: "JWT" },
        { icon: <SiGradle />, name: "Gradle" },
        { icon: <BiLogoPostgresql />, name: "Postgresql" },
        { icon: <IoLogoVue />, name: "Vue" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <RiJavascriptFill />, name: "Javascript" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
      ],
      img: BugTrackerImg,
      isLive: true,
      liveLink: "https://aasmaa11.github.io/personal-bugtracker/#/login",
      codeLink: "https://github.com/aasmaa11/bugtracker",
    },
    {
      divName: "cockpit",
      title: "Contribution to Microscope-Cockpit",
      subtitle: "Capstone Design Project - January 2023 to December 2023",
      description: [
        "• In a team of three, extended the Python package Microscope to include handlers for the ASI stage",
        "• Implemented functions in the ASIStage class to move the stage in the X, Y, Z direction by sending string commands to the serial connection",
        "• Configured the ASIStage class to run as a device server and configured Cockpit to run with a depot file",
        "• Provided a detailed documentation of the stage and camera handler in the GitHub Wiki",
      ],

      tech: [{ icon: <FaPython />, name: "Python" }],
      img: CapstoneImg,
      isLive: false,
      liveLink: "",
      codeLink: "https://github.com/aasmaa11/microscope",
    },
    {
      divName: "projectImg",
      title: "Online Portfolio",
      subtitle: "Personal Project - May 2024",
      description: [
        "• Built an online portfolio with React Typescript to showcase my experience, my education and my projects.",
        "• Made it responsive with Bootstrap's grid system and CSS's media queries.",
      ],

      tech: [
        { icon: <FaReact />, name: "React" },
        { icon: <BiLogoTypescript />, name: "Typescript" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
      ],
      img: PortfolioImg,
      isLive: true,
      liveLink: "/",
      codeLink: "https://github.com/aasmaa11/react-app",
    },
  ];
  return (
    <div className="project" id="projectSection">
      <div className="transparent">P</div>
      <motion.h2
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.05 }}
      >
        {titleChars.map((char) => (
          <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
      <div className="projects">
        <div className="carousel-container">
          <Carousel
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
            className="carou"
          >
            {projects.map((project, index) => (
              <Carousel.Item key={index} className="carItem">
                <div className="insideItem">
                  <div className="col">
                    <h4>{project.title}</h4>
                    <h6>{project.subtitle}</h6>
                    <div className="bulletPoints">
                      {project.description.map((bullet, j) => (
                        <p>{bullet}</p>
                      ))}
                    </div>
                    <div className="container">
                      {project.tech.map((techItem, i) => (
                        <div className="currentTech">
                          {techItem.icon}
                          <span className="techtext">{techItem.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="actionButton">
                      {project.isLive ? (
                        <Link to={project.liveLink} target="_blank">
                          <TfiWorld />
                          LIVE
                        </Link>
                      ) : null}

                      <Link to={project.codeLink} target="_blank">
                        <FaCode />
                        CODE
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className={project.divName}>
                      <img src={project.img}></img>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
