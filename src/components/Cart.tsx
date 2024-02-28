const Cart = () => {
  return (
    <div className="fixed bg-slate-200 z-50 w-[420px] shadow">
      <i className="bx bx-x"></i>
      <h2>My Cart</h2>
      <div>
        <article>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3>Windbreaker</h3>
            <span>12$</span>
            <div>
              <div>
                <span>
                  <i className="bx bx-minus"></i>
                </span>
                <span>1</span>
                <span>
                  <i className="bx bx-plus"></i>
                </span>
              </div>
              <i className="bx bx-trash-alt"></i>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Cart
