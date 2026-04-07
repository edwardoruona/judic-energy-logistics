import "./HeroStyle.css";
import React from 'react' ;
import { Link } from "react-router-dom" ;

import Introimg from "../assets/homeimage.jpeg" ;




function Hero() {
    
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={Introimg} alt="introimage" />
            </div>
            <div className="content">
                <p>Expertise in logistics, drilling rigs, marine, oil and gas construction</p>
                <h1>-------</h1>
                <div>
                    <Link to="/project" className="btn">Services</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero



