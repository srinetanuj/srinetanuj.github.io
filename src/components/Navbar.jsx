import React from 'react'
import { FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";


const pages = [
    { id: 1, page: "Home" },
    { id: 2, page: "About" },
    { id: 3, page: "Skills" },
    { id: 4, page: "Project" },
    { id: 5, page: "Contact" },
  ];

const Navbar = () => {

const [ state, setState ] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-sky-900 text-white fixed">
      <div>
        <h1 className="text-5xl font-logo ml-2">Anuj</h1>
      </div>
      <ul className="hidden md:flex">
        { pages.map((item)=> (
            <li key={item.id} className="px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200">
                {item.page}
                </li>
        ))}
      </ul> 
      <div onClick={()=> setState(!state)} className="cursor-pointer pr-4 z-10 md:hidden">
        {state ? <FaTimes size={40} className="text-gray-900"/> : <FaBars size={30}/>}
      </div>

     { state && (
 <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-sky-200 to to-sky-100 text-gray-900">
 { pages.map((item)=> (
       <li key={item.id} className="px-4 cursor-pointer py-6 text-4xl">
           {item.page}
           </li>
   ))}
  
 </ul>
     )}
    </div>
  )
}

export default Navbar




