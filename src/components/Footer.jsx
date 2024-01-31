import React from 'react'

import {
    FaLinkedinIn, 
    FaGithub,
    FaGoogle,
    FaVimeo,
    FaVimeoV,
    FaYoutube,
    FaInstagram,
    FaDiscord,
  } from 'react-icons/fa'

  import { AiOutlineMail } from "react-icons/ai";
  import styles from '../styles'

const Footer = () => (
        <footer className={`m-4 sticky bottom-0 z-50 text-dimWhite`}>
    
    
    <div className='md:flex md:justify-between'>

      <div id='tradmark' className='items-center text-center text-[18px] flex justify-center'>
         &copy; 2024 Joe Aguado Development  </div>


      <div id='links' className='flex flex-wrap justify-center md:justify-end text-[16px]'>
         <a href='mailto:aguado.joe@gmail.com?subject=Work Inquiry' className='cursor-pointer flex items-center hover:text-white ' >
            <AiOutlineMail className="" size={30}/> 
            <span className='pl-1 hidden md:block'>E-Mail</span>
         </a>

         <a href='https://www.linkedin.com/in/joe-aguado-3a455311b/' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="" size={30}/>
            <span className='pl-1 hidden md:block'>LinkedIn</span>
         </a>

         <a href='https://www.instagram.com/quickquickjoejoe/' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">
            <FaInstagram className="" size={30}/> 
            <span className='pl-1 hidden md:block'>Instagram</span>
         </a>

         <a href='https://youtube.com/@JoeAguado?si=S0ngzFnurTO5voZu' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">
            <FaYoutube className="" size={30}/> 
            <span className='pl-1 hidden md:block'>Youtube</span>
         </a>

         <a href='https://discordapp.com/users/691097426831999016' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">
            <FaDiscord 
            size={30}/>
            <span className='pl-1 hidden md:block'>Discord</span>
         </a>

         <a href='https://github.com/joeoverflowcode/' className='cursor-pointer flex items-center hover:text-white ml-4 p-1' target="_blank" rel="noopener noreferrer">
            <FaGithub className="" size={27}/>
            <span className='pl-1 hidden md:block'>GitHub</span>
         </a>

      </div>
    
    </div>
    
      </footer>
)

export default Footer