import React from 'react'

const Discount = () => {
  return (
    <section className="section">
      <div className="container grid grid-cols-[repeat(2,max-content)] justify-center items-center gap-x-28 bg-white px-[0] py-12 rounded-[3rem]">
        <img src="/img/discount.png" alt="" className="w-52" />
        <div className="pl-24 text-center">
          <h2 className="text-2xl mb-8">
            50% Discount <br /> On New Products{' '}
          </h2>
          <a
            href="/"
            className="inline-block bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500"
          >
            Go to new
          </a>
        </div>
      </div>
    </section>
  )
}

export default Discount
