import React, { useContext, useEffect, useState } from 'react'
import Datacomponent from './Datacomponent'
import { Blogcontext } from '../Context/Blogcontext';
import axios from 'axios';

const ProfileData = () => {
    const [response, setresponse] = useState(null);
    const { user ,token} = useContext(Blogcontext);

    useEffect(() => {
        const userid = user._id;
        const fetchdata = async () => {
            const personaldata = await axios.post('http://localhost:3000/api/v1/blog/personal', { userid })
            setresponse(personaldata.data.data);
            console.log(token)
        }
        fetchdata();
    }, [user])


    return (
        <div className='m-6'>
            <div className='flex items-center gap-4'>
                <button className='bg-[#e8e8e8a8] text-gray-400 rounded-full px-4 py-2 cursor-pointer'>Latest</button>
                <button className='bg-[#E8E8E8] rounded-full px-4 py-2 cursor-pointer'>Most Viewed</button>
            </div>
            <div className='flex flex-col gap-6 m-5'>
            {
                response ? response.map((item)=>(
                    <Datacomponent key={item._id} id={item._id} title={item.title} description={item.description} time={item.createdAt} />
                )):''
            }
            </div>
        </div>
    )
}

export default ProfileData