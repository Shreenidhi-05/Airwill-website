import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
const NavBar = () => {
    const [isOpen, setIsOpen]= useState(false)
  return (
    <>
    <nav>
      <div className='w-full flex bg-[#EDEDED] py-2'>
        <div className='w-full flex items-center'>
            <img src="src/assets/logo.png" className='h-10 w-10 object-contain ml-4'></img>
            <Link to="/" className='font-brand text-xl font-bold tracking-[0.1em] text-[#7C0A02]'>AIRWILL HOME COLLECTIONS</Link>
        </div>
        <div className='hidden md:flex items-center gap-8 text-[#7C0A02] font-montserrat text-md mr-10'>
            <Link to="/" className='hover:text-[#FA8072] transition whitespace-nowrap'>Home</Link>
            <a href="/#about-us" className="hover:text-[#FA8072] transition whitespace-nowrap">About Us</a>
            <Link to="/products" className='hover:text-[#FA8072] transition whitespace-nowrap'>Products</Link>
            <Link to="/contact" className='hover:text-[#FA8072] transition whitespace-nowrap'>Contact</Link>
        </div>
        <button className='md:hidden text-[#7C0A02]'
        onClick={()=>setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX className="h-8 w-8 mr-5" /> : <HiOutlineMenu className="h-8 w-8 mr-5" />}
        </button>
      </div>
      {isOpen &&(
        <div className='md:hidden flex flex-col bg-[#EDEDED] text-[#7C0A02] px-6 py-4 font-montserrat text-lg'>
            <Link onClick={()=> setIsOpen(false)} to='/' className='hover:text-[#FA8072]'>Home</Link>
            <a href="/#about-us" className="hover:text-[#FA8072]">About Us</a>
            <Link onClick={()=> setIsOpen(false)} to='/products' className='hover:text-[#FA8072]'>Products</Link>
            <Link onClick={()=> setIsOpen(false)} to='/contact' className='hover:text-[#FA8072]'>Contact</Link>
        </div>
      )}
    </nav>
    </>
  )
}

export default NavBar
