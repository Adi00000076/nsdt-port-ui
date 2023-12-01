import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const Client = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const handlePrev = () => {
    setCurrentItem(currentItem === 0 ? 3 : currentItem - 1);
  };

  const handleNext = () => {
    setCurrentItem(currentItem === 3 ? 0 : currentItem + 1);
  };

  return (
    <>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              What Says Our <span>Client</span>
            </h2>
          </div>
          <div className="client_container">
            <div className="carousel-wrap ">
              <OwlCarousel
                className="owl-carousel"
                items={1}
                loop
                nav
                onChanged={(e) => setCurrentItem(e.item.index)}
              >
                {/* Your existing carousel items */}
              </OwlCarousel>
            </div>
            <div className="carousel-buttons">
              <button onClick={handlePrev}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
            <div className="selected-client-details">
              <div className="box">
                <div className="detail-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim
                  </p>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img
                      src={currentItem === 0 || currentItem === 2 ? 'images/client-1.png' : 'images/client-2.png'}
                      alt=""
                      className="img-1"
                    />
                  </div>
                  <div className="name">
                    <h6>Adipiscing</h6>
                    <p>Magna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
