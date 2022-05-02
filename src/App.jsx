import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Menu from './components/Menu'
import HamburgerMenu from "../src/assets/images/hamburgerIcon.png"
import "./App.css"
import AllCharacters from './pages/AllCharacters';
import AllLocations from './pages/AllLocations';

function App() {
  
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <div className="App">
      
      <button 
      className='toggle'
      onClick={() => { 
        setIsMenuOpen(true) 
        window.document.body.style.overflowY = "hidden"
      }}
      >
        <img src={ HamburgerMenu } alt="" />
      </button>


      <BrowserRouter>
        <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <Routes>
          <Route path="/" element={<AllCharacters/>}/>
          <Route path="/all-locations" element={<AllLocations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
