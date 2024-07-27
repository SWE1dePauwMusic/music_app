import React from 'react'
import './App.css'
import { Sidebar } from './components/SideBar'
import NavBar from './components/NavBar/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Sidebar />
    </div>
  )
}

export default App
