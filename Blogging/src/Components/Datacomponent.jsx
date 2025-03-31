import React from 'react'
import { Link } from 'react-router-dom'

const Datacomponent = ({title,description,time,id}) => {
    return (
        <div className='flex flex-col gap-6 bg-[#e0e6fa78] p-6 rounded-4xl'>
            <p className='text-lg md:text-3xl font-sans  text-[#262E4B]'>{title}</p>
            <p className='text-xs md:text-md text-[#000000] w-[80%] tracking-wide'>{description}</p>
            <div className='flex justify-between text-xs md:text-md italic'>
                <p className=''>{time.slice(0,10)}</p>
                <Link to={`/data/${id}`} className='md:px-10 cursor-pointer' >
                    <p>Read More ...</p>
                </Link>
            </div>
        </div>
    )
}

export default Datacomponent