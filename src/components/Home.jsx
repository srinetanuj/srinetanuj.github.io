import React from 'react'
import profilePic from "../sources/profile.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const newtab=()=>{
  window.open("https://drive.google.com/file/d/1emttQkpGyyoFkjh2Etgmwa5T5O6eGxVg/view?usp=sharing")
}

const Home = () => {
  return (
    <div>
       <div name="Home" className="h-full w-full bg-gradient-to-b from-sky-100 to to-sky-200">
         <div className="max-w-screen-xl pb-20 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
           <div className="flex flex-col justify-center h-full mt-40 md:mt-60">
           <h2 className="text-4xl sm:text-7xl font-bold text-gray-800">
              I'm a Full Stack Developer
            </h2>
            <p className='text-gray-800 py4 max-w-md'>
                I'm a full stack developer. I have completed B.Tech in Mechanical Engineering from
                Greater Noida Institute of Technology.
            </p>
            <div>
            <a href="/Anuj_Singh_Resume.pdf" download={true}>
            <button onClick={()=>newtab()} className='group text-gray-900 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-cyan-500 cursor-pointer'>Resume 
            <span className='group-hover:rotate-90 duration-300 mx-1'><MdOutlineKeyboardArrowRight size={25}/></span>
            </button>
            </a>
            </div>
           </div>
           <div className='mt-10 md:mt-60'>
            <img src={profilePic} alt="profilePic" className="rounded-2xl mx-auto w-2/3 md:w-fll"  />
           </div>
         </div> 
       </div>
       
    </div>
  )
}

export default Home
