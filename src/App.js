import React, { Fragment } from "react";
import "./App.css";

import Projects from "./components/Projects/Projects";
const App = () => {
  return (
    <Fragment>
      <section className="s1">
        <div className="main-container">
          <Projects />
        </div>
      </section>
    </Fragment>
  );
};
export default App;
