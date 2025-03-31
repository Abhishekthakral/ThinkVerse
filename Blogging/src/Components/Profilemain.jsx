import React, { useContext } from 'react'
import person from '../assets/person.jpg'
import Arrow from '../assets/Arrow.png'
import { Blogcontext } from '../Context/Blogcontext'

const Profilemain = () => {
  const {user}=useContext(Blogcontext);
  return (
    <div className='mx-8 bg-[#E5EBFF] rounded-3xl p-6 flex gap-5 items-center'>
    <div className='max-w-36 max-h-36  rounded-full overflow-hidden'>
      <img src={user.profilePicture?user.profilePicture:'https://tse4.mm.bing.net/th?id=OIP.eXWcaYbEtO2uuexHM8sAwwHaHa&pid=Api&P=0&h=220'} alt="" className='w-fit h-fit ' />
    </div>
    <div className='flex flex-col text-[#000000] w-[50%] ml-3'>
      <p className='text-4xl font-semibold'>{user.username}</p>
      <p className='text-lg font-light'>{user.occupation}</p>
      <p className='text-sm font-light mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ex hic eum delectus. Velit eum quod accusamus? Quaerat beatae temporibus ab unde quidem aliquam porro veniam dolorem commodi dolorum, itaque, facere fugiat, dolores amet.</p>
    </div>
    <div className='flex flex-col gap-4 items-center justify-end ml-72'>
      <div className=' flex flex-col'>
        <p className='text-3xl font-semibold'>19</p>
        <p className='text-sm font-extralight'>posts</p>
      </div>
      <div className=' flex flex-col'>
        <p className='text-3xl font-semibold'>432</p>
        <p className='text-sm font-extralight'>Followers</p>
      </div>
      <button className='rounded-3xl px-8 py-2 text-[#ffffff] bg-[#262E4B] cursor-pointer flex items-center'>Follow <img src={Arrow} alt="" className='w-8' /></button>
    </div>

  </div>
  )
}

export default Profilemain