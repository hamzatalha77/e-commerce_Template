const Footer = () => {
  return (
    <footer className="section relative overflow-hidden">
      <div className="container grid grid-cols-[repeat(4,1fr)] justify-center gap-x-4">
        <div>
          <a
            href="/"
            className="text-gray-900 lowercase font-semibold tracking-[1px] inline-flex items-center gap-x-1 mb-4"
          >
            <i className="bx bxs-shopping-bags text-base"></i>PentaShop
          </a>
          <p className="mb-10">
            Enjoy the biggest sale <br />
            of your life.
          </p>
          <div className="flex gap-x-3">
            <a
              href="/"
              className="inline-flex bg-white p-1 text-gray-900 text-base rounded  hover:bg-red-600 hover:text-white"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="/"
              className="inline-flex bg-white p-1 text-gray-900 text-base rounded hover:bg-red-600 hover:text-white"
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a
              href="/"
              className="inline-flex bg-white p-1 text-gray-900 text-base rounded hover:bg-red-600 hover:text-white"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl mb-4">About</h3>
          <ul className="grid gap-y-[.35rem]">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                Support Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-4">Our Services</h3>
          <ul className="grid gap-y-[.35rem]">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                Discounts
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                Shopping Mode
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-4">Our Company</h3>
          <ul className="grid gap-y-[.35rem]">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 [transition:.3s] hover:text-gray-900"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="block text-center text-sm mt-24">
        &#169; Hamza Talha. All right reserved
      </span>
    </footer>
  )
}

export default Footer
