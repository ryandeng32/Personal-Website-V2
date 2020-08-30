import React, { Fragment, useState } from "react";
const Project = ({ project }) => {
  const { icon, name, description, website, image } = project;
  const [detail, setDetail] = useState(false);
  const handleClick = (e) => {
    setDetail(!detail);
  };
  return (
    <Fragment>
      <div
        onClick={handleClick}
        className={detail ? "is-clicked project" : "project"}
      >
        <i className={`fas fa-${icon} icon`}></i>
        <h1 className="project-title">{name}</h1>
        <img className="thumbnail" alt="thumbnail" src={image} />
        <div className="project-preview">
          <p className="project-description">{description}</p>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Read More
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default Project;
