import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-title">Skills</div>
      <p className="skill-title">
        <strong>Languages</strong>
      </p>
      <div className="skills-list">
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="logos:python"
            data-inline="false"
          ></span>{" "}
          <div className="skill-badge-name">Python</div>
        </div>
        <div className="skill-badge">
          <i style={{ color: "#EFD81D" }} className="fab fa-js"></i>
          <div className="skill-badge-name">JavaScript</div>
        </div>
        <div className="skill-badge">
          <i style={{ color: "#D74A21" }} className="fab fa-html5"></i>
          <div className="skill-badge-name">HTML 5</div>
        </div>
        <div className="skill-badge">
          <i style={{ color: "#254BDD" }} className="fab fa-css3-alt"></i>
          <div className="skill-badge-name">CSS 3</div>
        </div>
        <div className="skill-badge">
          <i style={{ color: "#5968BA" }} className="fab fa-cuttlefish"></i>
          <div className="skill-badge-name">C</div>
        </div>
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="file-icons:c"
            data-inline="false"
            style={{ color: "#6295CB" }}
          ></span>
          <div className="skill-badge-name">C++</div>
        </div>
      </div>
      <p className="mt-1 skill-title">
        <strong>Full-stack Development</strong>
      </p>
      <div className="skills-list">
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="logos:nodejs-icon"
            data-inline="false"
          ></span>
          <div className="skill-badge-name">Node.js</div>
        </div>
        <div className="skill-badge express">
          <span
            className="iconify"
            data-icon="logos:express"
            data-inline="false"
            style={{
              fontSize: "1.5rem",
              paddingTop: "2rem",
            }}
          ></span>
          <div className="skill-badge-name">Express.js</div>
        </div>
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="logos:react"
            data-inline="false"
          ></span>
          <div className="skill-badge-name">React.js</div>
        </div>
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="logos:redux"
            data-inline="false"
          ></span>
          <div className="skill-badge-name">Redux.js</div>
        </div>
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="cib:mongodb"
            data-inline="false"
            style={{ fontSize: "3rem", color: "#78C47C" }}
          ></span>{" "}
          <div className="skill-badge-name">MongoDB</div>
        </div>
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="cib:socket-io"
            data-inline="false"
          ></span>{" "}
          <div className="skill-badge-name">Socket.io</div>
        </div>
      </div>

      <p className="mt-1 skill-title">
        <strong>Others</strong>
      </p>
      <div className="skills-list">
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="logos:git-icon"
            data-inline="false"
          ></span>
          <div className="skill-badge-name">Git</div>
        </div>
        <div className="skill-badge">
          <span
            className="iconify"
            data-icon="flat-color-icons:linux"
            data-inline="false"
          ></span>
          <div className="skill-badge-name">Linux</div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
