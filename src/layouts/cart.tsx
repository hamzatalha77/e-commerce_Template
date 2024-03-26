import React from 'react'

const Cart = () => {
  return (
    <section className="section container">
      <h2 className="breadcrumb__title">Shopping Cart Page</h2>
      <h3 className="breadcrumb__subtitle">
        Home {'>'} <span className="text-red-600">Shopping Cart</span>
      </h3>
      <div>
        <div className="first-div">
          <div className="titles">
            <h2>Shopping Cart</h2>
            <h2>3 Items</h2>
          </div>
          <div></div>
        </div>
        <div className="second-div"></div>
      </div>
    </section>
  )
}

export default Cart
