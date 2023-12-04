import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Main/Navbar/Navbar";
import Footer from "./components/Main/Footer/Footer";
import Header from "./components/Main/Header/Header";
import Services from "./components/Pages/Services/Services";
import Solutions from "./components/Pages/Solutions/Solutions";
import AboutUs from "./components/Pages/Aboutus/Aboutus";
import Client from "./components/Pages/Client/Client";
import Contact from "./components/Pages/Contactus/Contact";
import MerineServices from "./components/Port-Services/Merine/MerineServices";
import PortsLogistics from "./components/Port-Services/Ports-Logistics/PortsLogistics";
import Technologies from "./components/Port-Services/Technologies/Technologies";
import SustainablePractices from "./components/Port-Services/Sustainable-Practices/SustainablePractices";
import Loginpage from "./components/Authentication/Login/Loginpage";
import Signuppage from "./components/Authentication/Signup/Signuppage";


import ScrollToTop from "react-scroll-to-top";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merine-services" element={<MerineServices />} />
          <Route path="/ports-logistics" element={<PortsLogistics />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/sustainable-practices" element={<SustainablePractices />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>


      <ScrollToTop smooth />
      <Footer />
    </div>
  );
};

export default App;
