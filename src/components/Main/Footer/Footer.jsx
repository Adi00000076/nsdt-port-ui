import React from 'react'
import "./Footer.css"

import { FaHome } from "react-icons/fa";

import { FaBookOpen } from "react-icons/fa";

import { MdMedicalServices } from "react-icons/md";

import { IoIosContacts } from "react-icons/io";


const Footer = () => {
  return (
    <>
      
<div> 


  <section className="info_section layout_padding2 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_contact">
            <h4>
              Address
            </h4>
            <div className="contact_link_box">
              <a href>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>
                  Location
                </span>
              </a>
              <a href>
                <i className="fa fa-phone" aria-hidden="true" />
                <span>
                  Call +01 00000000
                </span>
              </a>
              <a href>
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>
                  nsdt@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="info_social">
            <a href>
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href>
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a href>
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
            <a href>
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col">
          <div className="info_detail">
            <h4>
              Info
            </h4>
            <p>
            Manilalbhai and Jayantilalbhai Kotak came to Bombay from Keshod in Gujarat. They were an asset to the foreign shipping companies that were trading in India, as they were proficient in both Gujarati and English. In Bombay, the brothers met and partnered with Mr Baxi in his shipping company, forming J M Baxi
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 mx-auto info_col">
          <div className="info_link_box">
            <h4>
              Links
            </h4>
            <div className="info_links">
              <a className="active" href="index.html">
            <FaHome />
                Home
              </a>
              <a className href="about.html">
                          <FaBookOpen />
                About
              </a>
              <a className href="service.html">
                          <MdMedicalServices />
                Services
              </a>
              <a className href="contact.html">
                          <IoIosContacts />
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 info_col ">
          <h4>
            Subscribe
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>



  <section className="footer_section">
    <div className="container">
      <p>
        © <span id="displayYear" />  Copyright 2023, J M Baxi Group, All rights reserved.
        <a href="https://www.jmbaxi.com/sitemap.html">   | Web design by Image Online. | </a>
    NSDT 
        <a href="https://www.jmbaxi.com/sitemap.html"> Map</a>
      </p>
    </div>
  </section>
</div>


    </>
  )
}

export default Footer
