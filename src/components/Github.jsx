
// GitHubCalender
import React from 'react'
import ReactTooltip from "react-tooltip"
import GitHubCalender from "react-github-calendar"



const Github = () => {
  return (
    <div name='github' className='w-full h-full bg-gradient-to-b from-sky-100 to to-sky-200'>
        <div className=' p-10 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-8 mt-20 md:mt-20 text-center" >
            <p className="text-4xl font-bold inline border-b-4 border-black">Github</p>
            <p className="py-6">This is my Github Calender</p>
        </div>
            <div className=' p-10 shadow-md hover:scale-105 duration-500 shadow-green-600'>
            <GitHubCalender username='srinetanuj' ><ReactTooltip /></GitHubCalender>
            </div>
            
            <div className=' p-10 mt-10 flex justify-center shadow-md hover:scale-105 duration-500 shadow-pink-500'>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=srinetanuj&theme=dark" alt="streak" className='align-center' />
            </div>
            <div className='p-10 mt-10 flex justify-center shadow-md hover:scale-105 duration-500 shadow-blue-500'>
                <img src="https://camo.githubusercontent.com/4243ab3209ecfb93046d06c7c7c36117517f57606325f15fccc230648d325379/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d7372696e6574616e756a2673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Github