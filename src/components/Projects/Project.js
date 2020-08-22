import React, { Fragment } from "react";
const Project = ({ project }) => {
  const { icon, name, description, website, image } = project;
  return (
    <Fragment>
      <div className="project">
        <div className="container">
          <i className={`fas fa-${icon} icon`}></i>
          <h1 className="project-title">{name}</h1>
          <img className="thumbnail" alt="thumbnail" src={image} />
          <div className="project-preview">
            <p className="project-description">{description}</p>
            <a href={website} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Project;
