import React, { useContext, useState } from 'react'
import image from '../assets/login.jpg'
import Facebook from '../assets/Facebook.png'
import Google from '../assets/Google.png'
import Apple from '../assets/Apple.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Blogcontext } from '../Context/Blogcontext'
import cookies from 'js-cookie'

const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const { setloader, settoken, setuser } = useContext(Blogcontext)
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            setloader(true);
            const response = await axios.post('http://localhost:3000/api/v1/user/login', { email, password })
            settoken(response.data.token);
            cookies.set('token', response.data.token, { expires: 2 })
            const currentUser=response.data.selectedUser
            setuser(currentUser)
            localStorage.setItem('user',JSON.stringify(currentUser));
            setloader(false);
            navigate('/profile');
        } catch (error) {
            console.log({ ...error });
            setloader(false);
        }
    }
    return (
        <div className='flex gap-16 w-full'>
            <div className='w-[50%] hidden lg:flex justify-center items-center rounded-full ml-8'>
                <img src={image} alt="" className='w-full h-fit' />
            </div>
            <div className='flex flex-col justify-center items-center sm:pl-32 m-6  '>
                <h1 className='text-[#262E4B] text-2xl font-semibold'>Welcome!</h1>
                <p className='text-[#262E4B] text-lg font-light'>Unleash your potential with us...</p>
                <div className='mt-4 bg-[#262E4B] max-w-3xl max-h-3xl rounded-4xl flex flex-col py-10 px-8  md:px-10 items-center justify-start text-[#ffffff] font-semibold gap-3'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-medium'>Register With</p>
                        <div className='flex gap-5 m-3 cursor-pointer'>
                            <img src={Facebook} alt="" className='w-16' />
                            <img src={Apple} alt="" className='w-16' />
                            <img src={Google} alt="" className='w-16' />
                        </div>
                        <p className='text-[#B0B0B0] text-medium'>Or</p>
                    </div>
                    <form action="" onSubmit={handlesubmit} className='flex flex-col gap-2 p-0'>
                        <label htmlFor="email" className='font-light'>Email*</label>
                        <input type="text" value={email} placeholder='Enter your email' onChange={(e) => setemail(e.target.value)} className='bg-[#E6E6E6] rounded-full pl-6 pr-16 py-3 text-[#000000] w-full' id='email' />
                        <label htmlFor="password" className='font-light'>Password*</label>
                        <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setpassword(e.target.value)} className='bg-[#E6E6E6] rounded-full pl-6  py-3 text-[#000000] w-full' id='password' />
                        <button type='submit' className='rounded-xl bg-[#DDDDDD] font-semibold text-[#262E4B] mt-10 py-4 text-lg cursor-pointer'>Login</button>
                    </form>
                    <div>
                        <p className='text-[#B0B0B0]'>Don't have a account? <span className='font-semibold text-lg text-[#ffffff] cursor-pointer' onClick={() => navigate('/signin')}>Sign In</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login