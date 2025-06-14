import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import ScrollToTop from '../src/components/layouts/ScrollToTop';
import './App.css'

function App() {
  

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path = "/about" element = {<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element = {<ContactPage />} />
          <Route path="/services" element= {<ServicesPage />} />          
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App;
