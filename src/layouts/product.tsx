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
      <div className="grid grid-cols-[repeat(2,1fr)] items-center gap-x-12">
        <div className="grid grid-cols-[repeat(2,1fr)] gap-[1.4rem]">
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
          <h3 className="text-2xl font-medium mb-3">
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
          <div className="flex flex-col items-center justify-center max-w-xl">
            <ul className="flex space-x-2">
              <li>
                <div
                  onClick={() => setOpenTab(1)}
                  className={` ${
                    openTab === 1 ? 'bg-purple-600 text-white' : ''
                  } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
                >
                  React Tabs 1
                </div>
              </li>
              <li>
                <div
                  onClick={() => setOpenTab(2)}
                  className={` ${
                    openTab === 2 ? 'bg-purple-600 text-white' : ''
                  } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
                >
                  React Tabs 2
                </div>
              </li>
            </ul>
            <div className="p-3 mt-6 bg-white border">
              <div className={openTab === 1 ? 'block' : 'hidden'}>
                React JS with Tailwind CSS Tab 1 Content show
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
