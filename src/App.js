import React, { Fragment } from "react";
import "./App.css";
import Projects from "./components/projects/Projects";
import Intro from "./components/Intro/Intro";
const App = () => {
  return (
    <Fragment>
      <Intro />
      <Projects />
    </Fragment>
  );
};
export default App;
