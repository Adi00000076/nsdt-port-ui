
import React from "react";

import "./Header.css"

import ReactPlayer from 'react-player/lazy'
import Home from "../Home/Home";

import Zoom from 'react-reveal/Zoom';


const Header = () => {
  return (
    <>



      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>





            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-warning display-5 fw-bold text-bg-info">MANAGE COMPLEXITY WITH EASE</h5>
              <p className="text-dark fw-bold fa-2x">
                Multiple stakeholders, complex operations, racing againsttime,
                Solutions to manage complex operations with ease.
              </p>
            </div>
            <img
              style={{ height: "450px" }}
              src="https://cdn.dribbble.com/users/4346208/screenshots/15690883/media/43e2fc2d96fee90fee295174392b71c1.gif"
              className="d-block w-100"
              alt="..."
            />

          </div>




          <div className="carousel-item" data-bs-interval={2000}>
            <img
              style={{ height: "450px" }}
              src="https://www.shipengine.com/wp-content/uploads/Supply-Chain-Crisis.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-warning display-5 fw-bold text-bg-info">WE PROVIDE BEST TRANSPORT SERVICE</h5>
              <p className="text-dark fw-bold fa-2x">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "450px" }}
              src="https://ars.els-cdn.com/content/image/1-s2.0-S0307904X04001167-gr1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-warning display-5 fw-bold text-bg-info">The fastest way of Deliver Your Container</h5>
              <p className="text-dark fw-bold fa-2x">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>



    <Home />

      
     
<Zoom  bottom>
      <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="reactplayer-wrapper">
                <ReactPlayer
                  url={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}
                  className="reactplayer"
                  width="100%"
                  height="50%"
                />
              </div>
            </div>
          </div>
        </div>
        </Zoom>
    </>
  );
};

export default Header;
