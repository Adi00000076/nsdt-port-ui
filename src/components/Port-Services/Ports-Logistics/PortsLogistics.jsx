import React from 'react';
import ReactCardSlider from 'react-card-slider-component';

const PortsLogistics = () => {
  const sliderClick = (index) => {
    // Handle the click event for the slider item at the given index
    console.log(`Slider item clicked: ${index}`);
  };






   
   

  

 

  

  const slides = [
    { image: "https://www.jmbaxi.com/images/list-project-heavy-logistics.jpg", title: "  Project Heavy Logistics", clickEvent: () => sliderClick(0) },
    { image: "https://www.jmbaxi.com/images/list-cold-chain-logistics.jpg", title: "  Cold Chain Logistics", clickEvent: () => sliderClick(1) },
    { image: "https://www.jmbaxi.com/images/list-bulk-logistics.jpg", title: "    Bulk Logistics",  clickEvent: () => sliderClick(2) },
  
    { image: "https://www.jmbaxi.com/images/list-rail-logistics.jpg", title: "Rail Logistics",  clickEvent: () => sliderClick(3) },
    { image: "https://www.jmbaxi.com/images/list-kandla-terminal.jpg", title: "Kandla Container Terminal",  clickEvent: () => sliderClick(4) },
    { image: "https://www.jmbaxi.com/images/list-haldia-terminal.jpg", title: " Haldia Container Terminal",  clickEvent: () => sliderClick(5) },
    
    { image: "https://www.jmbaxi.com/images/list-visakha-terminal1.jpg", title: " Visakha Container Terminal I",  clickEvent: () => sliderClick(6) },
    { image: "https://www.jmbaxi.com/images/list-visakha-terminal-cfs.jpg", title: " Visakha Container Terminal II", clickEvent: () => sliderClick(6) },
    { image: "https://www.jmbaxi.com/images/tuticorin-international-container-terminal.jpg", title: "    Tuticorin Container Terminal", clickEvent: () => sliderClick(6) },
   
   
   
   
    { image: "https://www.jmbaxi.com/images/nhava-sheva-freeport-container-terminal.jpg", title: "  Nhava Sheva Freeport Container Terminal",  clickEvent: () => sliderClick(6) },
    { image: "https://www.jmbaxi.com/images/list-visakha-terminal-cfs.jpg", title: "Visakha Container Freight Station", clickEvent: () => sliderClick(6) },
    { image: "https://www.jmbaxi.com/images/list-mumbai-terminal1.jpg", title: "   Nhava Sheva Distribution Terminal", clickEvent: () => sliderClick(6) },
   
   
 


];

  return (
    <>
<div className="container-fluid mt-5 m-5">
    <div className="row">
        <div className="col">
<h2>Ports & <strong style={{color:'#004761' }}>Logistics</strong></h2>
        <ReactCardSlider slides={slides} />
        </div>
    </div>
</div>
    </>
  );
};

export default PortsLogistics;
