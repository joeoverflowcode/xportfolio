import React from 'react'

const Button = ({text}) => (
    <button className="w-full p-4 bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
    text-white rounded-lg shadow-gray-800 cursor-pointer md:text-xl lg:text-xl
    " type='Submit'>{text}</button>
)
export default Button