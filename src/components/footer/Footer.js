import React from 'react'
import './Footer.css'
const Footer = ({ color }) => {
  return (
    <section className={`footer color-${color}`}>
      <div className="footer-title">
        Thanks for Stopping By <i className="ml-1 fas fa-laugh-squint"></i>
      </div>
      <p>Feel free to reach me via</p>
      <div className="footer-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.linkedin.com/in/ryandeng32"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.github.com/ryandeng32"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a rel="noopener noreferrer" href="mailto:ryan.deng32@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="copyright">© 2022 Ryan Deng</p>
    </section>
  )
}
export default Footer
