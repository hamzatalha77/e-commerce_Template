import React from 'react'

const ScrollUp = () => {
  return (
    <React.Fragment>
      <a
        href="/"
        id="scroll-up"
        className="fixed right-4 bottom-12 bg-red-600 inline-flex p-1 z-10 opacity-80 [transition:.4s] hover:opacity-100"
      >
        <i className="bx bx-up-arrow-alt text-2xl text-white"></i>
      </a>
    </React.Fragment>
  )
}

export default ScrollUp
