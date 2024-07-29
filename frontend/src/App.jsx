import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar'
import Recent from './components/Recent';
import Playlist from './components/Playlist';
import Favorite from './components/Favorite';
import Chat from './pages/Chat';
import Footer from './components/Footer';
import NavBar from './components/NavBar/index.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
  return (
    <Router> 
      <div className='app-container'>
        <NavBar />
        <div className="content-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              {/* navbar route */}
              <Route path='/' element={ <Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              {/* sidebar route */}
              <Route path='/recent' element={ <Recent />} />
              <Route path='/playlist' element={<Playlist />} />
              <Route path='/favourite' element={<Favorite />} />
              <Route path='/chat' element={<Chat />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
