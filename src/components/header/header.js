import React from 'react'
import Cta from './Cta.js';
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
         <h5>Hello I'm </h5>  
         <h1>Hajia Bintu</h1>  
         <h5 className="text-light">Full Stack Developer</h5> 
         <Cta/>
         <HeaderSocial/>
         <div className="me">
           <img src={ME} alt="me" />
         </div>
         <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header