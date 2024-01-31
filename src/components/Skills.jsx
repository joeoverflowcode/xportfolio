import React from 'react'
import Skill from '../Components/Skill'
import styles from '../styles'
import ContactButton from '../components/ContactButton'
import { TbArrowBigDownLinesFilled } from "react-icons/tb";


const Skills = () => (

    <section id="skills" className={`${styles.paddingY} relative`}>
        <div className={`${styles.flexStart}`}>
        <div className='absolute z-[0] left-0 top-1/4 w-[20%] h-[20%] rounded-full white__gradient'/>
        <div className='absolute z-[0] left-0 top-0 w-[15%] h-[10%] rounded-full blue__gradient'/>
    <h1 className={`${styles.heading2} text-dimWhite`}>
    <span className='bg-dimWhite border-1 p-1 rounded-[10px] text-[#1e1e1e] mr-1 hover:bg-white hover:drop-shadow-[10px_10px_35px_rgba(220,220,220,0.3)]'>S</span>
                kills
            </h1>
            </div>

    <p className={`${styles.paragraph}`}>Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit. Amet est placerat in egestas erat imperdiet sed. Nam libero justo laoreet sit amet cursus sit. Facilisis sed odio morbi quis commodo. Nam aliquam sem et tortor consequat id porta.</p>
    
    

    
                <div className="flex-col grid grid-cols-3 sm:grid-cols-5 gap-8 sm:gap-20 m-auto grid-auto-rows-auto p-8 sm:p-10 text-dimWhite">
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"alt="The logo icon for JavaScript" title="JavaScript"/>
    
                    
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="The logo icon for react" title="React"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
    
                    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="The logo icon for CSS3" title="CSS 3"/>
    
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="The logo icon for TailwindCSS" title="Tailwind CSS"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Java" title="Bootstrap"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"alt="Icon for Redux" title="Redux"/>
    
    
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"alt="Java" title="PostgreSQL"/>
    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="The logo icon for Sequelize" title="Sequelize"/>
    

    
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="The logo icon for NodeJS" title="Node JS"/>  
  
                </div>
    
                <div className='flex justify-center text-dimWhite'>
    <a href='#contact'>
        <TbArrowBigDownLinesFilled 
        className='hover:drop-shadow-[10px_10px_30px_rgba(220,220,220,0.3)] hover:text-white'
        size={100}/>
        </a>
</div>
    
                </section>            
        

)

export default Skills