interface CartProps {
  toggleCart: () => void
}
const CartSide: React.FC<CartProps> = ({ toggleCart }) => {
  return (
    <div className="fixed bg-slate-200 z-50 w-[420px] [box-shadow:-2px_0px_4px_gray] h-full top-0 right-0 px-8 py-[3,5rem] cart">
      <i
        className="bx bx-x text-3xl text-slate-800 absolute top-5 right-4 cursor-pointer"
        onClick={toggleCart}
      ></i>
      <h2 className="text-2xl text-center mb-12 pt-14">My Cart</h2>
      <div className="grid gap-y-6">
        <article className="flex items-center gap-x-4">
          <div className="bg-white px-5 py-[.75rem] flex items-center">
            <img src="/img/cart-1.png" alt="" className="w-[85px]" />
          </div>
          <div>
            <h3 className="text-base mb-2">Windbreaker</h3>
            <span className="block text-sm text-red-600 mb-6">12$</span>
            <div className="flex items-center gap-x-12">
              <div className="flex items-center gap-x-4">
                <span className="inline-flex p-1 bg-white cursor-pointer">
                  <i className="bx bx-minus"></i>
                </span>
                <span>1</span>
                <span className="inline-flex p-1 bg-white cursor-pointer">
                  <i className="bx bx-plus"></i>
                </span>
              </div>
              <i className="bx bx-trash-alt text-lg text-red-600 cursor-pointer"></i>
            </div>
          </div>
        </article>
        <article className="flex items-center gap-x-4">
          <div className="bg-white px-5 py-[.75rem] flex items-center">
            <img src="/img/cart-1.png" alt="" className="w-[85px]" />
          </div>
          <div>
            <h3 className="text-base mb-2">Windbreaker</h3>
            <span className="block text-sm text-red-600 mb-6">12$</span>
            <div className="flex items-center gap-x-12">
              <div className="flex items-center gap-x-4">
                <span className="inline-flex p-1 bg-white cursor-pointer">
                  <i className="bx bx-minus"></i>
                </span>
                <span>1</span>
                <span className="inline-flex p-1 bg-white cursor-pointer">
                  <i className="bx bx-plus"></i>
                </span>
              </div>
              <i className="bx bx-trash-alt text-lg text-red-600 cursor-pointer"></i>
            </div>
          </div>
        </article>
        <article className="flex items-center gap-x-4">
          <div className="bg-white px-5 py-[.75rem] flex items-center">
            <img src="/img/cart-1.png" alt="" className="w-[85px]" />
          </div>
          <div>
            <h3 className="text-base mb-2">Windbreaker</h3>
            <span className="block text-sm text-red-600 mb-6">12$</span>
            <div className="flex items-center gap-x-12">
              <div className="flex items-center gap-x-4">
                <span className="inline-flex p-1 bg-white cursor-pointer">
                  <i className="bx bx-minus"></i>
                </span>
                <span>1</span>
                <span className="inline-flex p-1 bg-white cursor-pointer">
                  <i className="bx bx-plus"></i>
                </span>
              </div>
              <i className="bx bx-trash-alt text-lg text-red-600 cursor-pointer"></i>
            </div>
          </div>
        </article>
      </div>
      <div className="mt-24 flex items-center justify-between">
        <span className="text-slate-900 text-sm">3 item</span>
        <span className="text-slate-900 text-xl font-medium">$28</span>
      </div>
    </div>
  )
}

export default CartSide
