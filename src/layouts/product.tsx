import { useState } from 'react'
import RelatedProducts from '../components/Product_Details/RelatedProducts'

const Product = () => {
  const [openTab, setOpenTab] = useState(1)
  return (
    <section className="section container">
      <h2 className="breadcrumb__title">Details Page</h2>
      <h3 className="breadcrumb__subtitle">
        Home {'>'} <span className="text-red-600">Details</span>
      </h3>
      <div className="grid grid-cols-[repeat(2,1fr)] items-center gap-x-12 details__container">
        <div className="grid grid-cols-[repeat(2,1fr)] gap-[1.4rem] product__images">
          <div className="bg-white py-0 px-[1.2rem] flex justify-center items-center rounded-lg relative cursor-pointer">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm py-2 px-[.16rem] rounded">
              New
            </div>
            <img src="/img/details-1.png" alt="" className="w-[150px]" />
          </div>
          <div className="bg-white py-0 px-[1.2rem] flex justify-center items-center rounded-lg relative cursor-pointer">
            <img src="/img/details-2.png" alt="" className="w-[150px]" />
          </div>
          <div className="bg-white py-0 px-[1.2rem] flex justify-center items-center rounded-lg relative cursor-pointer">
            <img src="/img/details-3.png" alt="" className="w-[150px]" />
          </div>
          <div className="bg-white py-0 px-[1.2rem] flex justify-center items-center rounded-lg relative cursor-pointer">
            <img src="/img/details-4.png" alt="" className="w-[150px]" />
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Woman {'>'} Jacket's </p>
          <h3 className="text-2xl font-medium mb-3 details__title">
            Windbreaker , Denim - Jacket
          </h3>
          <div className="flex items-center gap-x-[1.2rem] mb-4">
            <div>
              <i className="bx bxs-star mr-[.1rem]"></i>
              <i className="bx bxs-star mr-[.1rem]"></i>
              <i className="bx bxs-star mr-[.1rem]"></i>
              <i className="bx bxs-star mr-[.1rem]"></i>
              <i className="bx bx-star mr-[.1rem]"></i>
            </div>
            <span className="text-sm">40 + Reviews</span>
          </div>
          <div className="inline-flex items-center gap-x-[.8rem] mb-6">
            <span className="font-medium text-gray-900 text-xl">$29.99</span>
            <span className="text-red-600 line-through font-medium">
              $14.99
            </span>
            <span className="bg-gray-900 py-[.40rem] px-[.25rem] text-sm text-white">
              50% OFF
            </span>
          </div>
          <div>
            <h3 className="text-base mb-2">Product Details</h3>
            <div className="mb-8 text-sm">
              <p>Light Gray solid Top, has a boat neck, 3/4 sleeves</p>
            </div>
          </div>
          <div className="flex items-center gap-x-12 mb-10">
            <div className="flex items-center gap-x-4">
              <span className="inline-flex p-1 bg-white cursor-pointer">
                <i className="bx bx-minus"></i>
              </span>
              <span>1</span>
              <span className="inline-flex p-1 bg-white cursor-pointer">
                <i className="bx bx-plus"></i>
              </span>
            </div>
            <i className="bx bx-heart text-lg text-red-600 cursor-pointer"></i>
          </div>
          <a
            href="/"
            className="inline-block bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500"
          >
            Add To Cart
          </a>
        </div>
      </div>

      <section className="section container">
        <div className="container mx-auto mt-12">
          <div className="flex flex-col  justify-center ">
            <ul className="flex space-x-2">
              <li>
                <div
                  onClick={() => setOpenTab(1)}
                  className={` ${
                    openTab === 1 ? 'bg-purple-600 text-white' : ''
                  } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
                >
                  Comments
                </div>
              </li>
              <li>
                <div
                  onClick={() => setOpenTab(2)}
                  className={` ${
                    openTab === 2 ? 'bg-purple-600 text-white' : ''
                  } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
                >
                  Description
                </div>
              </li>
            </ul>
            <div className="p-3 mt-6 bg-white border">
              <div className={openTab === 1 ? 'block' : 'hidden'}>
                <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
                  <div className="max-w-2xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                        Discussion (20)
                      </h2>
                    </div>
                    <form className="mb-6">
                      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label htmlFor="comment" className="sr-only">
                          Your comment
                        </label>
                        <textarea
                          id="comment"
                          rows={6}
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a comment..."
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                      >
                        Post comment
                      </button>
                    </form>
                    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                      <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                            <img
                              className="mr-2 w-6 h-6 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                              alt="Hamza Talha"
                            />
                            Hamza Talha
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <time
                              dateTime="2022-02-08"
                              title="February 8th, 2022"
                            >
                              Feb. 8, 2022
                            </time>
                          </p>
                        </div>
                        <button
                          id="dropdownComment1Button"
                          data-dropdown-toggle="dropdownComment1"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                          >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                          </svg>
                          <span className="sr-only">Comment settings</span>
                        </button>

                        <div
                          id="dropdownComment1"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton"
                          >
                            <li>
                              <a
                                href="/"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Remove
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Report
                              </a>
                            </li>
                          </ul>
                        </div>
                      </footer>
                      <p className="text-gray-500 dark:text-gray-400">
                        Very straight-to-point article. Really worth time
                        reading. Thank you! But tools are just the instruments
                        for the UX designers. The knowledge of the design tools
                        are as important as the creation of the design strategy.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        >
                          <svg
                            className="mr-1.5 w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                            />
                          </svg>
                          Reply
                        </button>
                      </div>
                    </article>
                  </div>
                </section>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'}>
                React JS with Tailwind CSS Tab 2 Content show
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts />
    </section>
  )
}

export default Product
