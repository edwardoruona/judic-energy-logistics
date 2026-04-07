import "./WorkcardStyle.css";
import Workcard from "./Workcard"
import WorkCardData from "./WorrkCardData"


// import React from 'react'

const work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Services</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return(
                    <Workcard
                    key={ind}
                    image={val.img}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default work