import React from 'react'

const Button = ({style}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none ${style}`} >
       Get Started
    </button>
  )
}

export default Button