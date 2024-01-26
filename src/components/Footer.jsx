import React from 'react'

import {
    FaLinkedinIn, 
    FaGithub,
    FaGoogle,
    FaVimeo,
    FaVimeoV,
    FaYoutube
  } from 'react-icons/fa'

const Footer = () => (
        <footer className="flex flex-col items-center text-center sticky bottom-0 z-50 text-dimWhite">
    
    
    <div className='md:block hidden w-full sticky bottom-0 z-50'>
    <div className=' w-full flex justify-between p-1 mt-1 px-4'
            >&copy; 2024 Joe Aguado Development
    
<div 
    className='flex sm:justify-center ' 
    >

<a href='mailto:aguado.joe@gmail.com?subject=Work Inquiry' className='cursor-pointer flex items-center hover:text-white '>

   <FaGoogle className="" size={25}/> 
   <span className='pl-1 hidden sm:block'>GMail</span>
</a>


   <a href='https://www.linkedin.com/in/joe-aguado-3a455311b/' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">

   <FaLinkedinIn className="" size={25}/>
    <span className='pl-1 hidden sm:block'>LinkedIn</span>
   </a>

   <a href='https://github.com/joeoverflowcode/' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">

<FaGithub className="" size={25}/>
<span className='pl-1 hidden sm:block'>GitHub</span>
   </a>


<a href='https://youtube.com/@JoeAguado?si=S0ngzFnurTO5voZu' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">

   <FaYoutube className="" size={25}/> 
   <span className='pl-1 hidden sm:block'>Youtube</span>
</a>
  </div>
    </div>
    
    </div>
    
      </footer>
)

export default Footer