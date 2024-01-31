import React, { useState } from 'react'
import ContactButton from './ContactButton'
import {HiMenu} from 'react-icons/hi'
import { IoClose } from "react-icons/io5";
import styles from '../styles' 


const Nav = () => {

  const [click, setClick] = useState("")
  const handleClick = () => setClick(!click)

  const content = <aside className='fixed top-0 left-0 bottom-0 pt-[50px] bg-black/20 backdrop-filter backdrop-blur-lg bg-opacity-15 w-[300px] gap-[20px] absolute z-[100] overflow-hidden rounded-br-[70px]'>


        <button className='absolute top-[25px] right-[25px]' onClick={handleClick}>
{click && <IoClose className='text-[36px] text-white'/>}

</button>

<div className='flex flex-col items-center'>

<div className={`${styles.heading2} ${styles.flexCenter} text-dimWhite`}>
  <span className='border-dimWhite border-2 p-2 rounded-[10px]'>
JA
  </span>


</div>







      <ul className='pt-[25px] flex flex-col gap-[38px] text-[20px] font-bold text-white items-center tracking-widest'>
        {/* <li id='home'>Home</li> */}
        <li key='about'><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#skills'>Skills</a></li>
      </ul>

      <ContactButton
      className="w-[200px] font-bold mt-[20px] pl-2"
      text='Contact'
      />
      </div>

 
  </aside>

return(
    <nav className='flex justify-between text-stone-800 items-center md:px-[60px] md:py-[60px] p-[40px]'>



      <div className={`${styles.heading2} text-[#1e1e1e]`}>
<span className='bg-dimWhite border-1 p-2 rounded-[10px] hover:bg-white hover:drop-shadow-[10px_10px_35px_rgba(220,220,220,0.3)]'>JA</span>

      </div>



      <ul className='md:flex hidden gap-[38px] text-[18px] text-dimWhite'>
      {/* <li className='font-bold hover:text-white ease-in duration-300 border-b-2 border-transparent hover:border-white hover:cursor-pointer' key='#home'><a href='home'>Home</a></li>  */}
  <li className='font-bold hover:text-white ease-in duration-300 border-b-2 border-transparent hover:border-white hover:cursor-pointer'><a href='#about'>About</a></li> 
  <li className='font-bold hover:text-white ease-in duration-300 border-b-2 border-transparent hover:border-white hover:cursor-pointer'><a href='#projects'>Projects</a></li> 
  <li className='font-bold hover:text-white ease-in duration-300 border-b-2 border-transparent hover:border-white hover:cursor-pointer'><a href='#skills'>Skills</a></li> 
      </ul>
      <ContactButton
      className="md:flex hidden ml-12"
      text='Contact'
      />

      {
        <button className='md:hidden block' onClick={handleClick}>

          {!click && <HiMenu className='text-[30px] text-dimWhite '/>}
        </button>
      }
      {click && content}
    </nav>
  )
}

export default Nav