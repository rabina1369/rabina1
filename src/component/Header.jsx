import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { FaShieldHeart } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import Navbar from './Navbar';



function Header() {
  return (
    <>
    <div className='bg-[#d318ecef] text-white h-9 flex justify-between'>
       <div className='   flex items-center gap-3  pl-30'>

        
            <MdEmail className='text-xl gap-2'/>
        <p className='font-semibold'>Test@gmail.com</p>
        <FaPhoneAlt/>
        <p className='font-semibold'>986666666</p>
        
        </div>

        <div className='flex gap-5 pr-30 text-xl font-semibold'>
        <div className='flex items-center gap-2'>
          <p >English</p>
          <FaAngleDown/>
        </div>
        <div className='flex items-center gap-2'>
          <p>USD</p>
          <FaAngleDown/>
        </div>
        <div className='flex items-center gap-2'>
          <p>Login</p>
          <GoPerson />
        </div>
        <div className='flex items-center gap-2'>
          <p>Wishlist</p>
          <FaShieldHeart />
        </div>
        <div className='flex items-center gap-2'>
          <MdShoppingCart />
        </div>
        </div>
       </div>
       <Navbar/>
    </>
  )
}

export default Header