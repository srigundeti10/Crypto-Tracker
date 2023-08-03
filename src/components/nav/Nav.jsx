import React from 'react'
import './Nav.css'
import {HiHome} from 'react-icons/hi'
import {CiUser} from 'react-icons/ci'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsBookFill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''} title="Home"><HiHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''} title="about" ><CiUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : ''} title="experience"><BiBook/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : ''} title="portfolio"><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''} title="contact"><RiContactsBookFill/></a>
    </nav>
  )
}

export default Nav