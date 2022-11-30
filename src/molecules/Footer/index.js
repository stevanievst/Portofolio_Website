import React from 'react';

const Footer = () =>{
    return(
        <div className="w-100 float-left weight-footer-con position-relative">
    <div className="container">
      <div className="weight-footer-content text-center wow fadeInUp">
        <div className="footer-navbar">
          <ul className="list-unstyled">
            <li className="d-inline-block border-left-0 pl-0"><a href="#home">Home</a></li>
            <li className="d-inline-block"><a href="#about-con">About</a></li>
            <li className="d-inline-block"><a href="#Portfolio">Portfolio</a></li>
            <li className="d-inline-block pr-0"><a href="#Contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social-icon">
          <ul className="mb-0">
            <li className="d-inline-block">
              <a href="https://github.com/stevanievst"><i className="fab fa-github d-flex align-items-center justify-content-center" /></a>
            </li>
            <li className="d-inline-block">
              <a href="https://www.instagram.com/stevanievst/"><i className="fab fa-instagram d-flex align-items-center justify-content-center" /></a>
            </li>
            <li className="d-inline-block">
              <a href="https://www.linkedin.com/in/shirley-verna-stevanie-tambanua-8a6356233//"><i className="fab fa-linkedin-in d-flex align-items-center justify-content-center" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Footer;