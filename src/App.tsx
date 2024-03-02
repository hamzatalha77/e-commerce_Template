import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './layouts/home'
import Cart from './components/Cart'
import './App.css'
import ScrollUp from './components/ScrollUp'

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <Router>
      <Header toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {isCartOpen && <Cart toggleCart={toggleCart} />}
      <ScrollUp />
    </Router>
  )
}

export default App
