import React from 'react' ;
import NavBar from "../components/NavBar" ;
import Hero from "../components/Hero" ;
import Work from "../components/Work";
import AboutContent from "../components/AboutContent";
import Form from "../components/form";
import Footer from "../components/Footer" ;

const home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Work/>
      <AboutContent/>
      <Form/>
      <Footer/>
    </div>
    
    
  );
}

export default home