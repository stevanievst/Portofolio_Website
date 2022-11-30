import React from 'react';

const Skill = () =>{
    return(
        <section className="w-100 float-left skill-con padding-top padding-bottom position-relative" id="about-con">
    <figure className="mb-0 myskils">
      <img src="./assets/image/myskills-left-img.png" alt />
    </figure>
    <div className="container">
      <div className="skill-inner-con position-relative">
        <div className="row">
          <div className="col-lg-6 order-lg-0 order-2">
            <div className="skill-left-con text-center wow slideInLeft">
              <div className="row service-skill-sttaf-con">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="skill-left-item-con">
                    <div className="circle-wrap firstPercentage">
                      <div className="circle">
                        <div className="mask full">
                          <div className="fill" />
                        </div>
                        <div className="mask half">
                          <div className="fill" />
                        </div>
                        <div className="inside-circle">
                          <div className="service-skill-sttaf-item-con">
                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item1-con d-flex align-items-center justify-content-center">
                              <h4 className="d-table-cell align-middle mb-0 text-center count">75</h4>
                              <span className="static-txt2">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-skill-sttaf-item-heading">
                      <p className="mb-0">Graphic Design</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="skill-left-item-con">
                    <div className="circle-wrap secondPercentage">
                      <div className="circle">
                        <div className="mask full">
                          <div className="fill" />
                        </div>
                        <div className="mask half">
                          <div className="fill" />
                        </div>
                        <div className="inside-circle">
                          <div className="service-skill-sttaf-item-con">
                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item2-con text-center d-flex align-items-center justify-content-center">
                              <h4 className=" mb-0 text-center count">80</h4>
                              <span className=" static-txt2">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-skill-sttaf-item-heading">
                      <p className="mb-0">Web Designing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row service-skill-sttaf-con">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="skill-left-item-con">
                    <div className="circle-wrap thirdPercentage">
                      <div className="circle">
                        <div className="mask full">
                          <div className="fill" />
                        </div>
                        <div className="mask half">
                          <div className="fill" />
                        </div>
                        <div className="inside-circle">
                          <div className="service-skill-sttaf-item-con">
                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item1-con d-flex align-items-center justify-content-center">
                              <h4 className="d-table-cell align-middle mb-0 text-center count">70</h4>
                              <span className="static-txt2">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-skill-sttaf-item-heading">
                      <p className="mb-0">C++</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                  <div className="skill-left-item-con">
                    <div className="circle-wrap fourPercentage">
                      <div className="circle">
                        <div className="mask full">
                          <div className="fill" />
                        </div>
                        <div className="mask half">
                          <div className="fill" />
                        </div>
                        <div className="inside-circle">
                          <div className="service-skill-sttaf-item-con">
                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item2-con text-center d-flex align-items-center justify-content-center">
                              <h4 className=" mb-0 text-center count">80</h4>
                              <span className=" static-txt2">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-skill-sttaf-item-heading">
                      <p className="mb-0">Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="skill-right-con wow slideInRight">
              <h6>My Skills</h6>
              <h2>Beautiful &amp; Unique
                Digital Experiences
              </h2>
              <p>"Practice makes perfect"
              </p>
              <p>With all the studies and practices that I did, I develop myself with this skills.
              </p>
              <div className="generic-btn download-bnt">
                <a href="#" id="downloadImg" onclick="downloadImage()">Download CV</a>                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Skill;