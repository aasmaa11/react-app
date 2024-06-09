import "./Contact.css";
import { Link, NavLink } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";
import { motion, Variants } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

// text reveal code from: https://www.youtube.com/watch?v=vAp3xL1AY4I&ab_channel=VladyslavDihtiarenko

function Contact() {
  const title = "Contact";

  const titleChars = title.split("");

  return (
    <div className="contact" id="contactSection">
      <div className="transparent">C</div>
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
      <div className="linkContainer">
        <Link
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:asma.gandour@mail.mcgill.ca";
            e.preventDefault();
          }}
        >
          Send a message
        </Link>
      </div>
      <div className="line"></div>
      <div className="copyright">
        <p>Designed and built by Asma Gandour</p>
      </div>
    </div>
  );
}

export default Contact;
