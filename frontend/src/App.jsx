import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar'
import NavBar from './components/NavBar/index.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router> 
      <div>
        <NavBar />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        {/* <Sidebar /> */}
      </div>
    </Router>
  )
}

export default App
