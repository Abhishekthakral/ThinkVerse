import React from 'react'
import Arrow from '../assets/Arrow.png'

const HomeButtons = () => {
  return (
    <div className='flex items-center justify-between w-full py-4 px-6 md:px-16'>
        <div className='flex gap-1 md:gap-6 items-center'>
            <button className='text-[#000000] font-semibold cursor-pointer'>Topics</button>
            <button className='hidden md:flex bg-[#E8E8E8] px-6 py-2 rounded-3xl cursor-pointer'>News</button>
            <button className='hidden md:flex bg-[#E8E8E8] px-6 py-2 rounded-3xl cursor-pointer'>Sports</button>
        </div>
        <div className='hidden md:flex items-center gap-4'>
            <button className='rounded-3xl px-8 py-2 text-[#ffffff] bg-[#262E4B] cursor-pointer flex items-center'>Following <img src={Arrow} alt="" className='w-8'/></button>
            <input type="text" placeholder='Search Here' className=' text-center border py-2 rounded-3xl w-md cursor-pointer'/>
        </div>
        <div className='md:hidden'>
          <select name="" id="">
            <option value="news">News</option>
            <option value="sports">Sports</option>
            <option value="sports">Education</option>
            <option value="sports">Railways</option>
          </select>
        </div>
    </div>
  )
}

export default HomeButtons