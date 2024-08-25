import React from 'react'

const Faqs = () => {
  return (
    <div className="questions section container">
      <h2 className="breadcrumb__title">FAQ'S Page</h2>
      <h3 className="breadcrumb__subtitle">
        Home {'>'} <span className="text-red-600">FAQ'S</span>
      </h3>
      <div className="questions__container grid grid-cols-[repeat(2,1fr)] gap-6">
        <div className="questions__group grid gap-y-8">
          <div className="questions_item rounded bg-white [transition:.3s]">
            <header className="questions__header flex items-center gap-x-2 p-4 cursor-pointer [transition:.3s]">
              <i className="questions_icon bx bx-plus text-xl text-[#242329] [transition:.3s]"></i>
              <h3 className="questions__item-title text-sm font-medium [transition:.3s]">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </header>
            <div className="questions_content overflow-hidden h-0 [transition:.3s]">
              <p className="questions_description text-xs pt-[0] pr-14 pb-9 pl-11 [transition:.3s]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ratione natus ducimus reiciendis possimus alias dignissimos et
                dolore quaerat? Sunt, est!
              </p>
            </div>
          </div>
          <div className="questions_item">
            <header className="questions__header">
              <i className="bx bx-plus"></i>
              <h3 className="questions__item-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </header>
            <div className="questions_content">
              <p className="questions_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ratione natus ducimus reiciendis possimus alias dignissimos et
                dolore quaerat? Sunt, est!
              </p>
            </div>
          </div>
          <div className="questions_item">
            <header className="questions__header">
              <i className="bx bx-plus"></i>
              <h3 className="questions__item-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </header>
            <div className="questions_content">
              <p className="questions_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ratione natus ducimus reiciendis possimus alias dignissimos et
                dolore quaerat? Sunt, est!
              </p>
            </div>
          </div>
        </div>
        <div className="questions__group">
          <div className="questions_item">
            <header className="questions__header">
              <i className="bx bx-plus"></i>
              <h3 className="questions__item-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </header>
            <div className="questions_content">
              <p className="questions_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ratione natus ducimus reiciendis possimus alias dignissimos et
                dolore quaerat? Sunt, est!
              </p>
            </div>
          </div>
          <div className="questions_item">
            <header className="questions__header">
              <i className="bx bx-plus"></i>
              <h3 className="questions__item-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </header>
            <div className="questions_content">
              <p className="questions_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ratione natus ducimus reiciendis possimus alias dignissimos et
                dolore quaerat? Sunt, est!
              </p>
            </div>
          </div>
          <div className="questions_item">
            <header className="questions__header">
              <i className="bx bx-plus"></i>
              <h3 className="questions__item-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </header>
            <div className="questions_content">
              <p className="questions_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ratione natus ducimus reiciendis possimus alias dignissimos et
                dolore quaerat? Sunt, est!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
