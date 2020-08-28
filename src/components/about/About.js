import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="about-title">About me</div>
      <div className="about-text">
        <h1 className="about-text-title">Hi! I'm Ryan Deng</h1>
        <p className="about-text-lead">Welcome to my website</p>
        <p>
          I am a sophomore studying <strong>Software Engineering</strong> at the
          <strong> University of Waterloo.</strong>
        </p>
        <p>
          <strong>Learning is my greatest passion</strong>, I consider myself a
          self starter and I'm naturally inquisitive, I was drawn to coding when
          I first started 3 years ago, and I'm still in{" "}
          <i
            style={{ color: "rgba(234, 53, 117, 1)" }}
            className="fas fa-heart"
          ></i>{" "}
          with it ever since.
        </p>
        <p className="text-center">
          I believe <strong>coding is a superpower</strong>
        </p>
        <hr />
      </div>
    </section>
  );
};
export default About;
