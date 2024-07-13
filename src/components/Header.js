import React from "react"
import './Header.css'
import logo from "./logo.png"
import { Link } from "react-router-dom"


const Header =()=>{

    return(
     <div className="header">
       <div>
          <img src={logo} className="logo" />
       </div>
         <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link >Cart</Link></li>
            <li><Link to="/login">Login</Link></li>
         </ul>
     </div>
    )
}

export default Header;