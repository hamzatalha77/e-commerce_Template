import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './layouts/home'
import Cart from './components/Cart'
import './App.css'
import ScrollUp from './components/ScrollUp'
import Footer from './components/Footer'
import Shop from './layouts/shop'

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
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {isCartOpen && <Cart toggleCart={toggleCart} />}
      <ScrollUp />
      <Footer />
    </Router>
  )
}

export default App
