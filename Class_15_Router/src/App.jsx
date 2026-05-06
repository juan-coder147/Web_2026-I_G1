import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'

//pages
import Home from './Pages/Home/Home'
import Characters from './Pages/Characters/Characters'
import About from './Pages/About/About'
import Error from './Pages/Error/Error'


function App() {
  

  return (
    <>
        <Header />
        <Nav />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>

    </>
  )
}

export default App
