import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const NewArrivals = () => {
  return (
    <section className="section">
      <h2 className="text-4xl text-center mb-12">New Arrivals</h2>
      <div className="container pt-4">
        <Swiper
          slidesPerView={'auto'}
          loop={true}
          centeredSlides={true}
          spaceBetween={16}
          className="mySwiper"
        >
          <SwiperSlide className="relative bg-white w-[310px] px-[0] py-8 rounded-2xl text-center group overflow-hidden self-center new__content">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm px-[.5rem] py-[.25rem] rounded">
              New
            </div>
            <img
              src="/img/new-1.png"
              alt=""
              className="w-[150px] inline mb-4 group-hover:-translate-y-[.5rem] [transition:.3s] new__img"
            />
            <h3 className="text-xl font-medium new__title">
              WindBreaker Jacket
            </h3>
            <span className="block text-sm mb-4 new__subtitle">Accessory</span>
            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24 group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="relative bg-white w-[310px] px-[0] py-8 rounded-2xl text-center group overflow-hidden self-center">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm px-[.5rem] py-[.25rem] rounded">
              New
            </div>
            <img
              src="/img/new-1.png"
              alt=""
              className="w-[150px] inline mb-4 group-hover:-translate-y-[.5rem] [transition:.3s]"
            />
            <h3 className="text-xl font-medium">WindBreaker Jacket</h3>
            <span className="block text-sm mb-4">Accessory</span>
            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24 group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="relative bg-white w-[310px] px-[0] py-8 rounded-2xl text-center group overflow-hidden self-center">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm px-[.5rem] py-[.25rem] rounded">
              New
            </div>
            <img
              src="/img/new-1.png"
              alt=""
              className="w-[150px] inline mb-4 group-hover:-translate-y-[.5rem] [transition:.3s]"
            />
            <h3 className="text-xl font-medium">WindBreaker Jacket</h3>
            <span className="block text-sm mb-4">Accessory</span>
            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24 group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="relative bg-white w-[310px] px-[0] py-8 rounded-2xl text-center group overflow-hidden self-center">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm px-[.5rem] py-[.25rem] rounded">
              New
            </div>
            <img
              src="/img/new-1.png"
              alt=""
              className="w-[150px] inline mb-4 group-hover:-translate-y-[.5rem] [transition:.3s]"
            />
            <h3 className="text-xl font-medium">WindBreaker Jacket</h3>
            <span className="block text-sm mb-4">Accessory</span>
            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24 group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="relative bg-white w-[310px] px-[0] py-8 rounded-2xl text-center group overflow-hidden self-center">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm px-[.5rem] py-[.25rem] rounded">
              New
            </div>
            <img
              src="/img/new-1.png"
              alt=""
              className="w-[150px] inline mb-4 group-hover:-translate-y-[.5rem] [transition:.3s]"
            />
            <h3 className="text-xl font-medium">WindBreaker Jacket</h3>
            <span className="block text-sm mb-4">Accessory</span>
            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24 group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </SwiperSlide>
          <SwiperSlide className="relative bg-white w-[310px] px-[0] py-8 rounded-2xl text-center group overflow-hidden self-center">
            <div className="absolute top-[8%] left-[8%] bg-red-600 text-white text-sm px-[.5rem] py-[.25rem] rounded">
              New
            </div>
            <img
              src="/img/new-1.png"
              alt=""
              className="w-[150px] inline mb-4 group-hover:-translate-y-[.5rem] [transition:.3s]"
            />
            <h3 className="text-xl font-medium">WindBreaker Jacket</h3>
            <span className="block text-sm mb-4">Accessory</span>
            <div className="inline-flex items-center gap-x-2">
              <span className="font-medium text-gray-900">$14.99</span>
              <span className="text-red-600 text-sm line-through font-medium">
                $29.99
              </span>
            </div>
            <a
              href="/"
              className="bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500 inline-block p-2 rounded-tl-[.25rem] rounded-br-[.75rem] rounded-tr-[.25rem] rounded-bl-[.25rem] absolute bottom-0 -right-24 group-hover:right-0"
            >
              <i className="bx bx-cart-alt text-xl"></i>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default NewArrivals
