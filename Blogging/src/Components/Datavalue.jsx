import React from 'react'

const Datavalue = ({description,explanation,time}) => {
  return (
    <div className='flex flex-col mt-4'>
        <div className='flex flex-col sm:flex-row  sm:justify-between sm:items-center md:px-16 '>
            <p className='text-sm font-light sm:max-w-[50%] m-6'>{description}</p>
            <p className='text-xs italic text-right m-6 sm:m-0'>Time:{time.slice(0,10)}</p>
        </div>
        <div className='mx-6 md:px-16'>
            <p className='text-2xl my-6 font-semibold'>What is lorem ?</p>
            <p className='text-sm tracking-wider '>{explanation}</p>
        </div>
    </div>
  )
}

export default Datavalue