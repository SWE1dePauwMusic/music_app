import React, {useState} from 'react'
import './index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight, faBell} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [activeCategory, setActiveCategory] = useState('');
  return (
    <div className='navbar-container'>
      <div className="navbar-left">
        <button className='icon-btn'>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </button>
        <button className='icon-btn'>
          <FontAwesomeIcon icon={faAngleRight}/>
        </button>
        <div className="category-buttons">
          {
            ['All', 'Music', 'Podcast', 'Audiobooks'].map((category) => (
              <button
                key = {category}
                className = {`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick = {() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))
          }
            {/* <button className='category-btn'>All</button>
            <button className='category-btn'>Music</button>
            <button className='category-btn'>Podcast</button>
            <button className='category-btn'>Audiobooks</button> */}
        </div>
      </div>
      <div className="navbar-right">
        <button className='icon-btn'>
          <FontAwesomeIcon icon={faBell}/>
        </button>
        <button className='icon-btn'>
          <img src="https://randomuser.me/api/portraits"/>
        </button>
      </div>
    </div>
  )
}

export default NavBar
