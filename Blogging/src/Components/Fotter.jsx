import React from 'react'

const Fotter = () => {
    return (
        <div className='bg-[#EDEDED]'>
            <div className= ' flex flex-col md:flex-row justify-evenly ml-6 md:items-center md:px-20 py-8'>
                <div className='flex flex-col gap-5'>
                    <p className=' md:text-xl italic '>Stay updated! Subscribe to our newsletter.</p>
                    <div className='flex gap-3'>
                        <input type="text" placeholder='Enter your email' className='w-xs  bg-[#D9D9D9] rounded-4xl text-xs px-4 py-3'/>
                        <button className='text-[#ffffff] bg-[#262E4B] px-4 mr-8 md:px-6 py-2 rounded-4xl cursor-pointer'>Subscribe</button>
                    </div>
                    <div className='flex flex-col gap-1 md:mt-6'>
                        <p className='text-4xl md:text-6xl'>Think<span className='text-5xl md:text-7xl text-[#262E4B]'>Verse</span></p>
                        <p className='text-sm md:text-lg'>Think beyond write freely</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 font-light items-start justify-center mt-8'>
                    <p>Email: Abhishekthakral244@gmail.com</p>
                    <p>phone: 9855633105</p>
                    <p>location: (optional)</p>
                    <p>Contact:</p>   
                    <p>Privacy-Policy</p>    
                    <p>Terms & Conditions</p>     
                    </div>
            </div>
            <div className='w-full py-6 bg-[#262E4B] flex justify-center items-center'>
                <p className='text-[#ffffff] text-sm space-x-1'>© 2025 <span className='font-extrabold'> ThinkVerse . </span> All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Fotter