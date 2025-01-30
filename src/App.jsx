import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import About from './components/About'
import Tech from './components/Tech'
import WorkSection from './components/WorkSection'
import WorkDummy from './components/WorkDummy'

const App = () => {
  
    return (
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-300 ' >
         <div className='fixed top-0 -z-10 h-full w-full'> 
      
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-8 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          </div>
        
        </div>
        <div className='container mx-auto px-3'>
          <Navbar/>
          <MainSection/>
          <About/>
          <Tech/>
          {/* <WorkSection/> */}
          <WorkDummy/>
        </div>
        
      
        
      </div>
      
      
    )
  
}

export default App

