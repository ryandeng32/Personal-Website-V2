import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <section className="work">
      <div className="work-title">Work</div>
      <div className="work-text">
        <div className="work-text-title">Co-founder at Refinest</div>
        <div className="work-text-date">2020.05 - 2020.08</div>

        <ul className="work-text-list">
          <li>
            Worked in a team of two autonomously thoughout the work term
            following the <strong>Agile workflow</strong>
          </li>
          <li>
            Researched the <strong>billion-dollar problem </strong>of
            “Creativity tools” in partnership with the{" "}
            <strong>Problem Lab</strong> at the{" "}
            <strong>University of Waterloo</strong>
          </li>
          <li>
            Scriped and designed the pitch deck and achieved{" "}
            <strong>finalist</strong> spot in the{" "}
            <strong>
              Quantum Valley Investments Problem Pitch Competition
            </strong>
            .
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Work;
