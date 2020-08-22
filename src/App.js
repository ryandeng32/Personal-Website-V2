import React, { Fragment } from "react";
import "./App.css";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <section className="s1">
        <div className="main-container">
          <Projects />
        </div>
        <Footer />
      </section>
    </Fragment>
  );
};
export default App;
