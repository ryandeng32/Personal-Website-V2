import React, { Fragment } from "react";
import Project from "./Project";
import { projects_data } from "../../data/projects";

const Projects = () => {
  return (
    <Fragment>
      <div className="projects">
        {projects_data.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
