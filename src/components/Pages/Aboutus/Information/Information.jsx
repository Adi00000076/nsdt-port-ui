import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdOutlineWork } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiIronHulledWarship } from "react-icons/gi";

const Information = () => {
  

  return (
    <>
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col">

    
      <VerticalTimeline >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        
          contentArrowStyle={{ borderRight: "7px solid black" }}
          date="1947 - present"
          iconStyle={{ background: "black", color: "white" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle ">1916</h4>
          <p className="text-dark ">
            1916 Manilalbhai and Jayantilalbhai Kotak came to Bombay from Keshod
            in Gujarat. They were an asset to the foreign shipping companies
            that were trading in India, as they were proficient in both Gujarati
            and English. In Bombay, the brothers met and partnered with Mr Baxi
            in his shipping company, forming J M Baxi
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "black", color: "white" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle text-dark">1947</h4>
          <p className="text-dark">
            Mogul Lines owned a number of cargo and passenger ships. Nemichand
            Jamnadas partnered with the Kotak brothers to run a house broking
            operation for Mogul Lines. This company was called N Jamnadas & Co.
            It effectively became the outsourcing arm of Mogul Lines, marketing
            the cargo and passenger space on its combo-carriers. The Middle East
            was still underdeveloped and aviation was in its infancy. Many of
            the workers who emigrated from India to the Gulf went by passenger
            ships. The Moghul Line had two ships, Akbar and Noor Jehaan, which
            ran between Bombay and the Persian Gulf and Red Sea ports carrying
            both passengers and cargo, which were entirely handled by N
            Jamnadas.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "black", color: "white" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle text-dark">1950</h4>
          <p className="text-dark">
            A turning point in Indian shipping came when Dwight D Eisenhower
            signed the Agricultural Trade Development and Assistance Act (also
            known as PL480) on 10 July 1954. Under this programme, the US
            shipped grain to India to help deal with the famine-like conditions
            in the country. Due to our exposure in the minor ports of Gujarat, J
            M Baxi was familiar with handling cargo through barges. With our
            company’s significant involvement with grain lightening, the Kotaks
            became very active in this programme, acting as shipping agents,
            stevedoring, clearing and forwarding for these shipments.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "black", color: "white" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle text-dark">1961</h4>
          <p className="text-dark">
            In the 1960s, aviation was just emerging in India and it offered
            uncharted opportunities. Since N Jamnadas had a background in
            offering passenger services for the Mogul Line, the firm decided to
            become IATA accredited. In 1961, two other firms, Lee & Muirhead and
            Jeena & Co, offering similar services, decided to get together with
            N Jamnadas to create the Travel Corporation of India (TCI), an IATA
            accredited agent for passenger and cargo transport by both air and
            sea. The Kotaks became one-third owners of TCI.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "white" }}
          icon={<GiIronHulledWarship />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-dark">2017</h4>
          <p className="text-dark">
            J M Baxi was already involved in handling grain under PL480. In the
            late 1960s J M Baxi already had exposure to handling cargo through
            barges with its experience in the smaller Gujarat ports. With this
            acquisition, the steamship MS Bhadravati (3000tons) and tanker ship
            MT Aquarius (1000tons) led J M Baxi’s maiden foray into barging and
            greatly expanded the firm’s grain-handling operations. In 1973, this
            was further expanded with the purchase of three self-propelled
            barges of 7/800 DWT, named MB Pankaj Sagar, MB Tarini and MB
            Surnandini.
          </p>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "dark" }}
          icon={<GiIronHulledWarship />}
        >
        
          <h4 className="vertical-timeline-element-subtitle text-dark">2015</h4>
          <p className="text-dark">
          A CFS was set up in 2015 to serve the Vizag market with efficient evacuation and last-mile services.

With the growing market for niche logistics services for last-mile deliveries, an additional inland depot was set up at Nhava Sheva with high-end cold-chain facilities.
          </p>
        </VerticalTimelineElement>




        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "white" }}
          icon={<GiIronHulledWarship />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-dark">2018</h4>
          <p className="text-dark">
            In 2018, it won a tender to develop India’s port community system.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "dark" }}
          icon={<GiIronHulledWarship />}
        >
        
          <h4 className="vertical-timeline-element-subtitle text-dark">2020</h4>
          <p className="text-dark">
            It also won the tender to develop India’s National Logistics
            platform in 2020. It has proudly delivered India’s first fully
            integrated cloud-based smart-port operating system
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "white" }}
          icon={<LiaShippingFastSolid />}
        />
      </VerticalTimeline>

      </div>
        </div>
    </div>
    </>
  );
};

export default Information;
