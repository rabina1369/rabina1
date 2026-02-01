import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaSearch } from "react-icons/fa";

const navigation=[
    {
        title:"Home",
        path:"/"
    },
    {
        title:"Product",
        path:"/product"
    },
    {
        title:"Blog",
        path:"/blog"
    },
    {
        title:"Order",
        path:"/order"
    },

]

function Navbar() {
    const [data, setData] = useState("Test")
  return (
    
    <div className='px-20 flex justify-between items-center'>
        <div className='flex items-center gap-8'> 
            <h1 className='text-black font-semibold text-[24px]' onClick={() => setData("Hekto")} >Hekto </h1>
            <nav className='flex gap-2'>
                {
                    navigation.map((el)=>{
                        return <Link to={el.path}key = {el.path}>{el.title}</Link>
                    })
                }
            </nav>
        </div>

        <div className='flex items-center gap-5'>
            <input type="text" className='border border-black' />
            <div className='bg-red-500 p-2'>

                <FaSearch className=''/>

            </div>
        </div>
    </div>
    
  )
}

export default Navbar