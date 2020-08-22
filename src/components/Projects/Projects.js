import React, { Fragment } from "react";
import Project from "./Project";
import { projects_data } from "../../data/projects";

const Projects = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <div>
          <h2 className="brief-head">My Recent Projects</h2>
          <p className="brief-text">
            Here are some of my projects. Wanna see more? Here's my{" "}
            <a target="_blank" href="resume_ryan.pdf">
              resume
            </a>
          </p>
        </div>

        <div className="projects">
          {projects_data.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
