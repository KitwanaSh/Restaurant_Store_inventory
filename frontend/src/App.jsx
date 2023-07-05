import React from 'react'
import  Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'

function App() {
  return (
  <>
  <BrowserRouter>
    <div className='main-page'>
      <div className='navbar-main'>
        <Navbar />
      </div>
      <div className='contents'>
        <Routes>
          
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  </>
  )
}

export default App
