import React from "react";
import Project from "./Project";
import "./Projects.css";
const Projects = ({ projects_data }) => {
  return (
    <section className="projects-section">
      <div className="main-container">
        <div className="projects-title">My Projects</div>

        <div className="projects">
          {projects_data.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
