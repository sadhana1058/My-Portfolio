import React from 'react'

const WorkDummy = () => {
  return (
    <div>
      <h1>Hiiii</h1>
      <h1 className='="my-20 text-center text-4xl'>Experience</h1>
        <div>
            {EXPERIENCES.map((experience,index)=> (
                <div key ={index}>
                {experience.company}
                <div/>

            ))}
        </div>
    </div>
  )
}

export default WorkDummy
