import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Fotter from "./Components/Fotter"
import Data from "./Pages/Data"
import Profile from "./Pages/Profile"
import Login from "./Pages/Login"
import Signin from "./Pages/Signin"
import Loader from "./Components/Loader"
import { useContext } from "react"
import { Blogcontext } from "./Context/Blogcontext"
import Write from "./Pages/Write"


function App() {
  const {loader,setloader}=useContext(Blogcontext);

  return (
    <div className='flex flex-col gap-3 w-full h-full overflow-hidden'>
      <Navbar />
      <div className={ `w-full h-full ${loader?"w-full":'hidden'}`}>
        <Loader />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data/:id" element={<Data />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/write" element={<Write />} />
      </Routes>
      <Fotter />
    </div>
  )
}

export default App
