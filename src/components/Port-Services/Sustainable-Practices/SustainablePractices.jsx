import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

import Typewriter from 'typewriter-effect';




import esg from "./Documets/esg.pdf";
import jm from "./Documets/jm-baxi-esg-report-2022-v12-sn-digital.pdf";
import sbti from "./Documets/sbti-commitment-letter-180422.pdf";

const SustainablePractices = () => {
  const onecgButtonClick = (pdfURL) => {
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "document.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron mx-5 text-center">
            <h3 className="text-secondary " style={{color:"teal"}}>
              Welcome to the J M Baxi ESF Profile :-{" "}


         <strong className=" mb-4"> <b>              <Typewriter
  options={{
    strings: ['Sustainable', 'World','Practices'],
    autoStart: true,
    loop: true,
  }}
/>
     </b> </strong>
            </h3>

            <p className="lead mb-4">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-secondary">
                          ESG Report 2021-2022
                        </h5>

                        <button
                          className="btn btn-dark text-white"
                          onClick={() => onecgButtonClick(esg)}
                        >
                          Download <FaArrowCircleDown />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-secondary">
                          ESG Report 2020-2021
                        </h5>

                        <button
                          className="btn btn-dark text-white"
                          onClick={() => onecgButtonClick(jm)}
                        >
                          Download <FaArrowCircleDown />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title text-secondary">
                          SBTi Commitment Letter
                        </h5>

                        <button
                          className="btn btn-dark text-white"
                          onClick={() => onecgButtonClick(sbti)}
                        >
                          Download <FaArrowCircleDown />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>


<div className="container-fluid">

    <div className="row">
        <div className="col">

            
      <iframe
  width="100%"
  height="250px"
  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  title="Introduction To WiseGPT"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  muted
  autoplay
></iframe>
        </div>
    </div>
</div>

    </div>


  );
};

export default SustainablePractices;
