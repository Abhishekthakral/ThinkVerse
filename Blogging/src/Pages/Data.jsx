import React, { useContext, useEffect, useState } from 'react'
import DataFirst from '../Components/DataFirst'
import Datavalue from '../Components/Datavalue'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Blogcontext } from '../Context/Blogcontext'
import Commentsbegin from '../Components/Commentsbegin'

const Data = () => {
  const { id } = useParams();
  const [response, setresponse] = useState(null);
  const [getComments,setgetComments]=useState([]);
  const { setloader } = useContext(Blogcontext)
  useEffect(() => {
    try {
      var fetchData = async () => {
        const backData = await axios.get(`http://localhost:3000/api/v1/blog/${id}`);
        setresponse(backData.data.data);
        setgetComments(backData.data.data.comments);
      }
    } catch (error) {
      console.log(error + "while getting data")
    }
    fetchData();
  }, [id,response])

  const loaderfunction = () => {
    setloader(true);
  }

  const datafunction = () => {
    setloader(false)
    return (
      <div className='flex flex-col  mt-3'>
        <DataFirst title={response.title} owner={response.owner} />
        <Datavalue explanation={response.explanation} description={response.description} time={response.createdAt} />
        <div className='flex justify-center items-center'>
          {
            getComments?<Commentsbegin Commentsvalue={getComments} /> :''
          }
        </div>
      </div>
    )
  }
  return (
    <>
      {
        !response ? loaderfunction() : datafunction()
      }
    </>
  )
}

export default Data