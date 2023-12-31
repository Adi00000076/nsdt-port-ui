import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaDribbble } from "react-icons/fa";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5 shadow border-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Fade left>
            <div className="hovereffect " >
              <img
                className="img-responsive shadow"
                src="https://www.jmbaxi.com/images/marine-services.jpg"
                alt=""
              />
              <div className="overlay">
                <h2 className="text-light" style={{ fontSize: "25px" }}>
                  Marine Services
                </h2>
                <p className="set1">
                  <Link to='/' className="text-light">
                    <FaTwitter />
                  </Link>
                  <Link to='/' className="text-light">
                    <FaFacebook />
                  </Link>
                </p>
                <hr />
                <hr />
                <p className="set2">
                  <Link to='/' className="text-light">
                    <FaInstagram />
                  </Link>
                  <Link to='/' className="text-light">
                    <FaDribbble />
                  </Link>
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
            <Fade left>
              <img
                className="img-responsive shadow"
                src="https://www.jmbaxi.com/images/port-logistics.jpg"
                alt=""
              />
              <div className="overlay">
                <h2 className="text-light" style={{ fontSize: "25px" }}>
                  Ports & Logistics
                </h2>
                <p className="set1">
                  <Link to='/' className="text-light">
                    <FaTwitter />
                  </Link>
                  <Link to='/' className="text-light">
                    <FaFacebook />
                  </Link>
                </p>
                <hr />
                <hr />
                <p className="set2">
                  <Link to='/' className="text-light">
                    <FaInstagram />
                  </Link>
                  <Link to='/' className="text-light">
                    <FaDribbble />
                  </Link>
                </p>
              </div>
            </Fade>
          </div>   
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="hovereffect">
            <Fade left>
              <img
                className="img-responsive shadow h-100"
                src="https://wpassets.porttechnology.org/wp-content/uploads/2020/08/25154548/Picture1-768x512.jpg"
                alt=""
              />
              <div className="overlay">
                <h2 className="text-light" style={{ fontSize: "25px" }}>
                  Technologies
                </h2>
                <p className="set1">
                  <Link to='/' className="text-light">
                    <FaTwitter />
                  </Link>
                  <Link to='/' className="text-light">
                    <FaFacebook />
                  </Link>
                </p>
                <hr />
                <hr />
                <p className="set2">
                  <Link to='/' className="text-light">
                    <FaInstagram />
                  </Link>
                  <Link to='/' className="text-light">
                    <FaDribbble />
                  </Link>
                </p>
              </div>
            </Fade>
          </div>
        </div>

        <div className="col-sm-3">
          <Fade right>
            <h5 className="fw-bold ">
              Welcome to <br />
              <Typewriter
                options={{
                  strings: [
                    '<span style="color: teal;fontSize:40px">J M BAX</span>',
                    '<span style="color: #00BCD4; fontSize:40px">group</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  wrapperClassName: "typewriter-wrapper",
                }}
              />
            </h5>

            <p className="text-muted text-white">
              <strong className="text-warning text-decoration-underline"> J M BAXI </strong>prides itself in being a 106-year-old business
              conglomerate, in marine services, ports and logistics and
              technology. Our professionally managed companies span the entire
              logistics services value chain including port facilities such as
              container and multi-cargo port terminals, container freight stations
              and inland container depots, niche logistics services for project
              and bulk cargo, offshore installations and ship agency services.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
