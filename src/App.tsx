import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './layouts/home'
import './App.css'
import ScrollUp from './components/ScrollUp'
import Footer from './components/Footer'
import Shop from './layouts/shop'
import Blog from './layouts/blog'
import Product from './layouts/product'
import Cart from './layouts/cart'
import CartSide from './components/CartSide'
import Login from './layouts/login'
import Payment from './layouts/payment'

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <Router>
      {/* <Header toggleCart={toggleCart} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {isCartOpen && <CartSide toggleCart={toggleCart} />}
      <ScrollUp />
      {/* <Footer /> */}
    </Router>
  )
}

export default App
