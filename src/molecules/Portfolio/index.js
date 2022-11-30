import React from 'react';

const Portfolio = () =>{
    return(
        <section className="w-100 float-left portfolio-con padding-top" id="Portfolio">
    <div className="container">
      <div className="generic-title text-center">
        <h6 className="text-white">Creative Works</h6>
        <h2 className="mb-0 text-white">Check My Portfolio</h2>
      </div>
      <div id="myBtnContainer" className="text-center">
        <button className=" active active_button" onclick="filterSelection('all')"> All </button>
        <button className onclick="filterSelection('cars')">UI </button>
        <button className onclick="filterSelection('animals')">Web App</button>
      </div>
    </div>
  </section>
    )
}

export default Portfolio;