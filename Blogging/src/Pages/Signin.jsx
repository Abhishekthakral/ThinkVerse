import React, { useContext, useState } from 'react'
import sideimage from '../assets/login.jpg'
import Facebook from '../assets/Facebook.png'
import Google from '../assets/Google.png'
import Apple from '../assets/Apple.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Blogcontext } from '../Context/Blogcontext'
import cookies from 'js-cookie'


const Signin = () => {
    const [step, setstep] = useState(1);
    const navigate = useNavigate();
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [occupation, setoccupation] = useState('');
    const [image, setphoto] = useState(null);
    const { setloader, settoken , setuser } = useContext(Blogcontext);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setloader(true);
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("occupation", occupation);
            formData.append("image", image); // Ensure this is a File object
            const response = await axios.post(`http://localhost:3000/api/v1/user/signin`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            settoken(response.data.token);
            cookies.set('token', response.data.token, { expires: 2 })
            const currentUser=response.data.selectedUser
            setuser(currentUser)
            localStorage.setItem('user',JSON.stringify(currentUser));
            setloader(false);
            navigate('/profile')
        } catch (error) {
            setloader(false)
            console.log(error)
        }

    }
    return (
        <div className='flex gap-16 w-full'>
            <div className='w-[50%] h-[700px] hidden lg:flex'>
                <img src={sideimage} alt="" className='w-fit h-fit' />
            </div>
            <div className='flex flex-col  items-center sm:pl-32 m-6 '>
                <h1 className='text-[#262E4B] text-2xl font-semibold'>Welcome!</h1>
                <p className='text-[#262E4B] text-lg font-light'>Unleash your potential with us...</p>
                <div className='mt-4 bg-[#262E4B] max-w-3xl max-h-3xl rounded-4xl flex flex-col py-10 px-8 md:px-10 items-center justify-start text-[#ffffff] font-semibold gap-4'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-lg'>Register With</p>
                        <div className='flex gap-5 m-5 cursor-pointer'>
                            <img src={Facebook} alt="" className='w-16' />
                            <img src={Apple} alt="" className='w-16' />
                            <img src={Google} alt="" className='w-16' />
                        </div>
                        <p className='text-[#B0B0B0] text-lg'>Or</p>
                    </div>
                    <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2 p-0'>
                        {step == 1 ? <div className='flex flex-col gap-2 p-0'>
                            <label htmlFor="email" className='font-light'>Email*</label>
                            <input type="text" value={email} placeholder='Enter your email' className='bg-[#E6E6E6] rounded-full pl-6 pr-16 py-3 text-[#000000] w-full' id='email' onChange={(e) => setemail(e.target.value)} required />
                            <label htmlFor="password" className='font-light'>Password*</label>
                            <input type="password" value={password} placeholder='Enter your password' className='bg-[#E6E6E6] rounded-full pl-6  py-3 text-[#000000] w-full' id='password' onChange={(e) => setpassword(e.target.value)} required />
                            <button type='button' className='rounded-xl bg-[#DDDDDD] font-semibold text-[#262E4B] mt-10 py-4 text-lg cursor-pointer' onClick={() => (email && password ? setstep(2) : alert("enter email or password"))}>Sign In</button>
                        </div> : ''}
                        {
                            step == 2 ? <div className='flex flex-col gap-2 p-0'>
                                <label htmlFor="photo" className='font-light'>Upload Photo*</label>
                                <input type="file" className='bg-[#E6E6E6] rounded-full pl-6  py-3 text-[#000000] w-full' id='photo' onChange={(e) => setphoto(e.target.files[0])} />
                                <label htmlFor="username" className='font-light'>Name*</label>
                                <input type="text" placeholder='Enter Name' className='bg-[#E6E6E6] rounded-full pl-6  py-3 text-[#000000] w-full' value={username} id='username' onChange={(e) => setusername(e.target.value)} required />
                                <label htmlFor="occupation" className='font-light'>Occupation*</label>
                                <input type="text" placeholder='Enter Occupation' className='bg-[#E6E6E6] rounded-full pl-6  py-3 text-[#000000] w-full' value={occupation} id='occupation' onChange={(e) => setoccupation(e.target.value)} />
                                <button type='submit' className='rounded-xl bg-[#DDDDDD] font-semibold text-[#262E4B] mt-10 py-4 text-lg cursor-pointer'>Finish</button>
                            </div> : ''
                        }


                    </form>
                    <div>
                        <p className='text-[#B0B0B0]'>Already have a account? <span className='font-semibold text-lg text-[#ffffff] cursor-pointer' onClick={() => navigate('/login')}>log In</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin