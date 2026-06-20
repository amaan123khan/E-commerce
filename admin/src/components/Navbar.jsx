import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='h-20 w-auto' src={assets.logo} alt="" />
      <button className='bg-gray-600 text-white px-6 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>

    </div>
  )
}

export default Navbar
