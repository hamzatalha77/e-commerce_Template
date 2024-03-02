import React, { useEffect, useState } from 'react'

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const handleScrollDownButtonVisibility = () => {
      window.pageYOffset > 350 ? setShowButton(true) : setShowButton(false)
    }
    window.addEventListener('scroll', handleScrollDownButtonVisibility)
    return () => {
      window.removeEventListener('scroll', handleScrollDownButtonVisibility)
    }
  }, [])
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <React.Fragment>
      {showButton && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          id="scroll-up"
          onClick={handleScrollToTop}
          className="fixed w-12 h-12 place-content-center right-4 bottom-12 bg-red-600 inline-flex p-1 z-10 opacity-80 [transition:.4s] hover:opacity-100"
        >
          <i className="bx bx-up-arrow-alt text-[2.5rem] text-white"></i>
        </a>
      )}
    </React.Fragment>
  )
}

export default ScrollUp
