import Home from "../Home/Home";
import React from "react";


import ReactPlayer from 'react-player/lazy'


import port from "./port.mp4"

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
              <h5>MANAGE COMPLEXITY WITH EASE</h5>
              <p>
                Multiple stakeholders, complex operations, racing againsttime,
                Solutions to manage complex operations with ease.
              </p>
            </div>
            <img
              style={{ height: "450px" }}
              src="https://themewagon.github.io/logistica/img/carousel-1.jpg "
              className="d-block w-100"
              alt="..."
            />

          </div>




          <div className="carousel-item" data-bs-interval={2000}>
            <img
              style={{ height: "450px" }}
              src="https://themewagon.github.io/logistica/img/carousel-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>WE PROVIDE BEST TRANSPORT SERVICE</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "450px" }}
              src="https://img.freepik.com/premium-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-487.jpg?w=900"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>The fastest way of Deliver Your Container</h5>
              <p>
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
    </>
  );
};

export default Header;
