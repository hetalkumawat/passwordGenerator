import React from 'react'

const Buttons = ({colorName ,onClick}) => {
  return (
     <button onClick={onClick}
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mx-1 "
  >
{colorName}  </button>
  )
}

export default Buttons
