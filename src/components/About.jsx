import React from 'react'
import aboutImg from '../assets/about.webp'
import profilePic from "../assets/profile_pic.webp"
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className='border-b-0' border-neutral-900 pb-4>
      <h1 className='text-center text-4xl'>
        About 
        <span className='px-2 text-neutral-500'>Me</span>
      </h1>
      {/* <img src={aboutImg} alt={profilePic}/> */}
      <div className="flex flex-wrap">
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <img className="rounded-3xl"src={aboutImg} alt={profilePic} width="80%"/>

            </div>
        </div>
        <div className='mt-25 w-full lg:w-1/2'>
            <div className='flex justify-center lg-justify-start'>
                <p className='my-24 max-w-xl' >{ABOUT_TEXT}</p>
               
            </div>

        </div>

      </div>
      
    </div>
  )
}

export default About
