import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LogIn from './components/Login'
import Portfolio from './components/Portfolio'
import Persons from './components/Persons'
import PublicRelations from './components/PR'
import Carousel from './components/carousel'

import PublicRelationscopy from './components/PR copy'
import { SliderData }  from './components/SliderData'
import ImageSlider  from './components/ImageSlider'






import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn/>} />
          <Route exact path="/portfolio" element={<Portfolio/>} />
          <Route exact path="/persons" element={<Persons/>} />
          <Route exact path="/publicrelations" element={<PublicRelations/>} />
          <Route exact path="/carousels" element={<Carousel/>} />

          <Route exact path="/publicrelationscopy" element={<PublicRelationscopy/>} />
          <Route exact path="/ImageSlider" element={<ImageSlider/>} slides={<SliderData/>} />

          





          
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;