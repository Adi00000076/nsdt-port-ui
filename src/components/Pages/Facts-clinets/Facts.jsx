import React from 'react'
import { FaLongArrowAltRight ,FaArrowUp,FaLongArrowAltDown } from "react-icons/fa";


import "./Facts.css"

const Facts = () => {
  return (
    <>



 <div className="container-xxl py-5">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="display-6 text-warning  mb-3" style={{border:"2px solide yellow",boxShadow:"5px 5px  5px chacklet "}}>Some Facts</h6>
        <h1 className="mb-5 text-secondary">#1 Place To Manage All Of Your Shipments</h1>
        <p className="">ShipStation is a web-based e-commerce shipping platform that helps online retailers streamline their order fulfillment.</p>
      
      
      <ol className='list-styled'>

        <li>Disbursement Accounting</li>
        <li>Post Fixtures Services</li>
        <li>Vendor Management</li>
        <li>Agency Appointment Audits</li>
        <li>Port Cost Estimations</li>
        <li>Cash Management Services</li>


      </ol>
        <div className="d-flex align-items-center">
          <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
          <div className="ps-4">
            <h6>Call for any query!</h6>
            <h3 className="text-primary m-0">+91 0000000000</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row g-4 align-items-center">
          <div className="col-sm-6">
            <div className="bg-secondary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
              <i className="fa fa-users fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">   <FaLongArrowAltRight /> 15240000</h2>
              <p className="text-white mb-0">Happy Clients</p>
            </div>
            <div className="bg-warning p-4 wow fadeIn" data-wow-delay="0.5s">
              <i className="fa fa-ship fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up"> <FaArrowUp />  52520</h2>
              <p className="text-white mb-0">Complete Shipments</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="bg-danger p-4 wow fadeIn" data-wow-delay="0.7s">
              <i className="fa fa-star fa-2x text-white mb-3" />
              <h2 className="text-white mb-2" data-toggle="counter-up">  <FaLongArrowAltDown  />  661003</h2>
              <p className="text-white mb-0">Customer Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
    </>
  )
}

export default Facts
