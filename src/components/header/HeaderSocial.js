import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {ImBehance2} from "react-icons/im"


const HeaderSocial = () => {
  return (
    <div className='header_socials'>
         <a href="#linkedin" target="_blank"><BsLinkedin/></a>
         <a href="#github" target="_blank"><FaGithub/></a>
         <a href="#behance" target="_blank"><ImBehance2/></a>
    </div>
  )
}

export default HeaderSocial