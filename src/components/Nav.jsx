import React, { useState } from 'react'
import ContactButton from './ContactButton'
import {HiMenu} from 'react-icons/hi'
import { PiButterfly } from "react-icons/pi";
import { GiButterflyFlower } from "react-icons/gi";
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
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
      </ul>

      <ContactButton
      className="w-[200px] font-bold mt-[20px]"
      text='Contact'
      />
      </div>

 
  </aside>

return(
    <nav className='flex justify-between text-stone-800 items-center md:px-[60px] md:py-[60px] p-[40px]'>



      <div className={`${styles.heading2} text-[#1e1e1e]`}>
<span className='bg-dimWhite border-1 p-2 rounded-[10px]'>JA</span>

      </div>



      <ul className='md:flex hidden gap-[38px] text-[18px] text-white'>
      <li className='font-bold hover:text-blue-800 hover:scale-105 duration-100'>Home</li> {/* Change color on hover */}
  <li className='font-bold hover:text-blue-800 hover:scale-105 duration-100'>About</li> {/* Underline on hover */}
  <li className='font-bold hover:text-blue-800 hover:scale-105 duration-100'>Projects</li> {/* Background color on hover */}
  <li className='font-bold hover:text-blue-800 hover:scale-105 duration-100'>Skills</li> {/* Scale on hover */}
      </ul>
      <ContactButton
      className="md:flex hidden"
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