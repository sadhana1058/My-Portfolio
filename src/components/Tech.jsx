import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'

const Tech = () => {
  return (
    <div>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiReactjsLine className='text-8xl text-cyan-400'/>  
            </div>
        </div>
    </div>
  )
}

export default Tech
