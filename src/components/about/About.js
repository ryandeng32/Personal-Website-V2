import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="about-title">About me</div>
      <div className="about-text">
        <p>Learning is my greatest passion. </p>
        <p>
          Web Development I taught myself web programming and built this website
          as a project along with other projects such as a chrome extension.
        </p>
        <p>
          Game Development I built 3D Game using VPython and a topdown style
          shooter game with Pygame. I also built classic games such as Pong
          using the Arduino.
        </p>
        <p>
          Scripting I can effectively apply Python in everyday life. For
          example, I built a stock market report web crawler to fetch useful
          information.
        </p>
        <p>
          AI programming I am also excited about exploring the AI field and
          decided take on the challenge of learning deep learning in 2020 on
          Coursera through the deep learning specialization.
        </p>
      </div>
    </section>
  );
};
export default About;
