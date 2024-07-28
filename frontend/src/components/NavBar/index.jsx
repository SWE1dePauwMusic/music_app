import React, {useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'

const NavBar = () => {
  return (
    <nav className='navbar-container'>
      <ul>
        <li className='brand-name'><h1>Melify</h1></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className='nav-right'>
          <div className="search-container">
            <input type='text' placeholder='Search' className='search-input'/>
            <FontAwesomeIcon 
              icon={faMagnifyingGlass}
              className='search-icon'
              onClick={() => console.log('searching...')}
            />
          </div>
          <div className="user-image-container">
            <FontAwesomeIcon 
              icon={faUser}
              className='user-image'
              onClick={() => console.log('user profile')}
            />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
