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
          <strong> University of Waterloo.</strong>{" "}
          <a href="#!">Check out My Resume</a>
        </p>
        <p>
          <strong>Learning is my greatest passion</strong>, I consider myself a
          self starter and I'm naturally inquisitive, I was drawn to coding when
          I first started 3 years ago, and I've been in{" "}
          <i
            style={{ color: "rgba(234, 53, 117, 1)" }}
            className="fas fa-heart"
          ></i>{" "}
          with it ever since.
        </p>

        <p>
          I love exploring new technologies and utilizing them to solve
          important problems.
        </p>

        <div className="about-list">
          <div>
            I've done <strong> Full-stack Development</strong>{" "}
            <i className="ml-1 fas fa-layer-group"></i>
          </div>

          <div>
            <strong> Game Development</strong>{" "}
            <i className="ml-1 fas fa-gamepad"></i>
          </div>
          <div>
            <strong> Scripting</strong> <i className="ml-1 fas fa-file-alt"></i>
          </div>
          <div>
            <strong> AI Programming</strong>{" "}
            <i className="ml-1 fas fa-robot"></i>
          </div>
        </div>

        <p className="text-center">
          I believe <strong>coding is a superpower</strong>
        </p>
        <hr />
        <p>Aside from coding, I have a lot of personal interests.</p>
        <div className="about-list">
          <div>
            I'm a<strong> Speed Cuber</strong>{" "}
            <i className="ml-1 fas fa-cube"></i>
          </div>
          <div>
            {" "}
            I love music and
            <strong> Playing Guitar</strong>{" "}
            <i className="ml-1 fas fa-guitar"></i>
          </div>
          <div>
            {" "}
            I like to do
            <strong> Digital Painting</strong>{" "}
            <i className="ml-1 fas fa-palette"></i>
          </div>
          <div>
            I'm gladly addicted to
            <strong> Gym Workouts</strong>{" "}
            <i className="ml-1 fas fa-dumbbell"></i>
          </div>
          <div>
            I learn
            <strong> Philosophies</strong> for fun{" "}
            <i className="ml-1 fas fa-brain"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
