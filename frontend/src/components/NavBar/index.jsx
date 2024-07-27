import React, {useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faBell} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <nav className='navbar-container'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
