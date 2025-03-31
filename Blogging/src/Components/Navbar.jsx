import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import menu from '../assets/menu_icon.png'
import dropdown from '../assets/dropdown.png'
import { Blogcontext } from '../Context/Blogcontext'
import Cookies from 'js-cookie'



const Navbar = () => {
  const [horizontal, sethorizontal] = useState('');
  const [visible, setvisible] = useState(false);
  const { token, user , settoken ,setuser } = useContext(Blogcontext);
  const navigate = useNavigate();
  
  const logoutfunction=async()=>{
    Cookies.remove('token');
    localStorage.removeItem('user');
    setuser({});
    settoken("");
    navigate('/')
  }
  return (
    <div className='flex justify-between items-center w-full h-16 md:px-8 py-4'>
      <Link to='/' className='flex text-[#262E4B] items-end px-4 md:px-8'>
        <p className='text-2xl '>Think</p>
        <p className='text-3xl font-bold'>Verse</p>
      </Link>
      <ul className='hidden lg:flex gap-10 text-[#000000]'>
        <NavLink to='/' onClick={() => sethorizontal('')} >
          <p className={`${horizontal === '' ? "font-semibold" : ""}`}>Home</p>
          <hr className={`transition-all duration-300 ${horizontal === '' ? "" : "hidden"}`} />
        </NavLink>
        <NavLink to='/pricing' onClick={() => sethorizontal('pricing')}>
          <p className={`${horizontal === 'pricing' ? "font-semibold" : ""}`}>Pricing</p>
          <hr className={`transition-all duration-300 ${horizontal === 'pricing' ? "" : "hidden"}`} />
        </NavLink>
        <NavLink to='/resources' onClick={() => sethorizontal('resources')}>
          <p className={`${horizontal === 'resources' ? "font-semibold" : ""}`}>Resources</p>
          <hr className={`transition-all duration-300 ${horizontal === 'resources' ? "" : "hidden"}`} />
        </NavLink>
        <NavLink to='/profile' onClick={() => sethorizontal('products')}>
          <p className={`${horizontal === 'products' ? "font-semibold" : ""}`}>Profile</p>
          <hr className={` transition-all duration-300 ${horizontal === 'products' ? "" : "hidden"}`} />
        </NavLink>
        <Link to='/' onClick={logoutfunction} className={`${!token?'hidden':''}`}>
          <p className={`${horizontal === 'products' ? "font-semibold" : ""}`}>Log Out</p>
        </Link>
      </ul>
      <div className={`hidden lg:flex gap-8 pr-8 ${token ? 'lg:hidden' : ''}`}>
        <button className='text-lg bg-inherit text-[#262E4B] cursor-pointer' onClick={() => navigate('/login')}>Login</button>
        <button className='text-lg bg-[#262E4B] rounded-3xl text-[#ffffff] px-6 py-1 cursor-pointer' onClick={() => navigate('/signin')}>SignUp</button>
      </div>
      <div className={`hidden md:flex gap-6 pr-8 ${token ? '' : 'md:hidden'}`}>
        <div className='w-12 h-12 rounded-full overflow-hidden border'>
          <img src={`${user?user.profilePicture:'https://tse4.mm.bing.net/th?id=OIP.eXWcaYbEtO2uuexHM8sAwwHaHa&pid=Api&P=0&h=220'}`} alt="" className='w-fit h-fit' />
        </div>
        <button className='text-medium  rounded-3xl text-[#AFAFAF] border px-8  cursor-pointer' onClick={() => navigate('/write')}>Write</button>
      </div>
      <img src={menu} alt="" className='w-6 lg:hidden mr-6 ' onClick={() => setvisible(true)} />
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-1500 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div className='flex items-center gap-4 p-3 cursor-pointer border-b' onClick={() => setvisible(false)}>
            <img src={dropdown} alt="" className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          <NavLink to='/' className='py-2 pl-6 border-b' onClick={() => setvisible(false)}>Home</NavLink>
          <NavLink to='/pricing' className={'py-2 pl-6 border-b'} onClick={() => setvisible(false)}>Pricing</NavLink>
          <NavLink to='/resource' className={'py-2 pl-6 border-b'} onClick={() => setvisible(false)}>Resources</NavLink>
          <NavLink to='/profile' className={'py-2 pl-6 border-b'} onClick={() => setvisible(false)}>Profile</NavLink>
          <NavLink to='/login' className={'py-2 pl-6 border-b'} onClick={() => setvisible(false)}>Login</NavLink>
          <NavLink to='/signin' className={'py-2 pl-6 border-b'} onClick={() => setvisible(false)}>SignUp</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar