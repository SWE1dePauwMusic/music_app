import React from 'react'
import './App.css'
import NavBar from './components/NavBar/index.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div>
      <h1>Music App</h1>
      <FontAwesomeIcon icon={faCheck} />
      <NavBar />
    </div>
  )
}

export default App
