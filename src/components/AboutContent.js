import "./AboutContentStyle.css";
import {Link} from "react-router-dom";
import React1 from "../assets/image(11).jpg"
import React2 from "../assets/image(10).jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who We Are</h1>
            <p>JUDIC ENERGY & LOGISTICS LIMITED was incorporated in 11th July 2023, With corporate office at 31 Airport road, inside old airport premises Effurun, Delta State Nigeria with wide range of experience.</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="Corporate facilities" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="Operations and logistics" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
