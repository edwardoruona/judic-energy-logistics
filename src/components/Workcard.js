import "./WorkcardStyle.css";


// import { NavLink } from "react-router-dom";

// import React from 'react'

const workcard = (props) => {
  return (
    <div className="project-card">
    <img src={props.image} alt="image" />
    <h2 className="project-tittle">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
        {/* <NavLink to={props.view} className="btn">View</NavLink>
        <NavLink to={props.source} className="btn">Source</NavLink> */}
        </div>
        </div>
</div>
  )
}

export default workcard