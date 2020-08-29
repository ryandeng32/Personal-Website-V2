import React, { useState, Fragment } from "react";
import "./App.css";
import { projects_data } from "./data/projects";
import Intro from "./components/Intro/Intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";
const App = () => {
  // whether or not to display intro in about
  const [aboutIntro, setAboutIntro] = useState(true);
  const [page, setPage] = useState("About");
  const handleAbout = (bool) => {
    setAboutIntro(bool);
  };
  const handleSetPage = (e) => {
    setPage(e.target.getAttribute("name"));
  };
  let currentPage;
  switch (page) {
    case "Projects":
      currentPage = <Projects projects_data={projects_data} />;
      break;
    case "About":
      currentPage = <About displayIntro={aboutIntro} />;
      break;
    case "Skills":
      currentPage = <Skills />;
      break;
    case "Work":
      currentPage = <Work />;
      break;
    default:
      currentPage = null;
  }
  return (
    <Fragment>
      <Intro
        handleSetPage={handleSetPage}
        handleAbout={handleAbout}
        num_projects={projects_data.length}
      />
      <div>{currentPage}</div>
      <Footer color={page} />
    </Fragment>
  );
};
export default App;
