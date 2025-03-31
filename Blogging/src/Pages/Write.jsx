import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Blogcontext } from '../Context/Blogcontext';


function Write() {
    const [title,settitle]=useState('');
    const [description,setdescription]=useState('');
    const [explanation,setexplanation]=useState('');
    const {user}=useContext(Blogcontext);

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const owner=user._id;
            const response=await axios.post('http://localhost:3000/api/v1/blog/create',{title,description,explanation,owner});
            console.log(response.data);
        } catch (error) {
            
        }
    }

    return (
        <div className='flex justify-center items-center h-auto w-screen mt-4'>
            <div className='w-[90%] md:w-[60%] flex flex-col justify-center items-center px-4 md:px-10 py-4 rounded-4xl border border-gray-300 text-[#ffffff] font-semibold  bg-[#262E4B]'>
                <h1 className='font-light text-xl mb-6'>Create a new Blog</h1>
                <form action="/profile" onSubmit={handleSubmit} className='flex flex-col items-center  gap-4 w-full'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="title" className='font-light'>Title*</label>
                        <input type="text" id='title' placeholder='Enter Title'  className='bg-[#E6E6E6] rounded-full pl-6  py-3 text-[#000000] w-full' onChange={(e)=>settitle(e.target.value)}/>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="description" className='font-light'>Description</label>
                        <textarea className='bg-[#E6E6E6] rounded pl-6 py-3 text-[#000000] w-full h-auto' placeholder='Enter description'  onChange={(e)=>setdescription(e.target.value)}></textarea>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="explanation" className='font-light'>Explanation</label>
                        <textarea className='bg-[#E6E6E6] rounded pl-6 py-3 text-[#000000] w-full h-auto' placeholder='Enter description'  onChange={(e)=>setexplanation(e.target.value)}></textarea>
                    </div>
                    <button type='submit' className='rounded-xl bg-[#DDDDDD] font-semibold text-[#262E4B] mt-10 py-4 text-lg cursor-pointer w-fit px-6' >Create</button>
                </form>
            </div>
        </div>
    )
}

export default Write