const Blog = () => {
  return (
    <section className="section container">
      <h2 className="breadcrumb__title">Blog Page</h2>
      <h3 className="breadcrumb__subtitle">
        Home {'>'} <span className="text-red-600">Blog</span>
      </h3>
      <div className="gap-y-[1.8rem] grid">
        <div className="grid-cols-[.8fr_1.2fr] gap-x-8 items-center bg-white rounded-[1.2rem] p-[1.4rem] grid blog__post">
          <img src="/img/blog-1.webp" alt="" className="rounded-[.8rem]" />
          <div>
            <p className="text-sm text-justify mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              illo modi consequatur voluptatem fugiat ipsum nihil vero laborum
              commodi sit?
            </p>
            <h3 className="text-xl font-medium mb-2 blog__title">
              From Now We Are Certified Web...
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              By Admin / Jan 05,2024 /
            </p>
            <div className="text-right">
              <a href="/">
                Read More <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-cols-[.8fr_1.2fr] gap-x-8 items-center bg-white rounded-[1.2rem] p-[1.4rem] grid">
          <img src="/img/blog-1.webp" alt="" className="rounded-[.8rem]" />
          <div>
            <p className="text-sm text-justify mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              illo modi consequatur voluptatem fugiat ipsum nihil vero laborum
              commodi sit?
            </p>
            <h3 className="text-xl font-medium mb-2">
              From Now We Are Certified Web...
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              By Admin / Jan 05,2024 /
            </p>
            <div className="text-right">
              <a href="/">
                Read More <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="grid-cols-[.8fr_1.2fr] gap-x-8 items-center bg-white rounded-[1.2rem] p-[1.4rem] grid">
          <img src="/img/blog-1.webp" alt="" className="rounded-[.8rem]" />
          <div>
            <p className="text-sm text-justify mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              illo modi consequatur voluptatem fugiat ipsum nihil vero laborum
              commodi sit?
            </p>
            <h3 className="text-xl font-medium mb-2">
              From Now We Are Certified Web...
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              By Admin / Jan 05,2024 /
            </p>
            <div className="text-right">
              <a href="/">
                Read More <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
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

export default Blog
