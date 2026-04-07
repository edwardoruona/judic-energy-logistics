import React from 'react'

import Form from "../components/form";
import NavBar from "../components/NavBar" ;
import Hero2 from "../components/Hero2" ;

import Footer from "../components/Footer" ;

const contact = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="Contact Us" text="we are thrill to hear from you." />
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact