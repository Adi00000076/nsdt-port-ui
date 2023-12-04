import React from 'react'

import "./Features.css"
import Facts from '../Facts-clinets/Facts'

const Features = () => {
  return (
    <React.Fragment>



<div className="container-fluid overflow-hidden py-5 px-lg-0">
  <div className="container feature py-5 px-lg-0">
    <div className="row g-5 mx-lg-0">
      <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
        <h1 className="mb-5">We Are Trusted Logistics Company Since 1916 <strong className='btn btn-outline-warning'>NSDT</strong> </h1>
        <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
          <i className="fa fa-globe text-primary fa-3x flex-shrink-0" />
          <div className="ms-4">
            <h5>Marine Services</h5>
            <p className="mb-0">J. M. Baxi & Co. is India's premier shipping services company, standing firmly on the pillars of innovation, commitment and performance.</p>
          </div>
        </div>
        <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
          <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0" />
          <div className="ms-4">
            <h5>Ports & Logistics</h5>
            <p className="mb-0">J M Baxi Heavy believes in partnering with its customers through innovative business models. It bring years of expertise with diverse industries and offer insights into managing logistics for capital goods across segments for providing heavy haulage transportation and heavy lift services.</p>
          </div>
        </div>
        <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
          <i className="fa fa-headphones text-primary fa-3x flex-shrink-0" />
          <div className="ms-4">
            <h5>Technologies</h5>
            <p className="mb-0">Established in 2008, DIABOS has become a trusted partner to major ship owning and operating companies in providing advanced port call management services. Headquartered in Dubai, it caters to a widespread clientele across the globe.</p>
          </div>
        </div>


        
      </div>
      <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{minHeight: 400}}>
        <div className="position-relative h-100">
          <img className="position-absolute img-fluid w-100 h-100" src="https://img.freepik.com/free-vector/isometric-logistics-flowchart-composition-with-isolated-images-delivery-techniques-vehicles-human-characters-with-text-vector-illustration_1284-30930.jpg?size=626&ext=jpg&ga=GA1.1.1097114708.1701253528&semt=sph" style={{objectFit: 'cover'}} alt />
        </div>
      </div>
    </div>
  </div>
</div>

<Facts />
      
    </React.Fragment>
  )
}

export default Features
