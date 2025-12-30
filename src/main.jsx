import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'



import { About } from './components/About'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { PageNotFound } from './components/PageNotFound'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { New } from './components/New'
import { Detail } from './components/Detail'









let App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>


          <Route path='/' element={<New />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/card' element={<Card />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

createRoot(document.getElementById('root')).render(
  <App />
)
