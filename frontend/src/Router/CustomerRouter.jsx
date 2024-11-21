import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import About from '../Components/About/About'
import Portfolio from '../Components/Portfolio/Portfolio'
import Service from '../Components/Services/Services'
import Contact from '../Components/Contact/Contact'

const CustomerRouter = () => {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
      <Footer />
    </div>

  )
}

export default CustomerRouter
