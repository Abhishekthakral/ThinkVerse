import React from 'react'
import Arrow from '../assets/colorarrow.png'
import Datacomponent from './Datacomponent'

const HomeData = ({owner,text}) => {
    return (
        <div className='px-6 bg-[#e0e6fa78] rounded-2xl w-[88%]  ml-6  md:ml-10 py-6 gap-4 flex flex-col mt-4' >
            <div className='flex justify-between items-center'>
                <div className='flex justify-start gap-4 items-center'>
                    <div className='w-14 h-14 rounded-full overflow-hidden'>
                        <img src={owner.profilePicture} alt="" className='w-fit h-fit' />
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>{owner.username}</p>
                        <p className='text-xs italic'>{owner.occupation}</p>
                    </div>
                </div>
                <div>
                    <button className='rounded-3xl px-4 ml-4 md:px-6 py-1 cursor-pointer flex items-center border text-[#6E6E6E]  text-md'>Follow <img src={Arrow} alt="" className='w-7' /></button>
                </div>
            </div>
            <Datacomponent title={text.title} description={text.description} time={text.createdAt} id={text._id}/>
        </div>
    )
}

export default HomeData