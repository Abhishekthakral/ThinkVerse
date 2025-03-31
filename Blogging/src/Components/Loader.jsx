import React from 'react'
import { useEffect } from 'react'
const Loader = () => {
  
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 bg-[#ffffff] w-full h-full flex items-center justify-center overflow-hidden '>
        <p className='text-[#262E4B] font-medium text-3xl fade-text'>Think <span className='font-bold text-5xl'>verse</span></p>
    </div>
  )
}

export default Loader