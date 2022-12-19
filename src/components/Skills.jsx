import React from 'react'
import Html from "../sources/Html.jpeg";
import CSS from '../sources/CSS.jpeg';
import JavaScript from '../sources/JavaScript.jpeg';
import Reactjs from '../sources/Reactjs.jpeg';
import Redux from '../sources/Redux.jpeg';
import TestingLiabrary from '../sources/TestingLiabrary.jpeg';
import TypeScript from '../sources/TypeScript.jpeg';
import Github from '../sources/Github.jpeg';
import Chakra from "../sources/Chakra.jpeg";
import telwind from "../sources/telwind.jpeg";
import NextJs from '../sources/NextJs.jpeg';
import Storybook from '../sources/Storybook.jpeg';







const skillsArr=[
    {
        id:1,
        src:Html,
        title:'React JS',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:CSS,
        title:'CSS',
        style:'shadow-blue-500'
    },
    {
        id:3,
        src:JavaScript,
        title:'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:Reactjs,
        title:'React JS',
        style:'shadow-blue-600'
    },
    {
        id:5,
        src:Redux,
        title:'Redux',
        style:'shadow-sky-500'
    },
    {
        id:6,
        src:NextJs,
        title:'Next JS',
        style:'shadow-gray-800'
    },
    // {
    //     id:7,
    //     src:Mongodb,
    //     title:'HTML',
    //     style:'shadow-grren-500'
    // },
    {
        id:8,
        src:TypeScript,
        title:'TypeScript',
        style:'shadow-blue-600'
    },
    {
        id:9,
        src:Github,
        title:'GitHub',
        style:'shadow-black-500'
    },
    {
        id:11,
        src:Chakra,
        title:'Chakra-UI',
        style:'shadow-blue-500'
    },
    {
        id:12,
        src:telwind,
        title:'Telwind CSS',
        style:'shadow-blue-500'
    },
    {
        id:13,
        src:Storybook,
        title:'Story Book',
        style:'shadow-pink-500'
    },
    {
        id:14,
        src:TestingLiabrary,
        title:'Testing Liabray',
        style:'shadow-red-500'
    },
]

const Skills = () => {
  return (
    <div name="Skills" className="bg-gradient-to-b  from-sky-100 to to-sky-200  text-gray-800 md:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
            <div className='text-center'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-600">Skills</p>
                <p className='py-6'>These are the technology I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                

                 {skillsArr.map(({id,src,title,style})=>(

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                 ))}

            </div>
        </div> 
    </div>
  )
}

export default Skills