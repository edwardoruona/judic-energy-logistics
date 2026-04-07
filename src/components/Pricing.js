import "./PricingStyle.css";

import {Link} from "react-router-dom"

import React from 'react'

const pricing = () => {
  return (
    <div className="pricing">
        <h1>Financial Plans</h1>
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 2 Days -</p>
                <p>- Online -</p>
                <p>- soft-copy Materials -</p>
                <p>-  -</p>
                <Link to="/contact" className="btn" >PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 4 Days -</p>
                <p>- Physical class -</p>
                <p>- Soft-copy Materials -</p>
                <p>-  -</p>
                <Link to="/contact" className="btn" >PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>-Business-</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 7 Days -</p>
                <p>- Physical Class -</p>
                <p>- Soft-copy Materials -</p>
                <p>- Hard-copy Materials -</p>
                <Link to="/contact" className="btn" >PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default pricing