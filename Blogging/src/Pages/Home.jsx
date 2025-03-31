import React, { useEffect ,useState} from 'react'
import Hero from '../Components/Hero'
import HomeButtons from '../Components/HomeButtons'
import HomeData from '../Components/HomeData'
import axios from 'axios'

const Home = () => {
  const [blogs,setblogs]=useState([]);
  const skip=0;
  const [limit,setlimit]=useState(5);
  useEffect(()=>{
    fetchdata();
  },[limit]);

  const fetchdata=async(e)=>{
    try {
      const response=await axios.get('http://localhost:3000/api/v1/blog/allBlog');
      const blogData=response.data.data;
      console.log(blogData)
      const displayData=blogData.slice(skip,limit);
      console.log(displayData);
      setblogs(displayData);

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <Hero />
        <HomeButtons />
          {
           blogs? blogs.map((item)=>(
            <HomeData key={item._id} owner={item.owner} text={item}/>
          )):''
          }
         <div className='w-full flex justify-center items-center py-4 mt-4'>
          <button className='text-lg text-gray-500 border rounded-4xl border-gray-300 px-8 py-4 cursor-pointer' onClick={()=>setlimit(limit+5)}>Show More</button>
          </div> 
    </div>
  )
}

export default Home