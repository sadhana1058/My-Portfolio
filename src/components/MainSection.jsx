import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/profile_pic.webp"

const MainSection = () => {
  return (
    <div className="border-b-0 border-neutral-900 pb-4 lg:mb-35">
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pl-5 pb-24 text-8xl font-thin tracking-tight lg:mt-16 py-2'>
                
Scintillating Coder
</h1>
<span className='pl-5 pb-2 bg-gradient-to-r from-pink-300 via slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent'>Software Engineer</span>
            
            <p className='pl-5 my-2'>{HERO_CONTENT}</p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className="flex justify-center">
            <img src={profilePic} alt="profile_pic" width="70%" height="80%"/>
            
        </div>

        </div>
      </div>
      <br/>
                <br/>
                <br/>
                <br/>
    </div>
  )
}

export default MainSection
