import React from 'react'

function card(props) {
    const data = props.data
    console.log("this is card props", data)
  return (
    <div className='w-[270px] h-[361px]'>
        <div className='bg-grey p-8'>
            <img src={data.imageLink} alt="" />
        </div>
        <div className=' flex flex-col items-center gap-2 mt-5'>
            <p className='font-bold text-[#FB2E86]'>{data.title}</p>
            <p>{data.code}</p>
            <p>{data.price}</p>
        </div>
    </div>
  )
}

export default card