import React from 'react'
import Project from './Project'
import Mixtape from '../assets/Mixtape.png'
import Watchlist from '../assets/Watchlist.png'
import Portfolio from '../assets/Portfolio2.png'
import BaseballCards from '../assets/BaseballCards.png'
import Movies from '../assets/Movies.png'
import styles from '../styles'
import BioBehavorial from '../assets/BioBehavioral2.png'
import { TbArrowBigDownLinesFilled } from "react-icons/tb";


const Projects = () => (
    <section id='projects' className={`${styles.paddingY} relative`}>
        <div className={`${styles.flexEnd}`}>
        <div className='absolute z-[0] right-10 top-0 w-[15%] h-[15%] rounded-full white__gradient'/>
        <div className='absolute z-[0] right-0 top-0 w-[12%] h-[12%] rounded-full blue__gradient'/>


        <h1 className={`${styles.heading2} text-dimWhite`}>
                <span className='group bg-dimWhite border-1 p-1 rounded-[10px] text-[#1e1e1e] mr-1 group-hover:bg-white group-hover:drop-shadow-[10px_10px_35px_rgba(220,220,220,0.3)]'
                onMouseEnter={(e) => {
                    e.target.style.boxShadow = '10px 10px 35px rgba(220,220,220,0.3)';
                    e.target.style.backgroundColor = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'none';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // Set it back to transparent on leave
                  }}>P</span>
                rojects
            </h1>
            </div>

<p className={`${styles.paragraph} ${styles.flexEnd}`}>
    Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit. Amet est placerat in egestas erat imperdiet sed. Nam libero justo laoreet sit amet cursus sit. Facilisis sed odio morbi quis commodo. Nam aliquam sem et tortor consequat id porta.</p>

                <div className='flex-col justify-center w-full grid grid-cols-1 lg:grid-cols-2 p-8 gap-10 '>

                    <Project
                        href={'porter.protokeg.com'}
                        source={BioBehavorial}
                        title={'Bio Behavioral Institute'}
                        date={'January 2024'}
                    />

                    <Project
                        href='#'
                        source={Portfolio}
                        title={'Personal Portfolio'}
                        date={'December 2023'}
                    />

                    <Project
                        href='#'
                        source={Mixtape}
                        title={'Mix Co.'}
                        date={'November 2023'}
                    />

                    <Project
                        href="#"
                        source={Watchlist}
                        title={'myFirst Watchlist'}
                        date={'October 2023'}
                    />

                    <Project
                        href={'#'}
                        source={Movies}
                        title={'Movies Rating'}
                        date={'September 2023'}
                    />

                    <Project
                        href={'https://youtu.be/zZusiRffkuo?si=ZdnPl4NPNNDRT1mj'}
                        source={BaseballCards}
                        title={'Baseball Cards'}
                        date={'August 2023'}
                    />


                </div>

        <div className='flex justify-center text-dimWhite'>
            <a href='#skills'>
                <TbArrowBigDownLinesFilled 
                    className='hover:drop-shadow-[10px_10px_30px_rgba(220,220,220,0.3)] hover:text-white'
                    size={100}/>
            </a>
        </div>

    </section>
)

export default Projects