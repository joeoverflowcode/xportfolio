import React from 'react'
import monoRace from '../assets/monoRace.png'
import ContactButton from './ContactButton'
import styles from '../styles'
import arrow from '../assets/arrow5.svg'
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

const About = () => (
    <section id="about" className={`${styles.paddingY} text-dimWhite relative`}>
        {/* <div className='absolute z-[0] left-0 top-1/4 w-[20%] h-[20%] rounded-full white__gradient'/>
        <div className='absolute z-[0] left-0 top-0 w-[15%] h-[10%] rounded-full blue__gradient'/> */}

        <div className={`${styles.flexStart} `}>
            <div className={`${styles.heading2} text-dimWhite`}>
                <span className='bg-dimWhite border-1 p-1 rounded-[10px] text-[#1e1e1e] mr-1 hover:bg-white hover:drop-shadow-[10px_10px_35px_rgba(220,220,220,0.3)]'>A</span>
                bout
            </div>
            
        </div>

        <div className={`${styles.flexStart} flex flex-col m-4`}>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p className={`${styles.paragraph} `}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
            </p>
        </div>

        <div className={`${styles.marginX} ${styles.paddingY} flex flex-col items-center`}>
            <img className='border-2 border-dimWhite max-w-[75%]' src={monoRace}/> 

        </div>


<div className='flex justify-center '>
    <a href='#projects'>
        <TbArrowBigDownLinesFilled 
        className='hover:drop-shadow-[5px_5px_25px_rgba(220,220,220,0.3)] hover:text-white'
        size={100}/>
        </a>
</div>




</section>
)

export default About