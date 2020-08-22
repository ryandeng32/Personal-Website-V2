import React from "react";

const Footer = () => {
  return (
    <div className="bottom-container">
      <a
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.linkedin.com/in/yuhuan-deng"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.github.com/ryandeng32"
      >
        <i className="fab fa-github-square"></i>
      </a>
      <a
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/ryan.deng.1447"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
      <p className="copyright">© 2020 by Ryan Deng.</p>
    </div>
  );
};
export default Footer;
