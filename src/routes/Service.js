import React from 'react'

import NavBar from "../components/NavBar" ;
import Hero2 from "../components/Hero2";
import Work from "../components/Work";
// import Pricing from "../components/Pricing" ;
import Footer from "../components/Footer" ;


const service = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="Services" text="our services and financial plans are listed below." />
      <Work/>
      {/* <Pricing/> */}
      <Footer/>
    </div>
  )
}

export default service