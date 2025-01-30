import React from 'react'
import { EXPERIENCES } from '../constants'

const WorkSection = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='="my-20 text-center text-4xl'>Experience</h1>
        <div>
            {EXPERIENCES}
        </div>
      
    </div>
  )
}

export default WorkSection
