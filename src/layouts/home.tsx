import React from 'react'
import Cart from '../components/Cart'
import HomeSwiper from '../components/HomeSwiper'
import Discount from '../components/Discount'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
  return (
    <div>
      <Cart />
      <HomeSwiper />
      <Discount />
      <NewArrivals />
    </div>
  )
}

export default Home
