import React,{useContext, useEffect, useState} from 'react'
import Commentsdata from './Commentsdata'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Blogcontext } from '../Context/Blogcontext';

const Comments = ({Commentsvalue}) => {
  const [showComment,setshowComment]=useState(false);
  const [Usercomment,setUsercomment]=useState('');
  const {id}=useParams();
  const {user}=useContext(Blogcontext);
  const [reviews,setreviews]=useState([]);

  const handleSubmitComment=async()=>{
    setshowComment(false);
    setUsercomment('');
    const blogid=id;
    const userid=user._id;
    const response=await axios.post('http://localhost:3000/api/v1/blog/comment',{blogid,Usercomment,userid});
  }

  useEffect(()=>{
    const slicedComments=Commentsvalue.slice(0,5);
    setreviews(slicedComments)
  },[Commentsvalue])

  return (
    <div className='w-[60%] mt-8  bg-[#FBFCFF]'>
      <div className='flex flex-col justify-center items-center'>
      <p className='text-xl m-4'>Comment's</p>
      <hr className='border-dashed w-full gap-8'/>
      </div>
      <div>
      {
        reviews.map((item)=>(
          <Commentsdata key={item._id} item={item} />
        ))
       }
      </div>
        <div className={`flex items-center justify-between m-4 ${showComment?'':'hidden'}`}>
          <input type="text" placeholder='Enter comment' className=' bg-[#ffffff] rounded-4xl border px-2 py-2 text-gray-600 w-2xl' value={Usercomment} onChange={(e)=>setUsercomment(e.target.value)}/>
          <div className='flex gap-2 items-center'>
          <p className='text-lg cursor-pointer' onClick={()=>setshowComment(false)}>&#10005;</p>
          <button className='bg-[#262e4b] text-[#ffffff] font-semibold text-lg px-4 py-2 cursor-pointer' onClick={handleSubmitComment}>ADD</button>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <button className='bg-[#262E4B] text-[#ffffff] font-semibold text-lg px-4 py-2 rounded-4xl cursor-pointer' onClick={()=>setshowComment(true)}>ADD COMMENT</button>
        </div>
    </div>
  )
}

export default Comments