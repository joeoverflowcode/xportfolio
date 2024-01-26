import React from 'react'
import Skill from '../Components/Skill'
import styles from '../styles'
import ContactButton from '../components/ContactButton'

const Skills = () => (

    <section className={`${styles.paddingY} `}>
        <div className={`${styles.flexEnd}`}>
    
    <h1 className={`${styles.heading2} text-dimWhite`}>
    <span className='bg-dimWhite border-1 p-1 rounded-[10px] text-[#1e1e1e] mr-1'>S</span>
                kills
            </h1>
            </div>

    <p className={`${styles.paragraph} ${styles.flexEnd}`}>Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit. Amet est placerat in egestas erat imperdiet sed. Nam libero justo laoreet sit amet cursus sit. Facilisis sed odio morbi quis commodo. Nam aliquam sem et tortor consequat id porta.</p>
    
    

    
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
    
                <div className='flex flex-col w-full items-center'>
            <ContactButton 
            text='Contact'
            className='w-[50%] md:w-[25%]'
            />
        </div>
    
                </section>            
        

)

export default Skills