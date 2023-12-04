import React from "react";

import "./Services.css";

import Features from "../Features/Features";

import s1 from "../Services/images/s1.png";
import s2 from "../Services/images/s2.png";
import s3 from "../Services/images/s3.png";
import s4 from "../Services/images/s4.png";
import s5 from "../Services/images/s5.png";
import s6 from "../Services/images/s6.png";


const Services = () => {
  return (
    <section className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <div className="heading_container">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>Digital Solutions for Operations and Service Management</p>
          </div>
          <div className="row">
            <ServiceBox
              imgSrc={s1}
              title="Marine & Harbor Management"
              description="Port Information Management System (PIMS) Marine & Harbour Management Plan: Vessel Operations, Pilot Operations, Berth Planning, Crew Rostering, Marine Services and Configurable Billing for higher efficiencies. Flexible and configurable, can be integrated with any VTMS system."
            />
            <ServiceBox
              imgSrc={s2}
              title="Container Terminal Operating System"
              description="CTOS streamlines terminal operations from vessel planning to gate operations. End-to-end solution for container terminals of any size. Plan your vessel operations, manage equipment utilization,and optimise the operations. 3D Planning, Automated Billing, Mobile solution, and a built-in EDI manager are key features"
            />
            <ServiceBox
              imgSrc={s3}
              title="General Cargo Terminal Operating System"
              description="One of the best Mixed cargo terminal operations management solutions,can handle any type of cargo (Bulk, Break Bulk, Project, Liquid, Ro-Ro,Live stock, Passenger). With automated billing solutions, mobile solutions for field operations can digitally transform terminals or ports of any size."
            />
            <ServiceBox
              imgSrc={s4}
              title="ICD CFS Depot Management"
              description="Crew Management System is a software solution that can be used by train operators, train operator shunters, crew controllers, line supervisors, depot crew controllers, station managers, station controllers,depot managers, chief traffic controllers, operation schedulers, and trainoperators."
            />

            <ServiceBox
              imgSrc={s5}
              title="PCS MSW Customer Portalst"
              description="Maritime Single Window to Discover the Future of Maritime Efficiency. Don't let complex procedures and time-consuming paperwork hold your port operations back. Embrace the power of our Maritime Single Window solution."
            />

            <ServiceBox
              imgSrc={s6}
              title="Crew & Labor Management System"
              description="Crew Management System is a software solution that can be used by train operators, train operator shunters, crew controllers, line supervisors, depot crew controllers, station managers, station controllers,depot managers, chief traffic controllers, operation schedulers, and trainoperators."
            />

            <ServiceBox
              imgSrc={s4}
              title="WMS TMS"
              description="Our warehouse management solution optimizes inventory control, order processing, and storage efficiency. It streamlines operations,reduces errors, and enhances productivity. Features include inventory tracking,real-time data, and order fulfillment automation.."
            />
          </div>
        </div>
      </div>

      
      <Features />
    </section>

    
  );
};

const ServiceBox = ({ imgSrc, title, description }) => {
  return (
    <>
      <div className="col-sm-12">
        <div className="box">
          <div className="img-box">
            <img src={imgSrc} alt={title} />
          </div>
          <div className="detail-box">
            <h5>{title}</h5>
            <p>{description}</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Services;
