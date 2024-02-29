import React from 'react'

const HomeSwiper = () => {
  return (
    <section className="container">
      <div>
        <div>
          <section>
            <div className="grid-cols-[repeat(2,1fr)] pt-36 px-[0] pb-8 grid">
              <div className="grid relative pt-8">
                <img
                  src="/img/slide-2.png"
                  alt=""
                  className="h-[420px] -translate-y-12 justify-self-center"
                />
                <div className="w-2 h-2 bg-slate-900 rounded-[50%] absolute bottom-[15%] left-[45%] after:content-[''] after:absolute after:w-[1px] after:h-[75px] after:bg-slate-900 after:top-0 after:right-[45%]"></div>
                <div className="absolute bottom-0 right-[58%]">
                  <h4 className="block text-sm text-right ">The "Cardigan"</h4>
                  <span className="block text-sm text-right">Woolen</span>
                </div>
              </div>
              <div>
                <h3 className="text-base uppercase mb-4">1# TRENDING ITEM</h3>
                <h1 className="text-[4rem] font-semibold leading-[109%] mb-6 ">
                  ORIGINAL
                  <br />
                  IS NEVER <br />
                  FINISHED!!
                </h1>
                <p className="mb-10 pr-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum possimus, aut placeat. Eaque laudantium dolorum omnis?
                  Perferendis nisi dolore ut?
                </p>
                <div className="flex justify-between">
                  <a
                    href="/"
                    className="inline-block bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500"
                  >
                    Buy Now
                  </a>
                  <a
                    href="/"
                    className="text-gray-900 inline-flex items-center gap-2"
                  >
                    View Details
                    <i className="bx bx-right-arrow-alt text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default HomeSwiper
