import React, { useState } from 'react'

const Cart = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = (dropdownId: any) => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 ">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                3 Items
              </h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Product Details
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Quantity
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200">
              <i className="bx bx-x text-2xl font-extrabold text-red-600"></i>
              <div className="w-full md:max-w-[126px]">
                <img
                  src="/img/cart-1.png"
                  alt="perfume bottle "
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black">
                      Rose Petals Divine
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500">
                      Perfumes
                    </h6>
                    <h6 className="font-semibold text-base leading-7 text-red-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <i className="bx bx-minus"></i>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                      placeholder="1"
                    />
                    <button className="group rounded-r-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <i className="bx bx-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-red-600 text-center">
                    $120.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200">
              <i className="bx bx-x text-2xl font-extrabold text-red-600"></i>
              <div className="w-full md:max-w-[126px]">
                <img
                  src="/img/cart-1.png"
                  alt="perfume bottle "
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black">
                      Musk Rose Cooper
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500">
                      Perfumes
                    </h6>
                    <h6 className="font-semibold text-base leading-7 text-red-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <i className="bx bx-minus"></i>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                      placeholder="2"
                    />
                    <button className="group rounded-r-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <i className="bx bx-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-red-600 text-center">
                    $240.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200">
              <i className="bx bx-x text-2xl font-extrabold text-red-600"></i>
              <div className="w-full md:max-w-[126px]">
                <img
                  src="/img/cart-1.png"
                  alt="perfume bottle "
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black">
                      Dusk Dark Hue
                    </h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500">
                      Perfumes
                    </h6>
                    <h6 className="font-semibold text-base leading-7 text-red-600">
                      $120.00
                    </h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <i className="bx bx-minus"></i>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                      placeholder="1"
                    />
                    <button className="group rounded-r-full px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <i className="bx bx-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-red-600 text-center">
                    $120.00
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-8">
              <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 font-semibold text-lg leading-8 text-red-600 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-50">
                Add Coupon Code
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
          <div className=" col-span-12 xl:col-span-4  w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="text-base leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-normal text-lg leading-8 text-black">
                  3 Items
                </p>
                <p className="font-medium text-lg leading-8 text-black">
                  $480.00
                </p>
              </div>
              <form>
                <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                  Shipping
                </label>
                <div className="flex pb-6">
                  <div className="relative w-full z-50">
                    <div className="absolute left-0 top-0 py-3 px-4">
                      <span className="font-normal text-base text-gray-300">
                        Second Delivery
                      </span>
                    </div>
                    <input
                      type="text"
                      className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                      placeholder="$5.00"
                    />
                    <button
                      id="dropdown-button"
                      data-target="dropdown-delivery"
                      className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                      type="button"
                      onClick={() => toggleDropdown('dropdown-delivery')}
                    >
                      <i className="bx bx-chevron-down"></i>
                    </button>
                    <div
                      id="dropdown-delivery"
                      aria-labelledby="dropdown-delivery"
                      className={`${
                        isDropdownOpen ? 'block' : 'hidden'
                      } divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 bg-white right-0`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <a
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Option 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Option 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Option 3
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Option 4
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                  Promo Code
                </label>
                <div className="flex pb-4 w-full">
                  <div className="relative w-full ">
                    <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                    <input
                      type="text"
                      className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                      placeholder="xxxx xxxx xxxx"
                    />
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-200">
                  <button className="rounded-full w-full bg-black py-3 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                    Apply
                  </button>
                </div>
                <div className="flex items-center justify-between py-8">
                  <p className="font-medium text-xl leading-8 text-black">
                    3 Items
                  </p>
                  <p className="font-semibold text-xl leading-8 text-red-600">
                    $485.00
                  </p>
                </div>
                <button className="w-full text-center bg-red-600 rounded-full py-4 px-6 font-semibold text-lg text-white transition-all duration-500 [transition:.3s] hover:bg-red-500">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
