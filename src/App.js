import React from 'react'
import Navbar from './components/Main/Navbar/Navbar'
import Header from './components/Main/Header/Header'
import Services from './components/Pages/Services/Services'
import Solutions from './components/Pages/Solutions/Solutions'
import AboutUs from './components/Pages/Aboutus/Aboutus'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <Services/>

      <Solutions />

      <AboutUs />
    </div>
  )
}

export default App
