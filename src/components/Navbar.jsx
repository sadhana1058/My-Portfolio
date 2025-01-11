import React from 'react'
import logo from "../assets/Darklogo.png"
import leet from "../assets/lc.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav bg-red-900 className=' mb-20 flex items-center justify-between py-2'>
        <div className='flex flex-shrink-0 item-center'>
           
                <img className='mx-2'  src={logo} alt="Logo SC" width="150" height="100"/>
               
        </div>
        <div className='m-8 flex items-center  gap-4 text-2xl justify-between'> 
              {/* className='m-8 flex items-center justify-between gap-4 text-2xl'>  */}
           <FaGithub/>
         <FaLinkedin/>
         <FaInstagram/>
            <img className='rounded-md' src={leet} alt="Logo SC" width="20" height="20"/>
        </div> 
    </nav>
   
  )
}

export default Navbar
