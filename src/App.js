import React from 'react'
import Navbar from './components/Main/Navbar/Navbar'
import Header from './components/Main/Header/Header'
import Services from './components/Pages/Services/Services'
import Solutions from './components/Pages/Solutions/Solutions'
import AboutUs from './components/Pages/Aboutus/Aboutus'
// import Client from './components/Pages/Client/Client'
import Contact from './components/Pages/Contactus/Contact'
import Footer from './components/Main/Footer/Footer'
import MerineServices from './components/Port-Services/Merine/MerineServices'
import PortsLogistics from './components/Port-Services/Ports-Logistics/PortsLogistics'
import Technologies from './components/Port-Services/Technologies/Technologies'
import SustainablePractices from './components/Port-Services/Sustainable-Practices/SustainablePractices'
import Loginpage from './components/Authentication/Login/Loginpage'

import Signuppage from './components/Authentication/Signup/Signuppage'


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <Services/>

      <Solutions />

      <AboutUs />

      {/* <Client /> */}


      <Contact />


<MerineServices />

<PortsLogistics />

<Technologies />

<SustainablePractices />

<Signuppage />

<Loginpage />
      <Footer />
    </div>
  )
}

export default App
