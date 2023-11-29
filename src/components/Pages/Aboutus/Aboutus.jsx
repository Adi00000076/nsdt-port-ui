import React from 'react';
import"./Aboutus.css"
import Abus from "./images/about-img.png"

const AboutUs = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About <span>Us</span>
                </h2>
              </div>
              <p>
              We are specialized in Sea Ports, Terminal Operations, Surface Logistics, Metro Rail, Airports, Manufacturing, and Power Generation. We digitally enable enterprises to realize better efficiencies from their assets, resources and people. Our solutions help our customers to manage operations, time and resources with real-time data. They also help in managing exceptions and intervening to manage constraints. Our customers are spread across 37+ countries allover the world.
              </p>
              <a href="#read-more-link">Read More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={Abus} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
