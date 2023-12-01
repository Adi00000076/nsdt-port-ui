import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaDribbble } from "react-icons/fa";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { colors } from "@mui/material";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row  p-5 shadow border-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
            <img
              className="img-responsive shadow"
              src="https://www.jmbaxi.com/images/marine-services.jpg"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-light"  style={{fontSize:"25px"}}>Marine Services</h2>
              <p className="set1">
                <a href="#" className="text-light">
                  <FaTwitter />
                </a>
                <a href="#" className="text-light">
                  <FaFacebook />
                </a>
              </p>
              <hr />
              <hr />
              <p className="set2">
                <a href="#" className="text-light">
                  <FaInstagram />
                </a>
                <a href="#" className="text-light">
                  <FaDribbble />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
            <img
              className="img-responsive shadow"
              src="https://www.jmbaxi.com/images/port-logistics.jpg"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-light" style={{fontSize:"25px"}}>Ports & Logistics</h2>
              <p className="set1">
                <a href="#" className="text-light">
                  <FaTwitter />
                </a>
                <a href="#" className="text-light">
                  <FaFacebook />
                </a>
              </p>
              <hr />
              <hr />
              <p className="set2">
                <a href="#" className="text-light">
                  <FaInstagram />
                </a>
                <a href="#" className="text-light">
                  <FaDribbble />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
            <img
              className="img-responsive shadow h-100"
              src="https://wpassets.porttechnology.org/wp-content/uploads/2020/08/25154548/Picture1-768x512.jpg"
              alt=""
            />
            <div className="overlay">
              <h2 className="text-light" style={{fontSize:"25px"}}>Technologies</h2>
              <p className="set1">
                <a href="#" className="text-light">
                  <FaTwitter />
                </a>
                <a href="#" className="text-light">
                  <FaFacebook />
                </a>
              </p>
              <hr />
              <hr />
              <p className="set2">
                <a href="#" className="text-light">
                  <FaInstagram />
                </a>
                <a href="#" className="text-light">
                  <FaDribbble />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <h5 className="fw-bold ">
            Welcome to <br />
            <Typewriter
  options={{
    strings: [
      '<span style="color: teal;fontSize:40px">J M BAX</span>',
      '<span style="color: 	#00BCD4; fontSize:40px"">group</span>',
    ],
    autoStart: true,
    loop: true,
    delay: 50, 
    wrapperClassName: 'typewriter-wrapper', 
  }}
/>

          </h5>

          <p className="text-muted text-white">
            J M BAXI prides itself in being a 106-year-old business
            conglomerate, in marine services, ports and logistics and
            technology. Our professionally managed companies span the entire
            logistics services value chain including port facilities such as
            container and multi-cargo port terminals, container freight
            stations and inland container depots, niche logistics services for
            project and bulk cargo, offshore installations and ship agency
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
