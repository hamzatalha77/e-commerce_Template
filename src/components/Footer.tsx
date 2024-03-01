const Footer = () => {
  return (
    <footer className="section relative overflow-hidden">
      <div className="container grid grid-cols-[repeat(4,1fr)] justify-center gap-x-4">
        <div>
          <a
            href="/"
            className="text-gray-900 lowercase font-semibold tracking-[1px] inline-flex items-center gap-x-1 mb-4"
          >
            <i className="bx bx-bxs-shopping-bags"></i>PentaShop
          </a>
          <p>
            Enjoy the biggest sale <br />
            of your life.
          </p>
          <div>
            <a href="/">
              <i className="bx bx-bxl-facebook"></i>
            </a>
            <a href="/">
              <i className="bx bx-bxl-instagram-alt"></i>
            </a>
            <a href="/">
              <i className="bx bx-bxl-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          <h3>About</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Customer Support</a>
            </li>
            <li>
              <a href="/">Support Center</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Discounts</a>
            </li>
            <li>
              <a href="/">Shopping Mode</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Our Company</h3>
          <ul>
            <li>
              <a href="/">Register</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </div>
      </div>
      <span>&#169; Hamza Talha. All right reserved</span>
    </footer>
  )
}

export default Footer
