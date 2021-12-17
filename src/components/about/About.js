import React, { Fragment } from 'react'
import './About.css'
import Resume from '../../data/Ryan_Deng_Resume.pdf'
const About = ({ displayIntro }) => {
  return (
    <section className="about">
      <div className="about-title section-title">About me</div>
      <div className="container">
        <div className="about-text">
          {displayIntro ? (
            <Fragment>
              <div className="about-text-title">
                Hi! I'm <strong>Ryan Deng</strong>
              </div>
              <div className="about-text-lead">
                Welcome, I'm glad you are here.
              </div>
            </Fragment>
          ) : null}
          <br />
          <p>
            I am a sophomore studying <strong>Software Engineering</strong> at
            the
            <strong> University of Waterloo.</strong>{' '}
            <a href={Resume}>Check out my resume</a>
          </p>
          <br />
          <p>
            <strong>Learning is my greatest passion</strong>, I consider myself
            a self starter and I'm naturally inquisitive, I was drawn to coding
            when I first started 3 years ago, and I've been in{' '}
            <i
              style={{ color: 'rgba(234, 53, 117, 1)' }}
              className="fas fa-heart"
            ></i>{' '}
            with it ever since.
          </p>
          <br />
          <p>
            I love exploring new technologies and utilizing them to solve
            important problems.
          </p>
          <br />
          <div className="about-list">
            <div>
              I've done <strong> Full-stack Dev</strong>{' '}
              <i className="ml-1 fas fa-layer-group"></i>
            </div>

            <div>
              <strong> Game Dev</strong> <i className="ml-1 fas fa-gamepad"></i>
            </div>
            <div>
              <strong> Scripting</strong>{' '}
              <i className="ml-1 fas fa-file-alt"></i>
            </div>
            <div>
              <strong> AI Programming</strong>{' '}
              <i className="ml-1 fas fa-robot"></i>
            </div>
          </div>
          <br />
          <p className="text-center">
            I believe <strong>coding is a superpower</strong>
          </p>
          <hr />
          <p>Aside from coding, I have a lot of personal interests.</p>
          <br />
          <div className="about-list">
            <div>
              I'm a<strong> Speed Cuber</strong>{' '}
              <i className="ml-1 fas fa-cube"></i>
            </div>
            <div>
              {' '}
              I love music and
              <strong> Playing Guitar</strong>{' '}
              <i className="ml-1 fas fa-guitar"></i>
            </div>
            <div>
              {' '}
              I like to do
              <strong> Digital Paintings</strong>{' '}
              <i className="ml-1 fas fa-palette"></i>
            </div>
            <div>
              I'm gladly addicted to
              <strong> Gym</strong> <i className="ml-1 fas fa-dumbbell"></i>
            </div>
            <div>
              I learn
              <strong> Philosophies</strong> for fun{' '}
              <i className="ml-1 fas fa-brain"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
