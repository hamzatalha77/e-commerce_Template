const Shop = () => {
  return (
    <section className="section container">
      <h2 className="breadcrumb__title">Shop Page</h2>
      <h3 className="breadcrumb__subtitle">
        Home {'>'} <span className="text-red-600">Shop</span>
      </h3>
      <div className="grid grid-cols-[1.7fr_3.3fr] gap-x-[1.8rem] shop__container">
        <div className="p-[1.8rem] bg-white rounded-2xl sidebar">
          <h3 className="text-xl uppercase">Select Filters</h3>
          <div>
            <h3 className="mt-5 mx-[0] mb-2 text-base">Condition</h3>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">New</p> <span>(13)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Sale</p> <span>(10)</span>
            </div>
          </div>
          <div>
            <h3 className="mt-5 mx-[0] mb-2 text-base">Size</h3>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">S</p> <span>(16)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">M</p> <span>(12)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">L</p> <span>(9)</span>
            </div>
          </div>
          <div>
            <h3 className="mt-5 mx-[0] mb-2 text-base">Category</h3>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Men</p> <span>(16)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Woman</p> <span>(12)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Kids</p> <span>(9)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Others</p> <span>(9)</span>
            </div>
          </div>
          <div>
            <h3 className="mt-5 mx-[0] mb-2 text-base">Styles</h3>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Casual</p> <span>(16)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Dressy</p> <span>(12)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Girly</p> <span>(9)</span>
            </div>
          </div>
          <div>
            <h3 className="mt-5 mx-[0] mb-2 text-base">Sub Categories</h3>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Jacket</p> <span>(16)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">T-shirt</p> <span>(12)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Accessories</p> <span>(9)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Shoes</p> <span>(9)</span>
            </div>
            <div className="flex items-center mb-2 text-gray-600 text-sm">
              <input type="checkbox" className="mr-3 cursor-pointer" />
              <p className="flex-[1]">Coats</p> <span>(9)</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(2,1fr)] gap-[1.6rem] shop__items">
          <div className="relative bg-white py-8 px-0 rounded-2xl text-center overflow-hidden group shop__centent">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm py-2 px-1 rounded">
              New
            </div>
            <img
              src="/img/product-2.png"
              alt=""
              className="w-[150px] mb-4 inline [transition:.3s] group-hover:-translate-y-[.5rem] shop__img"
            />
            <h3 className="text-xl font-medium shop__title">Cartoon Jacket</h3>
            <span className="block text-sm mb-4 shop__subtitle">Accessory</span>

            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/product"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24  group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </div>
          <div className="relative bg-white py-8 px-0 rounded-2xl text-center overflow-hidden group shop__centent">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm py-2 px-1 rounded">
              New
            </div>
            <img
              src="/img/product-2.png"
              alt=""
              className="w-[150px] mb-4 inline [transition:.3s] group-hover:-translate-y-[.5rem] shop__img"
            />
            <h3 className="text-xl font-medium shop__title">Cartoon Jacket</h3>
            <span className="block text-sm mb-4 shop__subtitle">Accessory</span>

            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/product"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24  group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </div>
          <div className="relative bg-white py-8 px-0 rounded-2xl text-center overflow-hidden group shop__centent">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm py-2 px-1 rounded">
              New
            </div>
            <img
              src="/img/product-2.png"
              alt=""
              className="w-[150px] mb-4 inline [transition:.3s] group-hover:-translate-y-[.5rem] shop__img"
            />
            <h3 className="text-xl font-medium shop__title">Cartoon Jacket</h3>
            <span className="block text-sm mb-4 shop__subtitle">Accessory</span>

            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/product"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24  group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </div>
          <div className="relative bg-white py-8 px-0 rounded-2xl text-center overflow-hidden group shop__centent">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm py-2 px-1 rounded">
              New
            </div>
            <img
              src="/img/product-2.png"
              alt=""
              className="w-[150px] mb-4 inline [transition:.3s] group-hover:-translate-y-[.5rem] shop__img"
            />
            <h3 className="text-xl font-medium shop__title">Cartoon Jacket</h3>
            <span className="block text-sm mb-4 shop__subtitle">Accessory</span>

            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/product"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24  group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </div>
          <div className="relative bg-white py-8 px-0 rounded-2xl text-center overflow-hidden group shop__centent">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm py-2 px-1 rounded">
              New
            </div>
            <img
              src="/img/product-2.png"
              alt=""
              className="w-[150px] mb-4 inline [transition:.3s] group-hover:-translate-y-[.5rem] shop__img"
            />
            <h3 className="text-xl font-medium shop__title">Cartoon Jacket</h3>
            <span className="block text-sm mb-4 shop__subtitle">Accessory</span>

            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/product"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24  group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </div>
          <div className="relative bg-white py-8 px-0 rounded-2xl text-center overflow-hidden group shop__centent">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm py-2 px-1 rounded">
              New
            </div>
            <img
              src="/img/product-2.png"
              alt=""
              className="w-[150px] mb-4 inline [transition:.3s] group-hover:-translate-y-[.5rem] shop__img"
            />
            <h3 className="text-xl font-medium shop__title">Cartoon Jacket</h3>
            <span className="block text-sm mb-4 shop__subtitle">Accessory</span>

            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/product"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24  group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-[.8rem] mt-10 text-base pagination">
        <i className="bx bx-chevron-left text-2xl"></i>
        <span className="w-[2.2rem] h-[2.2rem] leading-9 text-center rounded-[50%] cursor-pointer bg-red-600 text-white ">
          1
        </span>

        <span className="w-[2.2rem] h-[2.2rem] leading-9 text-center rounded-[50%] cursor-pointer">
          2
        </span>
        <span className="w-[2.2rem] h-[2.2rem] leading-9 text-center rounded-[50%] cursor-pointer">
          3
        </span>
        <span className="w-[2.2rem] h-[2.2rem] leading-9 text-center rounded-[50%] cursor-pointer">
          &middot; &middot; &middot;
        </span>
        <span className="w-[2.2rem] h-[2.2rem] leading-9 text-center rounded-[50%] cursor-pointer">
          9
        </span>
        <i className="bx bx-chevron-right text-2xl"></i>
      </div>
    </section>
  )
}

export default Shop
