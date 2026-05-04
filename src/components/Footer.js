import { FaFacebook, FaMailBulk, FaPhone, FaLinkedin, FaTwitter } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    {/* <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/> */}
                <div>
                {/* <p>123 Housing Society</p>
                <p>Banglandish</p> */}
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                +2348036525841, +2348069030214</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                info@judicenergy.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About The Company</h4>
                <p>JUDIC ENERGY & LOGISTICS LIMITED was incorporated in 11th July 2023, With corporate office at 31 Airport road inside old Airport premises Effurun, Delta State Nigeria with wide range of experience.</p>
            <div className="socials">
                    <FaFacebook size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer