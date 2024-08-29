import React from 'react'

export default function Button({className,btnText,handleClick}) {
  return (
    <button 
        className={`bg-white border border-neutral-800 w-full text-neutral-800${className}`}
        onClick={() => handleClick()}
    >
        {btnText}
    </button>
  )
}
