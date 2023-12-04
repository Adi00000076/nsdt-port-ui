import React from "react";

import "./Loginpage.css";

import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
 
      <section
        className="h-50 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-50">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://www.jmbaxi.com/images/jm-main-logo.svg"
                          style={{ width: 185 }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Welcome to TO NSDT</h4>
                      </div>
                      <form>
                        <p>Please login to your credential</p>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Username
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                        </div>
                        <div className="text-center ">
                          <Link target="_blank" to='http://99.99.99.41/NSDT/login?dswid=723'
                            className="btn btn-secondary btn-block fa-lg gradient-custom-2 "
                            type="button"
                          >
                            Log in
                          </Link>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">   <h3 className="">J M BAXI group  </h3>   
                      <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img


                              src="https://img.freepik.com/free-vector/flat-design-import-export-graphics-with-ship_23-2149146365.jpg?w=740&t=st=1701425275~exp=1701425875~hmac=c2c0949a92bb37518faf97ff8a73003b5e6e5f5f8ca359952a260121c8f9a544"
                              className="d-block w-100 h-100"
                              alt="..."
                            />
                          </div>

                          <div className="carousel-item">
                            <img
                              src="https://img.freepik.com/free-photo/port-de-barcelona-night_1398-4568.jpg?size=626&ext=jpg&ga=GA1.1.1097114708.1701253528&semt=sph"
                              className="d-block w-100  h-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://img.freepik.com/premium-photo/foreman-control-loading-containers-box-truck_28668-241.jpg?size=626&ext=jpg&ga=GA1.1.1097114708.1701253528&semt=sph"
                              className="d-block w-100  h-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>

                      <h3 className="mb-5">PORTS & LOGISTICS </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  );
};

export default Loginpage;
