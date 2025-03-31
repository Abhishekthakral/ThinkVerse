import React from 'react'

const Comments = ({item}) => {
  return (
    <div className='m-4 px-4'>
      <div className='flex items-end gap-5 '>
        <div className='w-14 h-14 rounded-full overflow-hidden'>
          <img src={`${item.createdBy.profilePicture?item.createdBy.profilePicture:''}`} alt="" className='w-full h-full'/>
        </div>
        <h2 className='font-semibold text-lg'>{item.createdBy.username}</h2>
        <h3 className='italic text-[#B0B0B0]'>{item.createdAt.slice(0,10)}</h3>
      </div>
      <div className='flex items-center justify-between mt-4'>
        <p className='text-lg text-[#929292] font-semibold'>{item.comment}</p>
        <button className='text-[#319DA9] font-extralight'>Reply</button>
      </div>
    </div>
  )
}

export default Comments