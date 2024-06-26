import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  toggleCart: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    const storedMenuState = localStorage.getItem('isMenuOpen')
    return storedMenuState ? JSON.parse(storedMenuState) : false
  })

  const [activeLink, setActiveLink] = useState<string>('')

  useEffect(() => {
    localStorage.setItem('isMenuOpen', JSON.stringify(isMenuOpen))
  }, [isMenuOpen])

  const toggleClass = () => {
    setIsMenuOpen((prevState: any) => !prevState)
  }

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
    toggleClass()
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
            <li
              className={`text-slate-700 font-medium text-base ${
                activeLink === '/' ? 'active-link' : ''
              }`}
              onClick={() => handleLinkClick('/')}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`text-slate-700 font-medium text-base ${
                activeLink === '/shop' ? 'active-link' : ''
              }`}
              onClick={() => handleLinkClick('/shop')}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`text-slate-700 font-medium text-base ${
                activeLink === '/cart' ? 'active-link' : ''
              }`}
              onClick={() => handleLinkClick('/cart')}
            >
              <Link to="/cart">Cart</Link>
            </li>
            <li
              className={`text-slate-700 font-medium text-base ${
                activeLink === '/blog' ? 'active-link' : ''
              }`}
              onClick={() => handleLinkClick('/blog')}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className={`text-slate-700 font-medium text-base ${
                activeLink === '/faqs' ? 'active-link' : ''
              }`}
              onClick={() => handleLinkClick('/faqs')}
            >
              <Link to="/faqs">Faq's</Link>
            </li>
            <li
              className={`text-slate-700 font-medium text-base ${
                activeLink === '/contact' ? 'active-link' : ''
              }`}
              onClick={() => handleLinkClick('/contact')}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li
              className={`text-slate-700 font-medium text-base ${
                activeLink === '/payment' ? 'active-link' : ''
              }`}
              onClick={() => handleLinkClick('/payment')}
            >
              <Link to="/payment">payment</Link>
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
