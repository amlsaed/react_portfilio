import React from 'react'
import "./about.css";
import Me from '../../assets/me.jpg';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
           <div className="container about_container">
                <div className="about_me">
                     <div className="about_me-image">
                       <img src={Me} alt="me" />
                     </div>
                </div>
                <div className="about_content">
                     <div className="about_cards">
                     {/* about item */}
                       <article className='about_card'>
                           <FaAward className='about_icon'/>
                           <h5>Experience</h5>
                           <small>3+ Years Working</small>
                       </article>

                       {/* about item */}
                       <article className='about_card'>
                           <FiUsers className='about_icon'/>
                           <h5>Clients</h5>
                           <small>200+ Worldwide </small>
                       </article>

                       {/* about item */}
                       <article className='about_card'>
                           <VscFolderLibrary className='about_icon'/>
                           <h5>Projects</h5>
                           <small>80+ Completed Projects</small>
                       </article>
                     </div>

                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio consectetur repellat dolorem beatae magni dolores esse corrupti nam ut odit fuga recusandae molestias nulla soluta provident temporibus excepturi, quia dolor.</p>
                     <a href="#contact" class="btn btn-primary">Let's Talk</a>
                </div>
           </div>
    </section>
  )
}

export default about