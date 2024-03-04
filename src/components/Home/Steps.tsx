const Steps = () => {
  return (
    <section className="section container">
      <div className="bg-white px-10 py-14 rounded-2xl steps__bg">
        <h2 className="text-center text-4xl mb-12 section__title">
          How to order Products <br />
          from PentaShop
        </h2>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-x-8 pt-4 steps__container">
          <div className="bg-[#F8F7FD] pt-10 pr-12 pb-8 pl-6 rounded-2xl group steps__card">
            <div className="inline-block bg-red-600 text-white px-3 py-2 text-2xl mb-6 group-hover:-translate-y-[.25rem] [transition:.3s] ">
              01
            </div>
            <h3 className="text-base mb-2">Choose Products</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              alias explicabo quaerat at!
            </p>
          </div>
          <div className="bg-[#F8F7FD] pt-10 pr-12 pb-8 pl-6 rounded-2xl group">
            <div className="inline-block bg-red-600 text-white px-3 py-2 text-2xl mb-6 group-hover:-translate-y-[.25rem] [transition:.3s]">
              02
            </div>
            <h3 className="text-base mb-2">Place order</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              alias explicabo quaerat at!
            </p>
          </div>
          <div className="bg-[#F8F7FD] pt-10 pr-12 pb-8 pl-6 rounded-2xl group">
            <div className="inline-block bg-red-600 text-white px-3 py-2 text-2xl mb-6 group-hover:-translate-y-[.25rem] [transition:.3s]">
              03
            </div>
            <h3 className="text-base mb-2">Get order delivered</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              alias explicabo quaerat at!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
