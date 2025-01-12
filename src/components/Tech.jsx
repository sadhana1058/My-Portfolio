import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandMongodb } from "react-icons/tb";
import { DiMysql } from "react-icons/di";

const Tech = () => {
  return (
    <div>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiReactjsLine className='text-8xl text-cyan-400'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiMysql className='text-8xl text-cyan-400'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandMongodb   className='text-8xl  #16a34a'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <SiPython  className='text-8xl text-cyan-400'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaJava  className='text-8xl text-cyan-400'/>  
            </div>
        </div>
    </div>
  )
}

export default Tech
