import React from 'react';
import "./Navbar.css"

import Logo from "./Images/jm-main-logo.png"


import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid ">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +91 000000000
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : nsdt@gmail.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
        </div>
      </div>
  
        <div className="container-fluid  ">
          <nav className="navbar navbar-expand-lg custom_nav-container w-100" style={{backgroundColor:"black"}}>
           
      

           
            <a className="navbar-brand" href="index">
              <span>
             
              <img src={Logo} alt="" className='img-thumbnail' style={{width:"600px",height:"100px",border:"5px solid gold"}} />       
              </span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse shadow" id="navbarSupportedContent">
              <ul className="navbar-nav me-1">
                <li className="nav-item active">
                  <Link className="nav-link  btn-dark text-warning rounded-5 rounded-pill"   to='/'>Home </Link>
                </li>
              
                <li className="nav-item">
                  <Link className="nav-link  btn-dark text-warning rounded-5 rounded-pill" to='/about-us' > About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link  btn-dark text-warning rounded-5 rounded-pill" to='/services'>Services</Link>
                </li>


                
                <li className="nav-item">
                  <Link className="nav-link  btn-dark text-warning rounded-5 rounded-pill" to='/contact'>Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  btn-dark text-warning rounded-5 rounded-pill"  to='/login'> <i className="fa fa-user" aria-hidden="true"></i> Login</Link>
                </li>
               

            
              </ul>
         
            </div>
          </nav>
        </div>

    </header>
  );
};

export default Navbar;
