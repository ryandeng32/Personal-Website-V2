import React from 'react'
import './Work.css'
const Work = () => {
  return (
    <section className="work">
      <div className="work-title section-title">Work</div>
      <div className="container">
        <div className="work-text">
          <div className="work-text-title">
            Web Application Developer @ UWaterloo
          </div>
          <div className="work-text-date">2021.01 - 2021.04</div>

          <div className="work-text-list">
            <li>
              Ideated and developed a <strong>Python</strong> program that fixes
              invalid documentation format across <strong>290+</strong> scripts,
              drastically improving workflow efficiency by automating what was
              once a manual process.
            </li>
            <br />
            <li>
              Designed a new schema for a <strong>PostgreSQL</strong> database
              that allocates resources for <strong>7000+</strong> clients to
              improve query efficiency and the maintainability of clients’ data
            </li>
            <br />
            <li>
              Constructed SQL queries to migrate <strong>650K+</strong> user
              records from the old schema and validate the imported data.
            </li>
            <br />
            <li>
              Built <strong>Bash</strong> scripts to set up virtual environments
              in <strong>Vagrant</strong> for developing with{' '}
              <strong>Python</strong>,<strong>PostgreSQL</strong>, and{' '}
              <strong>Apache</strong>.
            </li>
          </div>
        </div>

        <div className="work-text">
          <div className="work-text-title">
            Entrepreneur Fellowship @ Conrad School
          </div>
          <div className="work-text-date">2020.05 - 2020.08</div>

          <div className="work-text-list">
            <li>
              Awarded <strong>top 6 out of 42 teams</strong> in the Quantum
              Valley Invt. Problem Pitch Competition pitching on collaborative
              ideation.
            </li>
            <br />
            <li>
              Developed Challengers, an event hosting platform with{' '}
              <strong>React, Redux, Node/Express</strong> to facilitate employee
              engagement.
            </li>
            <br />
            <li>
              Designed the security system of Challengers by encrypting
              passwords with <strong>Bcrypt</strong>, storing data to{' '}
              <strong>MongoDB</strong> Cloud, and leveraging{' '}
              <strong>JSON Web Token</strong> to authorize users over HTTP
              requests.
            </li>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Work
