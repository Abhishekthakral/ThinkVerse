import React from 'react'
import person from '../assets/person.jpg'
import Arrow from '../assets/colorarrow.png'

const DataFirst = ({title,owner}) => {
    return (
        <div className='flex flex-col sm:flex-row pl-4 md:pl-16 w-full bg-[#F6F6F6] sm:items-center sm:justify-between py-4 gap-4'>
            <p className='text-xl sm:text-2xl md:text-5xl font-semibold text-[#262E4B] flex flex-col tracking-wider'>{title}</p>
            <div className='flex flex-col bg-[#D9D9D9] rounded-3xl gap-4 px-6 py-4 mr-16'>
                <div className='flex justify-start gap-4 items-center '>
                    <div className='w-14 h-14 rounded-full overflow-hidden'>
                        <img src={owner.profilePicture} alt="" className='w-fit h-fit' />
                    </div>
                    <div>
                        <p className='font-semibold'>{owner.username}</p>
                        <p className='text-xs italic'>{owner.occuption}</p>
                    </div>
                </div>
                <div >
                    <button className='rounded-3xl px-4 ml-4 md:px-6 py-1 cursor-pointer flex items-center border text-[#262E4B]  text-md'>Follow <img src={Arrow} alt="" className='w-7' /></button>
                </div>
            </div>
        </div>
    )
}

export default DataFirst