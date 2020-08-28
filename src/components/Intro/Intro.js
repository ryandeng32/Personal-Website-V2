import React, { useState } from "react";
import "./Intro.css";
import profile_img from "../../img/profile_basketball.JPG";

const Intro = ({ handleSetPage, num_projects }) => {
  let reset = {
    project_on: false,
    work_on: false,
    skill_on: false,
    about_on: false,
  };
  const [on, setOn] = useState({ ...reset, about_on: true });
  const { project_on, work_on, skill_on, about_on } = on;
  const height_style = { height: window.screen.width * 0.3 };
  return (
    <section style={{ height: window.screen.width * 0.9 }} className="intro">
      <img className="profile_img" src={profile_img} alt="" />
      <div className="hr-line"></div>
      <div className="vt-line"></div>
      <div
        style={height_style}
        className={
          about_on ? "intro-btn btn-about about_on on" : "intro-btn btn-about"
        }
        name="About"
        onClick={(e) => {
          handleSetPage(e);
          setOn({ reset, about_on: true });
        }}
      >
        <i className="fas fa-user" name="About"></i>
        <div className="intro-text" name="About">
          About Me
        </div>
      </div>
      <div
        style={height_style}
        className={
          project_on
            ? "intro-btn btn-project project_on on"
            : "intro-btn btn-project"
        }
        name="Projects"
        onClick={(e) => {
          handleSetPage(e);
          setOn({ reset, project_on: true });
        }}
      >
        <i className="fas fa-project-diagram" name="Projects"></i>
        <div className="intro-text" name="Projects">
          {`${num_projects} Projects`}
        </div>
      </div>

      <div
        style={height_style}
        className={
          skill_on ? "intro-btn btn-skill skill_on on" : "intro-btn btn-skill"
        }
        name="Skills"
        onClick={(e) => {
          handleSetPage(e);
          setOn({ reset, skill_on: true });
        }}
      >
        <i className="fas fa-tools" name="Skills"></i>
        <div className="intro-text" name="Skills">
          Skills
        </div>
      </div>

      <div
        style={height_style}
        className={
          work_on ? "intro-btn btn-work work_on on" : "intro-btn btn-work"
        }
        name="Work"
        onClick={(e) => {
          handleSetPage(e);
          setOn({ reset, work_on: true });
        }}
      >
        <i className="fas fa-briefcase" name="Work"></i>
        <div className="intro-text" name="Work">
          Work
        </div>
      </div>
    </section>
  );
};
export default Intro;
