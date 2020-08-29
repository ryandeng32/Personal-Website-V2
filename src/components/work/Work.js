import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <section className="work">
      <div className="work-title section-title">Work</div>
      <div className="container">
        <div className="work-text">
          <div className="work-text-title">Co-founder at Refinest</div>
          <div className="work-text-date">2020.05 - 2020.08</div>

          <div className="work-text-list">
            <li>
              Completed in-depth training in <strong>entrepreneurship</strong>{" "}
              and <strong>problem analysis</strong>.
            </li>
            <br />
            <li>
              Worked in a team of two autonomously thoughout the work term
              following the <strong>Agile workflow</strong>
            </li>
            <br />
            <li>
              Researched the <strong>billion-dollar problem </strong>of
              “Creativity tools” in partnership with the{" "}
              <strong>Problem Lab</strong> at the{" "}
              <strong>University of Waterloo</strong>
            </li>
            <br />
            <li>
              Scriped and designed the pitch deck and achieved{" "}
              <strong>finalist</strong> spot in the{" "}
              <strong>
                Quantum Valley Investments Problem Pitch Competition
              </strong>
              .
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
