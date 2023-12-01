import React from "react";
import "./Aboutus.css";
import Abus from "./images/about-img.png";
import Track from "./images/track-bg.jpg";

const AboutUs = () => {
  return (
    <>
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
                  We are specialized in Sea Ports, Terminal Operations, Surface
                  Logistics, Metro Rail, Airports, Manufacturing, and Power
                  Generation. We digitally enable enterprises to realize better
                  efficiencies from their assets, resources and people. Our
                  solutions help our customers to manage operations, time and
                  resources with real-time data. They also help in managing
                  exceptions and intervening to manage constraints. Our
                  customers are spread across 37+ countries allover the world.
                </p>
                <a href="#read-more-link">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={Abus} alt="About Us" className="img-thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="track_section layout_padding">
        <div className="track_bg_box">
          <img src={Track} alt />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="heading_container">
                <h2>Track Your Shipment</h2>
              </div>
              <p>
                NSDT PORT is a specific shipping or logistics company, I
                recommend visiting their official website or contacting their
                customer support for the most accurate and up-to-date
                information regarding tracking shipments. You should be able to
                find a "Track Shipment" or similar option on their website, or
                they can assist you with the necessary details.
              </p>
              <form action>
                <input type="text" placeholder="Enter Your Tracking Number" />
                <button type="submit">Track</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
