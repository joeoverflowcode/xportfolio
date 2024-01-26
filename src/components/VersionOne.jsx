import styles from '../styles'
import mobileHero from '../assets/mobileHero.png'
import heroImage from '../assets/Hero.png'
import TypeWords from './TypeWords'
import ContactButton from './ContactButton'
import texas from '../assets/texas.svg'
import texas2 from '../assets/texas2.svg'
import star from '../assets/star.svg'
import { MdStarRate } from "react-icons/md";
import heroWide from '../assets/heroWide.png'
import hero1k from '../assets/hero1k.png'
import hero14 from '../assets/hero14.png'

const VersionOne = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 bg-white`}>

            <div className='flex flex-row items-center py-[6px]px-4 rounded-[10px] mb-2'>
                <p className={`${styles.paragraph} ml-2 mr-2 p-4 text-black text-[28px] rounded-[10px]`}>
                    <span className='p-2 rounded-[10px]'>
                    Hello, my name is {" "} </span><br />
                    <span className='font-semibold text-black flex flex-col items-center p-2 text-[38px] rounded-[10px]'>Joe Aguado</span>
                </p>
            </div>

            <div className='flex flex-row items-center py-[6px]px-4 hover:bg-discount-gradient rounded-[10px] mb-2 text-center'>
                <p className={`${styles.paragraph} ml-2 mr-2 p-1 text-black text-[19px] flex flex-col items-center`}>
                    
                I'm a full-stack web developer<br />
                based out of Dallas, Texas. <br/>
                <span className='text-blue-700'>Let's work together.</span>
                <MdStarRate 
    size={21}
    className='mt-2 text-blue-700 '/>
                </p>
            </div>



            <div className={`flex flex-col justify-between items-center text-center w-full ${styles.flexCenter}`}>

<div className='ss:flex hidden mt-4'>
    <ContactButton 
          className=""
          text='Contact'
    />
</div>

                </div>



        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-8 shadow-lg text-white relative`}>
            <img 
                src={mobileHero} 
                alt='mobileHero'    
                className='md:hidden block w-[100%] h-[100%] rounded-[30px] drop-shadow-[10px_10px_25px_rgba(220,220,220,0.2)] border-dimWhite z-[10]' />
                <img src={hero14}
                alt='Hero'
                className='md:block hidden w-[100%] h-[100%] relative z-[10] hover:drop-shadow-[5px_5px_25px_rgba(220,220,220,0.3)] border-dimWhite border' />

<div className='absolute z[-10] w-[30%] h-[15%] top-0 orange__gradient'/>
        <div className='absolute z[-10] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z[-10] w-[50%] h-[50%] right-30 bottom-20 blue__gradient'/>
        </div>

<ContactButton
className={`ss:hidden`}
text='Contact'/>



    </section>
)
export default VersionOne