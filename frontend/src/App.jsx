import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import SidebarContainer from './components/SideBar';
function App() {
  return (
    <Router> 
      <div className='app-container'>
        <NavBar />
        <div className="content-container">
<<<<<<< HEAD
          <SidebarContainer />
          {/* <main className="main-content">
=======
          {/* <SidebarContainer /> */}
          <main className="main-content">
>>>>>>> 79cf0555d6b8b9dc98e85917076e65a8d1954bea
            <Routes>
             
              <Route path='/' element={ <Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
             
              <Route path='/recent' element={ <Recent />} />
              <Route path='/playlist' element={<Playlist />} />
              <Route path='/favourite' element={<Favorite />} />
              <Route path='/chat' element={<Chat />} />
            </Routes>
<<<<<<< HEAD
          </main> */}
          {/* <Footer /> */}
=======
          </main>
        <div className="footer">
          <Footer />
>>>>>>> 79cf0555d6b8b9dc98e85917076e65a8d1954bea
        </div>
        </div>
      </div>
    </Router>
  )
}

export default App
