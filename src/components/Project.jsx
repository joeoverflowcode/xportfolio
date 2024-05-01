import React from 'react'
import styles from '../styles'
import Button from './Button'

    function Project({href, source, alt, title, date}) {
        return  (
            <div className='text-dimWhite'>

                <div className='flex flex-col items-center text-center p-2 hover:text-white hover:drop-shadow-[15px_15px_40px_rgba(220,220,220,0.3)]'>
                    
                    <h2 className='text-2xl sm:text-2xl md:text-3xl font-bold flex '>{title}</h2>  
                    <h3 className='text-xl sm:text-xl md:text-2xl pl-2'>{date}</h3> 
                </div>

                    <div className='flex justify-center'>
                        <ul className='mb-2'>
                            <li className=''>
                                <a href='#' className='underline'> Demo</a> |
                                <a href='#' className='underline pl-2'>Walkthrough</a>
                            </li>
                        </ul>
                    </div>




        <div className='relative flex items-center justify-center h-auto w-full hover:cursor group hover:bg-dimWhite rounded-lg drop-shadow-xl'>
                <img src={source} alt={alt} className='rounded-lg group-hover:opacity-5'/>

            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col text-center items-center text-black'>

        

            
            <div className=' '>

                    <a href={href} className='p4'>
                        <p className='p-4 bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
                                text-white rounded-lg shadow-gray-800 cursor-pointer md:text-xl lg:text-xl'>Watch Demo</p>
                            </a>
                            <a href={href} className='p-4'>
                        <p className='p-4 bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
                                text-white rounded-lg shadow-gray-800 cursor-pointer md:text-xl lg:text-xl'>Code Walkthrough</p>
                            </a>
            </div>

        
        </div>
            </div>
        
        
            </div>
  )
}

export default Project