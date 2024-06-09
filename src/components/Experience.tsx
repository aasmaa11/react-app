import "./Experience.css";
import { motion, Variants } from "framer-motion";

import { SiOpentelemetry } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { SiFluentbit } from "react-icons/si";
import { SiJaeger } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

function Table({ data }: { data: string[][] }) {
  return (
    <div className="gridx">
      {data.map((row) => (
        <Row data={row} />
      ))}
    </div>
  );
}

function Row({ data }: { data: string[] }) {
  return (
    <div className="row">
      {data.map((cell) => (
        <Cell data={cell} />
      ))}
    </div>
  );
}

function Cell({ data }: { data: string }) {
  return <div className="col">{data}</div>;
}

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
// https://stackoverflow.com/questions/48418116/how-to-dynamically-populate-bootstrap-grids-using-reactjs
// Html and css for text on hover from: https://stackoverflow.com/questions/65796587/display-text-on-hover
// text reveal code from: https://www.youtube.com/watch?v=vAp3xL1AY4I&ab_channel=VladyslavDihtiarenko
function Experience() {
  const title = "Experience && Education";

  const titleChars = title.split("");

  const coursework = [
    ["Rest API", "Algorithms & DS", "Software Validation"],
    ["OOP", "Model-Based Programming", "Agile Development"],
    ["Electronics", "Robotics", "Communication Systems & Networks"],
  ];

  let techUsed = [
    { icon: <SiOpentelemetry />, name: "OpenTelemetry" },
    { icon: <SiGrafana />, name: "Grafana" },
    { icon: <SiFluentbit />, name: "FluentBit" },
    { icon: <SiJaeger />, name: "Jaeger" },
    { icon: <BiLogoSpringBoot />, name: "SpringBoot" },
    { icon: <FaJava />, name: "Java" },
  ];

  return (
    <div className="experience" id="experienceSection">
      <div className="transparent">E</div>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h4>Technology Summer Analyst</h4>
            <h6>Morgan Stanley - Summer Internship 2022</h6>
            <p>
              • Application tracing with Open Telemetry and Jaeger and logging
              with Loki and Fluent Bit <br />
              • Using the Open Telemetry SDK, configured the Jaeger exporter,
              Otel sampler and global tracer and added spans to a Spring Boot
              app to observe them on the Jaeger UI <br />• Configured Fluent Bit
              to send the application’s log file to Loki and observed logs in
              Grafana
            </p>
            <div className="container">
              {techUsed.map((techItem, i) => (
                <div className="currentTech">
                  {techItem.icon}
                  <span className="techtext">{techItem.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <h4>B Eng Computer</h4>
            <h6>McGill University - February 2024</h6>
            <h5>Relevant coursework</h5>
            <div className="coursework">
              <Table data={coursework} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
