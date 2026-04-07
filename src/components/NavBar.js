import { Link } from "react-router-dom" ;
import "./NavBarStyle.css" ;
import React3 from "../assets/judiclogo.png";

import React, { useState } from 'react' ;
import { FaBars, FaTimes } from "react-icons/fa";



function NavBar() {
    const [click, setclick] =useState(false);
    const handleClick =() => setclick(!click);

    const [color, setcolor] = useState(false);
    const changecolor = () => {
        if(window.scrollY >= 100){
            setcolor(true);
        }else{
            setcolor(false);
        }
    };
    window.addEventListener("scroll", changecolor);


    return (
        <div className ={color ? "header header-bg" : "header"} >
           <div className="logo">
            <img src={React3} className="img" alt="react image" />
            <Link to="/">
            <h2>JUDIC ENERGY</h2>
            </Link>
           </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Project">Services</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            <div className="hamburger"  onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: "#ffff00"}}/>)
                 : (<FaBars size={20} style={{color: "#ffff00"}}/>)}
            </div>
        </div>
    );
}

export default NavBar