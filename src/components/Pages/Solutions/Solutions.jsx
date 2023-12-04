
import { FaArrowRight } from "react-icons/fa";
import sol1 from "./images/sol1.png"
import sol2 from "./images/sol2.png"
import sol3 from "./images/sol3.png"
import sol4 from "./images/sol4.png"
import sol5 from "./images/sol5.png"
import sol6 from "./images/sol6.png"

import "./Solutions.css"

const Solutions = () => {

  const cardData = [
    {
      id: 1,
      imgSrc: sol1,
      title: 'Ports and Terminals',
      description: 'An enterprise-class solution that addresses end to end operations of ports and terminals, Bulk, Break Bulk, Yard, Gate, Rail operations, Billing logistics, and integration to external systems.',
    },
    {
      id: 2,
      imgSrc: sol2,
      title: 'Logistics and Supply Chain',
      description: `End to end solutions for every operation like Depot, CFS, ICD, Transportation, Warehouse, Distribution and last mile delivery. Configurable API's, best of the breed EDI Managers makes data flow seamless for stake holders`,
    },
    {
      id: 3,
      imgSrc: sol3,
      title: 'Metro Rail',
      description: `Metro Rail, owns complex assets with diverse configurations with a variety of asset types that are integrated and interdependent. Envision's offerings for Asset Management, Crew Management, Operations Management helps to improve efficiencies.`,
    },
    {
      id: 4,
      imgSrc: sol4,
      title: 'Manufacturing',
      description: `Our Asset Management, HSE, Crew Management, Asset Performance Management, Industry 4.0, IIOT solutions for digital twin. Our dealer distribution management solution to improve the supply chain.`,
    },
    {
      id: 5,
      imgSrc: sol5,
      title: 'Utilities',
      description: `Power generation, distribution, Water utilities immensely got benefitted with our Asset Management, HSE, Asset Performance Management, IIOT solutions for digital twin.`,
    },
    {
      id: 6,
      imgSrc: sol6,
      title: 'Oil and Gas',
      description: `Our Asset Management, HSE, Crew Management, Asset Performance Management, Industry 4.0, IIOT solutions for digital twin. Our AI ML based predictive maintenance solution improves reliability`,
    },
  ];

  return (
    <>
      <h1 className="text-center mx-5 fw-bold font-monospace font-weight-bold">
        <strong style={{ color: "#0a97b0" ,textDecoration: "underline"}}>NSDT</strong> Best of the breed industry{" "}
        <strong style={{ color: "#0a97b0",textDecoration: "underline" }}>SOLUTIONS</strong>
      </h1>

      <div className="container">
        <div className="row mt-3">
          {cardData.map((card) => (
            <div className="col-sm-4" key={card.id}>
              <div className="card" style={{ width: "22rem" }}>
                <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h3 className="card-title text-center font-italic font-weight-bold" style={{ color: "#004761" }}>
                    {card.title}
                  </h3>
                  <p className="card-text text-center text-justify" style={{ color: "#555" }}>
                    {card.description}
                  </p>
                  <a href="#" className="btn btn-primary btn-lg me-auto">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solutions;
