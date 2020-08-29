import React, { Fragment, useState, useEffect } from "react";
import "./Intro.css";
import profile_img from "../../img/profile_basketball.JPG";

const Intro = ({ handleAbout, handleSetPage, num_projects }) => {
  let reset = {
    project_on: false,
    work_on: false,
    skill_on: false,
    about_on: false,
  };
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [on, setOn] = useState({ ...reset, about_on: true });

  const { project_on, work_on, skill_on, about_on } = on;
  const { height, width } = dimensions;

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const widthBorder = width > 500;
  if (widthBorder) {
    handleAbout(false);
  } else {
    handleAbout(true);
  }
  const num = 115 + width * 0.07;
  const screen_height = 500 + width * 0.08;
  const height_style = widthBorder
    ? { width: `${num}px`, height: `${num}px` }
    : { width: width * 0.3, height: width * 0.3 };

  const hr_width = widthBorder
    ? {
        width: `${num * 2.3}5px`,
      }
    : { width: "70%" };
  const vt_height = widthBorder
    ? {
        height: `${num * 2.3}5px`,
      }
    : { height: "70%" };

  return (
    <section
      style={widthBorder ? { height: height } : { height: width * 0.9 }}
      className="intro"
    >
      <img className="profile_img" src={profile_img} alt="" />
      <div style={hr_width} className="hr-line"></div>
      <div style={vt_height} className="vt-line"></div>
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
      {widthBorder ? (
        <Fragment>
          <h1>
            I'm <strong>Ryan Deng</strong>
          </h1>
          <p>Welcome, I'm glad you are here.</p>
          <i
            onClick={() => {
              window.scroll({
                top: height - 10,
                behavior: "smooth",
              });
            }}
            className="scroll-down fas fa-angle-double-down"
          ></i>
        </Fragment>
      ) : null}
    </section>
  );
};
export default Intro;
