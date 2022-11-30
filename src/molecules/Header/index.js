import React from 'react';

const Header = () =>{
    return(
<div className="header-and-banner-con w-100 float-left position-relative">
  <div className="header-and-banner-inner-con">
    <header className="main-header">
      {/*navbar-start*/}
      <div className="container pl-0 pr-0">
        <div className="header-con">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
          
            <button className="navbar-toggler p-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active pl-0">
                  <a className="nav-link p-0 is-active" href="index.html">Home<span className="sr-only">(current)</span></a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link p-0" href="#about-con">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#Portfolio">Portfolio</a>
                </li>
                
              </ul>
              <div className="d-inline-block contact">
                <a href="#Contact">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/*navbar-end*/}
    </header>
    <section className="banner-main-con" id="home">
      <div className="container pl-0 pr-0">
        {/*banner-start*/}
        <div className="footer-social-icon banner-social-icon mb-0">
          <ul className="mb-0 list-unstyled">
          <li className>
              <a href="https://github.com/stevanievst"><i className="fab fa-github d-flex align-items-center justify-content-center" /></a>
            </li>
          <li className="mt-3 mb-3">
              <a href="https://www.instagram.com/stevanievst/"><i className="fab fa-instagram d-flex align-items-center justify-content-center ml-0 mr-0 " /></a>
            </li>
            <li className>
              <a href="https://www.linkedin.com/in/shirley-verna-stevanie-tambanua-8a6356233/"><i className="fab fa-linkedin-in d-flex align-items-center justify-content-center" /></a>
            </li>
          </ul>
        </div>
        <div className="banner-con text-lg-left text-center">
          <div className="row">
            <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
              <div className="banner-left-con wow slideInLeft">
                <div className="banner-heading">
                  <h2>Hello, I Am</h2>                                 
                  <ul className="dynamic-txts">
                    <li><h1>Shirley T</h1></li>
                    <li><h1>Shirley T</h1></li>
                    <li><h1>Shirley T</h1></li>
                    <li><h1>Shirley T</h1></li>
                  </ul>
                  <p>3rd year Computer Science Student<br />
                    Interested in Web Develompment.
                  </p>
                </div>
                <div className="banner-btn generic-btn d-inline-block">
                  <a href="#Contact">Hire Me</a>
                </div>
                <a href="#Portfolio" className="See-btn">See My Work</a>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="banner-right-con position-relative wow slideInRight" id="banner-right-con">
                <figure className="mb-0">
                  <img src="assets/image/woman.png" alt="banner-right-img" id="banner-right-img" />
                </figure>
                <div className="best-award-con d-inline-block wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="best-award-inner-con">
                    <figure className="mb-0">
                      <img src="assets/image/cup-img.png" alt="cup-img" className="img-fluid" />
                    </figure>
                    <div className="best-award-title">
                      <p className="mb-0">Welcome<br />
                        to My Website.
                      </p>
                    </div>
                  </div>
                </div>
               
                <div className="cursor" />
                <div className="cursor2" />
              </div>
            </div>
          </div>
        </div>
        {/*banner-end*/}
      </div>
    </section>
  </div>
</div>

    )
}

export default Header;