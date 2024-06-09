import "./About.css";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Mtl from "../assets/about/mtl.svg";
import Starfield from "react-starfield";
import { useParallax } from "react-scroll-parallax";

function About() {
  return (
    <div className="about" id="aboutSection">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      <div className="partOne">
        <div className="titleAbout">Hello my name is</div>

        <h1>Asma Gandour</h1>
        <h3>B Eng Computer • Full-Stack Developer</h3>
        <div className="montreal">
          <p>
            Based in Greater Montreal <img src={Mtl}></img>
          </p>
        </div>
      </div>
      <div className="partTwo">
        <div className="contactIcon">
          <div className="element">
            <a href="https://github.com/aasmaa11" target="_blank">
              <FaSquareGithub className="highlight" />
            </a>
          </div>
          <div className="element">
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:asma.gandour@mail.mcgill.ca";
                e.preventDefault();
              }}
            >
              <IoIosMail className="highlight" />
            </Link>
          </div>
          <div className="element2">
            <Link to="/CV_Asma_Gandour.pdf" target="_blank" download>
              DOWNLOAD CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
