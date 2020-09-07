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
              Completed <strong>4 months</strong> of fast-paced training focused
              on
              <strong>entrepreneurship</strong> and{" "}
              <strong>problem analysis</strong> at the Conrad School of
              Entrepreneurship and Business (Conrad).
            </li>
            <br />
            <li>
              Awarded <strong>top 6 finalist status out of 42 teams</strong> in
              the Quantum Valley Investments Problem Pitch Competition by
              scripting and designing the pitch deck, demonstrating the future
              of technology’s role in enhancing creativity.
            </li>
            <br />
            <li>
              Researched the psychology behind creativity and developed concepts
              of using technologies to generate creativity{" "}
              <strong>in partnership with the Problem Lab</strong> at University
              of Waterloo.
            </li>
            <br />
            <li>
              <strong>Led a team of two</strong> following the{" "}
              <strong>agile methodology</strong>, had daily scrum meetings,
              interviewed 15 industry experts, and completed 3 design sprints.
            </li>
            <br />
            <li>
              Dived in <strong>startup-building</strong> by communicating with 6
              other venture teams, competing in 3 funding competitions, and
              finishing weekly workshops/deliverables with Conrad mentors and
              campus coaches.
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
