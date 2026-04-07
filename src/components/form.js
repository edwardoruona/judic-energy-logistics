// import { PiPlaceholder } from "react-icons/pi";

import "./FormStyle.css" ;

import React from 'react' ;

const form = () => {
  return (
    <div className="form">
      <h1>Send Us A Message</h1>
        <form action="https://formspree.io/f/mjkbkdby" method="POST">
            <label>Your Name</label>
            <input name="name" type="text"></input>
            <label>Email</label>
            <input name="email" type="email"></input>
            <label>Subject</label>
            <input name="subject" type="text"></input>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Type your message here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default form