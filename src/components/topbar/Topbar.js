import React from 'react'
import './Topbar.css'
import logo from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";


const Topbar = () => {
  return (
    <div className='topbar'>
            <div className='topbar-content container'>
            <div className="navbar-logo">
              <Link to="/">
                <img src={logo} alt="Sunshine State Rehab Logo" loading="lazy"/>
              </Link>
            </div>

            <div className='topbar-number'>
              <a href="tel:3234035422"> +1 (323) 403-5422</a>
            </div>

            </div>
      
    </div>
  )
}

export default Topbar
