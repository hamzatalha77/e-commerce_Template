import React from 'react'
import 'boxicons'

const Header = () => {
  return (
    <header
      className="w-full bg-transparent fixed top-0 left-0 z-50"
      id="header"
    >
      <nav className="h-20 flex justify-between items-center gap-x-12 container">
        <a
          href="/"
          className="text-gray-800 lowercase font-semibold tracking-wider inline-flex items-center gap-x-1"
        >
          <i className="bx bxs-shopping-bags text-xl"></i>PentaShop
        </a>
        <div className="">
          <ul className="flex items-center gap-x-8">
            <li className="text-slate-700 font-medium text-base active-link">
              <a href="/">Home</a>
            </li>
            <li className="text-slate-700 font-medium text-base">
              <a href="/">Shop</a>
            </li>
            <li className="text-slate-700 font-medium text-base">
              <a href="/">Cart</a>
            </li>
            <li className="text-slate-700 font-medium text-base">
              <a href="/">Blog</a>
            </li>
            <li className="text-slate-700 font-medium text-base">
              <a href="/">Faq's</a>
            </li>
            <li className="text-slate-700 font-medium text-base">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-4 ml-auto">
          <div className="text-gray-800 text-xl cursor-pointer">
            <i className="bx bx-user"></i>
          </div>
          <div className="text-gray-800 text-xl cursor-pointer">
            <i className="bx bx-shopping-bag"></i>
          </div>
          <div className="text-gray-800 text-xl cursor-pointer hidden">
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
