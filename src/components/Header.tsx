import { useState } from 'react'

interface HeaderProps {
  toggleCart: () => void
}
const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleClass = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header
      className="w-full bg-transparent fixed top-0 left-0 z-50"
      id="header"
    >
      <nav className="h-20 flex justify-between items-center gap-x-12 container nav">
        <a
          href="/"
          className="text-gray-800 lowercase font-semibold tracking-wider inline-flex items-center gap-x-1"
        >
          <i className="bx bxs-shopping-bags text-xl"></i>PentaShop
        </a>
        <div id="nav-menu" className={isMenuOpen ? 'nav__menu' : 'show__menu'}>
          <ul className="flex items-center gap-x-8 nav__list">
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
          <div
            id="nav-close"
            onClick={toggleClass}
            className="text-gray-900 text-3xl absolute top-[.9rem] right-5 cursor-pointer hidden nav__close"
          >
            <i className="bx bx-x"></i>
          </div>
        </div>
        <div className="flex items-center gap-x-4 ml-auto mr-12">
          <div className="text-gray-800 text-xl cursor-pointer">
            <i className="bx bx-user"></i>
          </div>
          <div
            className="text-gray-800 text-xl cursor-pointer"
            onClick={toggleCart}
          >
            <i className="bx bx-shopping-bag"></i>
          </div>
          <div
            id="nav-toggle"
            onClick={toggleClass}
            className="text-gray-800 text-xl cursor-pointer hidden nav__toggle"
          >
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
