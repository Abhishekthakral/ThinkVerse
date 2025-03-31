import React, { useContext } from 'react'
import hero from '../assets/hero.png'
import { useNavigate } from 'react-router-dom'
import { Blogcontext } from '../Context/Blogcontext';

const Hero = () => {
    const navigate=useNavigate();
    const {token,user}=useContext(Blogcontext);
  return (
    <div className='w-full bg-[#f6f6f6]  flex flex-col md:flex-row justify-evenly overflow-hidden'>
        <div className='w-full md:max-w-[50%] pt-8 pl-6 md:pt-24 md:pl-12 '>
            <div className='flex flex-col gap-1 tracking-wider'>
                <p className='text-[#AFAFAF] text-3xl md:text-6xl w-fit'>Think Beyond,</p>
                <p className='text-5xl md:text-8xl font-bold text-[#262E4B] flex gap-2 w-fit'>Write <span>Freely</span></p>
            </div>
            <div className='mt-4 w-[70%] flex flex-col gap-3'>
                <p className='text-[#262E4B] font-semibold'>Welcome to ThinkVerse—</p>
                <p className='text-xs italic'>a world of ideas, insights, and inspiration. Explore thought-provoking articles, trends, and stories that shape the world.</p>
            </div>
            <div className='mt-8 flex gap-6 items-center w-fit'>
                <button className='bg-[#262E4B] text-[#ffffff] rounded-3xl px-6 sm:px-8 py-3 cursor-pointer' onClick={()=>token&&user?navigate('/write'):navigate('/login')}>Write With US</button>
                <button className='cursor-pointer'>Start Reading</button>
            </div>
        </div>
        <div className= 'px-6 md:w-[50%] py-8  md:flex justify-end items-center'>
            <img src={hero} alt="" className='w-[550px] h-[300px]  md:h-[450px] mr-16 ' />
        </div>

    </div>
  )
}

export default Hero