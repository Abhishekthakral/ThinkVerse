import React, { createContext, useEffect, useState } from 'react'
import cookies from 'js-cookie'

export const Blogcontext = createContext();
const BlogcontextProvider = ({children}) => {
    const [loader,setloader]=useState(false);
    const [token,settoken]=useState('');
    const [user,setuser]=useState({});
    useEffect(()=>{
      const gettoken=cookies.get('token');
      if(gettoken){
        settoken(gettoken);
      }
      const currentUser=localStorage.getItem('user');
      if(currentUser){
        setuser(JSON.parse(currentUser));
      }
    },[]);


    const value={loader,setloader,token,settoken,user,setuser};
  return (
    <Blogcontext.Provider value={value}>
        {children}
    </Blogcontext.Provider>
  )
}

export default BlogcontextProvider