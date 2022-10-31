import React from 'react'
import './Work.css'
const Work = () => {
  return (
    <section className="work">
      <div className="work-title section-title">Work</div>
      <div className="container">
        <div className="work-text">
          <div className="work-text-title">
            Software Engineering Intern @ BitGo
          </div>
          <div className="work-text-date">2022.05 - 2022.08</div>
          <div className="work-text-list">
            <li>TypeScript, Apache Kafka, Angular, Cypress, Node/Express</li>
          </div>
        </div>
        <div className="work-text">
          <div className="work-text-title">
            Software Engineering Intern @ Super (Formerly Snapcommerce)
          </div>
          <div className="work-text-date">2021.09 - 2021.12</div>
          <div className="work-text-list">
            <li>
              TypeScript, React, Redux, React Query, Jest, WebdriverIO, AWS
              Cognito, AWS S3, Amplitude
            </li>
          </div>
        </div>
        <div className="work-text">
          <div className="work-text-title">
            Web Application Developer @ UWaterloo
          </div>
          <div className="work-text-date">2021.01 - 2021.04</div>

          <div className="work-text-list">
            <li>Python, PostgreSQL</li>
          </div>
        </div>

        <div className="work-text">
          <div className="work-text-title">
            Entrepreneur Fellowship @ Conrad School
          </div>
          <div className="work-text-date">2020.05 - 2020.08</div>

          <div className="work-text-list">
            <li>React, Redux, Node/Express, Bcrypt, MongoDB, JWT</li>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Work
