import React from 'react'
import monoRace from '../assets/monoRace.png'
import ContactButton from './ContactButton'
import styles from '../styles'

const About = () => (
    <section className={`${styles.paddingY} text-dimWhite`}>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.heading2} text-dimWhite`}>
                <span className='bg-dimWhite border-1 p-1 rounded-[10px] text-[#1e1e1e] mr-1'>A</span>
                bout
            </div>
            
        </div>

        <div className='flex flex-col m-4'>
            <p className={`${styles.paragraph} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p className={`${styles.paragraph} `}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
            </p>
        </div>

        <div className={`${styles.marginX} flex flex-col items-center relative`}>
            <img className='border-2 border-dimWhite max-w-[75%]' src={monoRace}/> 
            <h1 className='text-center tracking-tight absolute bottom-0 left-40'>Dallas, Turkey Trot 2023</h1>     
        </div>

        <div className='flex flex-col w-full items-center'>
            <ContactButton 
            text='Contact'
            className='w-[50%] md:w-[25%]'
            />
        </div>


</section>
)

export default About