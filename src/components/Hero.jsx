import styles from '../styles'
import mobileHero from '../assets/mobileHero.png'
import tornPhoto from '../assets/tornPhoto.png'
import iphone from '../assets/iphone.png'
import sticky from '../assets/sticky.svg'
import coffee from '../assets/coffee.svg'
import hero1024 from '../assets/1024hero.png'
import pens from '../assets/pens.svg'
import pencil from '../assets/pencil.svg'
import ContactButton from './ContactButton'


const Hero = () => (
<section id='hero' className={`flex md:flex-row flex-col justify-between`}>

        <div className='absolute z[-10] w-[20%] h-[40%] rounded-full md:top-3/4 right-20 md:left-20 white__gradient'/>
        <div className='absolute z[-10] w-[20%] h-[20%] right-10 md:left-10 md:top-3/4 blue__gradient'/>
    <div className={`flex-row md:flex-col ${styles.flexCenter} ${styles.paddingY} justify-between`}>
        <div className='flex'>
            <img 
                src={coffee} 
                alt='coffee' 
                className='hover:-rotate-12   
                 '/>

        </div>
        <div className='flex'>
            <img 
                src={iphone} 
                alt='iphone' 
                className='transform md:-rotate-12 rotate-12 hover:rotate-6 hover:drop-shadow-[5px_5px_25px_rgba(220,220,220,0.3)]'/>

        </div>
    </div>

    <div className={`flex-col ${styles.flexCenter}`}>
                <img 
            src={hero1024} 
            alt='tornPhoto' 
            className='transform md:rotate-6 w-[80%]'/> 
            <div className='flex'>
                <div className='flex relative'>
                    <a href='#contact' alt='#contact' className='hover:cursor'>
                    <img 
                        src={sticky} 
                        alt='sticky' 
                        className=''/>
                        </a>
                    <img 
                        src={pencil} 
                        alt='pencil' 
                        className='absolute top-10 -right-20 transform -rotate-45 hover:rotate-1 w-[60%]'/>
                </div>
                <div>
                <img 
                    src={pens} 
                    alt='pens' 
                    className='transform -rotate-90 hover:translate-y-3'/>
                    </div>
            </div>      
    </div>
<div className='flex flex-col items-center '>

<ContactButton
text='Contact'
className={`tracking-widest md:hidden w-[50%]`}
/>
</div>


</section>
)

export default Hero