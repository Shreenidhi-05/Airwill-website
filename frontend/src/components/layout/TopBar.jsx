import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const TopBar = () => {
  return (
    <div className="bg-[#FA8072] text-white py-0.2">
      <div className="container mx-auto flex  items-center gap-4">

        <CiSearch className="h-7 w-7 text-white" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md bg-white text-gray-800 rounded-full px-2 py-0.5 outline-none mt-1 mb-1"
        />
        <div className='flex items-center space-x-6 ml-auto'>
        <a href="#" className='hover:text-gray-300'>
          <FaInstagram className='h-7 w-7' />
        </a>
        <a href="#" className='hover:text-gray-300'>
          <FaXTwitter className='h-6 w-6' />
        </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
