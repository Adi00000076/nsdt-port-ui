import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact_section layout_padding-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container">
                <form action>
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.580898487284!2d72.94861257520219!3d18.949936082228874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7db2bb8e47c9f%3A0xed7a15c4c0fba334!2sNhava%20Sheva!5e0!3m2!1sen!2sin!4v1701406519409!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container-fluid mt-5">
        <div className="container mt-4">
      <h2 >Contact  <strong style={{color:"#0a97b0"}}>Information </strong> </h2>
      <table className="table table-bordered shadow border-5 table-borderless table-responsive">
        <tbody className="">
          <tr>
            <th scope="row">Company Name</th>
            <td>Nhava Sheva Distribution Terminal Private Limited</td>
          </tr>
          <tr>
            <th scope="row">Address (Shallow Water Berths and Coastal Berth)</th>
            <td>Jawaharlal Nehru Port Authority, Nhava Sheva, Uran, Navi Mumbai 400 707, Maharashtra</td>
          </tr>
          <tr>
            <th scope="row">Phone</th>
            <td>+91 98703 00093</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td><a href="mailto:ops-nsdt@jmbaxi.com">ops-nsdt@jmbaxi.com</a></td>
          </tr>
          <tr>
            <th scope="row">Registered Address</th>
            <td>Nhava Sheva Distribution Terminal Private Limited, Godrej Coliseum, office no. 801, 8th floor, ‘C’ wing, Everard Nagar, Sion east, Mumbai 400 022, Maharashtra</td>
          </tr>
          <tr>
            <th scope="row">CIN</th>
            <td>CINU63023MH2022PTC392812</td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
