import React, { useContext, useEffect } from 'react'
import Profilemain from '../Components/Profilemain'
import ProfileData from '../Components/ProfileData'
import { Blogcontext } from '../Context/Blogcontext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const {user,token}=useContext(Blogcontext);
  const navigate=useNavigate();
  useEffect(()=>{
    !(token&&user)?navigate('/login'):navigate('/profile')
  },[token])
  return (
        <div>
            <Profilemain />
            <ProfileData />
          </div>
  ) 
}

export default Profile